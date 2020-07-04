import React from 'react'
import styled from 'styled-components'
import { CheckboxCheckedFilled24 } from '@carbon/icons-react'
import PageLayout from '../PageLayout'
import { spacing, colors } from '../../theme'
import { useHistory } from 'react-router-dom'

const Header = styled.div`
  width: 100%;
  height: 240px;
  background-image: url("./placeholder.png");
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: ${ spacing[3] };
`

const Credit = styled.p`
  color: ${ colors.white};
  padding-right: ${ spacing[3]};
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${ spacing[7]};
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${ spacing[3]};
`

const Title = styled.h5`
  margin-left: ${ spacing[3]};
`

const Description = styled.p`
  margin-left: ${ spacing[7]};
`

const CheckboxComponent = ({ title, description }) => (
  <CheckboxContainer>
    <TitleContainer>
      <CheckboxCheckedFilled24 />
      <Title>{title}</Title>
    </TitleContainer>
    <Description>{description}</Description>
  </CheckboxContainer>
)

export const BecomeAmbassadorPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push('/ambassador/signup')
      }}
      title="Become an ambassador"
      submitButtonTitle="Get Started"
      header={<Header><Credit>Photo by Perry Grone</Credit></Header>}
    >
      <CheckboxComponent
        title="Make a difference"
        description="Help increase voter turnout to better your community and the country"
      />
      <CheckboxComponent
        title="Get paid for your impact"
        description="You’ll get $50 for every vote tripler you sign up and a $25 bonus if they also become an ambassador"
      />
    </PageLayout>
  )
}
