import React from 'react'
import { InlineNotification } from 'carbon-components-react'

export default ({ title, subtitle, kind }) => {
  return (
    <InlineNotification
      hideCloseButton
      kind={kind}
      // statusIconDescription="describes the status icon"
      subtitle={subtitle}
      title={title}
    />
  )
}