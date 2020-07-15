import React from 'react'
import { FormGroup, TextInput } from 'carbon-components-react'
import TrainingLayout from './TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/05"
      nextPage="/onboarding/07"
      title="Voting for the government policies we want"
    >
      <p>What three government policies are most important to you?</p>
      <br />
      <br />
      <FormGroup>
        <TextInput id="response_01" invalidText="A valid value is required" placeholder="1." />
      </FormGroup>
      <FormGroup>
        <TextInput id="response_02" invalidText="A valid value is required" placeholder="2." />
      </FormGroup>
      <FormGroup>
        <TextInput id="response_03" invalidText="A valid value is required" placeholder="3." />
      </FormGroup>
    </TrainingLayout>
  );
}
