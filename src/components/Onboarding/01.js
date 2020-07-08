import React from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../PageLayout'

export default () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push('/onboarding/02')
      }}
      title="Training"
      submitButtonTitle="Continue"
    >
      <p>Voting Ambassadors understand the importance of voting in bringing positive change to their communities. By recruiting "Vote Triplers" — friends and family members who agree to remind three other people to vote in the next election — Voting Ambassadors give their communities a more <strong>powerful</strong> voice.</p>
      <br />
      <br />
      <p>To become a Voting Ambassador, you must complete the following 20-minute training and schedule a 5-minute phone interview with an Organizer from BlockPower.</p>
    </PageLayout>
  )
}
