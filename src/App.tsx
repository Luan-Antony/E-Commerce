import { AppRoutes } from "./pages/routes"
import { GlobalStyle } from "./styles/GlobalStyle"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

// Rotas
// - É um caminho/direção que vai levar a gente para algum lugar.
// - No conceito do desenvolvimento web, seria navegador pra uma outra página.

// Rotas dinâmicas
// - Dinâmico - "adaptável", se molda conforme a gente precisa
// - A gente vai ter uma estrutura pronta, e somente o conteúdo muda
