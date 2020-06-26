import React from 'react'
import Menu from '../components/Menu'
import { LoginButton } from '../components/LoginButton'
import Breadcrumbs from '../components/Breadcrumbs'

export default {
  title: 'Components',
}

export const MenuComp = () => (
  <Menu />
)

export const LoginButtonComp = () => (
  <LoginButton type='FB' />
)

export const BreadcrumbsComp = () => (
  <Breadcrumbs 
    items={
      [{
        name: "Breadcrumb 1",
        route: "hellovoter-1"
      },
      {
        name: "Breadcrumb 2",
        route: "hellovoter-2"
      },
      {
        name: "Breadcrumb 3",
        route: "hellovoter-3"
      }]
    }
  />
)
