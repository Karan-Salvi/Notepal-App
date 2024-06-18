import { createSlice } from "@reduxjs/toolkit";


const inputStatusSlice = createSlice({
  name:'inputStatus',
  initialState:false,
  reducers:{
    changeStatus:(state)=>{
      return (!state);
    }
  }
})

export const inputStatusSliceActions = inputStatusSlice.actions;

export default inputStatusSlice;