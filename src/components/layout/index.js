'use client';

import Footer from "../Footer";
import Header from "../Header/index";
// import './index.css'
function Layout(props) {
  return (
    <> 
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
