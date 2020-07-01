import React from 'react'
import Menu from '../components/Menu'
import { LoginButton } from '../components/LoginButton'
import Breadcrumbs from '../components/Breadcrumbs'
import Notification from '../components/Notification'

export default {
  title: 'Components',
}

export const MenuComp = () => (
  <Menu />
)

export const NotificationComp = () => (
  <>
    <Notification
      kind="error"
      title="Notification ="
      subtitle="error"
    />
    <Notification
      kind="info"
      title="Notification ="
      subtitle="info"
    />
    <Notification
      kind="info-square"
      title="Notification ="
      subtitle="info-square"
    />
    <Notification
      kind="success"
      title="Notification ="
      subtitle="success"
    />
    <Notification
      kind="warning"
      title="Notification ="
      subtitle="warning"
    />
    <Notification
      kind="warning-alt"
      title="Notification ="
      subtitle="warning-alt"
    />
  </>
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
