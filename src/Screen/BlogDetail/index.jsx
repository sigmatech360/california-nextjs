"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import bannerBgImage from "../../Assets/newsTrend-banner-bg.webp";
import loaderGif from "../../Assets/loader.gif";
import HeroSection from "../../components/Herosection";
import axios from "axios";
import Link from "next/link";
import Loader from "../../components/Loader";
import { FaCalendarDay, FaUser } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";

const BlogDetail = ({ slug, categorySlug, post, relatedPosts }) => {
  // const [post, setPost] = useState(null);
  // const [relatedPosts, setRelatedPosts] = useState([]);

  console.log("post", post);
  console.log("relatedPosts", relatedPosts);

  // const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  // useEffect(() => {
  //   const fetchPostBySlug = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${baseURL}/posts?slug=${slug}&_embed`
  //       );
  //       const postData = response.data[0];

  //       if (!postData) {
  //         console.warn("Post not found for slug:", slug);
  //         return;
  //       }

  //       setPost(postData);

  //       const categoryId = postData.categories?.[0];
  //       if (categoryId) {
  //         fetchRelatedPosts(categoryId, postData.id);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching post:", error);
  //     }
  //   };

  //   const fetchRelatedPosts = async (categoryId, currentPostId) => {
  //     try {
  //       const response = await axios.get(
  //         `${baseURL}/posts?categories=${categoryId}&_embed`
  //       );
  //       const related = response.data.filter(
  //         (post) => post.id !== currentPostId
  //       );
  //       setRelatedPosts(related.slice(0, 10)); // limit to 3 posts
  //     } catch (error) {
  //       console.error("Error fetching related posts:", error);
  //     }
  //   };

  //   fetchPostBySlug();
  // }, [slug]);

  if (!post)
    return (
      // <div className="loader-div">
      //   <img src={loaderGif} alt="" />
      // </div>
      <Loader />
    );

  // Get featured image
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/800x400";

  // 🏷 Category
  // const categories =
  //   post._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
  const categories =
    post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
      name: cat.name,
      slug: cat.slug,
    })) || [];

  // 👤 Author
  const authorName = post._embedded?.author?.[0]?.name || "Unknown Author";

  // 📅 Publish Date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ⏱️ Read time
  const plainText = post.content?.rendered?.replace(/<[^>]+>/g, "") || "";
  const wordCount = plainText.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200); // 200 words/minute

  return (
    <Layout>
      {/* <HeroSection
        innerBgLayer={false}
        className="blog-detail-banner"
        bgImage={featuredImage}
        title={post.title.rendered}
      /> */}

      {/* <section className="blog-detail-banner mt-4 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="blog-detail-banner-img">
                <img src={featuredImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="blog-detail-content">
        <div className="container py-5 mt-4">
          <div className="row">
            <div className="col-xl-9 col-lg-8 mb-lg-0 mb-4">
              <section className="blog-detail-banner ">
                <div className="blog-detail-banner-img">
                  <img
                    src={featuredImage}
                    alt="Feature"
                    className="img-fluid"
                  />
                </div>
                {/* <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="blog-detail-banner-img">
                        <img src={featuredImage} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </section>
              <h2
                className="mb-4 blogDetailMain-title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div className="blogDetail-about-info">
                <div className="blogDetail-about-infoCategories">
                  {categories.map((cat, index) => (
                    <div className="blogDetail-about-infoItem" key={index}>
                      <TbCategoryFilled />
                      <span>
                        <Link href={`/blog/category/${cat.slug}`}>
                          {cat.name}
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="blogDetail-about-infoItem">
                  <FaUser />
                  <span>{authorName}</span>
                </div>
                <div className="blogDetail-about-infoItem">
                  <FaCalendarDay />
                  <span>{formattedDate}</span>
                </div>
                <div className="blogDetail-about-infoItem">
                  <FaHourglassStart />

                  <span>{readTime} min read</span>
                </div>
              </div>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
            <div className="col-xl-3 col-lg-4">
              <h4 className="mb-4">Related Posts</h4>
              <div className="row">
                {relatedPosts?.length === 0 ? (
                  <p>No related posts found.</p>
                ) : (
                  relatedPosts?.map((post, index) => {
                    const image =
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "https://via.placeholder.com";
                    const title = post.title?.rendered || "Untitled";
                    const excerpt = post.excerpt?.rendered || "";
                    const rawDate = post.date; // 🗓 raw date like "2024-06-01T10:00:00"

                    // ✅ Format the date (e.g., "June 1, 2024")
                    const formattedDate = new Date(rawDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    );

                    return (
                      <div className="col-lg-12 col-md-6">
                        <div
                          className="card blog-card sideBarBlogCard mb-4"
                          // data-aos="fade-up"
                          // data-aos-delay={index * 200}
                        >
                          <div className="sideBarBlogCard-img">
                            <img
                              src={image}
                              className=""
                              alt="Blog Post"
                            />
                          </div>
                          <div className=" sideBarBlogContent">
                            <Link href={`/blog/${post.slug}`}>
                              <h5
                                className="card-title m-0"
                                dangerouslySetInnerHTML={{ __html: title }}
                              />
                            </Link>
                            <p
                              className="card-text mb-0"
                              dangerouslySetInnerHTML={{
                                __html: formattedDate,
                              }}
                            />
                            {/* <p
                              className="card-text"
                              dangerouslySetInnerHTML={{ __html: excerpt }}
                            /> */}
                            {/* <Link
                              href={`/blog/${post.slug}`}
                              className="read-more"
                              rel="noopener noreferrer"
                            >
                              Read More
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
