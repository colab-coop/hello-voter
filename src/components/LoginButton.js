import React, { useState } from "react";
import { ReactComponent as IconFacebook } from "../assets/icons/Facebook.svg";
import { ReactComponent as IconGoogle } from "../assets/icons/Google.svg";
import Button from "./Button";
import { TYPES, BUTTON_TEXTS, OAUTH_TYPES } from "../variables";
import { AppContext } from "../api/AppContext";

export const LoginButton = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const { api } = React.useContext(AppContext);
  const login = async () => {
    setLoading(true);
    const data = await api.logIn(OAUTH_TYPES[type]);
    if (data) window.location.href = data.smOauthUrl;
    setLoading(false);
  };
  const label = (
    type === TYPES.FB ? BUTTON_TEXTS["FB"] :
    type === TYPES.GOOGLE ? BUTTON_TEXTS["GOOGLE"] : ''
  );
  const attrs = {width: 32, height: 32, fill: "#fff"};
  const icon = (
    type === TYPES.FB ? <IconFacebook {...attrs} /> :
    type === TYPES.GOOGLE ? <IconGoogle {...attrs} /> : null
  );

  return (
    <Button
      onClick={login}
      loading={loading}
      trackingEvent={{ action: 'Login', label: label }}
    >
      {icon} Log in with {label}
    </Button>
  );
};
