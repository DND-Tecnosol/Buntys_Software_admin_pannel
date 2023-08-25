import { createSlice } from '@reduxjs/toolkit'

let serviceData = {
    service_id: '',
    staff_id: '',
    time: '',
}

const initialState = {
    // modelState  
    appointment: false,
    product: false,
    service: false,
    weg: false,
    extention: false,
    costomer: false,
    staff: false,

    // Resource Data Schema
    appointmentData: {
        service: [serviceData],
        costomer_id:'',
        status: 1,
        strict_appointment: false,
        date: '',
        repeat: 'noremember',
        repeat_end: 1,
        repeat_end_date: "",
    },
    productData: {},
    serviceData: {},
    wegData: {},
    extentionData: {},
    costomerData: {},
    staffData: {},
}

const resourceSlice = createSlice({
    name: "modelData",
    initialState,
    reducers: {
        addService: (state, action) => {
            state.appointmentData.service.push(serviceData)
        },
        changeServiceData: (state, action) => {
            console.log(action.payload);
            switch (action.payload.type) {
                case 'service':
                    // Change Service Data
                    state.appointmentData.service[action.payload.index].service_id = action.payload.serId?.id;
                    break;
                case 'time':
                    // Change Service Time
                    // if (ad) {

                    // }
                    state.appointmentData.service[action.payload.index].time = action.payload.time;
                    break;
                case 'staff':
                    // Change Service Staff
                    state.appointmentData.service[action.payload.index].staff_id = action.payload.stId;
                    break;
                case 'date':
                    // Change Service Staff
                    state.appointmentData.service[action.payload.index].staff_id = action.payload.date;
                    break;
            }
        },
        changeCostomer: (state, action) => {
            state.appointmentData.costomer_id = action.payload;
        },
        changeStatus: (state, action) => {
            state.appointmentData.status = action.payload.cId;
        },
        changeStrictMode: (state, action) => {
            state.appointmentData.strict_appointment = action.payload.cId;
        },
        changeStateAppointmentModel: (state, action) => {
            state.appointment = action.payload
        },
        changeRepeat: (state, action) => {
            state.appointmentData.repeat = action.payload
        },
        changeRepeatEnd: (state, action) => {
            state.appointmentData.repeat_end = action.payload
        },
    }
});

export const { addService, changeServiceData, changeCostomer, changeStatus, changeStrictMode, changeStateAppointmentModel,changeRepeatEnd,changeRepeat } = resourceSlice.actions

export default resourceSlice.reducer
