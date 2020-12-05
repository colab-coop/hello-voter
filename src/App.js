import React from 'react'
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./api/AppContext";
import { initAnalytics } from "./hooks/useAnalytics";
import Router from "./router";

const App = () => {
  initAnalytics();
  return <AppProvider>
    <HashRouter>
      <Router />
    </HashRouter>
  </AppProvider>
};

export default App;
