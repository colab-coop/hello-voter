import React from 'react'
import { Menu } from './Menu'
import { Grid, Column, Row } from 'carbon-components-react/lib/components/Grid'
import Button from 'carbon-components-react/lib/components/Button'

export const PageLayout = ({ title, children, submitButtonTitle, onClickSubmit }) => (
  <>
    <Menu />
    <Grid className="layout--content-container">
      <Column lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 1 }} sm={{ span: 4 }}>
        <Row className="layout--title-container">
          <h3>{ title }</h3>
        </Row>
        <Row>
          { children }
        </Row>
        <Row>
          {submitButtonTitle && (
            <Button className="layout--cta-button" onClick={onClickSubmit}>{submitButtonTitle}</Button>
          )}
        </Row>
      </Column>
    </Grid>
  </>
)
