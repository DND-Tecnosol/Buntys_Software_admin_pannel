// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// // const initMessaging = firebase.messaging()
// const firebaseConfig = {
//   apiKey: "AIzaSyAbMsDCISg2KmwR26Q8uvKfX8dBGv_niwE",
//   authDomain: "buntys-app.firebaseapp.com",
//   projectId: "buntys-app",
//   storageBucket: "buntys-app.appspot.com",
//   messagingSenderId: "324796960410",
//   appId: "1:324796960410:web:5f46a352ad420b14421923",
//   measurementId: "G-J8PS7J88CC"
// };

// const app = firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging(app);

// messaging.onBackgroundMessage(function (payload) {
//   console.log('Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.addEventListener('push', function (event) {
//     console.log('Received push event:', event);

//     const options = {
//       body: 'This is a test notification',
//     };
//     event.waitUntil(self.registration.showNotification('Test Notification', options));
//   });
//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAbMsDCISg2KmwR26Q8uvKfX8dBGv_niwE",
    authDomain: "buntys-app.firebaseapp.com",
    projectId: "buntys-app",
    storageBucket: "buntys-app.appspot.com",
    messagingSenderId: "324796960410",
    appId: "1:324796960410:web:5f46a352ad420b14421923",
    measurementId: "G-J8PS7J88CC"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});