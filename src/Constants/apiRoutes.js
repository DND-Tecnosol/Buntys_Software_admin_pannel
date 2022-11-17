// http://localhost:8000/api/costomer
// http://localhost:8000/api/store
// http://localhost:8000/api/stufftype
// http://localhost:8000/api/stuff
// http://localhost:8000/api/Servicetype
// http://localhost:8000/api/Service
// http://localhost:8000/api/appointment
const apiDomain="http://192.168.29.208:8000"
export default {
    "costomer":`${apiDomain}/api/costomer`,
    "costomerType":`${apiDomain}/api/costumertype`,
    "store":`${apiDomain}/api/store`,
    "stufftype":`${apiDomain}/api/stufftype`,
    "stuff":`${apiDomain}/api/stuff`,
    "Servicetype":`${apiDomain}/api/Servicetype`,
    "Service":`${apiDomain}/api/Service`,
    "appointment":`${apiDomain}/api/appointment`,
}





// For Only Understand Data send Scheema

const storescema = {
    "name": "",
    "avatar": "",
    "email": "",
    "mobaile": "",
    "password": "",
    "opentime": "",
    "closetime": "",
    "address": "",
    "pin": "",
    "city": "",
    "state": "",
    "map": ""
};

const stufftype = {
    "name": ""
}

const Stuff = {
    "storeid": "",
    "stafftypesid": "",
    "name": "",
    "lastname": "",
    "gender": "",
    "status": "",
    "img": "",
    "designation": "",
    "address": "",
    "city": "",
    "email": "",
    "mobaile": "",
    "whatsapp": "",
    "workstarttime": "",
    "workemdtime": ""
}

const servicetype = {
    "name": ""
}

const service = {
    "servicetypeid": "",
    "name": "",
    "price": "",
    "minprice": ""
}

const costomer = {
    "storeid": "",
    "name": "",
    "lastname": "",
    "img": "",
    "city": "",
    "email": "",
    "mobaile": "",
    "whatsapp": "",
    "DOB": "",
    "Anniversary": "",
    "email_notyfication_status": "",
    "mobaile_notyfication_status": "",
    "whatsapp_notyfication_status": "",
    "costomer_notes": "",
    "address": "",
    "promo_sms": "",
    "gender": "",
}
