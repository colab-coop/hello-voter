import React from 'react'
import PageLayout from './PageLayout'
import { AppContext } from '../api/AppContext';

export default () => {
  const { user } = React.useContext(AppContext);
  return <PageLayout title="Unapproved">
    <p>
      You are registered as:
    </p>
    <blockquote>
      <p>
        Name: {user.first_name} {user.last_name}
      <br/>
        City: {user.address.city}, {user.address.state}
      <br/>
        Zip: {user.address.zip}
      <br/>
        Phone: {user.phone}
      <br/>
        Email: {user.email}
      </p>
    </blockquote>
    <p>
      We're sorry; we can't automatically set you up as an Ambassador.
      Please contact a BlockPower staff member to assist you.
    </p>
  </PageLayout>;
};
