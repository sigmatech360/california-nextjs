// src/pages/NotFound.jsx
"use client";

import Link from 'next/link';
import Layout from "../../components/layout";
import wordpressbg from "../../Assets/services-webDesign-banner-bg.webp";

import "./style.css"

function NotFound() {
  return (
    <div className="NotFound-page">
      <Layout>
        <section
          className="wordpress-web-design"
          style={{ backgroundImage: `url(${wordpressbg})` }}
        >
          <div className="container text-center py-5">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link href="/" className="btn-theme">
              Go to Homepage
            </Link>
          </div>
        </section>
      </Layout>
    </div>
    // <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
    //     <div className="container text-center py-5">
    //       <h1>404 - Page Not Found</h1>
    //       <p>Oops! The page you're looking for doesn't exist.</p>
    //       <Link href="/" className="btn btn-primary mt-3">Go to Homepage</Link>
    //     </div>
    // </div>
  );
}

export default NotFound;

