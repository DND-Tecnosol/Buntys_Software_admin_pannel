import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import { Bar, Pie } from "react-chartjs-2";
import { ChartCard } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, IconButton } from "@mui/material";
import { authLogout } from "../Store/Slice/Auth/authSlice";
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
// import { fetchServices } from "../Store/Slice/All/serviceSlice";
import { red } from '@mui/material/colors';
import { FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material'
import apiRoutes, { appAxios as axios } from "../Constants/apiRoutes";
import Lottie from 'react-lottie';
import * as animationData from '../assets/loader.json'

import { Box, Stack } from "@mui/system";
const reds = red[500];
export default function Dashbord({ header }) {
  const [model, setModel] = useState(false);
  const { invoice: { invoice, invoiceTotle }, appointment: { appoitment }, costomer: { costomer }, stuff: { staff } } = useSelector((state) => state)
  const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(fetchserviceCetegury())
  //     dispatch(fetchStaff())
  //     dispatch(fetchcostomerCetegury())
  //     dispatch(fetchstuffCetegury())
  //     dispatch(fetchServices())
  //     dispatch(fetchCostomer())
  //     dispatch(fetchStore())
  //     dispatch(fetchInvoice())
  //     dispatch(fetchAppoitment())
  // }, [])


  const costomerName = (id) => costomer ? costomer.filter((e) => e.id == id)[0].name : []
  const staffName = (id) => staff ? staff.filter((e) => e.id == id)[0].name : []

  const statusChange = (e) => {
    // axios.put(apiRoutes)
    alert(e)
  }
  const openModel = () => {
    setModel(true)
  }
  return (
    <>
      {/* <div class="alert alert-success" role="alert">
        One Appoitment Coming Soon
      </div> */}
      <div class="row">
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-info">
            <div class="inner">
              <h3>{invoice.length || 0}</h3>

              <p>Bill Count</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
          </div>
        </div>
        {/* <!-- ./col --> */}
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-success">
            <div class="inner">
              <h3>₹ {invoiceTotle || 0}</h3>

              <p>Total Bill Value</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
          </div>
        </div>
        {/* <!-- ./col --> */}
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-warning">
            <div class="inner">
              <h3>{appoitment.length || 0}</h3>

              <p>Total Appoitment</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
          </div>
        </div>
        {/* <!-- ./col --> */}
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-danger">
            <div class="inner">
              <h3>₹ 65</h3>
              <p>
                Total Expense
              </p>
            </div>
            <div class="icon">
              <i class="ion ion-close"></i>
            </div>
            {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
          </div>
        </div>
        {/* <!-- ./col --> */}
      </div>
      <Grid container rowSpacing={2} columnSpacing={2} mb={2} direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} >
        <Grid item xs={12} sm={6} md={3} lg={3} >
          <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
              <center>
                <h3>100</h3>
              </center>
              <center>
                <h5>Case Amount</h5>
              </center>
            </Stack>
            {/* <Paper >
            </Paper> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} >
          <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
              <center>
                <h3>100</h3>
              </center>
              <center>
                <h5>Case Amount</h5>
              </center>
            </Stack>
            {/* <Paper >
            </Paper> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} >
          <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
              <center>
                <h3>100</h3>
              </center>
              <center>
                <h5>Case Amount</h5>
              </center>
            </Stack>
            {/* <Paper >
            </Paper> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} >
          <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack>
              <center>
                <h3>100</h3>
              </center>
              <center>
                <h5>Case Amount</h5>
              </center>
            </Stack>
            {/* <Paper >
            </Paper> */}
          </Paper>
        </Grid>
      </Grid>
      <div className="row">
        <div className="col-md-6 col-sm-12 my-3 ">
          <Paper elevation={3} >
            <OnlineAppoitmentLoader />
          </Paper>
        </div>
        <div className="col-md-6 col-sm-12 my-3 ">
          <Paper elevation={3} sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          </Paper>
        </div>
        <div className="col-md-6 col-sm-12 my-3 ">
          <Paper elevation={3} sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          </Paper>
        </div>
        <div className="col-md-6 col-sm-12 my-3 ">
          <Paper elevation={3} sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          </Paper>
        </div>
        <div className="col-md-6 col-sm-12 my-3 ">
          <Paper elevation={3} sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          </Paper>
        </div>
        <div className="col-md-6 col-sm-12 my-3 ">
          <Paper elevation={3} sx={{ height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          </Paper>
        </div>
      </div>
    </>
  );
}


const AppoitmentModel = () => {
  return (
    <>

    </>
  )
}

const OnlineAppoitmentLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div className="col-12 border-0" >
        <div className="card-header" >
          <center><h4>Online Appointment</h4></center>
        </div>
        <Lottie 
      options={defaultOptions}
              height={340}
              width={340}
              />
      </div>
    </>
  )
}

