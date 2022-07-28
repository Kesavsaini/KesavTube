import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  videodata: null,
  loading:false,
  error:false
}

export const Videoslice = createSlice({
  name: 'video',
  initialState,
  reducers: {
     fetchStart:(state)=>{
       state.loading=true;
     },
     fetchSuccess:(state,action)=>{
      state.videodata=action.payload;
      state.loading=false;
      state.error=false;
    },
    fetchFail:(state)=>{
      state.loading=false;
      state.videodata=null;
      state.error=true;
    }
    ,
    like:(state,action)=>{
     if(!state.videodata.likes.includes(action.payload)){
      state.videodata.likes.push(action.payload);
      const idx=state.videodata.dislikes.indexOf(action.payload);
      if(idx>-1){
        state.videodata.dislikes.splice(idx,1);
      }
     }
   },
   dislike:(state,action)=>{
    if(!state.videodata.dislikes.includes(action.payload)){
     state.videodata.dislikes.push(action.payload);
     const idx=state.videodata.likes.indexOf(action.payload);
     if(idx>-1){
       state.videodata.likes.splice(idx,1);
     }
    }
  }
  }   
})
export const { fetchStart,fetchSuccess,fetchFail,like,dislike} = Videoslice.actions
export default Videoslice.reducer