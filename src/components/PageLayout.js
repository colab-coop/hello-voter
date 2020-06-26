import React from 'react'
import { Grid, Column, Row, Button } from 'carbon-components-react'
import styled from 'styled-components'
import { spacing } from '../theme'
import { Menu } from './Menu'

const ContentContainer = styled(Grid)`
  padding: ${ spacing[3] };
  padding-top: ${ spacing[9] };
  height: 100vh;
  margin-top: 0;
  overflow-y: scroll;
`

const TitleContainer = styled(Row)`
  margin-top: ${ spacing[7] };
  margin-bottom: ${ spacing[7] };
`

const CtaButton = styled(Button)`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: ${ spacing[3] };
`

export default ({ title, children, submitButtonTitle, onClickSubmit }) => (
  <>
    <Menu />
    <ContentContainer>
      <Column lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
        <TitleContainer>
          <h3>{ title }</h3>
        </TitleContainer>
        <Row>
          { children }
        </Row>
        <Row>
          {submitButtonTitle && (
            <CtaButton onClick={onClickSubmit}>{submitButtonTitle}</CtaButton>
          )}
        </Row>
      </Column>
    </ContentContainer>
  </>
)
