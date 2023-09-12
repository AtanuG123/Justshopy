import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState= {
   data :[],
   subprice:0,
   copyprice:0,
   order:[],
   copydata:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart(state, action) {
            const existingIndex = state.data.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (existingIndex >= 0) {
              state.data[existingIndex] = {
                ...state.data[existingIndex],
                qty: state.data[existingIndex].qty + 1,
              };
              toast.success("Increased product quantity", {
                position: "top-right",
                autoClose:2000
              });
            } else {
              let tempProductItem = { ...action.payload, qty: 1 };
              state.data.push(tempProductItem);
              toast.success("Product added to cart", {
                position: "top-right",
                autoClose:2000
              });
            }
            state.copydata= state.data
            state.subprice=state.subprice+ action.payload.price
            state.copyprice= state.subprice
          },
          reduceCart(state, action) {
            const itemIndex = state.data.findIndex(
              (item) => item.id === action.payload.id
              );
              
              if (state.data[itemIndex].qty > 1) {
                state.data[itemIndex].qty -= 1;
                
                toast.info("Decreased product quantity", {
                  position: "top-right",
                  autoClose:2000
                });
              } else if (state.data[itemIndex].qty === 1) {
                const nextdata = state.data.filter(
                  (item) => item.id !== action.payload.id
                  );
                  state.data = nextdata;
                  
                  toast.error("Product removed from cart", {
                    position: "top-right",
                    autoClose:2000
                  });
                }
                state.copydata = state.data
                state.subprice=state.subprice- action.payload.price;
                state.copyprice= state.subprice
        },
        remove(state,action){
            state.data =[];
            state.subprice=0;
        },
        ordercreate(state,action){
            state.order.push(action.payload)
            // console.log(state.order)
        }
    
        
    }
});
export const {addtocart,reduceCart,remove,ordercreate} = cartSlice.actions;
export default cartSlice.reducer;