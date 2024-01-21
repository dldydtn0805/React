import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
  name : 'user',
  initialState : { name : 'kim', age: 20},
  reducers : {
    //state는 기존 state를 뜻함
    changeAge(state, action){
      state.age += action.payload
    },
    changeName(state){
      state.name = 'park'
    },
  }
})
export let {changeAge, changeName} =  user.actions
export default user

