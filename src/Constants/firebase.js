import { initializeApp } from "firebase/app";
import { getMessaging,getToken,onMessage  } from "firebase/messaging";
import apiRoutes, { appAxios } from './apiRoutes';
import { toast } from 'react-toastify';
const firebaseConfig = {
  apiKey: "AIzaSyAbMsDCISg2KmwR26Q8uvKfX8dBGv_niwE",
  authDomain: "buntys-app.firebaseapp.com",
  projectId: "buntys-app",
  storageBucket: "buntys-app.appspot.com",
  messagingSenderId: "324796960410",
  appId: "1:324796960410:web:5f46a352ad420b14421923",
  measurementId: "G-J8PS7J88CC"
};

const app= initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const userRole = localStorage.getItem('userType');

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: "BIMV-2cBQyJlpLNfewn7IE-hQOE1dcp2Jd1ZtmYJN29rswVV2tAkBrZzKYdg5tfi58sNZus21Ni759tn0A8rQaw" });
    if (currentToken) {
      console.log("token",currentToken);
      console.log("role",userRole);
      
      // Perform any other neccessary action with the token
      if (userRole == "masteradmin") {
        // console.log("me chala store karane");
        appAxios.put(apiRoutes.updateToken, { token: currentToken }).then(e=>console.log(e));
      }
      onMessage(messaging,(payload) => {
        console.log('Message received. ', payload);
        // ...
        toast(payload.data.message)
        // Customize notification here
        const notificationTitle = payload.data.title;
        const notificationOptions = {
          body: payload.data.message,
          icon: '/firebase-logo.png'
        };
        // showNotification(notificationTitle,notificationOptions);
        // messaging.registration.showNotification(notificationTitle, notificationOptions);
      });
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (err) {
    // alert("No Token get From Google Firebase")
    console.log('An error occurred while retrieving token. ', err);
  }
};
// self.addEventListener('push', (event) => {
//   console.log('Push notification received:', event.data.text());
//   const title = notificationTitle;
//   const options = {
//     body: notificationOptions,
//     icon: '/logo.png',
//     badge: '/badge.png'
//   };
//   event.waitUntil(self.registration.showNotification(title, options));
// });

