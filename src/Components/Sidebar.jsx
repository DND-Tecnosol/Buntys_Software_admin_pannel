import React from 'react'
import { Link } from 'react-router-dom'
import routesconst from '../Constants/routesconst'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
export default function Sidebar() {
    // const abc=xyz[0]
    // console.log(abc);
  return (
    <>
    
       <aside class="main-sidebar sidebar-light-primary">
    {/* <!-- Brand Logo --> */}
    <Link to="index3.html" class="brand-link">
      <img src="assets/brand/logo.svg" alt="AdminLTE Logo" height={'50px'} width="150px" style={{opacity: 0.8}} />
    </Link>

    {/* <!-- Sidebar --> */}
    <div class="sidebar">
      {/* <!-- SidebarSearch Form --> */}
      <div class="form-inline d-none">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Sidebar Menu --> */}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {routesconst.map((e,k)=><Navlink data={e} key={k}/>)}
        </ul>
      </nav>
      {/* <!-- /.sidebar-menu --> */}
    </div>
    {/* <!-- /.sidebar --> */}
  </aside> 
    </>
  )
}

const Navlink = ({data}) => {
    // console.log(data)
    const {tag,path,icon}=data
    return (
        <li class="nav-item">
            <Link to={path} class="nav-link">
              {/* <i class="nav-icon fas fa-th"></i> */}
              {icon}
              {/* <HiOutlineClipboardDocumentList color='white' size={20} style={{marginLeft:5,marginRight:10}} /> */}
              <p>
              {tag}
                {/* <span class="right badge badge-danger">New</span> */}
              </p>
            </Link>
          </li>
    );
}

