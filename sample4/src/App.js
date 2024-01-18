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
  let [shoes] = useState(data)
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Navbar.Collapse className="d-flex justify-content-between">
          <Navbar.Brand href="/" className="m-2">SUSINSA
          <input className="m-2"></input>
          </Navbar.Brand>
          <Nav className="m-2">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} >상세 페이지 </Nav.Link>
            <Nav.Link href="#pricing">좋아요</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}></Route>
        </Route>
        <Route path="/about/member" element={<About />}/>
        <Route path="/about/location" element={<About />}/>
        <Route path="*" element={<div>없는페이지요</div>}></Route>
      </Routes>
    </div>
  );
}


function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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
