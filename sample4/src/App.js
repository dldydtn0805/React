import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, createContext } from "react";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import 작명 from "./img/bg.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import axios from "axios";

export let Context1 = createContext();

function App() {
  let [shoes, 슈즈변경] = useState(data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  let navigate = useNavigate();
  let [버튼클릭수, 버튼클릭수변경] = useState(0);
  let [로딩상태, 로딩상태변경] = useState(false);
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
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return <Card i={i} shoes={a}></Card>;
                  })}
                </Row>
              </Container>
              {로딩상태 == true ? <div>로딩중</div> : null}
              <button
                onClick={() => {
                  버튼클릭수변경(버튼클릭수 + 1);
                  로딩상태변경(true);
                  if (버튼클릭수 == 0) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        let copy = [...shoes, ...결과.data];
                        console.log(copy);
                        슈즈변경(copy);
                        setTimeout(() => {
                          로딩상태변경(false);
                        }, 500);
                      })
                      .catch(() => {
                        console.log("버튼클릭 1차 실패함ㅅㄱ");
                        setTimeout(() => {
                          로딩상태변경(false);
                        }, 500);
                      });
                  } else if (버튼클릭수 == 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((결과) => {
                        let copy = [...shoes, ...결과.data];
                        console.log(copy);
                        슈즈변경(copy);
                        setTimeout(() => {
                          로딩상태변경(false);
                        }, 500);
                      })
                      .catch(() => {
                        console.log("버튼클릭 2차 실패함ㅅㄱ");
                        setTimeout(() => {
                          로딩상태변경(false);
                        }, 500);
                      });
                  } else {
                    console.log("상품 더 없음");
                    setTimeout(() => {
                      로딩상태변경(false);
                    }, 500);
                  }
                }}
              >
                {버튼클릭수 < 3 ? <span>더보기임</span> : <span>끝임ㅅㄱ</span>}
              </button>
            </div>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
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
