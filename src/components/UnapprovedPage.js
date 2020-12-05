import React from 'react'
import PageLayout from './PageLayout'
import { ResponsiveContainer } from './pageStyles';
import { DEFAULT_ACCOUNT_REVIEW_URL } from '../constants';

const REVIEW_URL = process.env.REACT_APP_ACCOUNT_UNAPPROVED_REVIEW_URL;

export default () => (
  <PageLayout title="Your account needs further review">
    <ResponsiveContainer>
      <p>
        To start the review process, please visit this link and provide more
        information: <a href={REVIEW_URL}>{REVIEW_URL}</a>
      </p>
    </ResponsiveContainer>
  </PageLayout>
);
