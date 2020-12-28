import React from "react";
import PageLayout from "./PageLayout";
import { ResponsiveContainer } from './pageStyles';
import { DEFAULT_ACCOUNT_REVIEW_URL } from '../constants';

const REVIEW_URL = process.env.REACT_APP_ACCOUNT_LOCKED_REVIEW_URL;
const LOCKED_PAGE_TITLE = process.env.REACT_APP_LOCKED_PAGE_TITLE;
const LOCKED_PAGE_HTML = process.env.REACT_APP_LOCKED_PAGE_HTML;

export default () => (
  <PageLayout title={LOCKED_PAGE_TITLE}>
    <ResponsiveContainer dangerouslySetInnerHTML={{__html: LOCKED_PAGE_HTML}} />
  </PageLayout>
);
