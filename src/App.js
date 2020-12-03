import React from 'react'
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./api/AppContext";
import { initAnalytics } from "./hooks/useAnalytics";
import router from "./router";

const App = () => {
  initAnalytics();
  return <AppProvider>
    <HashRouter>
      { router() }
    </HashRouter>
  </AppProvider>
};

export default App;
