import { createSlice } from "@reduxjs/toolkit";

const initialStateValue= "";
export const userSlice=createSlice({

    name:"theme",
    initialState:{ value:initialStateValue},
    reducers:{
        changeCol:(state,action)=>{
            state.value=action.payload;
        },
       
    },
})
export const {changeCol} = userSlice.actions;
export default userSlice.reducer;