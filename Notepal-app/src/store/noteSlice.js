import { createSlice } from "@reduxjs/toolkit";


const noteSlice = createSlice({
  name:'notes',
  initialState:[],
  reducers:{
    addNote:(state,action)=>{
      return [action.payload,...state];
      
    },
    removeNote:(state,action)=>{
      return state.filter((item) => item.id !== action.payload);
    },
    addInitialNotes:(state,action)=>{
      return (state = action.payload);
    }
  }
})

export const noteSliceActions = noteSlice.actions;

export default noteSlice;