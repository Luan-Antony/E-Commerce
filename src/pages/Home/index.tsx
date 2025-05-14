import { CardProduct } from "../../components/CardProduct"
import { products } from "../../mocks"
import { Container } from "../../styles/GlobalStyle"
import { Content } from "./styles"

export const Home = () => {
    return (
        <Container>
            <Content>
                <h1>Produtos</h1>
                <CardProduct products={products} />
            </Content>
        </Container>
    )
}
