import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data:"invalid"
};
const OrderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        order(state,action){     
            state.data=action.payload
        }
    }
});
export const {order} = OrderSlice.actions;
export default OrderSlice.reducer;