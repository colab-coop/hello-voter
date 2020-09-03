import React from "react";
import Menu from "../components/Menu";
import { LogIn } from "../components/Login";
import { ContactInfoPage } from "../components/SignUp/ContactInfoPage";

export default {
  title: "SignUp",
};

export const LoginPage = () => (
  <>
    <Menu isApproved={false} />
    <LogIn />
  </>
);

export const SignUpPage = () => (
  <>
    <Menu isApproved={false} />
    <ContactInfoPage />
  </>
);