import Navbar from '../components/navbar'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
  <div>
  <ChakraProvider>
  <Navbar/>
  <Component {...pageProps} />
 </ChakraProvider>
  </div>
  )
}
