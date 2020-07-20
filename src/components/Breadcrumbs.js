import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";
import styled from 'styled-components'
import { spacing } from '../theme'

const BreadcrumbStyled = styled(Breadcrumb)`
  margin-top: ${ spacing[7] };
`

const BreadcrumbItemStyled = styled(BreadcrumbItem)`
  display: inline;
`

export default ({ items }) => (
  <BreadcrumbStyled noTrailingSlash>
    {items.length > 1 ?
      items.map((item, i) => (
        <BreadcrumbItemStyled key={i} isCurrentPage={i === items.length - 1} href={item.route}>
          {item.name}
        </BreadcrumbItemStyled>
      ))
      :
      // FIXME: Back button doesnt work, so hiding for now
      // <BreadcrumbItemStyled href={items[0].route}>
      //   {items[0].name}
      // </BreadcrumbItemStyled>
      null
    }
  </BreadcrumbStyled>
)
