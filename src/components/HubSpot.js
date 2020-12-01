import React from 'react';
import useScript from '../hooks/useScript';

const HubSpot = () => {
  useScript({
    url: "https://js.hs-scripts.com/8868419.js",
    id: "hs-script-loader"
  });
  return null;
};

export default HubSpot;
