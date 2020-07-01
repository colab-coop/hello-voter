import React from 'react'
import styled from 'styled-components'
import Button from 'carbon-components-react/lib/components/Button'
import { useHistory } from 'react-router-dom'
import { spacing } from '../theme'

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding-right: ${ spacing[4]};
  margin-top: ${ spacing[5]};
`

export default ({ href, children, className, small, kind, onClick }) => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }
  return (
    <ButtonStyled
      small={small}
      kind={kind}
      className={className}
      onClick={() => {
        onClick && onClick()
        redirect(href)
      }}
    >
      {children}
    </ButtonStyled>
  )
}
