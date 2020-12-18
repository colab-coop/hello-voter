import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../api/AppContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import PageLayout from "../PageLayout";
import { ProfileForm } from "./ProfileForm";

const STATE_OPTIONS = (
    process.env.REACT_APP_PROFILE_STATE_OPTIONS ?
    process.env.REACT_APP_PROFILE_STATE_OPTIONS.split(',') : null
);

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

  return <PageLayout title="Edit Your Profile" tutorialId="PROFILE">
    <ProfileForm
      user={user}
      onSubmit={onSubmit}
      loading={loading}
      disablePhone
      disableEmail
      stateOptions={STATE_OPTIONS}
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
  if (STATE_OPTIONS?.length === 1) {
    prefill.address = {...prefill.address, state: STATE_OPTIONS[0]};
  }

  return <PageLayout title="Please Enter Your Details" tutorialId="SIGNUP">
    <ProfileForm
      user={prefill}
      onSubmit={onSubmit}
      loading={loading}
      stateOptions={STATE_OPTIONS}
      err={err}
    />
  </PageLayout>;
};
