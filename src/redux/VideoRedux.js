import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   videoinfo: null,
  loading:false,
  error:false
}

export const Videoslice = createSlice({
  name: 'video',
  initialState,
  reducers: {
     
  },
})
export const {  } = Videoslice.actions
export default Videoslice.reducer