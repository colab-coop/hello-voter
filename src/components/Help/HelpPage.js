import React from 'react'
import styled from 'styled-components'
import { Devices24, Partnership24, Catalog24 } from '@carbon/icons-react';
import { useHistory } from 'react-router-dom'
import { GridThreeUp } from '../pageStyles'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7]};
`

const { REACT_APP_ORG } = process.env;
const isNGP = REACT_APP_ORG === "NGP";
const isBlockPower = REACT_APP_ORG === "BlockPower"
const isColorOfChange = REACT_APP_ORG === "ColorOfChange"

export default () => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }

  return (
  <PageLayout title="Help">
    <TopParagraph>Have questions? Here’s how to get answers.</TopParagraph>
    <GridThreeUp>
    <CardButton
      icon={<Catalog24 />}
      title="FAQ"
      description="See answers to common questions asked by other Voting Ambassadors"
      onClick={() => {
        redirect("/faq");
      }}
    />
    <CardButton
      icon={<Devices24 />}
      title="Technical Support"
      description="blockpower@zammad.com"
      onClick={() => {
        window.open("mailto:blockpower@zammad.com");
      }}
    />
    {isNGP && (
      <CardButton
        icon={<Partnership24 />}
        title="New Georgia Project Support"
        description="reach@ngpaf.org"
        onClick={() => {
          window.open("mailto:reach@ngpaf.org");
        }}
      />
    )}
    {isBlockPower && (
      <CardButton
        icon={<Partnership24 />}
        title="BlockPower Support"
        description="organizer@blockpower.vote"
        onClick={() => {
          window.open("mailto:organizer@blockpower.vote");
        }}
      />
    )}
    {isColorOfChange && (
      <CardButton
        icon={<Partnership24 />}
        title="Color of Change Support"
        description="organizer+colorofchange@blockpower.vote"
        onClick={() => {
          window.open("mailto:organizer+colorofchange@blockpower.vote");
        }}
      />
    )}
    </GridThreeUp>
  </PageLayout>
  )
};