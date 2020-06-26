import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";

export default ({ items }) => (
  <Breadcrumb noTrailingSlash>
    {items.length > 1 ? 
      items.map((item, i) => (
        <BreadcrumbItem isCurrentPage={i === items.length - 1} href={item.route}>
          {item.name}
        </BreadcrumbItem>
      ))
      :
      <BreadcrumbItem href={items[0].route}>
        Back
      </BreadcrumbItem>
    }
  </Breadcrumb>
)