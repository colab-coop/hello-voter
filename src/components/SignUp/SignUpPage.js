import React from 'react'
import styled from 'styled-components'
import { RadioButton16 } from '@carbon/icons-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { spacing, colors } from '../../theme'
import { useHistory } from 'react-router-dom'
import {AppContext} from "../../api/AppContext";

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

const ListItem = ({ text, bold }) => (
  <Item>
    {
      bold ?
      <strong>{text}</strong> :
      text
    }
    <RadioButton16 />
  </Item>
)

export const SignUpPage = () => {
  const history = useHistory()
  const { user } = React.useContext(AppContext)
  user && user.signup_completed && history.push('/')
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
      <p>Being a Voting Ambassador is an easy and rewarding way to bring positive change to your community. To sign up:</p>
      <List>
        <ListItem text="Complete a brief application" />
        <ListItem text="Take a 15-minute training" />
        <ListItem text="Have a 10-minute phone interview" />
        <ListItem bold text="Start working and earning!" />
      </List>
    </PageLayout>
  )
}
