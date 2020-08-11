import styled from "styled-components";
import { spacing, colors, breakpoints } from "../theme";
import BlockPower from '../assets/logos/block-power.png'
import NewGeorgia from '../assets/logos/new-georgia.png'

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
  height: 3rem;
  background-color: ${props => props.theme[REACT_APP_HEADER].bgColor};
  border-bottom: 1px solid ${ colors.gray[20] };
  z-index: 6000;
`;

export const Logo = styled.div`
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

export const HeaderGlobalBar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
  height: 100%;
`;

export const HeaderGlobalAction = styled.button`
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

export const FlexContainer = styled.div`
  max-width: ${breakpoints.lg.width};
  @media (max-width: ${breakpoints.lg.width}) {
    max-width: ${breakpoints.md.width};
  }
  width: 100%;
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
  margin-top: ${ spacing[8] };
  padding: ${ spacing[3] };
`;

export const TitleContainer = styled.div`
  margin-top: ${ props => props.hasHeader ? spacing[5] : spacing[7] };
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