import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currUser: null,
  loading:false,
  error:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     loginStart:(state)=>{
        state.loading=true;
     },
     loginSuccess:(state,action)=>{
        state.loading=false;
        state.currUser=action.payload;
        state.error=false;
     },
     loginFail:(state)=>{
        state.loading=false;
        state.currUser=null;
        state.error=true;
     },
     logout:(state)=>{
        state.loading=false;
        state.currUser=null;
        state.error=false;
     }
  },
})
export const { loginStart,loginSuccess,loginFail,logout } = userSlice.actions
export default userSlice.reducer