import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Nav } from "react-bootstrap";
import "./Detail.css";
import { Context1 } from "./../App.js";
import { addItems } from './../store.js'
import { useDispatch, useSelector } from "react-redux";

function Detail(props) {
  let cartItems = useSelector((state)=> state.cartItems)
  let dispatch = useDispatch()
  let { 재고, shoes } = useContext(Context1);
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [discount, setDiscount] = useState(true);
  let [숫자경고, 숫자경고변경] = useState(false);
  let [입력값, 입력값변경] = useState("");
  let [탭, 탭변경] = useState(2);
  let [디테일페이드, 디테일페이드변경] = useState("");

  useEffect(() => {
    let b = setTimeout(() => 디테일페이드변경("end"), 100);
    return () => {
      clearTimeout(b);
      디테일페이드변경("");
    };
  }, []);
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
      clearTimeout(a);
    };
  }, [입력값]);
  const filteredShoes = props.shoes.filter((shoe) => shoe.id == id);
  return (
    <div className={`container start ${디테일페이드}`}>
      {
        cartItems.map((cartItem)=>{
          return (
            <div>
              <p>이름 : {cartItem.name}</p>
              <p>개수 : {cartItem.count}</p>
              <p>아이디 : {cartItem.id}</p>
            </div>
          )
        })
      }
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
            <button className="btn btn-danger" onClick={()=>{
              dispatch(addItems(filteredShoes[0].title))
              console.log('장바구니에 추가함')
            }}>주문하기</button>
          </div>
          <Nav variant="tabs" defaultActiveKey="link1">
            <Nav.Item>
              <Nav.Link
                eventKey="link0"
                onClick={() => {
                  탭변경(0);
                }}
              >
                버튼0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link1"
                onClick={() => {
                  탭변경(1);
                }}
              >
                버튼1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link2"
                onClick={() => {
                  탭변경(2);
                }}
              >
                버튼2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TapContent shoes={props.shoes} 탭={탭}></TapContent>
        </div>
      ) : (
        <div>페이지가 이상해요</div>
      )}
    </div>
  );
}

function TapContent({ 탭, shoes }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);
  useEffect(() => {
    //fade라는 state를 end로 바꿔주세요~
    let a = setTimeout(() => {
      setFade("end");
    }, 100); // 타이머이므로 클린업하고싶으면 변수에 할당하고
    return () => {
      clearTimeout(a); // 타이머 삭제도 됨
      setFade("");
    }; // clean up function으로 뗏다 붙여주기
  }, [탭]);
  return (
    <div className={`start ${fade} 빈칸`}>
      {재고}
      {
        [<div>내용0{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][
          탭
        ]
      }
    </div>
  );
}
export default Detail;
