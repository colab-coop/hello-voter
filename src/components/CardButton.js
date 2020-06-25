import React from 'react'
import { ChevronRight24 } from '@carbon/icons-react';
import styled from 'styled-components'
import { spacing } from '../theme'

const CardContainer = styled.button`
	border: none;
  cursor: pointer;
  text-align: left;
  background-color: #f4f4f4;
  padding: ${ spacing[5] };
  width: 100%;
  margin-top: ${ spacing[5] };
`

const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const CardTitle = styled.h5`
  font-size: 18px;
  flex: 1 1 auto;
  margin-left: ${ spacing[3] };
`

const CardDescription = styled.p`
  font-size: 14px;
`

export default ({ icon, title, description, onClick }) => {
  return (
    <CardContainer onClick={ onClick }>
      <CardTitleContainer>
        { icon }
        <CardTitle>{ title }</CardTitle>
        <ChevronRight24 />
      </CardTitleContainer>
      <CardDescription>{ description }</CardDescription>
    </CardContainer>
  )
}
