import React from 'react'
import Menu from '../components/Menu'
import { LoginButton } from '../components/LoginButton'
import Breadcrumbs from '../components/Breadcrumbs'
import Notification from '../components/Notification'
import PageLayout from '../components/PageLayout'

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

export const PageLayoutLorem = () => (
  <PageLayout title="Log In" submitButtonTitle="Continue">
    Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.
    <br />
    <br />
    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    <br />
    <br />
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    <br />
    <br />
    Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
    <br />
    <br />
    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    <br />
    <br />
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    <br />
    <br />
    Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
    <br />
    <br />
    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    <br />
    <br />
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    <br />
    <br />
    Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
  </PageLayout>
)