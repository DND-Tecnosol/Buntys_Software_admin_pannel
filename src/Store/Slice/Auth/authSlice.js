import { createSlice } from '@reduxjs/toolkit'

const authStatus= localStorage.getItem('status');
const user= localStorage.getItem('user');
const store= localStorage.getItem('store');
const userRole= localStorage.getItem('userRole');

const initialState = {
        authStatus:authStatus || false,
        authUser:user || [],
        store:store || [],
        role:userRole || []
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
        authLogin:(state,action)=>{
            localStorage.setItem('status', true)
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            localStorage.setItem('store', action.payload.user.store)
            localStorage.setItem('userRole', action.payload.user.roletype)
            state.authStatus=true
        },
        authLogout:(state,action)=>{
            localStorage.setItem('status', false)
            state.authStatus=false
        }
  }
});

export const {authLogin,authLogout} = authSlice.actions

export default authSlice.reducer