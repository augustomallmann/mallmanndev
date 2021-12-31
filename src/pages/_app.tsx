import { ChakraProvider, ScaleFade } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <ChakraProvider theme={theme} >
      <NavBar />
      <ScaleFade
        key={router.route}
        initialScale={0.9}
        in={true}
      >
        <Component {...pageProps} />
      </ScaleFade>
    </ChakraProvider>
  )
}

export default MyApp


