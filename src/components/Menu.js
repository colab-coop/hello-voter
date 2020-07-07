import React from 'react'
import { Help20, UserAvatar20 } from '@carbon/icons-react'
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderContainer,
} from "carbon-components-react";
import styled from 'styled-components'
import logo from '../assets/images/logo.png';
import { spacing } from '../theme'

const Logo = styled.div`
  width: ${ spacing[10] };
  height: ${ spacing[7] };
  margin-left: ${ spacing[3] };
  background-image: url(${ logo });
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`

export default () => {
  return (
    <HeaderContainer
      render={() =>
        <>
          <Header aria-label="Hello Voter">
            <Logo onClick={() => { }} />
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Help" onClick={() => {}}>
                <Help20/>
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
                <UserAvatar20/>
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        </>
      }
      />
  )
}
