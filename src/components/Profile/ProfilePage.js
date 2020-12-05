import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../api/AppContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import PageLayout from "../PageLayout";
import { ProfileForm } from "./ProfileForm";

const FORCE_STATE = process.env.REACT_APP_PROFILE_FORCE_STATE;

export const ProfilePage = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { api, fetchUser, user } = React.useContext(AppContext);

  const onSubmit = async (edits) => {
    setLoading(true);
    const { error } = await api.saveProfile({...user, ...edits});
    setLoading(false);
    if (error) setErr(error.msg);
    else {
      setLoading(true);
      const { error } = await fetchUser();
      setLoading(false);
      if (error) setErr(error.msg);
      else history.push("/");
    }
  };

  return <PageLayout title="Edit Your Profile">
    <ProfileForm
      user={user}
      onSubmit={onSubmit}
      loading={loading}
      disablePhone
      disableEmail
      disableState={!!FORCE_STATE}
      err={err}
    />
  </PageLayout>;
}

export const SignupPage = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { api, fetchUser, user } = React.useContext(AppContext);
  const [signupPrefill, setSignupPrefill] = useLocalStorage("signup_prefill", {});

  const onSubmit = async (edits) => {
    setLoading(true);
    const { error } = await api.signup({...user, ...edits});
    setLoading(false);
    if (error) setErr(error.msg);
    else {
      setLoading(true);
      const { error } = await fetchUser();
      setLoading(false);
      if (error) setErr(error.msg);
      else {
        setSignupPrefill({});  // clean up upon successful signup
        history.push('/');  // let the router decide where to go next
      }
    }
  };

  const prefill = {...user, ...signupPrefill};
  if (FORCE_STATE) {
    prefill.address = {...prefill.address, state: FORCE_STATE};
  }

  return <PageLayout title="Please Enter Your Details">
    <ProfileForm
      user={prefill}
      onSubmit={onSubmit}
      loading={loading}
      disableState={!!FORCE_STATE}
      err={err}
    />
  </PageLayout>;
};
