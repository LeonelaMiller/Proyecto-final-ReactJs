import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { products } from '../data/products';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState (null);   
    const {id} = useParams();
    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout (() => {resolve(products)},2000)
        })
        mypromise.then((response) => {
                const findByid =response.find((item) => item.id === Number(id))
                setItem(findByid);
        })
    },[id])
    
     return(
    <Container className='mt-4'>
        {item ? <ItemDetail item={item} /> : <>Loading...</>}
    </Container>)
}