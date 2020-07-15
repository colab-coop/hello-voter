import React from 'react'
import { TextArea } from 'carbon-components-react'
import TrainingLayout from './TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage='/onboarding/02'
      nextPage='/onboarding/04'
      title="The importance of voting"
    >
      <p>What did you think about President Obama’s speech?</p>
      <br />
      <TextArea
        id="response_01"
        invalidText="A valid value is required"
        placeholder="I thought..."
        rows={4}
      />
    </TrainingLayout>
  )
}
