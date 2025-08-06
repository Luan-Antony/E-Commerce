import { useParams } from "react-router-dom"
import { products } from "../../mocks"

import { Container } from "../../styles/GlobalStyle"
import { Div } from "./styles"

export const ProductDetail = () => {
    const { id } = useParams()

    const filteredProduct = products.find(product => product.id === Number(id))
    const similarProducts = products.filter(product => product.category === filteredProduct?.category).slice(0, 4)

    return (
        <>
            <Container>
                <Div className="product">
                    <div className="image">
                        <img src={filteredProduct?.image} alt={filteredProduct?.name} />
                    </div>

                    <div className="info">
                        <p>{filteredProduct?.name}</p>
                        <p>Cor: {filteredProduct?.color}</p>
                        <p>Tamanho: {filteredProduct?.size}</p>
                        <p>R$ {filteredProduct?.price},00</p>
                        <p>{filteredProduct?.description}</p>
                    </div>
                </Div>

                {/* <ul>
                {similarProducts.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul> */}

            </Container>    
        </>
    )
}