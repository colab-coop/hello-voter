import React from 'react'
import { FormGroup, RadioButtonGroup, RadioButton } from 'carbon-components-react'
import TrainingLayout from '../TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/02"
      nextPage="/approval"
      title="Voter Ambassador Training"
      shouldSubmit
    >
      <p>
        Which of these offices are on the ballot in the
        upcoming primary runoff?
      </p>
      <br />
      <FormGroup>
        <RadioButtonGroup
          orientation="vertical"
          labelPosition="right"
          name="ngp_training_03"
        >
          <RadioButton
            name="house"
            labelText="GA House of Representatives"
            value="house"
          />
          <RadioButton
            name="governor"
            labelText="GA Governor"
            value="governor"
          />
          <RadioButton
            name="president"
            labelText="President"
            value="president"
          />
          <RadioButton
            name="senate"
            labelText="U.S. Senate"
            value="senate"
          />
        </RadioButtonGroup>
      </FormGroup>
    </TrainingLayout>
  );
}