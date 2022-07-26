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
  },
})
export const { fetchStart,fetchSuccess,fetchFail } = Videoslice.actions
export default Videoslice.reducer