import { AppProps } from 'next/app'
import ThemeProvider from '../providers/ThemeProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
