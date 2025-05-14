import { useParams } from "react-router-dom"
import { products } from "../../mocks"

export const ProductDetail = () => {
    const { id } = useParams()

    const filteredProduct = products.find(product => product.id === Number(id))
    const similarProducts = products.filter(product => product.category === filteredProduct?.category).slice(0, 4)

    return (
        <>
            <p>{filteredProduct?.name}</p>
            <img src={filteredProduct?.image} alt={filteredProduct?.name} />

            <p>Produtos semelhantes</p>

            <ul>
                {similarProducts.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
        </>
    )
}