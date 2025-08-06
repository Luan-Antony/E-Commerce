import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Div } from "./style"

export const Cart = () => {
    const { cart, removeProductFromCart } = useContext(CartContext)

    return (
        <>
            <h1>Carrinho de compras</h1>
            <Div>
                <ul>
                    {cart.map(product => (
                        <li>
                            <img className="product" src={product.image} alt={product.name} />
                            {product.name}
                            <button onClick={() => removeProductFromCart(product)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                {cart.length === 0 && <>
                    <p>Não possui itens no carrinho</p>
                    <button className="button" ><a href="/">Adicionar ao carrinho</a></button>
                </>}
            </Div>
        </>
    )
}
