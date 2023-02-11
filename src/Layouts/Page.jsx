import React,{useEffect,useState} from 'react'
import {
    CostomerModel, Footer, Navbar, Sidebar, AddService,
    AddProduct,
    Appoitment, Addinvoice
} from '../Components'
import { Link, Outlet } from "react-router-dom";
import routesconst from '../Constants/routesconst';
import { ToastContainer, toast } from 'react-toastify';
// import { getTokens }getToken, onMessage from '../Constants/firebase';
// import { getMessaging } from "firebase/messaging";
import firebaseapp from '../firebase'

export default function Page({ children, header }) {
    document.title = "Bunty's studio || " + header;
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
                <ToastContainer/>
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
*/