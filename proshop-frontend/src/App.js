import React from 'react'
import {Container} from 'react-bootstrap'
import HeaderComponent from './Components/Layout/Header/header.component'
import FooterComponent from './Components/Layout/Footer/footer.component'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <HeaderComponent/>
      <main className='py-3'>
        <Container>
          <Home/>
        </Container>
      </main>
      <FooterComponent/>
    </>
  );
}

export default App;
