import ReactGA from "react-ga";

export const track = async (trackingEvent) => {
  if (window.ga) {
    trackingEvent.category = `ButtonClick`;
    ReactGA.event(trackingEvent);
  }
};
