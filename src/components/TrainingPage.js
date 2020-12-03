import React, { useEffect } from 'react';
import Loading from './Loading';
import PageLayout from './PageLayout';

const TRAINING_URL = 'https://www.blockpower.vote/civicedtest/';

export default () => {
  useEffect(() => {
    window.location = TRAINING_URL;
  });
  return <PageLayout><Loading /></PageLayout>;
};
