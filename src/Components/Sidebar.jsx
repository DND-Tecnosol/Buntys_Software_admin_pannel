import React from 'react'
import { Link } from 'react-router-dom'
import routesconst from '../Constants/routesconst'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { Logo, LogoRound } from '../assets';
import { useSelector } from 'react-redux';
import { MdPowerOff } from 'react-icons/md';
import { FaPowerOff } from 'react-icons/fa';
import { Button, IconButton } from '@mui/material';
export default function Sidebar() {
  const { logo } = useSelector((s) => s.theme)
  return (
    <>

      <aside class="main-sidebar main-sidebar-custom sidebar-light-primary">
        {/* <!-- Brand Logo --> */}
        <Link to="/" class="brand-link border-0 d-flex flex-row">
          <img src={logo ? Logo : LogoRound} height={'52px'} width="150px" style={{ opacity: 0.8 }} />
        </Link>

        {/* <!-- Sidebar --> */}
        <div class="sidebar">
          {/* <!-- SidebarSearch Form --> */}
          <div class="form-inline d-none">
            <div class="input-group" data-widget="sidebar-search">
              <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
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
              {routesconst.map((e, k) => <Navlink data={e} key={k} />)}
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        <div class="sidebar-custom pb-3">
          <Button startIcon={<FaPowerOff size={15} className='text-danger' />} className='text-danger' >
            Logout</Button>
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    </>
  )
}
const Badges = ({ data }) => data>0 && (<><span class="badge bg-secondary">{data}</span></>)

const Navlink = ({ data }) => {
  // console.log(data)
  const { tag, path, icon, noty } = data
  const {appointment:{appoitment}}= useSelector(state=>state)
  return (
    <li class="nav-item">
      <Link to={path} class="nav-link">
        {/* <i class="nav-icon fas fa-th"></i> */}
        {icon}
        {/* <HiOutlineClipboardDocumentList color='white' size={20} style={{marginLeft:5,marginRight:10}} /> */}
          {tag == "Appointment" ? <Badges data={appoitment.length} /> : null}
          {tag == "Costomer" ? <Badges /> : null}
          {tag == "Ticket" ? <Badges /> : null}
          {tag == "Feedback" ? <Badges /> : null}
        <p>
          {tag}
          {/* <span class="right badge badge-danger">New</span> */}
        </p>
      </Link>
    </li>
  );
}

