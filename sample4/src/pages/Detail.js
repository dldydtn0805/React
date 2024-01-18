import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(props) {
  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [discount, setDiscount] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setDiscount(false);
    }, 2000);

    console.log(2);
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
      {(id == 1) | (id == 2) | (id == 3) ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
              width="100%"
              alt=""
            />
          </div>
          <input
            onChange={(e) => {
              if (isNaN(e.target.value)) {
                console.log("not");
                alert("그러지마");
              }
            }}
          />
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
