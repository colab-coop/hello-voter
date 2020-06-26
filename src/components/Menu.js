import React from 'react'
import { Help20, UserAvatar20 } from '@carbon/icons-react'
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderContainer
} from 'carbon-components-react/lib/components/UIShell'

export const Menu = () => {
  return (
    <HeaderContainer
      render={() =>
        <>
          <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix="HELLO VOTER"></HeaderName>
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
