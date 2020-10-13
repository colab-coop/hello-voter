import React from "react";
import Menu from "../components/Menu";
import { LogIn } from "../components/Login";
import { ContactInfoPage } from "../components/Profile/ContactInfoPage";
import { MAIN_USER } from './Home.mocks';

export default {
  title: "SignUp",
};

const noop = () => {}

export const LoginPage = () => (
  <>
    <Menu isApproved={false} />
    <LogIn />
  </>
);

export const SignUpPage = () => (
  <>
    <Menu isApproved={false} />
    <ContactInfoPage ambassador={MAIN_USER} setAmbassador={noop} err={null} />
  </>
);
