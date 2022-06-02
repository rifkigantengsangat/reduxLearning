import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id :"1",title : "Belajar Redux Toolkit" ,content : "Saya Sedang Belajar Redux Toolkit jangan Di Ganggu"},
    {id :"2",title : "slices....",content: "Slice Is The Best skrttt"}

]
const postSlices = createSlice({
    name:"post",
    initialState,
    reducers : {
  postAdded(state,action){
      state.push(action.payload)
  }
    }
})
export const selectAllPost = (state) => state.post
export const {postAdded} = postSlices.actions
export default postSlices.reducer
