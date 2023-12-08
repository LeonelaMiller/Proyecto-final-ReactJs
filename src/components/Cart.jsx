import { Container } from "react-bootstrap"
import { useContext } from "react"
import { CartContexts } from "../contexts/CartContexts"
export const Cart = () => {
    const {clear, items} = useContext(CartContexts)
    
    return(
    <Container className="mt-4">
        <h1>Tus compras</h1>
        {items?.map ((item) => (<div key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <img src={item.pictureUrl}  />
        </div> ))}
        <button onClick={clear}>Vaciar carrito</button>
    </Container>)
}