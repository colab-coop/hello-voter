import styled from "styled-components";
import { HeaderNavigation, HeaderMenuItem, SwitcherDivider } from 'carbon-components-react'
import { spacing, colors, breakpoints } from "../theme";
import BlockPower from '../assets/logos/block-power.png'
import NewGeorgia from '../assets/logos/new-georgia.png'
import ColorOfChange from '../assets/logos/color-of-change.png'

const { REACT_APP_HEADER, REACT_APP_LOGO } = process.env

// FIXME: Bring in logo thru .env file and host somewhere else instead?
let logo;
switch (REACT_APP_LOGO) {
  case 'block-power':
    logo = BlockPower;
    break;
  case 'new-georgia':
    logo = NewGeorgia;
    break;
  case 'color-of-change':
    logo = ColorOfChange;
    break;
}

export const theme = {
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

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: ${props => props.theme[REACT_APP_HEADER].bgColor};
  border-bottom: 1px solid ${ colors.gray[20] };
  z-index: 6000;
`;

export const Logo = styled.div`
  width: ${ spacing[10] };
  height: 5rem;
  margin-left: ${ spacing[3] };
  margin-right: ${ spacing[7] };
  background-image: url(${ logo });
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`

export const HeaderNavigationStyled = styled(HeaderNavigation)`
  &:before {
    background-color: ${props => props.theme[REACT_APP_HEADER].iconBgHover}
  }
`

export const HeaderMenuItemStyled = styled(HeaderMenuItem)`
  cursor: pointer;
  & > .bx--header__menu-item {
    color: ${props => props.theme[REACT_APP_HEADER].iconColor};
    &:hover {
      color: ${props => props.theme[REACT_APP_HEADER].iconColor};
      background-color: ${props => props.theme[REACT_APP_HEADER].iconBgHover}
    }
    &:focus {
      border-color: ${ colors.white };
      outline: none;
    }
  }
`

export const HeaderPanelStyled = styled.div`
  position: absolute;
  overflow: hidden;
  display: ${props => props.navOpen ? "block" : "none"};
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
`

export const SwitcherStyled = styled.nav`
  width: 100%;
  padding: ${ spacing[5] };
  border: 1px solid ${ colors.gray[20] };
  background-color: ${props => props.theme[REACT_APP_HEADER].bgColor};
  display: flex;
  flex-direction: column;
  max-width: ${breakpoints.md.width};
  margin-left: auto;
  margin-right: auto;
`

export const SwitcherItemStyled = styled.a`
  padding-top: ${ spacing[3] };
  padding-bottom: ${ spacing[3] };
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme[REACT_APP_HEADER].iconColor};
  cursor: pointer;
`

export const SwitcherDividerStyled = styled(SwitcherDivider)`
  width: 100%;
  margin: ${ spacing[3] } 0;
  background-color: ${props => props.theme[REACT_APP_HEADER].iconBgHover};
`

export const HeaderGlobalBar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
  height: 100%;
`;

export const HeaderGlobalAction = styled.button`
  display: ${props => props.mobileNav ? "none" : "inline-block"};
  @media (max-width: ${breakpoints.lg.width}) {
    display: ${props => props.mobileNav ? "inline-block" : "none"};
  }
  background: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  width: 5rem;
  height: 5rem;
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

export const FlexContainer = styled.div`
  max-width: ${breakpoints.lg.width};
  @media (max-width: ${breakpoints.lg.width}) {
    max-width: ${breakpoints.md.width};
  }
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  max-width: ${breakpoints.lg.width};
  @media (max-width: ${breakpoints.lg.width}) {
    max-width: ${breakpoints.md.width};
  }
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: ${ spacing[8] } ${ spacing[3] };
`;

export const TitleContainer = styled.div`
  margin-top: ${ props => props.hasHeader ? spacing[5] : spacing[9] };
  margin-bottom: ${ spacing[7] };
`

export const ResponsiveContainer = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.lg.width}) {
    width: 75%
  };
  @media (max-width: ${breakpoints.md.width}) {
    width: 100%
  };
`

export const GridThreeUp = styled.div`
  display: grid;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: ${ spacing[5]};
  grid-row-gap: ${ spacing[5]};
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${breakpoints.lg.width}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Footer = styled.div`
  position: absolute; 
  margin-top: ${ spacing[7] }; 
  bottom: 0; 
  width: 100%; 
  height: ${ spacing[8] };
`

export const FooterLink = styled.a`
  &:hover, &:link, &:visited, &:active {
    color: ${ colors.gray[60] };
    margin-left: ${ spacing[3] };
    margin-right: ${ spacing[3] };
    text-decoration: none;
  }
`