import React from 'react';
import md5 from 'md5';

import { useHistory } from 'react-router-dom';
import { AppContext } from "../api/AppContext";
import Loading from './Loading';
import PageLayout from './PageLayout';

const QUIZ_KEY = process.env.QUIZ_KEY || 'QUIZ_KEY';

// This requires the WordPress server's clock to be within 2 minutes
// of the browser's clock.
const isTokenValid = (token) => {
  const minute = Math.floor(new Date().getTime() / 1000 / 60);
  console.log({QUIZ_KEY});
  console.log({token});
  for (var t = minute - 2; t <= minute + 2; t++) {
    console.log(t, md5(QUIZ_KEY + '/' + t));
    if (token === md5(QUIZ_KEY + '/' + t)) return true;
  }
  return false;
};

const validateQuizCompleted = () => {
  const match = window.location.href.match(/quiz_completed\/(.*)/);
  return match && isTokenValid(match[1]);
};

export default () => {
  console.log('quiz_completed');
  const { api, user, fetchUser } = React.useContext(AppContext);
  const history = useHistory();

  if (validateQuizCompleted()) {
    api.saveProfile({...user, quiz_completed: true}).then(() => {
      fetchUser().then(() => {
        history.push('/');  // let the router decide where to go next
      });
    });
  } else {
    history.push('/');
  }
  return <PageLayout><Loading /></PageLayout>;
};
