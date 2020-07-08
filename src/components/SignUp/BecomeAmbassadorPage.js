import React from 'react'
import styled from 'styled-components'
import { CheckboxCheckedFilled24 } from '@carbon/icons-react'
import PageLayout from '../PageLayout'
import { spacing, colors } from '../../theme'
import { useHistory } from 'react-router-dom'
import placeholder from '../../assets/images/placeholder.png';

const Header = styled.div`
  width: 100%;
  height: 240px;
  background-image: url(${ placeholder });
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
      title="Become a Voting Ambassador"
      submitButtonTitle="Get Started"
      header={<Header><Credit>Photo by Perry Grone</Credit></Header>}
    >
      <CheckboxComponent
        title="Make a difference!"
        description="Talk to your housemates, friends, and neighbors about voting in the next election to bring positive change to your community and the country."
      />
      <CheckboxComponent
        title="Make money!"
        description='Receive $50 for every "Vote Tripler" you sign up — and a $Y bonus for each Vote Tripler who goes on to become a Voting Ambassador.'
      />
    </PageLayout>
  )
}
