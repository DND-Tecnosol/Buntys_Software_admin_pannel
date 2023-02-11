import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAbMsDCISg2KmwR26Q8uvKfX8dBGv_niwE",
    authDomain: "buntys-app.firebaseapp.com",
    projectId: "buntys-app",
    storageBucket: "buntys-app.appspot.com",
    messagingSenderId: "324796960410",
    appId: "1:324796960410:web:5f46a352ad420b14421923",
    measurementId: "G-J8PS7J88CC"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase


// export const getTokens =()=>{
//     getToken(messaging, {
//       vapidKey:
//         "BIMV-2cBQyJlpLNfewn7IE-hQOE1dcp2Jd1ZtmYJN29rswVV2tAkBrZzKYdg5tfi58sNZus21Ni759tn0A8rQaw",
//     })
//       .then((currentToken) => {
//         if (currentToken) {
//           console.log("Firebase Token", currentToken);
//         } else {
//           // Show permission request UI
//           console.log(
//             "No registration token available. Request permission to generate one."
//           );
//           // ...
//         }
//       })
//       .catch((err) => {
//         console.log("An error occurred while retrieving token. ", err);
//         // ...
//       });
// }


// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   // ...
// });
