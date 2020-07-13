import ReactGA from 'react-ga';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const initAnalytics = ({
  trackingId = process.env.REACT_APP_GA_TRACKING_ID,
  options: {
    debug = (process.env.REACT_APP_GA_DEBUG_MODE === 'true')
  } = {}
} = {}) => {
  if (!trackingId) {
    console.log(
      'Tracking not enabled, as `trackingId` was not given and there is no `GA_TRACKING_ID`.'
    )
    return;
  } 
  let options = { debug };
  if (typeof process.env.REACT_APP_GA_COOKIE_DOMAIN !== 'undefined') {
    options.cookieDomain = process.env.REACT_APP_GA_COOKIE_DOMAIN
  }
  ReactGA.initialize(trackingId, options);
}

export const useAnalytics = () => {
  let location = useLocation()
  let windowLocation = window.location.pathname
  useEffect(() => {
    // Sucessful react-ga initialization will make a wondow.ga object.
    if (window.ga) {
      // HashRouter uses the pathname as the hash, so true URL needs to be built
      // QUESTION: should we just use the hash path, independent of URL path?
      const hashPath = `${windowLocation}#${location.pathname}`
      ReactGA.set({ page: hashPath })
      ReactGA.pageview(hashPath)
    }
  }, [location, windowLocation])
}
