import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from './Components/Layout/Header/header.component'
import FooterComponent from './Components/Layout/Footer/footer.component'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'

const App = () => {
  return (
    <Router>
      <HeaderComponent/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/product/:id' element={<ProductDetail/>} />
          </Routes>
        </Container>
      </main>
      <FooterComponent/>
    </Router>
  );
}

export default App;
