import React from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'

export default ({ title, prevPage, nextPage, children }) => {
  const history = useHistory();
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push({ nextPage });
      }}
      title={title}
      submitButtonTitle="Continue"
      header={prevPage && <Breadcrumbs items={
        [{
          name: "Back",
          route: {prevPage}
        }]
      } />}
    >
      {children}
    </PageLayout>
  );
};