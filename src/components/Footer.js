import React from 'react'
import { colors } from "../theme";
import { 
  Footer, 
  FlexContainer, 
  FooterLink
} from './pageStyles'

export default ({ isApproved }) => {
  return (
    <Footer>
      <FlexContainer style={{borderTop: `1px solid ${ colors.gray[20] }`}}>
        <FooterLink href="#/terms">Terms of Service</FooterLink>
        ○
        <FooterLink href="#/privacy">Privacy Statement</FooterLink>
      </FlexContainer>
    </Footer>
  );
};
