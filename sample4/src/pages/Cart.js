import {Table} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from './../store/userSlice.js'
import { countPlus } from './../store'

function Cart () {
  let cartItems = useSelector((state)=> state.cartItems)
  let user = useSelector((state)=> state.user)
  let dispatch = useDispatch()
  return (
    <div>
      {user.age}세 {user.name}의 장바구니 
      <br></br>
      <button onClick={()=>{dispatch(changeAge(100))}}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((cartItem, i)=> {return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{cartItem.name}</td>
                <td>{cartItem.count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(countPlus(cartItem.id))
                  }}>+</button>
                </td>
              </tr>  
            )}
            )
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart