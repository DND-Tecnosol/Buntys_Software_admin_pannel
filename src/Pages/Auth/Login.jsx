import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Logo } from '../../assets'
import { authLogin } from '../../Store/Slice/Auth/authSlice'

export default function Login() {
  const dispatch = useDispatch()

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
                  <input type="email" class="form-control" placeholder="Email" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control" placeholder="Password" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="col-12">
                    <Button fullWidth variant='contained' onClick={() => dispatch(authLogin())} >Login</Button>
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
