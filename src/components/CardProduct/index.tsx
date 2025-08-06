import { ProductData } from "../../interfaces"
import { Container } from "./styles"
import { Link } from "react-router-dom"

import { useContext } from 'react'
import { CartContext } from "../../contexts/CartContext"

interface CardProductProps {
    products: ProductData[]
}

export const CardProduct = ({ products }: CardProductProps) => {
    const { addProductIntoCart } = useContext(CartContext)
    

    return (
        <>
            {products.map(product => (
                <Container key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                    <div>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>

                        <div>
                            <p>Cor: {product.color}</p>
                            {product.size && <p>Tamanho: {product.size}</p>}
                            {!product.size && <p>Tamanho: único</p>}
                        </div>

                        <p>R$ {product.price},00</p>
                        <button type='button' onClick={() => addProductIntoCart(product)}>Adicionar ao carrinho</button>
                    </div>
                </Container>
            ))}
        </>
    )
}
