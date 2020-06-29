import React from 'react'
import Button from 'carbon-components-react/lib/components/Button'
import { useHistory } from 'react-router-dom'

export default ({ href, children }) => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }
  return (
    <Button
      onClick={() => redirect(href)}
    >
      {children}
    </Button>
  )
}
