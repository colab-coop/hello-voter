import React, {useState} from 'react'
import styled from 'styled-components'
import { Button, InlineLoading } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'
import { spacing } from '../theme'

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding-right: ${ spacing[4] };
  margin-top: ${ spacing[5] };
`

const InlineLoadingStyled = styled(InlineLoading)`
  width: 100%;
  justify-content: center;
  height: ${ spacing[5] };
` 

export default ({ href, children, className, small, kind, onClick }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ariaLive, setAriaLive] = useState('off');

  const history = useHistory()
  const redirect = async (href) => {
    setIsSubmitting(true);
    setAriaLive('assertive');

    // Instead of making a real request, we mock it with a timer
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);

      // To make submittable again, we reset the state after a bit so the user gets completion feedback
      setTimeout(() => {
        setSuccess(false);
        setAriaLive('off');
      }, 1500);
    }, 2000);
    history.push(href)
  }

  return (
    <ButtonStyled
      small={small}
      kind={isSubmitting || success ? "ghost" : kind}
      className={className}
      onClick={() => {
        onClick && onClick()
        redirect(href)
      }}
    >
      {isSubmitting || success ? (
        <InlineLoadingStyled
          description=""
          status={success ? 'finished' : 'active'}
          aria-live={ariaLive}
        />
      ) : children}
    </ButtonStyled>
  )
}