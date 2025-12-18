import React from "react";
import firefox from "../../Assets/newChildPagesAssets/sslcertificate/firefox.svg";
import chrome from "../../Assets/newChildPagesAssets/sslcertificate/chrome.svg";
import opera from "../../Assets/newChildPagesAssets/sslcertificate/opera.svg";
import microsoft from "../../Assets/newChildPagesAssets/sslcertificate/microsoft.svg";

const SSLBrowser = () => {
  return (
    <section className="ssl-browser-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ssl-browser-txt">
              <h2>
                What Will An Extended <span>SSL Security Certificate</span> Look{" "}
                <span>Like In My Browser?</span>
              </h2>
            </div>
            <div className="ssl-browser-flex">
              <img src={firefox.src} alt="firefox" />
              <img src={chrome.src} alt="chrome" />
              <img src={opera.src} alt="opera" />
              <img src={microsoft.src} alt="microsoft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSLBrowser;
