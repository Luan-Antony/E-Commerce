import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

import EmptyCart from '/empty-cart.png'

export const Cart = () => {
    const { cart, removeProductFromCart } = useContext(CartContext)

    return (
        <>
        <ul>
            {cart.map(product => (
                <li>
                    <img src={product.image} alt={product.name} />
                    {product.name}
                    <button onClick={() => removeProductFromCart(product)}>
                        X
                    </button>
                </li>
            ))}
        </ul>
        {cart.length === 0 && <>
                <p>Não possui itens no carrinho</p>
                <img src={EmptyCart}/>
        
        </>}
        </>
    )
}
