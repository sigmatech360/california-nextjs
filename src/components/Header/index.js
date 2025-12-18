// import React, { useEffect, useState } from "react";

// import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
// import { FaCaretDown, FaCaretRight, FaPhoneAlt } from "react-icons/fa";
// import "./index.css";

// import { RiMailSendLine } from "react-icons/ri";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Link from "next/link";
// import logo from "../../Assets/logo.webp";
// import ObfuscatedEmail from "../ObfuscatedEmail";

// function Header() {
//   return (
//     <>
//       <section className="uperheader ">
//         <div className="container px-3 py-2">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="uperheader__links d-flex align-items-center justify-content-end flex-wrap">
//                 <div className="d-flex gap-2 align-items-center">
//                   <FaPhoneAlt />
//                   <a href="tel:+16193352364">+1 (619) 335-2364</a>
//                 </div>
//                 <div className="d-flex gap-2 align-items-center">
//                   <RiMailSendLine />
//                   {/* <a href="mailto:support@californiawebcoders.com">
//                     support<span class="at"></span>californiawebcoders
//                     <span class="dot"></span>com
//                   </a> */}
//                   <ObfuscatedEmail />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="navbar-section">
//         <Navbar expand="lg" className="navbar-custom" variant="light">
//           <Container>
//             <Navbar.Brand as={Link} href="/" className="justify-content-start">
//               <img
//                 src={logo.src}
//                 alt="California Web Coders Logo"
//                 className="header-icon asasa"
//                 fetchPriority="high"
//                 decoding="async"
//               />
//             </Navbar.Brand>

//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ms-auto navbar-nav-custom">
//                 <Link href="/" className="nav-link-custom nav-link">
//                   Home
//                 </Link>

//                 <Dropdown className="nav-dropdown-custom">
//                   <Dropdown.Toggle
//                     as="button"
//                     className="custom-toggle nav-link"
//                     // role="button"
//                     aria-expanded="false"
//                   >
//                     Services
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu>
//                     {/* Regular items  */}

//                     {/* Designing with Submenu */}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         href="/designing"
//                         target="_blank"
//                         className="nav-subdropdown-parent"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Designing{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>

//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/logo-design"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Logo Design
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/web-design"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Website Design
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/landing-page-design"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Landing Page Design
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/video-animation"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Video Animation
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/video-editing"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Video Editing
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/product-packaging-design"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Product Packaging Design
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/newsletter-design"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           News Letter Design
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/creative-ads"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Creative Ads
//                         </NavDropdown.Item>
//                       </div>
//                     </div>

//                     {/* CMS Development with Submenu */}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         href="/cms-development"
//                         target="_blank"
//                         className="nav-subdropdown-parent"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         CMS Development{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>

//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/shopify-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Shopify Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/eCommerce-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Ecommerce Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/wordpress-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           WordPress Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/wix-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Wix Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/squarespace-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Squarespace Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/website-maintenance"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Website Maintenance
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/website-revamp"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Website Revamp
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/webflow"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Webflow
//                         </NavDropdown.Item>
//                       </div>
//                     </div>

//                     {/* Digital Marketing with Submenu */}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         href="/digital-marketing"
//                         target="_blank"
//                         className="nav-subdropdown-parent"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Digital Marketing{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>

//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/social-media-marketing"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           SMM
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/search-engine-optimization"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           SEO
//                         </NavDropdown.Item>
//                       </div>
//                     </div>

//                     {/* Custom Web Development with Submenu */}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         href="/custom-web-development"
//                         target="_blank"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Custom Web Development{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>
//                       <div className="nav-subdropdown">
//                         <div className="subnav-dropdown">
//                           <NavDropdown.Item
//                             as={"a"}
//                             href="/frontend-development"
//                             target="_blank"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             Frontend Development
//                             <span className="submenu-icon d-none d-lg-inline">
//                               <FaCaretRight />
//                             </span>
//                             <span className="submenu-icon d-inline d-lg-none">
//                               <FaCaretDown />
//                             </span>
//                           </NavDropdown.Item>
//                           <div className="subdropdown-nav">
//                             <NavDropdown.Item
//                               as={"a"}
//                               href="/react-development"
//                               target="_blank"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               React Development
//                             </NavDropdown.Item>
//                             <NavDropdown.Item
//                               as={"a"}
//                               href="/angular-development"
//                               target="_blank"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               Angular Development
//                             </NavDropdown.Item>
//                           </div>
//                         </div>
//                         <div className="subnav-dropdown">
//                           <NavDropdown.Item
//                             as={"a"}
//                             href="/backend-development"
//                             target="_blank"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             Backend Development
//                             <span className="submenu-icon d-none d-lg-inline">
//                               <FaCaretRight />
//                             </span>
//                             <span className="submenu-icon d-inline d-lg-none">
//                               <FaCaretDown />
//                             </span>
//                           </NavDropdown.Item>
//                           <div className="subdropdown-nav">
//                             <NavDropdown.Item
//                               as={"a"}
//                               href="/laravel-development"
//                               target="_blank"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               Laravel Development
//                             </NavDropdown.Item>
//                             <NavDropdown.Item
//                               as={"a"}
//                               href="/nodejs-development"
//                               target="_blank"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               Nodejs Development
//                             </NavDropdown.Item>
//                             <NavDropdown.Item
//                               as={"a"}
//                               href="/python-development"
//                               target="_blank"
//                               onClick={(e) => e.stopPropagation()}
//                             >
//                               Python Development
//                             </NavDropdown.Item>
//                           </div>
//                         </div>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/ai-integration"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           AI Integration
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/web3-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Web 3.O Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/blockchain-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Blockchain Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/mern-stack-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           MERN Stack Development
//                         </NavDropdown.Item>
//                       </div>
//                     </div>

//                     {/* App Development with Submenu*/}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         className="nav-subdropdown-parent"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         App Development{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>

//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/webapp-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Web App Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/mobile-app-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Mobile App Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/ios-app-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           IOS Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/android-app-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Android Development
//                         </NavDropdown.Item>
//                       </div>
//                     </div>

//                     {/* Branding with Submenu*/}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         href="#"
//                         target="_blank"
//                         className="nav-subdropdown-parent"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Branding Identity{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>

//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/brand-strategy"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Brand Strategy
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/mobile-app-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Brand Voice
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/ios-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Brand Identity Design
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/android-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Merchandising
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/android-development"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Brand Positioning
//                         </NavDropdown.Item>
//                       </div>
//                     </div>

//                     {/* Hosting & Domain Services with Submenu*/}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         target="_blank"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Hosting & Domain Services{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>
//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/domain-registration"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Domain Registration
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/domain-transfer"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Domain Transfer
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/manage-web-hosting"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Managed Web Hosting
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/website-migration"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Website Migration
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/vps-dedicated-servers"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           VPS & Dedicated Servers
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/email-hosting"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Email Hosting
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/ssl-certiicates"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           SSL Certificates
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/server-management"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Server Management
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/devop-services"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           DevOps Services
//                         </NavDropdown.Item>
//                       </div>
//                     </div>
//                   </Dropdown.Menu>
//                 </Dropdown>

//                 {/* Location Pages   */}
//                 <Dropdown className="nav-dropdown-custom">
//                   <Dropdown.Toggle
//                     as="button"
//                     className="custom-toggle nav-link"
//                     // role="button"
//                     aria-expanded="false"
//                   >
//                     Locations
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     {/* Los Angeles with Submenu*/}
//                     <div className="nav-subdropdown-wrapper">
//                       <NavDropdown.Item
//                         as={"a"}
//                         target="_blank"
//                         className="nav-subdropdown-parent"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Los Angeles{" "}
//                         <span className="submenu-icon d-none d-lg-inline">
//                           <FaCaretRight />
//                         </span>
//                         <span className="submenu-icon d-inline d-lg-none">
//                           <FaCaretDown />
//                         </span>
//                       </NavDropdown.Item>

//                       <div className="nav-subdropdown">
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/mobile-app-development-los-angeles"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Mobile App Development
//                         </NavDropdown.Item>
//                         <NavDropdown.Item
//                           as={"a"}
//                           href="/wordpress-development-los-angeles"
//                           target="_blank"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           Wordpress Development
//                         </NavDropdown.Item>
//                       </div>
//                     </div>
//                   </Dropdown.Menu>
//                 </Dropdown>

//                 <Link href="/our-work" className="nav-link-custom nav-link">
//                   Our Work
//                 </Link>
//                 <Link
//                   href="/pricing-plan"
//                   className="nav-link-custom nav-link"
//                 >
//                   Pricing Plan
//                 </Link>
//                 <Link href="/blog" className="nav-link-custom nav-link">
//                   Blogs
//                 </Link>
//                 <Link href="/about" className="nav-link-custom nav-link">
//                   About Us
//                 </Link>
//                 <Nav.Link
//                   as={Link}
//                   href="/get-intouch"
//                   className="nav-link-custom contact-button"
//                 >
//                   Contact Us
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </section>
//     </>
//   );
// }

// export default Header;

import React, { useEffect, useState } from "react";

import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaCaretDown, FaCaretRight, FaPhoneAlt } from "react-icons/fa";
import "./index.css";

import { RiMailSendLine } from "react-icons/ri";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link, Link } from "react-router-dom";
import Link from "next/link";

import logo from "../../Assets/logo.webp";
import ObfuscatedEmail from "../ObfuscatedEmail";

function Header() {
  console.log('logo', logo);
  
  return (
    <>
      <section className="uperheader ">
        <div className="container px-3 py-2">
          <div className="row">
            <div className="col-md-12">
              <div className="uperheader__links d-flex align-items-center justify-content-end flex-wrap">
                <div className="d-flex gap-2 align-items-center">
                  <FaPhoneAlt />
                  <a href="tel:+16193352364">+1 (619) 335-2364</a>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <RiMailSendLine />
                  {/* <a href="mailto:support@californiawebcoders.com">
                    support<span class="at"></span>californiawebcoders
                    <span class="dot"></span>com
                  </a> */}
                  <ObfuscatedEmail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="navbar-section">
        <Navbar expand="lg" className="navbar-custom" variant="light">
          <Container>
            <Navbar.Brand as={Link} href="/" className="justify-content-start">
              <img
                src={logo.src}
                alt="California Web Coders Logo"
                className="header-icon"
                fetchPriority="high"
                decoding="async"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto navbar-nav-custom">
                <Link href="/" className="nav-link-custom nav-link">
                  Home
                </Link>

                <Dropdown className="nav-dropdown-custom">
                  <Dropdown.Toggle
                    as="button"
                    className="custom-toggle nav-link"
                    // role="button"
                    aria-expanded="false"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* Regular items  */}
                    <NavDropdown.Item
                      as={"a"}
                      href="/logo-design"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Logo Design
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={"a"}
                      href="/web-design"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Website Design
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      as={"a"}
                      href="/cms-development"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      CMS Development
                    </NavDropdown.Item> */}

                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        href="/cms-development"
                        target="_blank"
                        className="nav-subdropdown-parent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        CMS Development{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>

                      <div className="nav-subdropdown">
                        {/* <NavDropdown.Item
                          as={"a"}
                          href="/cms-solution"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          CMS Solution
                        </NavDropdown.Item> */}
                        <NavDropdown.Item
                          as={"a"}
                          href="/shopify-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Shopify Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/eCommerce-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ecommerce Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/wordpress-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          WordPress Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/wix-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Wix Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/squarespace-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Squarespace Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/website-maintenance"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website Maintenance
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/website-revamp"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website Revamp
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/webflow"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Webflow
                        </NavDropdown.Item>
                      </div>
                    </div>

                    {/* Digital Marketing with Submenu */}
                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        href="/digital-marketing"
                        target="_blank"
                        className="nav-subdropdown-parent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Digital Marketing{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>

                      <div className="nav-subdropdown">
                        <NavDropdown.Item
                          as={"a"}
                          href="/social-media-marketing"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          SMM
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/search-engine-optimization"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          SEO
                        </NavDropdown.Item>
                      </div>
                    </div>

                    {/* Continue with other items */}
                    {/* Custom Web Development with Submenu */}
                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        href="/custom-web-development"
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Custom Web Development{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>
                      <div className="nav-subdropdown">
                        <div className="subnav-dropdown">
                          <NavDropdown.Item
                            as={"a"}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Frontend Development
                            <span className="submenu-icon d-none d-lg-inline">
                              <FaCaretRight />
                            </span>
                            <span className="submenu-icon d-inline d-lg-none">
                              <FaCaretDown />
                            </span>
                          </NavDropdown.Item>
                          <div className="subdropdown-nav">
                            <NavDropdown.Item
                              as={"a"}
                              href="/react-development"
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              React Development
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              as={"a"}
                              href="/angular-development"
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Angular Development
                            </NavDropdown.Item>
                          </div>
                        </div>
                        <div className="subnav-dropdown">
                          <NavDropdown.Item
                            as={"a"}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Backend Development
                            <span className="submenu-icon d-none d-lg-inline">
                              <FaCaretRight />
                            </span>
                            <span className="submenu-icon d-inline d-lg-none">
                              <FaCaretDown />
                            </span>
                          </NavDropdown.Item>
                          <div className="subdropdown-nav">
                            <NavDropdown.Item
                              as={"a"}
                              href="/laravel-development"
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Laravel Development
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              as={"a"}
                              href="/nodejs-development"
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Nodejs Development
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              as={"a"}
                              href="/python-development"
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Python Development
                            </NavDropdown.Item>
                          </div>
                        </div>
                        <NavDropdown.Item
                          as={"a"}
                          href="/ai-integration"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          AI Integration
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/web3-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Web 3.O Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/blockchain-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Blockchain Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/mern-stack-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          MERN Stack Development
                        </NavDropdown.Item>
                      </div>
                    </div>

                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        className="nav-subdropdown-parent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        App Development{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>

                      <div className="nav-subdropdown">
                        <NavDropdown.Item
                          as={"a"}
                          href="/webapp-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Web App Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/mobile-app-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Mobile App Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/ios-app-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          IOS Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/android-app-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Android Development
                        </NavDropdown.Item>
                      </div>
                    </div>

                    {/* Hosting & Domain Services with Submenu*/}
                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Hosting & Domain Services{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>
                      <div className="nav-subdropdown">
                        <NavDropdown.Item
                          as={"a"}
                          href="/domain-registration"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Domain Registration
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/domain-transfer"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Domain Transfer
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/manage-web-hosting"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Managed Web Hosting
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/website-migration"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website Migration
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/vps-dedicated-servers"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          VPS & Dedicated Servers
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/email-hosting"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Email Hosting
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/ssl-certificates"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          SSL Certificates
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/server-management"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                         Server Management{" "}
                        </NavDropdown.Item>
                        {" "}
                        <NavDropdown.Item
                          as={"a"}
                          href="/devop-services"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          DevOps Services {" "}
                        </NavDropdown.Item>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Location Pages   */}
                <Dropdown className="nav-dropdown-custom">
                  <Dropdown.Toggle
                    as="button"
                    className="custom-toggle nav-link"
                    // role="button"
                    aria-expanded="false"
                  >
                    Locations
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* Los Angeles with Submenu*/}
                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        target="_blank"
                        className="nav-subdropdown-parent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Los Angeles{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>

                      <div className="nav-subdropdown">
                        <NavDropdown.Item
                          as={"a"}
                          href="/mobile-app-development-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Mobile App Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/wordpress-development-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Wordpress Development
                        </NavDropdown.Item>
                         <NavDropdown.Item
                          as={"a"}
                          href="/react-development-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Reactjs Development
                        </NavDropdown.Item>
                         <NavDropdown.Item
                          as={"a"}
                          href="/domain-registration-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Domain Registeration
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/domain-transfer-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Domain Transfer
                        </NavDropdown.Item>
                         <NavDropdown.Item
                          as={"a"}
                          href="/eCommerce-development-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ecommerce Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/angular-development-los-angeles"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Angular Development
                        </NavDropdown.Item>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <Link href="/our-work" className="nav-link-custom nav-link">
                  Our Work
                </Link>
                <Link
                  href="/pricing-plan"
                  className="nav-link-custom nav-link"
                >
                  Pricing Plan
                </Link>
                <Link href="/blog" className="nav-link-custom nav-link">
                  Blogs
                </Link>
                <Link href="/about" className="nav-link-custom nav-link">
                  About Us
                </Link>
                <Nav.Link
                  as={Link}
                  href="/get-intouch"
                  className="nav-link-custom contact-button"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default Header;

