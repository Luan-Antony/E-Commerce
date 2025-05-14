import Logo from '/logo.png'
import Cart from '/icon-cart.png'
import { Content } from './styles'
import { Container } from '../../styles/GlobalStyle'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const NavLinks = [
    { name: 'Home', to: '/' },
    { name: 'Sobre', to: '/sobre' },
    { name: 'Produtos', to: '/produtos' },
    { name: 'Perguntas frequêntes', to: '/perguntas-frequentes' },
    { name: 'Fale conosco', to: '/fale-conosco' },
]

export const Header = () => {
    const { cart } = useContext(CartContext)

    return (
        <Content>
            <Container>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt='Logo da empresa Dev em Dobro' />
                    </Link>

                    <nav>
                        <ul>
                            {NavLinks.map((nav, index) => (
                                <li key={index}>
                                    <Link to={nav.to}>{nav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <Link to='/login'>Entrar ou cadastrar-se</Link>
                        <Link to='/cart'>
                            <img src={Cart} alt='Ícone do carrinho de compras' />
                            <p>{cart.length}</p>
                        </Link>
                    </div>
                </div>
            </Container>
        </Content>
    )
}
