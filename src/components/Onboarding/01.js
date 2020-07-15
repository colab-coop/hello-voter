import React from 'react'
import TrainingLayout from './TrainingLayout'

const { REACT_APP_ORG } = process.env;

export default () => {
  return (
    <TrainingLayout
      nextPage='/onboarding/02'
      title="Training"
    >
      <p>Voting Ambassadors understand the importance of <strong>voting</strong> in bringing positive change to their communities. By recruiting "Vote Triplers" — friends and family members who agree to remind three other people to vote in the next election — Voting Ambassadors give their communities a more powerful voice.</p>
      <br />
      <br />
      <p>To become a Voting Ambassador, you must complete the following 15-minute training and schedule a 10-minute phone interview with an Organizer from {REACT_APP_ORG}.</p>
    </TrainingLayout>
  )
}
