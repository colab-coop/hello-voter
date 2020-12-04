import React, { useEffect } from 'react';
import Loading from './Loading';
import PageLayout from './PageLayout';

const TRAINING_URL = process.env.REACT_APP_TRAINING_URL;

export default () => {
  useEffect(() => {
    window.location = TRAINING_URL;
  });
  return <PageLayout><Loading /></PageLayout>;
};
