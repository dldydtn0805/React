import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import response from '../data';

export default function MainPage () {
  return (
    <div>
      <div className="main-bg"></div>
      <BestSeller></BestSeller>
    </div>
  )
}

function BestSeller () {
  return (
    <Container>
      <Row>
        {response.map(({id, title, content, price})=>{
          return (
            <Col md={4}>
              <img alt="ERROR" src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} width="80%" />
              <h4>{title}</h4>
              <p>{price}</p>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}