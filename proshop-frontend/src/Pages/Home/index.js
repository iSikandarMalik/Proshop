import React from 'react'
import {Col, Row} from "react-bootstrap";
import products from '../../products'
import ProductComponent from "../../Components/Product/product.component";

const Home = () => {
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
              <ProductComponent product={product}/>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Home
