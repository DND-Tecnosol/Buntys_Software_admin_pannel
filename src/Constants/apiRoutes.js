// http://localhost:8000/api/costomer
// http://localhost:8000/api/store
// http://localhost:8000/api/stufftype
// http://localhost:8000/api/stuff
// http://localhost:8000/api/Servicetype
// http://localhost:8000/api/Service
// http://localhost:8000/api/appointment
export default {
    "costomer":"http://localhost:8000/api/costomer",
    "costomerType":"http://localhost:8000/api/costumertype",
    "store":"http://localhost:8000/api/store",
    "stufftype":"http://localhost:8000/api/stufftype",
    "stuff":"http://localhost:8000/api/stuff",
    "Servicetype":"http://localhost:8000/api/Servicetype",
    "Service":"http://localhost:8000/api/Service",
    "appointment":"http://localhost:8000/api/appointment",
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
