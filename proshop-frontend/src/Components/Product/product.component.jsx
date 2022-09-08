import React from 'react'
import {Card} from "react-bootstrap";
import RatingComponent from '../Rating/rating.component'

const ProductComponent = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`product/${product.id}`}>
        <Card.Img src={product.image} variant='top'/>
      </a>
      <Card.Body>
        <a href={`product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <RatingComponent
            rating={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductComponent
