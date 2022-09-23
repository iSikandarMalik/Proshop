import React, {useEffect, useState} from 'react'
import {Col, Row, Image, ListGroup, Card, Button} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import RatingComponent from '../../Components/Rating/rating.component'
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const {id} = useParams()

  console.log(product)
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])

  return (
    <>
      <Link
        to='/'
        className='btn btn-dark my-3'
      >
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingComponent
                rating={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail
