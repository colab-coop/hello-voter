import React from 'react'
import TrainingLayout from './TrainingLayout'
import { Checkbox, FormGroup } from "carbon-components-react";

const { REACT_APP_ORG } = process.env;

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/13"
      nextPage="/approval"
      title="Acknowledgement"
      shouldSubmit
    >
      <p>
        I understand and acknowledge that in performing my activities as a
        Voting Ambassador —
      </p>
      <br />
      <br />
      <FormGroup>
        <Checkbox
          id="acknowledgement-1"
          name="acknowledgement-1"
          labelText={`I am acting as an independent contractor, and not as an employee or agent of ${REACT_APP_ORG}.`}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="acknowledgement-2"
          name="acknowledgement-2"
          labelText={`I do not have the power or authority to speak for ${REACT_APP_ORG} or to legally bind it by anything I say or do.`}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="acknowledgement-3"
          name="acknowledgement-3"
          labelText="I am not being paid to vote, to register to vote, or to register anyone else to vote."
        />
      </FormGroup>
    </TrainingLayout>
  );
}
