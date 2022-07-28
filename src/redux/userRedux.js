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
     },
     subscription:(state,action)=>{
       if(!state.currUser.subscribedUsers.includes(action.payload)){
         state.currUser.subscribedUsers.push(action.payload);
       }else{
        const idx=state.currUser.subscribedUsers.indexOf(action.payload);
        if(idx>-1){
         state.currUser.subscribedUsers.splice(idx,1);
        }
       }
     }
  },
})
export const { loginStart,loginSuccess,loginFail,logout,subscription} = userSlice.actions
export default userSlice.reducer