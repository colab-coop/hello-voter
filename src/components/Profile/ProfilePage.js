import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../api/AppContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import PageLayout from "../PageLayout";
import { ProfileForm } from "./ProfileForm";

export const ProfilePage = () => {
  const [err, setErr] = useState(false);
  const history = useHistory();
  const { api, fetchUser, user } = React.useContext(AppContext);

  const onSubmit = async (edits) => {
    const { error } = await api.saveProfile({...user, ...edits});
    if (error) setErr(error.msg);
    else {
      const { error } = await fetchUser();
      if (error) setErr(error.msg);
      else history.push("/");
    }
  };

  return <PageLayout title="Edit Your Profile">
    <ProfileForm
      user={user}
      onSubmit={onSubmit}
      disablePhone
      disableEmail
      err={err}
    />
  </PageLayout>;
}

export const SignupPage = () => {
  const [err, setErr] = useState(false);
  const history = useHistory();
  const { api, fetchUser, user } = React.useContext(AppContext);
  const [signupPrefill, setSignupPrefill] = useLocalStorage("signup_prefill", {});

  const onSubmit = async (edits) => {
    const { error } = await api.signup({...user, ...edits});
    if (error) setErr(error.msg);
    else {
      const { error } = await fetchUser();
      if (error) setErr(error.msg);
      else {
        setSignupPrefill({});  // clean up upon successful signup
        history.push('/');  // let the router decide where to go next
      }
    }
  };

  return <PageLayout title="Please Enter Your Details">
    <ProfileForm
      user={{...user, ...signupPrefill}}
      onSubmit={onSubmit}
      err={err}
    />
  </PageLayout>;
};
