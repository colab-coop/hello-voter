import React from 'react'
import styled from 'styled-components'
import { RadioButton16 } from '@carbon/icons-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { spacing, colors } from '../../theme'
import { useHistory } from 'react-router-dom'

const List = styled.ol`
  width: 100%;
  margin-top: ${ spacing[7] };
`

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${ colors.gray[20] };
  padding: ${ spacing[4] } ${ spacing[5] };
`

const ListItem = ({ text }) => (
  <Item>
    { text }
    <RadioButton16 />
  </Item>
)

export const SignUpPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push('/ambassador/personal_info')
      }}
      title="Sign Up"
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/ambassador"
        }]
      }/>}
    >
      <p>Becoming an ambassador is an easy way to better your community.</p>
      <List>
        <ListItem text="Tell us about you"/>
        <ListItem text="Complete 10 minute training"/>
        <ListItem text="We’ll review your application"/>
        <ListItem text="Start recruiting and earning"/>
      </List>
    </PageLayout>
  )
}
