import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      once: false,
    });
  }, []);
  return <Component {...pageProps} />;
}
