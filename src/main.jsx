import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';

const client  = new ApolloClient({
  uri:"https://rickandmortyapi.com/graphql",
  cache:new InMemoryCache(),
    defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network', 
    },
  },
})

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
