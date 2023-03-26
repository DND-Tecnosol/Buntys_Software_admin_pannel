import axios from "axios";

const apiDomain = "http://127.0.0.1:8000"

const store = localStorage.getItem('store');
const userRole = localStorage.getItem('userType');
const tocken = localStorage.getItem('tocken');
const sessionid = localStorage.getItem('sessionid');
const Userid = localStorage.getItem('userid');
export const appAxios = axios.create({
  headers: {
    'Store': store,
    'UserType': userRole,
    'Tocken': tocken,
    'sessionid': sessionid,
    'Userid': Userid,
  }
});

const apiRoutes = {
  "costomer": `${apiDomain}/api/costomer/`,
  "costomerType": `${apiDomain}/api/costumertype/`,
  "store": `${apiDomain}/api/store/`,
  "stufftype": `${apiDomain}/api/stufftype/`,
  "stuff": `${apiDomain}/api/stuff/`,
  "Servicetype": `${apiDomain}/api/Servicetype/`,
  "Service": `${apiDomain}/api/Service/`,
  "appointment": `${apiDomain}/api/appoitment/`,
  "bookAppoitment": `${apiDomain}/api/appoitment/`,
  "invoice": `${apiDomain}/api/createinvoice/`,
  "allinvoice": `${apiDomain}/api/invoice/`,
  "login": `${apiDomain}/api/login/`,
  "logout": `${apiDomain}/api/logout/`,
  "resetpasswordreq": `${apiDomain}/api/resetpasswordrequst/`,
  "otpCheck": `${apiDomain}/api/resetpasswordcheckotp/`,
  "resetpassword": `${apiDomain}/api/resetpassword/`,
  "city": `${apiDomain}/api/city/`,
  "notification": `${apiDomain}/api/notification/`,
  "notificationcatygury": `${apiDomain}/api/notificationcatygury/`,
  "time": `${apiDomain}/api/time/`,
  "closingdate": `${apiDomain}/api/closingdate/`,
  "product": `${apiDomain}/api/product/`,
  "producttype": `${apiDomain}/api/producttype/`,
  "productbrand": `${apiDomain}/api/productbrand/`,
  "updateToken": `${apiDomain}/api/updateToken/`,
  "hairwegtype": `${apiDomain}/api/hairwegtype/`,
  "hairweg": `${apiDomain}/api/hairweg/`,
  "hairpatchtype": `${apiDomain}/api/hairpatchtype/`,
  "hairpatch": `${apiDomain}/api/hairpatch/`,
  "hairextentiontype": `${apiDomain}/api/hairextentiontype/`,
  "hairextention": `${apiDomain}/api/hairextention/`,
}




export default apiRoutes;
