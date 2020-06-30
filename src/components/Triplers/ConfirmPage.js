import React from 'react'
import { Form, FormGroup, TextInput, Link } from 'carbon-components-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'

export default () => (
  <PageLayout
    title="Tripler: {Name}"
    header={
      <Breadcrumbs
        items={[
          {
            name: "Home",
            route: "/",
          },
          {
            name: "Triplers",
            route: "/",
          },
          {
            name: "Confirm",
            route: "/",
          },
        ]}
      />
    }
  >
    <Form style={{ width: "100%" }}>
      <p>Add \[First Name]\’s phone number so we can confirm her identity, and then we’ll send you your payment! </p>
      <FormGroup>
        <TextInput
          id="phone"
          invalidText="Invalid error message."
          labelText="Melody’s Phone Number"
          placeholder="123-456-7890"
        />
      </FormGroup>
      <p>Add the names of three people that Melody will remind to vote</p>
      <FormGroup>
        <TextInput
          id="name-1"
          invalidText="Invalid error message."
          labelText="Name 1"
          placeholder="Name"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          id="name-2"
          invalidText="Invalid error message."
          labelText="Name 2"
          placeholder="Name"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          id="name-3"
          invalidText="Invalid error message."
          labelText="Name 3"
          placeholder="Name"
        />
      </FormGroup>
      <Button>Update Info</Button>
      <Button small kind="tertiary">Go back to My Vote Triplers</Button>
    </Form>
  </PageLayout>
)
