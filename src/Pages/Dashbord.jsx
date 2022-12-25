import React,{useEffect} from "react";
import Page from "../Layouts/Page";
import { Bar, Pie } from "react-chartjs-2";
import { ChartCard } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { authLogout } from "../Store/Slice/Auth/authSlice";
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
// import { fetchServices } from "../Store/Slice/All/serviceSlice";



export default function Dashbord({ header }) {
   const state= useSelector((state)=>state.service)
   const dispatch=useDispatch()
return (
    <Page header={header}>
      <Button
      onClick={()=>dispatch(authLogout())}
      >Logout</Button>
      <div class="alert alert-success" role="alert">
        One Appoitment Coming Soon
      </div>
      <div class="row">
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-info">
            <div class="inner">
              {/* <h3>{state.service.length || 0}</h3> */}

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
              <h3>₹ 53</h3>

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
              <h3>44</h3>

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
                Total Cancelltion <br></br> Amount
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
          <table class="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Sales</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {/* <img src="dist/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2"> */}
                  Some Product
                </td>
                <td>$13 USD</td>
                <td>
                  <small class="text-success mr-1">
                    <i class="fas fa-arrow-up"></i>
                    12%
                  </small>
                  12,000 Sold
                </td>
                <td>
                  <a href="#" class="text-muted">
                    <i class="fas fa-search"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  {/* <img src="dist/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2"> */}
                  Another Product
                </td>
                <td>$29 USD</td>
                <td>
                  <small class="text-warning mr-1">
                    <i class="fas fa-arrow-down"></i>
                    0.5%
                  </small>
                  123,234 Sold
                </td>
                <td>
                  <a href="#" class="text-muted">
                    <i class="fas fa-search"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  {/* <img src="dist/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2"/> */}
                  Amazing Product
                </td>
                <td>$1,230 USD</td>
                <td>
                  <small class="text-danger mr-1">
                    <i class="fas fa-arrow-down"></i>
                    3%
                  </small>
                  198 Sold
                </td>
                <td>
                  <a href="#" class="text-muted">
                    <i class="fas fa-search"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  {/* <img src="dist/img/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2"> */}
                  Perfect Item
                  <span class="badge bg-danger">NEW</span>
                </td>
                <td>$199 USD</td>
                <td>
                  <small class="text-success mr-1">
                    <i class="fas fa-arrow-up"></i>
                    63%
                  </small>
                  87 Sold
                </td>
                <td>
                  <a href="#" class="text-muted">
                    <i class="fas fa-search"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </ChartCard>
      </div>
    </Page>
  );
}
