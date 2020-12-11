import React from "react";
import PageLayout from "./PageLayout";
import { ResponsiveContainer } from './pageStyles';
import { DEFAULT_ACCOUNT_REVIEW_URL } from '../constants';

const REVIEW_URL = process.env.REACT_APP_ACCOUNT_LOCKED_REVIEW_URL;

export default () => (
  <PageLayout title="Your account needs further review">
    <ResponsiveContainer>
      <p>
        Please contact support@blockpower.vote with any questions.
      </p>
    </ResponsiveContainer>
  </PageLayout>
);
