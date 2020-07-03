import React from 'react'
import styled from 'styled-components'
import { Button, InlineLoading } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'
import { spacing } from '../theme'

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: ${props => props.micro ? '50%' : '100%'};
  max-width: 100%;
  padding-right: ${ spacing[4] };
  margin-top: ${ spacing[5] };
`

const InlineLoadingStyled = styled(InlineLoading)`
  width: 100%;
  justify-content: center;
  height: ${ spacing[5] };
` 

export default ({ href, children, className, small, kind, loading, onClick, micro }) => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }

  return (
    <ButtonStyled
      small={small}
      kind={loading ? "ghost" : kind}
      className={className}
      onClick={() => {
        onClick && onClick()
        href && redirect(href)
      }}
      micro={micro}
    >
      {loading ? (
        <InlineLoadingStyled
          description=""
          status={!loading ? 'finished' : 'active'}
          aria-live={'off'}
        />
      ) : children}
    </ButtonStyled>
  )
}