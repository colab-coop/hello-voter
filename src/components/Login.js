import React from 'react'
import styled from "styled-components";
import { ResponsiveContainer } from './pageStyles'
import PageLayout from './PageLayout'
import { LoginButton } from './LoginButton'
import { TYPES } from '../variables'
import BlockPowerBlack from '../assets/logos/block-power_black.png'
import NewGeorgia from '../assets/logos/new-georgia.png'
import ColorOfChange from '../assets/logos/color-of-change.png'
import Bloc from '../assets/logos/bloc.png'

const { REACT_APP_LOGO } = process.env

function logoSrc(){
  return {
    'block-power': BlockPowerBlack,
    'new-georgia': NewGeorgia,
    'color-of-change':ColorOfChange,
    'bloc': Bloc,
  }[REACT_APP_LOGO];
}

const LogoImage = styled.img`
  width: 30%;
  margin: 0 auto;
  display: block;
`;

const LogoSubHeader = styled.p`
  text-align: center;
  padding: 8px 0;
`
export const LogIn = () => {
  return (
    <PageLayout>
    <ResponsiveContainer style={{margin: "0 auto"}}>
      <LogoImage alt="logo" src={logoSrc()}/>
      <LogoSubHeader>Voting Ambassador Program</LogoSubHeader>
      <LoginButton type={TYPES.FB} />
      <LoginButton type={TYPES.GOOGLE} />
    </ResponsiveContainer>
    </PageLayout>
  )
}
