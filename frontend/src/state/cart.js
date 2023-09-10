import { createSlice } from "@reduxjs/toolkit";

const initialState= {
   data :[],
   subprice:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart(state,action){
            state.data.push(action.payload)
        
        },
        // updatecart(state,action){
        
        // },
        remove(state,action){
            state.data =[];
            state.subprice=0;
        },
        subtotal(state,action){
            state.subprice=state.subprice+ action.payload
        }
    
        
    }
});
export const {addtocart,remove,subtotal} = cartSlice.actions;
export default cartSlice.reducer;