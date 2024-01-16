import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Nav, Navbar, Container, Row, Col} from 'react-bootstrap';
import 작명 from './img/bg.png'
import data from './data.js'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail.js'
function App() {

  
  return (
    <div className="App">
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Navbar.Collapse className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="m-2">SUSINSA
          <input className="m-2"></input>
          </Navbar.Brand>
          <Nav className="m-2">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세 페이지 </Nav.Link>
            <Nav.Link href="#pricing">좋아요</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

function Main() {
  let [shoes] = useState(data)
  
  return (
    <div>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {
            shoes.map((a, i) => {
              return(
                <Card i = {i} shoes = {shoes[i]}></Card>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

function Card(props) {
  return (
      <Col sm>
          <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="80%"></img>
          <h4>{props.shoes.title}</h4>
          <h4>{props.shoes.price}</h4>
      </Col>
  )
}
export default App;
