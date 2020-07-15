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
      <TextArea
        id="response_01"
        invalidText="A valid value is required"
        labelText="What did you think about President Obama’s speech?"
        placeholder="I thought..."
        rows={4}
      />
    </TrainingLayout>
  )
}
