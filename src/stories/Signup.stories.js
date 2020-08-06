import React from "react";
import Menu from "../components/Menu";
import { LogIn } from "../components/Login";
import { SignUpPage } from "../components/SignUp/SignUpPage";
import PendingApprovalPage from '../components/PendingApprovalPage'

export default {
  title: "SignUp",
};

export const LoginPage = () => (
  <>
    <Menu isApproved={false} />
    <LogIn />
  </>
);

export const SignUp = () => (
  <>
    <Menu isApproved={false} />
    <SignUpPage />
  </>
);

export const PendingApproval = () => (
  <>
    <Menu isApproved={false} />
    <PendingApprovalPage />
  </>
);