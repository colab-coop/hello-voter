import React from 'react'
import { useHistory } from 'react-router-dom'
import { Help20, Events20, Wallet20 } from '@carbon/icons-react'
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
} from './pageStyles'

const { REACT_APP_PAYMENT_FEATURE } = process.env

export default ({ isApproved }) => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
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
          <HeaderNavigationStyled>
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
        </HeaderGlobalBar>
        </FlexContainer>
      </Header>
    </ThemeProvider>
  );
};
