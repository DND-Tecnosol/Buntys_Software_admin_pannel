importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyAbMsDCISg2KmwR26Q8uvKfX8dBGv_niwE",
  authDomain: "buntys-app.firebaseapp.com",
  projectId: "buntys-app",
  storageBucket: "buntys-app.appspot.com",
  messagingSenderId: "324796960410",
  appId: "1:324796960410:web:5f46a352ad420b14421923",
  measurementId: "G-J8PS7J88CC"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );


  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});