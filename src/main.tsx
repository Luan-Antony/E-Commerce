import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </StrictMode>
)

// Client Side Rendering (CSR)
// - Renderização do lado do cliente.
// - As páginas de uma aplicação React são contruídas através de JavaScript
// A gente precisa enviar um arquivo JavaScript pro navegador do usuário, o navegador do usuário vai baixar esse arquivo e vai executar ele, no momento que o código for executado, as páginas serão construídas DINAMICAMENTE via JavaScript.
// createElement('h1', null, 'Hello World!')

// Client Side Rendering

// Server Side Rendering
// Static Site Generation
// Incremental Site Regeneration
