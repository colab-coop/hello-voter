import React from 'react'
import { FormGroup, RadioButtonGroup, RadioButton } from 'carbon-components-react'
import TrainingLayout from '../TrainingLayout'

export default () => {
  return (
    <TrainingLayout nextPage="/onboarding/ngp/02" title="Voter Ambassador Training">
      <p>What day is the Georgia primary runoff this year?</p>
      <br />
      <FormGroup>
        <RadioButtonGroup
          orientation="vertical"
          labelPosition="right"
          name="ngp_training_01"
        >
          <RadioButton name="jun_09" labelText="June 9" value="jun_09" />
          <RadioButton name="aug_02" labelText="August 2" value="aug_02" />
          <RadioButton name="aug_11" labelText="August 11" value="aug_11" />
          <RadioButton name="nov_03" labelText="November 3" value="nov_03" />
        </RadioButtonGroup>
      </FormGroup>
    </TrainingLayout>
  );
}
