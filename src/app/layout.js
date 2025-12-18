import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../src/index.css';
import ClientLayout from "./client-layout";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import "../App.css";
// Component CSS files
import '@/components/WordPressPerformanceSection/index.css';
import '@/components/trends/index.css';
import '@/components/Testimonials/index.css';
import '@/components/services/index.css';
import '@/components/refundpolicy/index.css';
import '@/components/readytocheat/index.css';
import '@/components/PricingPlans/index.css';
import '@/components/PricePlanCard/style.css';
import '@/components/Perfection/index.css';
import '@/components/designsolutions/index.css';
import '@/components/NewsCard/style.css';
import '@/components/mobileworld/index.css';
import '@/components/logoDesignServices/index.css';
import '@/components/itsolutions/index.css';
import '@/components/intouch/index.css';
import '@/components/Herosection/index.css';
import '@/components/Header/index.css';
import '@/components/growyourbusiness/index.css';
import '@/components/FrequentQuestions/index.css';
import '@/components/Footer/index.css';
import '@/components/Digitalagency/index.css';
import '@/components/featureproject/index.css';
import '@/components/FormModal/style.css';
// import '@/components/layout/index.css';
// Screen CSS files
import '@/src/Screen/webdesignservices/index.css';
import '@/src/Screen/Pricingplan/index.css';
import '@/src/Screen/ourWork/index.css';
import '@/src/Screen/NotFound/style.css';
import '@/src/Screen/newsandtrends/index.css';
import '@/src/Screen/Home/index.css';
import '@/src/Screen/GetInTouch/index.css';
import '@/src/Screen/about/index.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="8CBYcq_F4bD3fHlzLi1KqwnlQMxSVCW1tShC1EIX_rY"
        />
        <link rel="icon" type="image/svg+xml" href="./fav-icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <ToastContainer position="top-right" autoClose={3000} />

        {/* Tawk.to Live Chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            if (!window.__PRERENDER_IN_PROGRESS__) {
              var Tawk_API = Tawk_API || {},
                  Tawk_LoadStart = new Date();
              setTimeout(() => {
                var e, t;
                e = document.createElement("script");
                t = document.getElementsByTagName("script")[0];
                e.async = true;
                e.src = "https://embed.tawk.to/65f4859c8d261e1b5f6e0528/1hp1ijrh5";
                e.charset = "UTF-8";
                e.setAttribute("crossorigin", "*");
                t.parentNode.insertBefore(e, t);
              }, 3000);
            }
          `}
        </Script>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LK1B46REHX"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LK1B46REHX');
          `}
        </Script>
      </body>
    </html>
  );
}
