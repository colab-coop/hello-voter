import React from 'react';
import md5 from 'md5';

import { useHistory } from 'react-router-dom';
import { AppContext } from "../api/AppContext";
import Loading from './Loading';
import PageLayout from './PageLayout';

const QUIZ_KEY = process.env.QUIZ_KEY;

// This requires the WordPress server's clock to be within 2 minutes
// of the browser's clock.
const isTokenValid = (token) => {
  const minute = Math.floor(new Date().getTime() / 1000 / 60);
  for (var t = minute - 2; t <= minute + 2; t++) {
    if (token === md5(QUIZ_KEY + '/' + t)) return true;
  }
  return false;
};

const validateQuizCompleted = () => {
  const match = window.location.search.match(/token=(\w+)/);
  return match && isTokenValid(match[1]);
};

export default () => {
  const { api, ambassador } = React.useContext(AppContext);
  const history = useHistory();

  if (validateQuizCompleted()) {
    api.saveProfile({...ambassador, quiz_completed: true}).then(() => {
      history.push('/acknowledge')
    });
  } else {
    history.push('/');
  }
  return <PageLayout><Loading /></PageLayout>;
};
