import { Link } from "react-router-dom"
import cart from "../assets/cart.png"
export const CartWidget = () => {
    return(
        <Link to="/cart">
    <img src={cart} alt="carrito" width={30} />
    <span>2</span>
    </Link>
    )
}