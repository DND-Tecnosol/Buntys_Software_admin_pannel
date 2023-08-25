import axios from "axios";

export const apiDomain = "http://192.168.29.208:8000"

const store = localStorage.getItem('store');
const userRole = localStorage.getItem('userType');
const tocken = localStorage.getItem('tocken');
const sessionid = localStorage.getItem('sessionid');
const Userid = localStorage.getItem('userid');
export const appAxios = axios.create({
  baseURL:apiDomain+'/api/',
  headers: {
    'Store': store,
    'UserType': userRole,
    'Tocken': tocken,
    'sessionid': sessionid,
    'Userid': Userid,
  }
});

const apiRoutes = {
  "costomer": 'costomer/',
  "costomerStatus": 'costomers/',
  "costomerType": 'costumertype/',
  "store": 'store/',
  "stufftype": 'stufftype/',
  "stuff": 'stuff/',
  "Servicetype": 'Servicetype/',
  "Service": 'Service/',
  "appointment": 'appoitment/',
  "bookAppoitment": 'appoitment/',
  "invoice": 'createinvoice/',
  "allinvoice": 'invoice/',
  "login": 'login/',
  "logout": 'logout/',
  "resetpasswordreq": 'resetpasswordrequst/',
  "otpCheck": 'resetpasswordcheckotp/',
  "resetpassword": 'resetpassword/',
  "city": 'city/',
  "notification": 'notification/',
  "notificationcatygury": 'notificationcatygury/',
  "time": 'time/',
  "closingdate": 'closingdate/',
  "product": 'product/',
  "producttype": 'producttype/',
  "productbrand": 'productbrand/',
  "updateToken": 'updateToken/',
  "hairwegtype": 'hairwegtype/',
  "hairweg": 'hairweg/',
  "hairpatchtype": 'hairpatchtype/',
  "hairextentiontype": 'hairextentiontype/',
  "hairpatch": 'hairpatch/',
  "extention": 'hairextention/',
  "CreateWish": 'campign/CreateWish',
  "CreateVaucher": 'campign/CreateVaucher',
  "CreateTargetAudianceOffers": 'campign/CreateTargetAudianceOffers',
  "CreateOffers": 'campign/CreateOffers',
  "CampignData": 'campign/',
  "voucherCode": 'voucher/',
  "voucherCoderemoved": 'voucher/removed/',
  "SmsTemp": 'smsservice/',
  "points": 'point/',
  "feedback": 'feedback/',
}

export default apiRoutes;