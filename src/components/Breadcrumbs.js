import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";
import styled from 'styled-components'
import { spacing } from '../theme'

const BreadcrumbStyled = styled(Breadcrumb)`
  margin-top: ${ spacing[7] };
`

export default ({ items }) => (
  <BreadcrumbStyled noTrailingSlash>
    {items.length > 1 ? 
      items.map((item, i) => (
        <BreadcrumbItem isCurrentPage={i === items.length - 1} href={item.route}>
          {item.name}
        </BreadcrumbItem>
      ))
      :
      <BreadcrumbItem href={items[0].route}>
        {items[0].name}
      </BreadcrumbItem>
    }
  </BreadcrumbStyled>
)