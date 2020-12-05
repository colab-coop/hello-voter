import React from "react";
import { AppContext } from '../api/AppContext.js';
import Menu from "../components/Menu";
import { LogIn } from "../components/Login";
import { DeniedPage as DeniedBody, NoNewSignupsPage as NoNewSignupsBody, SignupPage as SignupBody } from "../components/Profile/ProfilePage";
import { MAIN_USER } from './Home.mocks';

export default {
  title: "Signup",
};

const noop = () => {}

export const LoginPage = () => (
  <>
    <Menu isApproved={false} />
    <LogIn />
  </>
);

export const SignupPage = () => (
  <AppContext.Provider value={{ user: {}, authenticated: false }}>
    <Menu isApproved={false} />
    <SignupBody />
  </AppContext.Provider>
);

export const DeniedPage = () => (
  <>
    <Menu isApproved={false} />
    <DeniedBody />
  </>
);

export const NoNewSignupsPage = () => (
  <>
    <Menu isApproved={false} />
    <NoNewSignupsBody />
  </>
);
