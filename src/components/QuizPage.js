import React, { useEffect } from 'react'
import PageLayout from './PageLayout'

const QUIZ_URL = 'https://www.blockpower.vote/civicedtest/';

export const QuizPage = () => {
  window.location = QUIZ_URL;
  return null;
};
