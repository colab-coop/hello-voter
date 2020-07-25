import React from 'react'
import TrainingLayout from './TrainingLayout'

const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/10"
      nextPage="/onboarding/12"
      title="Being a Voting Ambassador"
    >
      <p>
        As a Voting Ambasssador, your task is to recruit “Vote Triplers” from a
        list of family members and neighbors. A Vote Tripler is someone who
        agrees to remind three other people to vote in the next election.
      </p>
      <br />
      <br />
      <p>You will receive ${REACT_APP_TRIPLER_PAYMENT_AMT} for each Vote Tripler you recruit.</p>
      <br />
      <br />
      <p>
        Please keep in mind that you are not being paid to vote, to register to
        vote, or to get others to register or vote.
      </p>
    </TrainingLayout>
  );
}