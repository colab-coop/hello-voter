import React from 'react'
import TrainingLayout from './TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/11"
      nextPage="/onboarding/13"
      title="Being a Voting Ambassador"
    >
      <p>
        For example, let's say you saw your friend Vanessa Taylor on the list of
        potential Vote Triplers we provide. You would reach out to Vanessa and
        ask her to become a Vote Tripler — that is, to commit to reminding three
        other people (housemates or family members) to vote in the election.
      </p>
      <br />
      <br />
      <p>
        If Vanessa agrees, you'll enter her phone number and the names of the
        three people she committed to remind to vote (as the "Voters") in our
        app.
      </p>
      <br />
      <br />
      <p>
        As soon as Vanessa confirms that she will be a Vote Tripler, we'll send
        you a payment — either by direct deposit into your bank account or a
        free bank account we'll help you set up.
      </p>
    </TrainingLayout>
  );
}