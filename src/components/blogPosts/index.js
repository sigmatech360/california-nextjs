import React, { useEffect, useState } from "react";
import "./index.css";
import blog1 from "../../Assets/blog1.webp";
import blog2 from "../../Assets/blog2.webp";
import blog3 from "../../Assets/blog3.webp";
import blogbg from "../../Assets/blogbg.webp";
import Link from "next/link";
import axios from "axios";
import Loader from "../Loader";

const defaultPosts = [
  {
    title: "How To Optimize The Content To Be Published To The Website",

    imageUrl: blog1,
  },
  {
    title: "Skills Every Copywriter Should Learn To Become A Professional",

    imageUrl: blog2,
  },
  {
    title: "Creating An Effective Social Media Marketing Campaign 2024",

    imageUrl: blog3,
  },
];

const BlogSection = ({ blogbgNew, categorySlug = null, limit = 3 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (!categorySlug) return; // use default if no slug

    setLoading(true);
    axios
      .get(`${baseURL}/categories`)
      .then((res) => {
        const matchedCategory = res.data.find(
          (cat) => cat.slug === categorySlug
        );
        if (matchedCategory) {
          return axios.get(
            `${baseURL}/posts?categories=${matchedCategory.id}&_embed`
          );
        } else {
          throw new Error("Category not found");
        }
      })
      .then((res) => {
        console.log("blogs fetching data", res.data);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, [categorySlug]);


  const postsToRender = categorySlug ? posts : defaultPosts;

  return (
    <section className="BlogSection    ">
      <div className="header-section">
        <img src={blogbgNew?.src || blogbg?.src} alt="Blog Header Image" />
      </div>

      <div className="container">
        <div className="blog-blue-head">
          <div className="row">
            <div className="blog-blue-head-content">
              <h3
                data-aos="fade-right "
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Let's See Our Latest <br />
                Blogs & Articles
              </h3>
              <Link
                href="/blog"
                // href={"/blog"}
                // data-aos="fade-left"
                // // data-aos-duration="500"
                // data-aos-offset="50"
              >
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          {loading ? (
            <Loader />
          ) : postsToRender.length > 0 ? (
            postsToRender.map((post, index) => {
              const image =
                post.imageUrl ||
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://via.placeholder.com";
              return (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <div className="card blog-card">
                    <img src={image} className="card-img-top" alt="Blog Post" />
                    <div className="mt-2">
                      <h5 className="card-title">
                        {post.title.rendered || post.title}
                      </h5>
                      <p
                        className="card-text"
                        dangerouslySetInnerHTML={
                          post.excerpt
                            ? { __html: post.excerpt.rendered }
                            : undefined
                        }
                      >
                        {!post.excerpt && post.description}
                      </p>
                      {post.slug ? (
                        <Link
                          href={`/blog/${categorySlug}/${post.slug}`}
                          className="read-more"
                        >
                          Read More
                        </Link>
                      ) : (
                        <a href="#" className="read-more">
                          Read More
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Blog Post Found</p>
          )}
        </div> */}
        <div className="row justify-content-center">
          {loading ? (
            <Loader />
          ) : postsToRender.length > 0 ? (
            postsToRender.slice(0, limit).map((post, index) => {
              const image =
                post.imageUrl ||
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://via.placeholder.com";

              return (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div className="card blog-card">
                    <Link href={`/blog/${post.slug}`}>
                      <img
                        src={image}
                        className="card-img-top"
                        alt="Blog Post"
                      />
                    </Link>
                    <div className="mt-2">
                      <Link href={`/blog/${post.slug}`}>
                        <h5 className="card-title">
                          {post.title.rendered || post.title}
                        </h5>
                      </Link>
                      {post.excerpt ? (
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        />
                      ) : (
                        <p className="card-text">{post.description}</p>
                      )}
                      {/* {post.slug ? (
                        <Link
                          href={`/blog/${post.slug}`}
                          className="read-more"
                        >
                          Read More
                        </Link>
                      ) : (
                        <a href="#" className="read-more">
                          Read More
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No blog posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
