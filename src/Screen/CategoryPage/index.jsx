

import loaderGif from "../../Assets/loader.gif";
import Link from "next/link";
import Layout from "../../components/layout";
import HeroSection from "../../components/Herosection";

const CategoryPage = ({ categorySlug, posts }) => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(null);

  // const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  // console.log('testposts', testposts);

  // useEffect(() => {
  //   // Fetch categories to find matching slug
  //   axios
  //     .get(`${baseURL}/categories`)
  //     .then((res) => {
  //       const matched = res.data.find((cat) => cat.slug === categorySlug);
  //       if (matched) {
  //         setCategoryId(matched.id);
  //       } else {
  //         setLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Category fetch error:", err);
  //       setLoading(false);
  //     });
  // }, [categorySlug]);

  // useEffect(() => {
  //   if (!categoryId) return;

  //   setLoading(true);
  //   axios
  //     .get(`${baseURL}/posts?categories=${categoryId}&_embed`)
  //     .then((res) => {
  //       setPosts(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Post fetch error:", err);
  //       setLoading(false);
  //     });
  // }, [categoryId]);

  if (!posts) {
    return (
      <div className="loader-div text-center py-5">
        <img src={loaderGif.src} alt="Loading..." />
      </div>
    );
  }

  function capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Handle empty strings
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <Layout>
        <HeroSection
          //   innerBgLayer
          // className="blog-detail-banner"
          //   bgImage={featuredImage}
          title={categorySlug.replace("-", " ")}
          para={`Blogs / Category / ${capitalizeFirstLetter(categorySlug.replace("-", " "))}`}
        />
        <section className="Trends blog-with-sidebar">
          <div className="container">
            <div className="row">
              <h2 className="mb-4 text-capitalize">
                {categorySlug.replace("-", " ")}
              </h2>
              {posts.length > 0 ? (
                posts.map((post, index) => {
                  const image =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com";
                  return (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <div className="card blog-card wordpressBlogCard blogCard ">
                        <Link href={`/blog/${post.slug}`}>
                          <img
                            src={image}
                            className="card-img-top"
                            alt="Blog Post"
                          />
                        </Link>
                        <div className="mt-2">
                          <Link href={`/blog/${post.slug}`}>
                            <h5 className="blogCardTitle">
                              {post.title.rendered}
                            </h5>
                          </Link>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          />
                          {/* <Link href={`/blog/${post.slug}`} className="read-more"> */}
                          {/* <Link href={`/blog/${post.slug}`} className="read-more blogCardA">
                            Read More
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No posts found for this category.</p>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CategoryPage;
