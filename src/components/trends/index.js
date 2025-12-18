import "./index.css";
import Link from "next/link";

import loaderGif from "../../Assets/loader.gif";

const Trends = ({ posts, categories }) => {
  return (
    <section className="Trends blog-with-sidebar">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse">
          <div className="col-md-9">
            <div className="row">
              {posts.map((post, index) => {
                const title = post.title.rendered;
                let excerpt = post.excerpt.rendered;
                excerpt = excerpt.replace('<p>','')
                excerpt = excerpt.replace('</p>','')
                excerpt = excerpt.replace('&#8230;','...')

                const image =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "https://via.placeholder.com"; // fallback image

                return (
                  <div className="col-xl-4 col-md-6 mb-4" key={post.id}>
                    <div
                      className="card blog-card wordpressBlogCard blogCard"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={image}
                          className="card-img-top blogCardImg"
                          alt="Blog Post"
                        />
                      </Link>
                      <div className="mt-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="blogCardTitleA"
                        >
                          <h5 className="card-title blogCardTitle">{title}</h5>
                        </Link>
                        <p className="card-text blogCardP">

                        {excerpt}
                        </p>
                        {/* <p
                          suppressHydrationWarning
                          className="card-text blogCardP"
                          dangerouslySetInnerHTML={{ __html: excerpt }}
                        /> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-sidebar">
              <h2>Categories</h2>
              <ul className="list-group">
                <li className={`list-group-item active`}>All</li>
                {categories.map((cat) => (
                  <li key={cat.id} className="list-group-item">
                    <Link href={`/blog/category/${cat.slug}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
