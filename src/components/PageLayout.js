import React from 'react'
import { Grid, Column, Row, Button } from 'carbon-components-react'
import styled from 'styled-components'
import { spacing, colors } from '../theme'
import Menu from './Menu'

const ContentContainer = styled(Grid)`
  padding: ${ spacing[3] };
  padding-top: ${ spacing[8] };
  padding-bottom: ${ spacing[10] };
  height: 100vh;
  margin-top: 0;
  overflow-y: scroll;
`

const TitleContainer = styled(Row)`
  margin-top: ${ spacing[7] };
  margin-bottom: ${ spacing[7] };
`

const CtaButtonContainer = styled(Column)`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${ colors.white };
`

const CtaButton = styled(Button)`
  width: 100%;
  max-width: 100%;
  margin-bottom: ${ spacing[3] };
`

export default ({ header, title, children, submitButtonTitle, onClickSubmit }) => (
  <>
    <Menu />
    <ContentContainer>
      <Column lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
        <Row>
          { header }
        </Row>
        <TitleContainer>
          <h3>{ title }</h3>
        </TitleContainer>
        <Row>
          { children }
        </Row>
      </Column>
      <CtaButtonContainer lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
        <Row>
          {submitButtonTitle && (
            <CtaButton onClick={onClickSubmit}>{submitButtonTitle}</CtaButton>
          )}
        </Row>
      </CtaButtonContainer>
    </ContentContainer>
  </>
)
