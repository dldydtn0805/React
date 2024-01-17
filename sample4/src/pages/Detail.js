import { useParams } from "react-router-dom";

function Detail(props) {
  let {id} = useParams();
  const filteredShoes = props.shoes.filter(shoe=>shoe.id == id)
  console.log(filteredShoes)
  return (
    <div className="container">
      {
        id == 1 | id == 2 | id == 3
        ?
        <div className="row">
          <div className="col-md-6">
            <img src= {`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">
              찾은 상품 : {filteredShoes[0].title}
            </h4>
            <p>
              {filteredShoes[0].content}
            </p>
            <p>
              {filteredShoes[0].price}원
            </p>
            
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
        :
        <div>페이지가 이상해요</div> 
      }
      
    </div> 
  )
}

export default Detail;