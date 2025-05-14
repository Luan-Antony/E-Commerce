import { Content } from "./styles"
import { Link } from "react-router-dom"
import { NavLinks } from "../Header"

const navHelp = [
    { name: 'Trocas e devoluções', to: '/' },
    { name: 'Termos e condicoes', to: '/' },
    { name: 'Policia de privacidade', to: '/' },
    { name: 'Padrão de qualidade', to: '/' },
]
export const Footer = () => {
    return (
        <Content>
            <div className="information">
                <div>
                    <h3>Institucional</h3>
                    <ul>
                        {NavLinks.map((nav, index) => (
                            <li key={index}>
                                <Link to={nav.to}>{nav.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Ajuda</h3>
                    <ul>
                        {navHelp.map((nav, index) => (
                            <li key={index}>
                                <Link to={nav.to}>{nav.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Endereço</h3>
                    <ul>
                        <li>Rua Vale do Silício</li>
                        <li>São Francisco, Califórnia</li>
                        <li>Estados Unidos da América</li>
                        <li>(34) 1234-5678</li>
                        <li>vendas@ecommercedd.com</li>
                    </ul>
                </div>
            </div>

            <div className="copy">
                <p>@2024 - Todos os direitos reservados</p>
            </div>
        </Content>
    )
}