import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'
import { Devices24, Partnership24 } from '@carbon/icons-react';

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7]};
`

export default () => (
  <PageLayout title="Help">
    <TopParagraph>Have questions? Here’s how to get answers.</TopParagraph>
    <CardButton
      icon={<Devices24 />}
      title="Technical Support"
      description="blockpower@zammad.com"
      onClick={() => {
        window.open("mailto:blockpower@zammad.com");
      }}
    />
    <CardButton
      icon={<Partnership24 />}
      title="New Georgia Project Support"
      description="reach@ngpaf.org"
      onClick={() => {
        window.open("mailto:reach@ngpaf.org");
      }}
    />
  </PageLayout>
);
