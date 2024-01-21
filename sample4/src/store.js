import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]
})

let cartItems = createSlice({
  name : 'cartItems',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
  ],
  reducers : {
    countPlus(state, action){
      let finding = state.find((x)=>x.id == action.payload)
      finding.count ++ 
    },
    addItems(state, action){
      let item = state.find((x) => x.name == action.payload)
      if (item != null) {
        item.count ++
      }
      else {
        // Math.max() 메서드는 전달된 인수 중에서 가장 큰 값을 반환합니다. 배열의 요소를 전개 연산자(...)를 사용하여 전달하면 됩니다.
        state.push({id : Math.max(...state.map((x)=>{
          return x.id
        }))+1 , name: action.payload, count : 1})
      }
    }
  }
})

export let {countPlus, addItems} = cartItems.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cartItems : cartItems.reducer
  }
})