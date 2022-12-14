import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoChange } from '../Store/Slice/Theme/themeSlice'
import RefreshIcon from '@mui/icons-material/Refresh';
import { refreshStore } from '../Store/Slice/refresh';
export default function Navbar() {
  const dispatch=useDispatch()
  return (
    <>
    <nav class="main-header navbar navbar-expand navbar-fixed navbar-white navbar-light border-0" style={{height:'79px'}}>
    {/* <!-- Left navbar links --> */}
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    {/* <!-- Right navbar links --> */}
    <ul class="navbar-nav ml-auto">
      {/* <!-- Navbar Search --> */}
      <li class="nav-item">        
      </li>

      {/* <!-- Messages Dropdown Menu --> */}
      <li class="nav-item dropdown">
        <IconButton class="nav-link" data-toggle="dropdown" href="#">
          <i class="fa fa-plus"></i>
        </IconButton>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right text-center">
          {/* <span class="dropdown-item dropdown-header">15 Notifications</span> */}
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item" data-toggle="modal"
            data-target="#exampleModal">
             Add Costomer
            {/* <span class="float-right text-muted text-sm">3 mins</span> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item" data-toggle="modal"
            data-target="#services">
             Add Service
            {/* <span class="float-right text-muted text-sm">12 hours</span> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item" data-toggle="modal"
            data-target="#products">
          Add Product
            {/* <span class="float-right text-muted text-sm">2 days</span> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item" data-toggle="modal"
            data-target="#invoices">
          Create Invoice
            {/* <span class="float-right text-muted text-sm">2 days</span> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item" data-toggle="modal"
            data-target="#Appoitment">
          Add Appoitment
            {/* <span class="float-right text-muted text-sm">2 days</span> */}
          </a>
          {/* <a href="#" class="dropdown-item dropdown-footer" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">See All Notifications</a> */}
        </div>
      </li>
      {/* <!-- Notifications Dropdown Menu --> */}
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <IconButton color="error" onClick={()=>dispatch(refreshStore())} >
          {/* <i class="fas fa-refresh"></i> */}
          <RefreshIcon color='red' />
        </IconButton>
      </li>
    </ul>
  </nav>
    </>
      )
}


/*
<li class="nav-item dropdown">
        {/* <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a> 
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Brad Diesel
                  <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            {/* <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div> 
            {/* <!-- Message End --> 
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            {/* <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div> 
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
*/