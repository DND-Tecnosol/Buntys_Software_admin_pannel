import React, { useEffect, useState } from 'react'
import {
    CostomerModel, Footer, Navbar, Sidebar, AddService,
    AddProduct,
    Appoitment, Addinvoice
} from '../Components'
import { Link, Outlet } from "react-router-dom";
import routesconst from '../Constants/routesconst';
import { addCostomer, fetchCostomer } from '../Store/Slice/Costomer/costumerSlice';
import { addService, fetchServices } from '../Store/Slice/All/serviceSlice';
import { fetchStore } from '../Store/Slice/All/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchserviceCetegury,
    fetchcostomerCetegury,
    fetchstuffCetegury
} from '../Store/Slice/types/allCetegurytypesSlice';
import { fetchStaff } from '../Store/Slice/All/staffSlice';
import { Button } from '@mui/material';
import { refreshStore } from '../Store/Slice/refresh';
import { fetchInvoice } from '../Store/Slice/All/invoiceSlice';
import { fetchAppoitment } from '../Store/Slice/All/appointmentSlice';



export default function Page({ children, header }) {
    document.title = "Bunty's studio || " + header;
    const dispatch = useDispatch();
    const refresh=useSelector(state=>state.refresh.refresh)
    
    // const [logoStatus, setLogoStatus] = useState(true)
    useEffect(() => {
        dispatch(fetchserviceCetegury())
        dispatch(fetchStaff())
        dispatch(fetchcostomerCetegury())
        dispatch(fetchstuffCetegury())
        dispatch(fetchServices())
        dispatch(fetchCostomer())
        dispatch(fetchStore())
        dispatch(fetchInvoice())
        dispatch(fetchAppoitment())
        
        // dispatch(addService())
        // dispatch(addService())
    }, [refresh])
    
    return (
        <>
            <div class="wrapper">
                <Navbar />
                <Sidebar />
                <div class="content-wrapper rounded-lg">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">{header}</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><Link to={routesconst.Dashbord}>Home</Link></li>
                                        <li class="breadcrumb-item active">{header}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="content">
                        <div class="container-fluid">
                            {children}
                        </div>
                    </section>
                </div>
                {/* Models start Hear */}
                <CostomerModel id={'exampleModal'} />
                <AddService id={'services'} />
                <AddProduct id={'products'} />
                <Appoitment id={'Appoitment'} />
                <Addinvoice id={'invoices'} />
                {/* Models end */}
                <Footer />
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
            </div>
        </>
    )
}
