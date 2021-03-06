import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Help20, UserAvatar20, AppSwitcher20, Close24 } from '@carbon/icons-react'
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
  HeaderPanelRightContainer,
  HeaderPanelSpacer,
  SwitcherStyled,
  SwitcherStyledRight,
  SwitcherItemStyled,
  SwitcherDividerStyled
} from './pageStyles'
import { AppContext } from '../api/AppContext';

const { REACT_APP_PAYMENT_FEATURE } = process.env;

const Menu = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [profileNavOpen, setProfileNavOpen] = useState(false)
  const history = useHistory()
  const { user, authenticated, signOut } = React.useContext(AppContext)
  const approved = user?.approved && !(user?.locked);

  const redirect = async (href) => {
    setNavOpen(false)
    setProfileNavOpen(false)
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
        {approved && (
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
          {authenticated && (
            <HeaderGlobalAction
              aria-label="Profile menu"
              type="button"
              onClick={() => {
                setProfileNavOpen(!profileNavOpen)
              }}
            >
              <UserAvatar20 />
            </HeaderGlobalAction>
          )}
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
        <HeaderPanelRightContainer navOpen={profileNavOpen}>
          <HeaderPanelSpacer />
          <SwitcherStyledRight>
            {approved &&
              <SwitcherItemStyled onClick={() => {redirect("/profile")}}>
                Profile
              </SwitcherItemStyled>
            }
            <SwitcherItemStyled onClick={signOut}>
              Sign out
            </SwitcherItemStyled>
          </SwitcherStyledRight>
        </HeaderPanelRightContainer>
        <HeaderPanelStyled navOpen={navOpen}>
          <SwitcherStyled
            // style="transform: translateY(0px); transition: transform 400ms ease 0s;"
          >
            <SwitcherItemStyled onClick={() => {redirect("/")}}>
              Home
            </SwitcherItemStyled>
            {approved &&
              <SwitcherItemStyled onClick={() => {redirect("/triplers")}}>
                Vote Triplers
              </SwitcherItemStyled>
            }
            {/*
              FIXME: Hide payments `REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE` & `REACT_APP_PAYMENT_FEATURE`
              with Boolean rather than "true" and empty .env field
            */}
            {approved && REACT_APP_PAYMENT_FEATURE &&
              <SwitcherItemStyled onClick={() => {redirect("/payments")}}>
                Payments
              </SwitcherItemStyled>
            }
            <SwitcherDividerStyled />
            <SwitcherItemStyled onClick={() => {redirect("/help")}}>
              Help
            </SwitcherItemStyled>
            {approved &&
              <SwitcherItemStyled onClick={() => {redirect("/profile")}}>
                Profile
              </SwitcherItemStyled>
            }
            {authenticated &&
              <SwitcherItemStyled onClick={signOut}>
                Sign out
              </SwitcherItemStyled>
            }
          </SwitcherStyled>
        </HeaderPanelStyled>
      </Header>
    </ThemeProvider>
  );
};

export default Menu;
