import React from 'react'
import TrainingLayout from './TrainingLayout'
import { Checkbox, FormGroup } from "carbon-components-react";

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/13"
      nextPage="approval"
      title="Acknowledgement"
    >
      <p>
        I understand and acknowledge that in performing my activities as a
        Voting Ambassador —
      </p>
      <br />
      <br />
      <FormGroup>
        <Checkbox
          id="response-1"
          labelText="I am acting as an independent contractor, and not as an employee or agent of [organization]."
          // onChange={function noRefCheck() {}}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="response-2"
          labelText="I do not have the power or authority to speak for [organization] or to legally bind it by anything I say or do."
          // onChange={function noRefCheck() {}}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="response-3"
          labelText="I am not being paid to vote, to register to vote, or to register anyone else to vote."
          // onChange={function noRefCheck() {}}
        />
      </FormGroup>
    </TrainingLayout>
  );
}