import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    
    flag:true
};
const productlistSlice = createSlice({
    name:"productlist",
    initialState,
    reducers:{
        
        flag(state,action){
            state.flag = action.payload
        }
    }
});
export const {flag} = productlistSlice.actions;
export default productlistSlice.reducer;
