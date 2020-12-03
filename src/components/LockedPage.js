import React from "react";
import PageLayout from "./PageLayout";
import { ResponsiveContainer } from './pageStyles';

export default () => (
  <PageLayout title="Your account needs further review">
    <ResponsiveContainer>
      <p>
        To start the review process, please visit this link to provide more information: <a href="https://blockpower.link/manualreview">
          https://blockpower.link/manualreview
        </a>
      </p>
    </ResponsiveContainer>
  </PageLayout>
);
