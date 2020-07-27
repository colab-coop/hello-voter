import React from 'react'
import { useHistory } from 'react-router-dom'
import { Help20, Wallet20 } from '@carbon/icons-react'
import styled, { ThemeProvider } from 'styled-components'
import BlockPower from '../assets/logos/block-power.png'
import NewGeorgia from '../assets/logos/new-georgia.png'
import { spacing, colors } from '../theme'

const { REACT_APP_HEADER, REACT_APP_LOGO } = process.env

const theme = {
  dark: {
    bgColor: colors.gray[100],
    iconColor: colors.white,
    iconBgHover: colors.gray[80]
  },
  light: {
    bgColor: colors.white,
    iconColor: colors.gray[100],
    iconBgHover: colors.gray[20]
  }
};

// FIXME: Bring in logo thru .env file and host somewhere else instead?
let logo;
switch (REACT_APP_LOGO) {
  case 'block-power':
    logo = BlockPower;
    break;
  case 'new-georgia':
    logo = NewGeorgia;
    break;
}

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: ${props => props.theme[REACT_APP_HEADER].bgColor};
  border-bottom: 1px solid ${ colors.gray[20] };
  z-index: 6000;
`;

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

const HeaderGlobalBar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
  height: 100%;
`;

const HeaderGlobalAction = styled.button`
  display: inline-block;
  background: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  width: 3rem;
  height: 3rem;
  border: 0.125rem solid transparent;
  border-bottom: 1px solid ${ colors.gray[20] };
  transition: background-color 0.11s, border-color 0.11s;
  & > svg {
    fill: ${props => props.theme[REACT_APP_HEADER].iconColor}
  }
  &:hover {
    background-color: ${props => props.theme[REACT_APP_HEADER].iconBgHover}
  }
  &:focus {
    border-color: ${ colors.white };
    outline: none;
  }
`;

export default () => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header aria-label="Hello Voter">
        <Logo
          onClick={() => {
            redirect("/");
          }}
        />
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
            aria-label="Payments"
            type="button"
            onClick={() => {
              redirect("/payments");
            }}
          >
            <Wallet20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </ThemeProvider>
  );
};
