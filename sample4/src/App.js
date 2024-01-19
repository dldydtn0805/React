import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import 작명 from "./img/bg.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import axios from "axios";
function App() {
  let [shoes, 슈즈변경] = useState(data);
  let navigate = useNavigate();
  let [버튼클릭수, 버튼클릭수변경] = useState(0);
  let [로딩상태, 로딩상태변경] = useState(false)
  return (
    <div className="App">
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Navbar.Collapse className="d-flex justify-content-between">
          <Navbar.Brand href="/" className="m-2">
            SUSINSA
            <input className="m-2"></input>
          </Navbar.Brand>
          <Nav className="m-2">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              상세 페이지{" "}
            </Nav.Link>
            <Nav.Link href="#pricing">좋아요</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} 버튼클릭수변경={버튼클릭수변경} 버튼클릭수={버튼클릭수} sh />}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
        <Route path="/event" element={<Event></Event>}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}></Route>
        </Route>
        <Route path="/about/member" element={<About />} />
        <Route path="/about/location" element={<About />} />
        <Route path="*" element={<div>없는페이지요</div>}></Route>
      </Routes>
      {
        로딩상태 == true
        ? <div className="로딩중">로딩중</div>
        : null
      }

    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Main(props) {
  return (
    <div>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.shoes.map((a, i) => {
            return <Card i={i} shoes={a}></Card>;
          })}
        </Row>
      </Container>
      <button
        onClick={() => {
          버튼클릭수변경(버튼클릭수 + 1); 
          if (버튼클릭수 == 1) {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((결과) => {
                let copy = [...shoes, ...결과.data];
                console.log(copy);
                슈즈변경(copy);
                로딩상태변경(false)
              })
              .catch(() => {
                console.log("버튼클릭 1차 실패함ㅅㄱ");
                로딩상태변경(false)
              });
          } else if (버튼클릭수 == 2) {
            axios
              .get("https://codingapple1.github.io/shop/data3.json")
              .then((결과) => {
                let copy = [...shoes, ...결과.data];
                console.log(copy);
                슈즈변경(copy);
                로딩상태변경(false)
              })
              .catch(() => {
                console.log("버튼클릭 2차 실패함ㅅㄱ");
                로딩상태변경(false)
              });
          } else {
            console.log("상품 더 없음");
            로딩상태변경(false)
          }
        }}
      >
        아무버튼
      </button>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="80%"
      ></img>
      <h4>{props.shoes.title}</h4>
      <h4>{props.shoes.price}</h4>
    </Col>
  );
}
export default App;
