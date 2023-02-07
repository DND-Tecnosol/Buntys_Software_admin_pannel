import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Logo } from '../../assets'
import { authLogin } from '../../Store/Slice/Auth/authSlice'
// import axios from 'axios'
import apiRoutes, { appAxios as axios } from '../../Constants/apiRoutes'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function Resetpassword() {
  const [userName, setUserName] = useState("");

  const [otp, setOtp] = useState("");

  const [newpass1, setNewpass1] = useState("");
  const [newpass2, setNewpass2] = useState("");

  const [token, setSToken] = useState("");

  const [states, setStates] = useState("email");

  const [show, setShow] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const tosty = (e) => toast(e)
  const resetReq = () => {
    axios.post(apiRoutes.resetpasswordreq, { email: userName }).then(e => {
      if (e.data.code == 1) {
        tosty(e.data.msg)
        setStates("otp")
      } else {
        // console.log(e.data);
      }
    })
  }

  const otpSubmit = () => {
    axios.post(apiRoutes.otpCheck, { email: userName, otp: otp }).then(e => {
      if (e.data.code == 1) {
        setStates("reset")
        setSToken(e.data.token)
        tosty(e.data.msg)
      } else {
        tosty(e.data.msg)
      }
    })
  }

  const resetPassword = () => {
    if (!(newpass1 == newpass2)) {
      return () => setError(true)
    }
    axios.post(apiRoutes.resetpassword, { email: userName, password: newpass1, token: token }).then(e => {
      if (e.data.code == 1) {
        tosty(e.data.msg)
        navigate("/")
        // dispatch(authLogin(e.data))
      } else {
        tosty(e.data.msg)
      }
    })
  }
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

              {(states == "email") ? (<Email submit={resetReq} onChange={(e) => setUserName(e.target.value)} />) :
                (states == "otp") ? (<OtpCheck submit={otpSubmit} onChange={(e) => setOtp(e.target.value)} />) :
                  (states == "reset") ? (<ResetPasswordCompo submit={resetPassword} show={show} setshow={setShow} pass1={(e) => setNewpass1(e.target.value)} pass2={(e) => setNewpass2(e.target.value)} />) :
                    <></>}
            </div>
            {/* <!-- /.card-body --> */}
          </div>
          <ToastContainer />
          {/* <!-- /.card --> */}
        </div>
      </div>
    </>
  )
}

// find youser email

const Email = ({ submit, onChange }) => {

  return (
    <>
      <p class="login-box-msg">Pls Provide Your Official email id Or Mobaile No.</p>
      <form action="../../index3.html" method="post">
        <div class="input-group mb-3">
          <input type="email" onChange={(e) => onChange(e)} class="form-control error" placeholder="Email Ya Phone No." />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <Button fullWidth variant='contained' onClick={() => submit()} >Submit</Button>
          </div>
        </div>
      </form>
      <p class="mb-1">
        <Link to="/" className='text-muted' >Back To Login</Link>
      </p>
    </>
  )
}

// check otp

const OtpCheck = ({ submit, onChange }) => {

  return (
    <>
      <p class="login-box-msg">We Are Send Otp In Your Email Id</p>
      <form action="../../index3.html" method="post">
        <div class="input-group mb-3">
          <input type="email" onChange={e => onChange(e)} class="form-control" placeholder="O T P" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <Button fullWidth variant='contained' onClick={() => submit()} >Submit</Button>
          </div>
        </div>
      </form>
      <p class="mb-1">
        <Link to="/" className='text-muted' >Back To Login</Link>
      </p>
    </>
  )
}

// rest password
const ResetPasswordCompo = ({ submit, pass1, pass2, show, setshow, error }) => {

  return (
    <>
      <form action="../../index3.html" method="post">
        <div class="input-group mb-3">
          <input type={show ? "text" : "password"} onChange={e => pass1(e)} class={"form-control error"} placeholder="New Password" />
          <div class="input-group-append">
            <div class="input-group-text" onClick={() => setshow(!show)} role="button">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type={show ? "text" : "password"} onChange={e => pass2(e)} class="form-control" placeholder="Password" />
          <div class="input-group-append">
            <div class="input-group-text" onClick={() => setshow(!show)} role="button">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <Button fullWidth variant='contained' onClick={() => submit()} >Submit</Button>
          </div>
        </div>
      </form>
      <p class="mb-1">
        <Link to="/" className='text-muted' >Back To Login</Link>
      </p>
    </>
  )
}
