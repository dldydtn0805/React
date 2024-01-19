import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Detail.css';

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [discount, setDiscount] = useState(true);
  let [숫자경고, 숫자경고변경] = useState(false);
  let [입력값, 입력값변경] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setDiscount(false);
    }, 2000);

    if (isNaN(입력값)) {
      숫자경고변경(true)
    }
    else {
      숫자경고변경(false)
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
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {count}
      {id in [0,1,2] ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`}
              width="100%"
              alt=""
            />
          </div>
          <div></div>
          {
            숫자경고 == true
            ? <div className="alert1">
              경고: 숫자만 입력하세요
              </div>
            : null
          }
          <div></div>
          <input className="input1"
            onChange={(e) => {
              입력값변경(e.target.value)
            }}
            />
       
            <div></div>
          <div className="col-md-6">
            <h4 className="pt-5">찾은 상품 : {filteredShoes[0].title}</h4>
            <p>{filteredShoes[0].content}</p>
            <p>{filteredShoes[0].price}원</p>

            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      ) : (
        <div>페이지가 이상해요</div>
      )}
    </div>
  );
}

export default Detail;
