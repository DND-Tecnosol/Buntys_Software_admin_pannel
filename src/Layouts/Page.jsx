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
import firebaseapp from '../firebase'
import { fetchAppoitment } from './../Store/Slice/All/appointmentSlice';
import { fetchInvoice } from './../Store/Slice/All/invoiceSlice';
import { fetchStore,fetchCity,fetchStorenotification ,fetchStorenotificationcatygury ,fetchStoretime ,fetchStoreclosingdate  } from './../Store/Slice/All/storeSlice';
import { fetchStaff } from "../Store/Slice/All/staffSlice";
import { fetchCostomer } from "../Store/Slice/Costomer/costumerSlice";
import { fetchcostomerCetegury, fetchserviceCetegury, fetchstuffCetegury } from './../Store/Slice/types/allCetegurytypesSlice';
import { fetchServices } from './../Store/Slice/All/serviceSlice';
import { fetchProduct,fetchProductBrand,fetchProductCategury, } from './../Store/Slice/All/productSlice';
import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

export default function Page({ children, header }) {
    document.title = "Bunty's studio || " + header;
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        // window.Pusher = require('pusher-js');
        // window.Event = new Echo({
        //     broadcaster: 'pusher',
        //     key: 'DXHQtg.1CC-Bg:wT2MJMJQQAdjcY2Q9GG8EAOKkHGNRvrCD-XK4tLVeos',
        //     wsHost: 'realtime-pusher.ably.io',
        //     wsPort: 443,
        //     disableStats: true,
        //     encrypted: true,
        // });
        // Event.channel('storeupdate').subscribed((e) => {
        //     console.log("Subscribed Successfully");
        //     console.log(e);
        // }).listen((e) => {
        //     console.log("new event msg")
        //     console.log(e)
        // })
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

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getTokens } from './../Constants/firebase';
import { useDispatch } from 'react-redux';
import { fetchProduct } from './../Store/Slice/All/productSlice';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbMsDCISg2KmwR26Q8uvKfX8dBGv_niwE",
  authDomain: "buntys-app.firebaseapp.com",
  projectId: "buntys-app",
  storageBucket: "buntys-app.appspot.com",
  messagingSenderId: "324796960410",
  appId: "1:324796960410:web:5f46a352ad420b14421923",
  measurementId: "G-J8PS7J88CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

BIMV-2cBQyJlpLNfewn7IE-hQOE1dcp2Jd1ZtmYJN29rswVV2tAkBrZzKYdg5tfi58sNZus21Ni759tn0A8rQaw

    useEffect(()=>{
        const msg = firebaseapp.messaging();//getMessaging();
        msg.requestPermission().then(()=>{
           return msg.getToken()
        }).then((e)=>{
            console.log("token",e);
            msg.onMessage(payload => {
                console.log('received',payload);
              });
        })
    },[])
*/