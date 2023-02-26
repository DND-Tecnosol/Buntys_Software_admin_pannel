import { createSlice } from '@reduxjs/toolkit'
import apiRoutes,{appAxios} from '../../../Constants/apiRoutes';


const authStatus= localStorage.getItem('status');
const user= localStorage.getItem('user');
const store= localStorage.getItem('store');
const userRole= localStorage.getItem('userRole');
const userid= localStorage.getItem('userid');

const initialState = {
        authStatus:Number(authStatus),
        authUser:user || [],
        store:store || [],
        role:userRole || []
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
        authLogin:(state,action)=>{
            localStorage.setItem('status', 1)
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            localStorage.setItem('userid', action.payload.user.id)
            localStorage.setItem('store', action.payload.user.store_id)
            localStorage.setItem('userType', action.payload.user.role)
            localStorage.setItem('tocken', action.payload.tocken)
            localStorage.setItem('sessionid', action.payload.sessionid)
            state.authStatus=true
        },
        authLogout:(state,action)=>{
          appAxios.post(`${apiRoutes.logout}/`+userid)
          localStorage.removeItem('status')
          localStorage.removeItem('authStatus')
          localStorage.removeItem('user')
          localStorage.removeItem('userid')
          localStorage.removeItem('store')
          localStorage.removeItem('userType')
          localStorage.removeItem('tocken')
          localStorage.removeItem('sessionid')
          state.authStatus=false
        }
  }
});

export const {authLogin,authLogout} = authSlice.actions

export default authSlice.reducer