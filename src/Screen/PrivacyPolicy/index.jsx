"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import HeroSection from "../../components/Herosection";
import bannerBgImage from "../../Assets/privacyPolicy-banner-bg.webp";
import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.webp";

import ObfuscatedEmail from "../../components/ObfuscatedEmail";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout>
        <HeroSection
          leftCol="col-lg-6"
          rightCol="col-lg-6"
          bgImage={bannerBgImage}
          title="Privacy Policy"
          para="We are committed to protecting your personal information. All data is securely stored and used solely to enhance service quality, communication, and project experience."
          // heroimg={Pricingplanheroimg}
        />

        <section className="privacy-policy-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <div className="privacy-policy-content">
                <p>
                  At <span className="fw-bold">California Web Coders</span>, we
                  value your privacy and are fully committed to protecting the
                  personal information you share with us. This Privacy Policy
                  explains how we collect, use, store, and disclose your
                  information when you interact with our website and services.
                  It also outlines your rights and choices under applicable
                  United States privacy laws, including the California Consumer
                  Privacy Act (CCPA), where applicable.
                </p>
                <h2>1. Information We Collect</h2>
                <p>We may collect the following categories of information:</p>
                <h3>a. Personal Information</h3>
                <p>
                  When you voluntarily provide it through our website, contact
                  forms, or services, we may collect:
                </p>
                <ul>
                  {[
                    "Full name",
                    "Email address",
                    "Phone number",
                    "Company name",
                    "Mailing or billing address",
                    "Any other details you choose to provide",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3>b. Usage Data</h3>
                <p>
                  Collected automatically when you interact with our website,
                  including:
                </p>
                <ul>
                  {[
                    "IP address",
                    "Browser type and version",
                    "Device type",
                    "Operating system",
                    "Referring website",
                    "Pages visited and time spent on our site",
                    "Clickstream data",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3>c. Cookies and Tracking Technologies</h3>

                <p>
                  We use cookies, web beacons, pixels, and similar technologies
                  to:
                </p>
                <ul>
                  {[
                    "Enhance user experience",
                    "Analyze site traffic",
                    "Remember user preferences",
                    "Serve targeted advertisements (with your consent, where applicable)",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  You may modify your cookie preferences through your browser
                  settings.
                </p>

                <h2>2. How We Use Your Information</h2>

                <p>
                  We use the information we collect for the following purposes:
                </p>
                <ul>
                  {[
                    "To provide, operate, and maintain our services",
                    "To respond to inquiries or customer service requests",
                    "To personalize your user experience",
                    "To send newsletters, updates, or marketing communications (with your consent)",
                    "To analyze and improve the performance of our website",
                    "To comply with legal obligations",
                    "To detect and prevent fraud, abuse, or security threats",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h2>3. Sharing Your Information</h2>
                <p>
                  We do <span className="fw-600">not sell</span> your personal
                  information. We may share your data under the following
                  circumstances:
                </p>

                <ul>
                  {[
                    {
                      boldTextt: "With service providers",
                      description:
                        "who perform services on our behalf (e.g., hosting, email marketing), under confidentiality agreements",
                    },
                    {
                      boldTextt: "When legally required,",
                      description:
                        "such as in response to subpoenas, court orders, or legal processes",
                    },
                    {
                      boldTextt: "To protect the rights,",
                      description:
                        "property, or safety of California Web Coders, our users, or the public",
                    },
                    {
                      boldTextt: "During business transfers,",
                      description:
                        "such as a merger, acquisition, or sale of assets, where your data may be part of the transferred assets",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="fw-bold">{item.boldTextt}</span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>

                <h2>4. Data Security</h2>
                <p>
                  We take appropriate administrative, technical, and physical
                  security measures to protect your information, including:
                </p>
                <ul>
                  {[
                    "Secure servers and encryption protocols",
                    "Restricted access to personal information",
                    "Regular security audits and updates",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  However, no method of transmission over the Internet is 100%
                  secure. While we strive to protect your data, we cannot
                  guarantee absolute security.
                </p>

                <h2>5. Your Privacy Rights</h2>
                <p>
                  Depending on your jurisdiction, especially if you are a
                  California resident, you may have the following rights:
                </p>

                <ul>
                  {[
                    {
                      boldTextt: "Right to access:",
                      description:
                        "Request details on the personal information we have collected about you.",
                    },
                    {
                      boldTextt: "Right to correction:",
                      description:
                        "Request updates or corrections to inaccurate data.",
                    },
                    {
                      boldTextt: "Right to deletion:",
                      description:
                        "Request deletion of your personal data, subject to certain exceptions.",
                    },
                    {
                      boldTextt: "Right to opt-out:",
                      description:
                        "Request not to receive marketing emails or to stop the sale of personal data (although we do not sell personal data).",
                    },
                    {
                      boldTextt: "Right to non-discrimination:",
                      description:
                        "You will not be discriminated against for exercising your privacy rights.",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="fw-bold">{item.boldTextt}</span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
                <p>
                  To exercise any of these rights, please contact us at the
                  details provided at the end of the page.
                </p>
                <h2>6. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or
                  services not operated by us. We are not responsible for the
                  privacy practices of these external sites and encourage you to
                  review their policies independently.
                </p>

                <h2>7. Children’s Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If we learn that we have collected such information,
                  we will delete it promptly.
                </p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                  We may revise this Privacy Policy from time to time. When we
                  do, we will update the “Effective Date” above. We encourage
                  you to review this policy regularly to stay informed about how
                  we are protecting your data.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or wish to exercise your rights, please contact us at:
                </p>
              </div> */}
                <div className="privacy-policy-content">
                  <p>
                    At California Web Coders, we hold the privacy of our clients
                    in the highest regard on{" "}
                    <a
                      href="https://californiawebcoders.com/"
                      target="_new"
                      rel="noopener"
                    >
                      Californiawebcoders.com
                    </a>
                    . We treat their information with the same care as our own.
                    While we do gather information from our clients, its purpose
                    is solely to enhance our customer services. We acknowledge
                    our responsibility to maintain and utilize our clients’
                    information appropriately. We want to assure you that we
                    never rent or sell the information provided by our clients
                    online.
                  </p>
                  <p>
                    This policy outlines how we collect, use, and safeguard
                    personal information obtained from our clients. It also
                    describes the options available to you regarding the
                    collection and use of your information.
                  </p>
                  <h3>Collection of Personal Information</h3>
                  <p>
                    We collect details such as the client’s name, email, mailing
                    address, and phone number. These pieces of information are
                    provided by the client during the ordering process or when
                    saving their information with us. Additionally, email
                    addresses and mailing addresses obtained through forms like
                    our Contact Us Form might be used to respond to comments and
                    queries.
                  </p>
                  <p>
                    We also maintain records of past items that interested our
                    clients and their online purchases.
                  </p>
                  <h3>Use of Collected Data</h3>
                  <p>
                    The information we gather serves various purposes. It’s used
                    to process client orders, and we send confirmation emails
                    for these orders. Our customer services may contact clients
                    by phone, mailing address, or email for any inquiries
                    related to their orders.
                  </p>
                  <p>
                    Clients might receive updates about our site and services,
                    including newsletters and promotional information. Moreover,
                    the information about clients’ interests and purchases helps
                    us enhance our website design and improve the overall
                    purchasing experience.
                  </p>
                  <h3>Newsletter Opt-out</h3>
                  <p>
                    If you no longer wish to receive our newsletters and
                    promotional communications, you can opt out by following the
                    instructions provided in each communication. Alternatively,
                    you can contact us via email at{" "}
                    {/* <a href="mailto:support@californiawebcoders.com">
                      support<span class="at"></span>californiawebcoders<span class="dot"></span>com
                    </a> */}
                    <ObfuscatedEmail />
                    or call us at{" "}
                    <a href="tel:+16193352364">+1 (619) 335-2364</a>
                  </p>
                  <h3>Social Media and Widgets</h3>
                  <p>
                    Our website includes Social Media Features and Widgets, such
                    as the Facebook Like button. These features may collect your
                    IP address and page visits for proper functionality.
                    Interactions with these features are subject to the privacy
                    policies of the respective companies.
                  </p>
                  <h3>Third-Party Sharing</h3>
                  <p>
                    We do not share personal information with third parties
                    unless described in this policy. We never sell personal
                    information to third parties. We use trusted companies for
                    services like credit card processing and live customer
                    support chat.
                  </p>
                  <h3>Security of Personal Information</h3>
                  <p>
                    We prioritize the security of client information. We use
                    Secure Sockets Layer (SSL) Software for encryption during
                    transmission. While we strive for industry-standard security
                    measures, no method of online data transmission is entirely
                    foolproof.
                  </p>
                  <h3>Access to Registered Accounts</h3>
                  <p>
                    Clients can access their registered accounts by signing in
                    on our homepage. This provides access to previous lists and
                    submitted information. Users can update their information
                    through the “My Account” section.
                  </p>
                  <h3>Changing &amp; Deleting Accounts</h3>
                  <p>
                    Clients can request account cancellation or personal
                    information deletion by emailing us. This will stop further
                    email communication related to online orders.
                  </p>
                  <h3>Cookies and Clear Gifs</h3>
                  <p>
                    Cookies, alphanumeric identifiers, are used to enhance user
                    experience. Clear gifs help manage site content effectively.
                    We maintain IP address logs for site diagnostics and broad
                    demographic data, without tying it to personally
                    identifiable information.
                  </p>
                  <h3>Testimonials</h3>
                  <p>
                    With consent, we may post testimonials along with names.
                    Removal requests are honored.
                  </p>
                  <h3>Links to Other Websites</h3>
                  <p>
                    Linked websites have different privacy practices. Personal
                    information submitted to those sites is governed by their
                    privacy statements.
                  </p>
                  <h3>Changes to Privacy Policy</h3>
                  <p>
                    We may modify this policy and will communicate changes
                    through various means. Review this policy periodically for
                    updates.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="privacy-policy-content mb-0">
                  <h3>California Web Coders</h3>
                  <p className="mb-0">
                    <span className="fw-bold">Phone: </span>{" "}
                    <a href="tel:+16193352364">+1 (619) 335-2364</a>
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">Email: </span>{" "}
                    {/* <a href="mailto:support@californiawebcoders.com">
                      support<span class="at"></span>californiawebcoders<span class="dot"></span>com
                    </a> */}
                    <ObfuscatedEmail />
                  </p>
                  <p className="mb-0">
                    <span className="fw-bold">Website: </span>{" "}
                    <a
                      href="https://californiawebcoders.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.californiawebcoders.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
