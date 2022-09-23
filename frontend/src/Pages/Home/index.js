import React, {useState, useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import axios from 'axios'
import ProductCardComponent from '../../Components/ProductCard/product.component'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
console.log(products)
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => {
          return (
            <Col
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            >
              <ProductCardComponent product={product}/>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Home
