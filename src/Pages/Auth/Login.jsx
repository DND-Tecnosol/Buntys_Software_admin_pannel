import React ,{useState} from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Logo } from '../../assets'
import { authLogin } from '../../Store/Slice/Auth/authSlice'
// import axios from 'axios'
import apiRoutes,{appAxios as axios} from '../../Constants/apiRoutes'

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const logdin=()=>{
    axios.post(apiRoutes.login,{email:userName,password:password}).then(e=>{
      if (e.data.code==200) {
        console.log(e.data);
        dispatch(authLogin(e.data))
      }else{
        alert(e.data.msg);
      }
    })
  }
    // dispatch(authLogin())
  return (
    <>
      <div className="hold-transition login-page">
        <div class="login-box">
          {/* <!-- /.login-logo --> */}
          <div class="card card-outline card-primary">
            <div class="card-header text-center border-0">
            <img src={Logo} height={'100px'} width="150px" style={{ opacity: 0.8 }} />
            </div>
            <div class="card-body">
              <p class="login-box-msg">Sign in to start your session</p>
              <form action="../../index3.html" method="post">
                <div class="input-group mb-3">
                  <input type="email" onChange={(e)=>setUserName(e.target.value)} class="form-control" placeholder="Email" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type={show ? "text" :"password"} class="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                  <div class="input-group-append">
                    <div class="input-group-text" onClick={()=>setShow(!show)} role="button">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="col-12">
                    <Button fullWidth variant='contained' onClick={() => logdin()} >Login</Button>
                  </div>
                </div>
              </form>
              <p class="mb-1">
                <a href="forgot-password.html" className='text-muted' >I forgot my password</a>
              </p>
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
      </div>


    </>
  )
}
