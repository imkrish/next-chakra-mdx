import React, { PropsWithChildren } from 'react'
import MDX from '@mdx-js/runtime'

const components = {
  h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
  Demo: () => <h1>This is a demo component</h1>,
}

export function MDXProvider({ children }: PropsWithChildren<{}>) {
  return <MDX components={components}>{children}</MDX>
}
