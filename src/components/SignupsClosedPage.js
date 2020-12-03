import React from "react";
import PageLayout from "./PageLayout";
import { ResponsiveContainer } from './pageStyles';

export default () => (
  <PageLayout title='This site is now closed to new Voting Ambassador sign-ups'>
    <ResponsiveContainer>
      <p>
        If you are trying to access an existing account, please contact
        support@blockpower.vote. To sign up for a new Voting Ambassador
        account, please go to <a href='https://app.blockpower.vote/ambassadors'>https://app.blockpower.vote/ambassadors</a>
      </p>
    </ResponsiveContainer>
  </PageLayout>
);
