import React from 'react'
import { Menu } from './Menu'
import { Grid, Row } from 'carbon-components-react/lib/components/Grid'
import { Content } from 'carbon-components-react/lib/components/UIShell'
import Button from 'carbon-components-react/lib/components/Button'

export const PageLayout = ({ title, children, submitButtonTitle, onClickSubmit }) => (
  <>
    <Menu />
    <Content>
      <Grid>
        <Row>
          <h3>{ title }</h3>
        </Row>
        <Row>
          { children }
        </Row>
        <Row className="bottom">
          { submitButtonTitle &&
            <Button
              onClick={onClickSubmit}
            >
              { submitButtonTitle }
            </Button>
          }
        </Row>
      </Grid>
    </Content>
  </>
)
