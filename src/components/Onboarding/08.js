import React from 'react'
import { FormGroup, TextInput } from 'carbon-components-react'
import TrainingLayout from './TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/07"
      nextPage="/onboarding/09"
      title="Reasons to vote"
    >
      <p>What three reasons to vote are most important to you?</p>
      <br />
      <FormGroup>
        <TextInput name="reasons_to_vote_01" invalidText="A valid value is required" placeholder="1." required />
      </FormGroup>
      <FormGroup>
        <TextInput name="reasons_to_vote_02" invalidText="A valid value is required" placeholder="2." required />
      </FormGroup>
      <FormGroup>
        <TextInput name="reasons_to_vote_03" invalidText="A valid value is required" placeholder="3." required />
      </FormGroup>
    </TrainingLayout>
  );
}
