import React from 'react'
import { Column, Row, Form, Content } from 'carbon-components-react'
import styled from 'styled-components'
import { spacing } from '../theme'
import Button from './Button'
import { InlineNotification } from 'carbon-components-react'

const FormStyled = styled(Form)`
  margin-top: ${ spacing[8] };
`

const ContentContainer = styled(Content)`
  padding: ${ spacing[3] };
  padding-bottom: ${ spacing[10] };
`

const TitleContainer = styled(Row)`
  margin-top: ${ spacing[5] };
  margin-bottom: ${ spacing[7] };
`

const CtaButtonContainer = styled(Column)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
`

const InlineNotificationStyled = styled(InlineNotification)`
  width: 100%;
  max-width: 100%;
  margin-bottom: ${ spacing[3] };
`

const CtaButton = styled(Button)`
  margin-top: 0;
`

export default ({ header, title, children, submitButtonTitle, onClickSubmit, error }) => (
  <>
    <FormStyled onSubmit={onClickSubmit}>
      <ContentContainer>
        <Column lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
          <Row>
            { header }
          </Row>
          <TitleContainer>
            <h3>{ title }</h3>
          </TitleContainer>
          <Row style={{display: "block"}}>
            { children }
          </Row>
        </Column>
      </ContentContainer>
      <CtaButtonContainer lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
        <Row>
          {error && (
            <InlineNotificationStyled
              hideCloseButton
              kind="error"
              icondescription="Dismiss notification"
              subtitle={error}
              title={null}
            />
          )}
          {submitButtonTitle && (
              <CtaButton
                type="submit"
                trackingEvent={{ category: `Submit${title.replace(/ /g,'')}`, label: submitButtonTitle }}
                isAForm
              >
              {submitButtonTitle}
            </CtaButton>
          )}
        </Row>
      </CtaButtonContainer>
    </FormStyled>
  </>
)
