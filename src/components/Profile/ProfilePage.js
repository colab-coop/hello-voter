import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../api/AppContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import PageLayout from "../PageLayout";
import { ResponsiveContainer } from '../pageStyles';
import { ProfileForm } from "./ProfileForm";

export const DeniedPage = () => (
  <PageLayout title="Your account needs further review">
    <p>
      To start the review process, please visit this link to provide more information: <a href="https://blockpower.link/manualreview">
        https://blockpower.link/manualreview
      </a>
    </p>
  </PageLayout>
);

export const NoNewSignupsPage = () => (
  <PageLayout title='This site is now closed to new Voting Ambassador sign-ups'>
    <ResponsiveContainer>
      <p>
        If you are trying to access an existing account, please contact
        support@blockpower.vote. To sign up for a new Voting Ambassador
        account, please go to <a href='https://app.blockpower.vote/ambassadors'>https://app.blockpower.vote/ambassadors</a>
      </p>
    </ResponsiveContainer>
  </PageLayout>
);

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

  if (process.env.REACT_APP_NO_NEW_SIGNUPS) return <NoNewSignupsPage />;
  if (user?.msg === "Your account is locked.") return <DeniedPage/>;

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

  if (process.env.REACT_APP_NO_NEW_SIGNUPS) return <NoNewSignupsPage />;
  if (user?.msg === "Your account is locked.") return <DeniedPage/>;

  return <PageLayout title="Please Enter Your Details">
    <ProfileForm
      user={{...user, ...signupPrefill}}
      onSubmit={onSubmit}
      err={err}
    />
  </PageLayout>;
};
