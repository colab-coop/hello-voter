import React from 'react'
import { FormGroup, RadioButtonGroup, RadioButton } from 'carbon-components-react'
import TrainingLayout from '../TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/01"
      nextPage="/onboarding/ngp/03"
      title="Voter Ambassador Training"
    >
      <p>True or false:</p>
      <br />
      <p>I will be getting paid for my efforts as a Voting Ambassador.</p>
      <br />
      <FormGroup>
        <RadioButtonGroup
          orientation="vertical"
          labelPosition="right"
          name="ngp-training-02"
        >
          <RadioButton name="true" labelText="True" value="true" />
          <RadioButton name="false" labelText="False" value="false" />
        </RadioButtonGroup>
      </FormGroup>
    </TrainingLayout>
  );
}
