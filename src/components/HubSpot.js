import React, { useEffect } from 'react';
import { getCrmToken } from '../api/api.js'

const SCRIPT_URL = 'https://js.hs-scripts.com/8868419.js';
const SCRIPT_ELEMENT_ID = 'hs-script-loader-private';

const loadWidgetWhenReady = () => {
  if (window.HubSpotConversations) {
    window.HubSpotConversations.widget.load();
  } else {
    window.hsConversationsOnReady = [() => window.HubSpotConversations.widget.load()];
  }
}

const HubSpot = ({ email }) => {
  useEffect(() => {
    window.hsConversationsSettings = { loadImmediately: false };
    if (email) {
      getCrmToken().then(token => {
        if (token) {
          window.hsConversationsSettings['identificationToken'] = token?.data?.token;
          window.hsConversationsSettings['identificationEmail'] = email;
        }
        loadWidgetWhenReady();
      });
    } else {
      loadWidgetWhenReady();
    }
    let script = document.getElementById(SCRIPT_ELEMENT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ELEMENT_ID;
      script.src = SCRIPT_URL;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    return () => {
      if (email && window.HubSpotConversations) {
        window.HubSpotConversations.resetAndReloadWidget();
      }
    };
  }, [email]);

  useEffect(() => () => {
    if (window.HubSpotConversations) {
      window.HubSpotConversations.widget.remove();
    }
    delete window.HubSpotConversations;
    const script = document.getElementById(SCRIPT_ELEMENT_ID);
    if (script) {
      document.body.removeChild(script);
    }
  }, []);

  return null;
};

export default HubSpot;
