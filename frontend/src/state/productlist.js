import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    
    flag:true
};
const productlistSlice = createSlice({
    name:"productlist",
    initialState,
    reducers:{
        // productlist(state,action){
        //     state.data1=action.payload;
        // },
        flag(state,action){
            state.flag = action.payload
        }
    }
});
export const {flag} = productlistSlice.actions;
export default productlistSlice.reducer;
