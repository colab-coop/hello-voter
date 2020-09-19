import React, { useState } from 'react'
import { ReactComponent as IconFacebook } from '../assets/icons/Facebook.svg';
import { ReactComponent as IconGoogle } from '../assets/icons/Google.svg';
import { ReactComponent as IconSms } from '../assets/icons/SMS.svg';
import { ReactComponent as IconPassword } from '../assets/icons/Password.svg';
import Button from './Button'
import {
  TYPES, BUTTON_TEXTS, OAUTH_TYPES
} from '../variables'
import { AppContext } from '../api/AppContext'

export const LoginButton = ({ type }) => {
  const [loading, setLoading] = useState(false)
  const { api } = React.useContext(AppContext)
  const login = async () => {
    setLoading(true)
    const data = await api.logIn(OAUTH_TYPES[type])
    if (data) window.location.href = data.smOauthUrl
    setLoading(false)
  }
  let buttonIcon, buttonText;
  switch (type) {
    case TYPES.FB:
      buttonIcon = (<IconFacebook width={32} height={32} fill="#fff" />);
      buttonText = BUTTON_TEXTS['FB'];
      break;
    case TYPES.GOOGLE:
      buttonIcon = (<IconGoogle width={32} height={32} fill="#fff" />);
      buttonText = BUTTON_TEXTS['GOOGLE'];
      break;
    case TYPES.SMS:
      buttonIcon = (<IconSms width={32} height={32} fill="#fff" />);
      buttonText = BUTTON_TEXTS['SMS'];
      break;
    case TYPES.PASSWORD:
      buttonIcon = (<IconPassword width={32} height={32} fill="#fff" />);
      buttonText = BUTTON_TEXTS['PASSWORD'];
      break;
    default:
      buttonIcon = null;
      buttonText = null;
  }
  if (buttonIcon && buttonText) {
    return (
      <Button
        onClick={login}
        loading={loading}
        trackingEvent={{
          category: `Login${type}`,
          label: (type === TYPES.FB && BUTTON_TEXTS['FB']) || (type === TYPES.GOOGLE && BUTTON_TEXTS['GOOGLE'])
        }}
      >
        {buttonIcon}
        Log in with
        {' '}
        {buttonText}
      </Button>
    )
  }
}
