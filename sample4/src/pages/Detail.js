import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./Detail.css";

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [discount, setDiscount] = useState(true);
  let [숫자경고, 숫자경고변경] = useState(false);
  let [입력값, 입력값변경] = useState("");
  let [탭, 탭변경] = useState(2);

  useEffect(() => {
    let a = setTimeout(() => {
      setDiscount(false);
    }, 2000);

    if (isNaN(입력값)) {
      숫자경고변경(true);
    } else {
      숫자경고변경(false);
    }
    return () => {
      console.log(1);
      clearTimeout(a);
    };
  });
  const filteredShoes = props.shoes.filter((shoe) => shoe.id == id);
  return (
    <div className="container">
      {discount == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      {id in [0, 1, 2] ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                Number(id) + 1
              }.jpg`}
              width="100%"
              alt=""
            />
          </div>
          <div></div>
          {숫자경고 == true ? (
            <div className="alert1">경고: 숫자만 입력하세요</div>
          ) : null}
          <div></div>
          <input
            className="input1"
            onChange={(e) => {
              입력값변경(e.target.value);
            }}
          />

          <div></div>
          <div className="col-md-6">
            <h4 className="pt-5">찾은 상품 : {filteredShoes[0].title}</h4>
            <p>{filteredShoes[0].content}</p>
            <p>{filteredShoes[0].price}원</p>

            <button className="btn btn-danger">주문하기</button>
          </div>
          <Nav variant="tabs" defaultActiveKey="link1">
            <Nav.Item>
              <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
            </Nav.Item>
          </Nav>
          <TapContent 탭={탭}></TapContent>
        </div>
      ) : (
        <div>페이지가 이상해요</div>
      )}
    </div>
  );
}

function TapContent(props) {
  if (props.탭 == 0) {
    return <div>내용0</div>;
  }
  if (props.탭 == 1) {
    return <div>내용1</div>;
  }
  if (props.탭 == 2) {
    return <div>내용2</div>;
  }
}
export default Detail;
