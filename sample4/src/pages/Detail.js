import { useParams } from "react-router-dom";

function Detail(props) {
  let {id} = useParams();
  console.log(props.shoes[0])
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
            <h4 className="pt-5">{props.shoes.map((x)=>{
              if (x.id == id-1) {
                return (JSON.stringify(x))
              }
              })}</h4>
            
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