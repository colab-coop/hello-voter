import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const initGATracking = ({
  trackingId = process.env.REACT_APP_GA_TRACKING_ID,
  options: { debug = process.env.REACT_APP_GA_DEBUG_MODE === "true" } = {},
} = {}) => {
  if (!trackingId) {
    console.log(
      "Tracking not enabled, as `trackingId` was not given and there is no `GA_TRACKING_ID`."
    );
    return;
  }
  let options = { debug };
  if (typeof process.env.REACT_APP_GA_COOKIE_DOMAIN !== "undefined") {
    options.cookieDomain = process.env.REACT_APP_GA_COOKIE_DOMAIN;
  }
  if (process.env.NODE_ENV !== "test") {
    ReactGA.initialize(trackingId, options);
  }
};

const initFBPixel = ({ pixelId = process.env.REACT_APP_FB_PIXEL_ID } = {}) => {
  if (pixelId) {
    ReactPixel.init(
      pixelId,
      {},
      {
        debug:
          typeof process.env.REACT_APP_FB_PIXEL_DEBUG_MODE !== "undefined" &&
          process.env.REACT_APP_FB_PIXEL_DEBUG_MODE === "true",
      }
    );
  }
};

export const initAnalytics = (gaConfig = {}, fbConfig = {}) => {
  initGATracking(gaConfig);
  initFBPixel(fbConfig);
};

export const useAnalytics = () => {
  let location = useLocation();
  let windowLocation = window.location.pathname;
  useEffect(() => {
    // Sucessful react-ga initialization will make a window.ga object.
    if (window.ga) {
      // HashRouter uses the pathname as the hash, so true URL needs to be built
      // QUESTION: should we just use the hash path, independent of URL path?
      const hashPath = `${windowLocation}#${location.pathname}`;
      ReactGA.set({ page: hashPath });
      ReactGA.pageview(hashPath);
    }
    ReactPixel.pageView();
  }, [location, windowLocation]);
};
