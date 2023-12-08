import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
    return(
        <Card border="info" style={{ width: '18rem' }} className='row mx-5'>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Link to={`/items/${item.id}`}><Button variant="primary">Comprar</Button></Link>
        </Card.Body>
      </Card>
    )
}
