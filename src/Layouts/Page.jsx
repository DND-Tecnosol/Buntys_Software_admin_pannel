import React, { useEffect, useState } from 'react'
import {
    CostomerModel, Footer, Navbar, Sidebar, AddService,
    AddProduct,
    Appoitment, Addinvoice
} from '../Components'
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import routesconst from '../Constants/routesconst';
import { ToastContainer, toast } from 'react-toastify';
import { fetchAppoitment } from './../Store/Slice/All/appointmentSlice';
import { fetchInvoice } from './../Store/Slice/All/invoiceSlice';
import { fetchStore, fetchCity, fetchStorenotification, fetchStorenotificationcatygury, fetchStoretime, fetchStoreclosingdate } from './../Store/Slice/All/storeSlice';
import { fetchStaff } from "../Store/Slice/All/staffSlice";
import { fetchCostomer } from "../Store/Slice/Costomer/costumerSlice";
import { fetchcostomerCetegury, fetchserviceCetegury, fetchstuffCetegury } from './../Store/Slice/types/allCetegurytypesSlice';
import { fetchServices } from './../Store/Slice/All/serviceSlice';
import { fetchProduct, fetchProductBrand, fetchProductCategury,fetchHairWegtype,fetchHairWeg,fetchHairExtention,fetchHairExtentionType,fetchHairPatch,fetchHairPatchtype } from './../Store/Slice/All/productSlice';
import Echo from "laravel-echo";
import Pusher from 'pusher-js';
import { requestForToken } from '../Constants/firebase';
// import { OneSignal } from '../Constants/oneSignal';
import OneSignal from 'react-onesignal';
import { fetchCampign } from '../Store/Slice/Campign';
  
const echo = new Echo({
    key: "621acca9abe83bd9e178",
    // broadcaster: 'pusher',
    broadcaster: 'pusher',
    cluster: 'ap2',
    // wsHost: window.location.hostname,
    // wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});

export default function Page({ children, header }) {
    document.title = "Bunty's studio ";
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        const store = localStorage.getItem('store');
        echo.channel(`storeupdate.${store}`)
            .listen('storeUpdate', (data) => {
                console.log(data);
                toast(data.msg.msg)
                // alert(data.msg)
            });
        // requestForToken()
        requestForToken()
        dispatch(fetchHairExtention())
        dispatch(fetchHairExtentionType())
        dispatch(fetchHairPatch())
        dispatch(fetchHairPatchtype())
        dispatch(fetchHairWegtype())
        dispatch(fetchHairWeg())
        dispatch(fetchserviceCetegury())
        dispatch(fetchProduct())
        dispatch(fetchProductBrand())
        dispatch(fetchProductCategury())
        dispatch(fetchStaff())
        dispatch(fetchcostomerCetegury())
        dispatch(fetchstuffCetegury())
        dispatch(fetchServices())
        dispatch(fetchCostomer())
        dispatch(fetchStore())
        dispatch(fetchCity())
        dispatch(fetchInvoice())
        dispatch(fetchAppoitment())
        dispatch(fetchStorenotification())
        dispatch(fetchStorenotificationcatygury())
        dispatch(fetchStoretime())
        dispatch(fetchStoreclosingdate())
        dispatch(fetchCampign())
    }, [])
    return (
        <>
            <div class="wrapper">
                <Navbar />
                <Sidebar />
                <div class="content-wrapper rounded-lg">
                    <div class="content-heade">
                        <div class="container-fluid">
                            <div class="row mb-2">
                            </div>
                        </div>
                    </div>
                    <section class="content">
                        <div class="container-fluid">
                            <Outlet />
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
                <ToastContainer />
                <Footer />
                <aside class="control-sidebar control-sidebar-dark">
                    {/* <!-- Control sidebar content goes here --> */}
                </aside>
            </div>
        </>
    )
}