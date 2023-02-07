import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import { Bar, Pie } from "react-chartjs-2";
import { ChartCard } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { authLogout } from "../Store/Slice/Auth/authSlice";
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
// import { fetchServices } from "../Store/Slice/All/serviceSlice";
import { FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import apiRoutes,{ appAxios as axios } from "../Constants/apiRoutes";
import { Edit, Inventory } from "@mui/icons-material";


export default function Dashbord({ header }) {
  const [model, setModel] = useState(false);
  const { invoice: { invoice, invoiceTotle }, appointment: { appoitment }, costomer: { costomer }, stuff: { staff } } = useSelector((state) => state)
  const dispatch = useDispatch()
  const costomerName = (id) => costomer ? costomer.filter((e) => e.id == id)[0].name : []
  const staffName = (id) => staff ? staff.filter((e) => e.id == id)[0].name : []

  const statusChange =(e)=>{
    // axios.put(apiRoutes)
    alert(e)
  }
  const openModel=()=>{
    setModel(true)
  }
  return (
    <Page header={header}>
      <Button
        onClick={() => dispatch(authLogout())}
      >Logout</Button>
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
              <h3>65</h3>

              <p>
                Total Cancelltion Amount
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

      <div className="row">
        {/* <ChartCard title={'Sale'} >
          <Bar
            datasetIdKey="id"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </ChartCard>
        <ChartCard title="Today's Appoitment">
          <Pie
            datasetIdKey="id"
            data={{
              labels: ["Jun", "Jul", "Aug"],
              datasets: [
                {
                  id: 1,
                  label: "",
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: "",
                  data: [3, 2, 1],
                },
              ],
            }}
          />
        </ChartCard> */}
        <ChartCard title="Today's Appoitment">
          <table data-spy="scroll" style={{height:'500px'}} class="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Stuff</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appoitment ? appoitment.map((data) => {
                {/* console.log(costomerName(data.costomer_id)) */ }
                return (
                  <>
                    <tr>
                      <td>
                        {/* <img src="dist/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2"> */}
                        {costomerName(data.costomer_id)}
                      </td>
                      <td>{staffName(data.staffid)}</td>
                      <td>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Status</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.status}
                            label="Status"
                            size="small"
                            onChange={(e)=>statusChange(e.target.value)}
                          >
                            <MenuItem value={0}><span className="text-danger">Cancell</span></MenuItem>
                            <MenuItem value={1}><span className="text-warning">On TheWay</span></MenuItem>
                            <MenuItem value={2}><span className="text-success">Confirm</span></MenuItem>
                            <MenuItem value={3}><span className="text-info">Change Sceduled</span></MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td>
                      <IconButton onClick={()=>openModel()}>
                       <Edit color="warning" />
                      </IconButton>
                      </td>
                    </tr>
                  </>
                )
              }) : null}
            </tbody>
          </table>
        </ChartCard>
      </div>
    </Page>
  );
}


const AppoitmentModel=()=>{
  return (
  <>

  </>
  )
}
