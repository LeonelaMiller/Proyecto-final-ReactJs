import { useContext } from "react"
import { ItemCounter } from "./ItemCounter"
import { CartContexts } from "../contexts/CartContexts"
export const ItemDetail= ({item}) => {
    const {onAdd} = useContext(CartContexts)
    const add = () => {
        onAdd(item)
    }
    return (
    <>
    <h1>{item.title}</h1>
    <img src={item.pictureUrl} width={'400'}/>
    <ItemCounter onAdd={add}/>
    </>
    )
}
