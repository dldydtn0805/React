import './App.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage.js';
import MainPage from './pages/MainPage.js';
import {AboutPage, Member, Location} from './pages/AboutPage.js';
import {EventPage, Service, Coupon} from './pages/EventPage.js'

export default function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/detail" element={<DetailPage></DetailPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}>
          <Route path="member" element={<Member></Member>}></Route>
          <Route path="location" element={<Location></Location>}></Route>
        </Route>
        <Route path="/event" element={<EventPage></EventPage>}>
          <Route path="service" element={<Service></Service>}></Route>
          <Route path="coupon" element={<Coupon></Coupon>}></Route>
        </Route>
        <Route path="*" element={<div>ERROR 404</div>}></Route>
      </Routes>
    </div>
  );
}

function MyNavbar () {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">SHOESPPING</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>navigate('/')}>HOME</Nav.Link>
              <Nav.Link onClick={()=>navigate('/detail')}>DETAIL</Nav.Link>
              <Nav.Link onClick={()=>navigate('/about')}>ABOUT</Nav.Link>
              <Nav.Link onClick={()=>navigate('/event')}>EVENT</Nav.Link>
              
              {/* <NavDropdown title="THIRD" id="navbarDropdown">
                <NavDropdown.Item href="#action/3.1">FIRST</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  SECOND
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">THIRD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  SEPERATED
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
