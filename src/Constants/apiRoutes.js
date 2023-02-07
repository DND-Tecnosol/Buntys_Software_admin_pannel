import axios from "axios";

const apiDomain="http://192.168.29.208:8000"

const store= localStorage.getItem('store');
const userRole= localStorage.getItem('userRole');
export const appAxios = axios.create({
    headers: {
      'Store': store,
      'UserType':userRole
    }
  });
  
  const apiRoutes= {
    "costomer":`${apiDomain}/api/costomer`,
    "costomerType":`${apiDomain}/api/costumertype`,
    "store":`${apiDomain}/api/store`,
    "stufftype":`${apiDomain}/api/stufftype`,
    "stuff":`${apiDomain}/api/stuff`,
    "Servicetype":`${apiDomain}/api/Servicetype`,
    "Service":`${apiDomain}/api/Service`,
    "appointment":`${apiDomain}/api/appoitment`,
    "bookAppoitment":`${apiDomain}/api/appoitment`,
    "invoice":`${apiDomain}/api/createinvoice`,
    "allinvoice":`${apiDomain}/api/invoice`,
    "login":`${apiDomain}/api/login`,
    "resetpasswordreq":`${apiDomain}/api/resetpasswordrequst`,
    "otpCheck":`${apiDomain}/api/resetpasswordcheckotp`,
    "resetpassword":`${apiDomain}/api/resetpassword`,
}




export default apiRoutes;
