import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../contexts/GlobalContext'

function MyApp({ Component, pageProps }: AppProps) {


  console.log(global)
  return (
    <ChakraProvider>
      <GlobalContextProvider >
        <Component {...pageProps} />
      </GlobalContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
