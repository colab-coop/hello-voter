import React, { useEffect } from 'react';

import { AppContext } from "../../api/AppContext";
import Loading from './Loading';
import PageLayout from './PageLayout';

const QUIZ_KEY = process.env.QUIZ_KEY;

const isTokenValid = (token) => {
  // TODO: Validate the token using the QUIZ_KEY and the current time.
  return true;
};

const validateQuizCompleted = () => {
  const match = window.location.search.match(/token=(\w+)/);
  return match && isTokenValid(match[1]);
};

export const QuizCompletedPage = () => {
  const { api, ambassador } = React.useContext(AppContext);

  if (validateQuizCompleted()) {
    api.saveProfile({...ambassador, quiz_completed: true}).then(() => {
      history.push('/acknowledge')
    });
  } else {
    history.push('/');
  }
  return <PageLayout><Loading /></PageLayout>;
};
