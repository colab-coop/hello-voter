import React from 'react'
import { FormGroup, RadioButtonGroup, RadioButton } from 'carbon-components-react'
import TrainingLayout from '../TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage='/onboarding/01'
      nextPage='/onboarding/ngp/03'
      title="NGP Onboarding 02"
    >
      <p>
        A person who is unable to vote in person on Election Day is not allowed
        to vote in either a Primary or General Election.
      </p>
      <br />
      <FormGroup>
        <RadioButtonGroup
          orientation="vertical"
          labelPosition="right"
          name="ngp-training-02"
        >
          <RadioButton
            name="true"
            labelText="True"
            value="true"
          />
          <RadioButton
            name="false"
            labelText="False"
            value="false"
          />
        </RadioButtonGroup>
      </FormGroup>
    </TrainingLayout>
  )
}
