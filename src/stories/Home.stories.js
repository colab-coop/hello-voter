import React from "react";
import Menu from "../components/Menu";
import Home from "../components/HomePage";
import Help from "../components/Help/HelpPage";

export default {
  title: "Home",
};

export const HomePage = () => (
  <>
    <Menu isApproved={false} />
    <Home />
  </>
);

export const HelpPage = () => (
  <>
    <Menu isApproved={false} />
    <Help />
  </>
);