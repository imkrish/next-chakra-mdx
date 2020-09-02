import React, { PropsWithChildren } from 'react'
import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  theme as chakraTheme,
} from '@chakra-ui/core'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

const theme = {
  ...chakraTheme,
}

const cache = createCache()

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <CacheProvider value={cache}>
      <ChakraThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </ChakraThemeProvider>
    </CacheProvider>
  )
}
