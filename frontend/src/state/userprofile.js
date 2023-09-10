import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data:"invalid"
};
const ProfileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{
        profile(state,action){     
            state.data=action.payload
        }
    }
});
export const {profile} = ProfileSlice.actions;
export default ProfileSlice.reducer;