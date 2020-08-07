import React from 'react'
import { 
  FormStyled, 
  ContentContainer, 
  TitleContainer, 
  CtaButtonContainer, 
  InlineNotificationStyled,
  Container,
  ResponsiveContainer
} from './pageStyles'

export default ({ header, title, children, onClickSubmit, error }) => (
  <>
    <FormStyled onSubmit={onClickSubmit}>
      <ContentContainer>
        <Container>
          <ResponsiveContainer>
          <div>
            { header }
          </div>
          <TitleContainer hasHeader={header !== undefined}>
            <h3>{ title }</h3>
          </TitleContainer>
          <div>
            { children }
          </div>
          </ResponsiveContainer>
        </Container>
      </ContentContainer>
      <CtaButtonContainer lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
        {error && (
          <InlineNotificationStyled
            hideCloseButton
            kind="error"
            icondescription="Dismiss notification"
            subtitle={error}
            title={null}
          />
        )}
      </CtaButtonContainer>
    </FormStyled>
  </>
)
