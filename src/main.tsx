import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App'
import theme from './theme'
import './index.css'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ client }>
      <ChakraProvider theme={ theme }>
        <ColorModeScript initialColorMode={ theme.config.initialColorMode } />
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
