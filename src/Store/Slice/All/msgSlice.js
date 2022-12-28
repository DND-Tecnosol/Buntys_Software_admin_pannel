import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    msg:[]
}

const msgSlice = createSlice({
  name: 'msg',
  initialState,
  reducers: {
    addmsg:(state,actions)=>{
        state.msg=[actions.payload]
    }
  }
});

export const {addmsg} = msgSlice.actions

export default msgSlice.reducer