import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, Navbar, Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Navbar.Collapse className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className="m-2">SUSINSA
          <input className="m-2"></input>
          </Navbar.Brand>
          <Nav className="m-2">
            <Nav.Link href="#mypage">마이페이지</Nav.Link>
            <Nav.Link href="#features">최근 본 상품</Nav.Link>
            <Nav.Link href="#pricing">좋아요</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
