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







// const firebaseMassage=  

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

async function runOneSignal() {
    await OneSignal.init({ appId: 'fee71504-b5c5-40cc-ba8f-f67b1cda387f', allowLocalhostAsSecureOrigin: true });
    OneSignal.getUserId().then(userId => {
        console.log('OneSignal User ID:', userId);
    });
}

export default function Page({ children, header }) {
    document.title = "Bunty's studio || " + header;
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
import { getTokens, requestForToken } from './../Constants/firebase';
import { useDispatch } from 'react-redux';
import { fetchProduct } from './../Store/Slice/All/productSlice';
import OneSignal from './../Constants/oneSignal';
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