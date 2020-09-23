import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Help20, AppSwitcher20, Close24 } from '@carbon/icons-react'
import { ThemeProvider } from 'styled-components'

import {
  theme,
  Header,
  FlexContainer,
  Logo,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderNavigationStyled,
  HeaderMenuItemStyled,
  HeaderPanelStyled,
  SwitcherStyled,
  SwitcherItemStyled,
  SwitcherDividerStyled
} from './pageStyles'

const { REACT_APP_PAYMENT_FEATURE } = process.env

export default ({ isApproved }) => {
  const [navOpen, setNavOpen] = useState(false)
  const history = useHistory()
  const redirect = async (href) => {
    setNavOpen(false)
    history.push(href);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header aria-label="Hello Voter">
        <FlexContainer>
        <Logo
          onClick={() => {
            redirect("/");
          }}
        />
        {isApproved && (
          <HeaderNavigationStyled
            aria-label="Menu"
          >
            <HeaderMenuItemStyled
              onClick={() => {
                redirect("/triplers");
              }}
            >
              Vote Triplers
            </HeaderMenuItemStyled>
            {REACT_APP_PAYMENT_FEATURE &&
              <HeaderMenuItemStyled
                onClick={() => {
                  redirect("/payments");
                }}
              >
                Payments
              </HeaderMenuItemStyled>
            }
          </HeaderNavigationStyled>
        )}
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Help"
            type="button"
            onClick={() => {
              redirect("/help");
            }}
          >
            <Help20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            mobileNav
            aria-label="Menu"
            type="button"
            onClick={() => {
              setNavOpen(!navOpen)
            }}
          >
            {navOpen ? <Close24 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        </FlexContainer>
        <HeaderPanelStyled navOpen={navOpen}>
          <SwitcherStyled
            // style="transform: translateY(0px); transition: transform 400ms ease 0s;"
          >
            <SwitcherItemStyled onClick={() => {redirect("/")}}>
              Home
            </SwitcherItemStyled>
            <SwitcherItemStyled onClick={() => {redirect("/triplers")}}>
              Vote Triplers
            </SwitcherItemStyled>
            {/*
              FIXME: Hide payments `REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE` & `REACT_APP_PAYMENT_FEATURE`
              with Boolean rather than "true" and empty .env field
            */}
            {REACT_APP_PAYMENT_FEATURE &&
              <SwitcherItemStyled onClick={() => {redirect("/payments")}}>
                Payments
              </SwitcherItemStyled>
            }
            <SwitcherDividerStyled />
            <SwitcherItemStyled onClick={() => {redirect("/help")}}>
              Help
            </SwitcherItemStyled>
          </SwitcherStyled>
        </HeaderPanelStyled>
      </Header>
    </ThemeProvider>
  );
};
