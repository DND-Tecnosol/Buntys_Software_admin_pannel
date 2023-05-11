import React from "react";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../Layouts/Page";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import apiRoutes, { appAxios } from "../Constants/apiRoutes";
import { fetchAppoitment } from './../Store/Slice/All/appointmentSlice';
import { Autocomplete, TextField } from "@mui/material";
require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

const Appoitment = ({ header }) => {
  const [model, setModel] = useState(false);
  const [appointmentinfo, setAppointmentinfo] = useState(false);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(true);
  const [services, setService] = useState("");
  const [costomer, setCostomer] = useState(0);
  const [staffid, setStaff] = useState("");
  const [strict, setStrict] = useState(false);
  const [event, setEvent] = useState(false);

  const disapatch = useDispatch()

  const onSelectEvent = useCallback((e) => {
    console.log(e)
    setAppointmentinfo(!appointmentinfo)
    setEvent(e.resourceId)
  }, [model])
  const onSelectSlot = useCallback((e) => {
    console.log(e);
    setModel(!model)
    setStart(moment(e.start).format("Y-M-D HH:mm:ss"))
    setEnd(moment(e.end).format("Y-M-D HH:mm:ss"))
    setStaff(e.resourceId)
    setCostomer(e.costomer)
  }, [model])

  const bookappointment = () => {
    const data = {
      start: start,
      end: end,
      satffId: staffid,
      service: services,
      strict: strict,
      costomer: costomer
    }
    console.log(data);
    appAxios.post(apiRoutes.bookAppoitment, data).then(e => {
      console.log(e.data)
      disapatch(fetchAppoitment())
    })
  }

  return (
    <>
      <div className="container">
        <Resource localizer={localizer} onSelectEvent={onSelectEvent} onSelectSlot={onSelectSlot} />
      </div>
      {model ?
        <AppointmentModel
          close={() => {
            setModel(!model)
            setCostomer(0)
          }}
          onClick={bookappointment}
          cFinf={(i) => setCostomer(i.id)}
          sFind={i => setService(i.id)}
          strict={strict}
          strictMode={() => setStrict(!strict)}
          start={start}
          staffId={staffid}
          costomerId={costomer}
        />
        : null}

      {
        appointmentinfo ? <AppointmentInfoModel
          close={() => setAppointmentinfo(!appointmentinfo)}
          event={event}
        /> : null
      }
    </>
  );
};

export default Appoitment;

function Resource({ localizer, onSelectEvent, onSelectSlot }) {

  const [date, setDate] = useState(moment(new Date()));
  const [view, setView] = useState(Views.DAY);

  const { appointment: { appoitment }, stuff: { staff }, service: { service } } = useSelector(state => state)

  const dateset = (d, e = true) => new Date(`${d.appoitment_date} ${e ? d.appoitment_time : d.appoitment_end_time}`)

  const serviceName = (id) => service.filter((e) => e.id == id)[0].name

  const staffs = useCallback(() => {
    const data = staff.map(e => ({ resourceId: e.id, resourceTitle: e.firstname }));
    return data;
  }, [staff])


  const appointmentMap = useCallback(() => {
    const data = appoitment.map(e => ({
      id: e.id,
      title: `${serviceName(e.serviceid)}`,
      start: new Date(dateset(e).getFullYear(), dateset(e).getMonth(), dateset(e).getDate(), dateset(e).getHours(), dateset(e).getMinutes(), dateset(e).getSeconds()),
      end: new Date(dateset(e, false).getFullYear(), dateset(e, false).getMonth(), dateset(e, false).getDate(), dateset(e, false).getHours(), dateset(e, false).getMinutes(), dateset(e, false).getSeconds()),
      resourceId: e.staffid,
      service: e.serviceid,
      costomer: e.costomer_id,
    }))
    return data
  }, [appoitment])

  const onNavigate = useCallback((newDate) => setDate(newDate), [setDate]);
  const onView = useCallback((newView) => setView(newView), [setView]);
  const disapatch = useDispatch()
  const moveEvent = (e) => {
    const data = {
      staffid: e.resourceId,
      appoitment_date: moment(e.start).format("Y-M-D"),
      appoitment_time: `${moment(e.start).format("HH:mm")}:00`,
      appoitment_end_time: `${moment(e.end).format("HH:mm")}:00`,
      appoitmentId: e.event.id,

    }
    appAxios.put(apiRoutes.appointment, data).then(e => {
      disapatch(fetchAppoitment())
    })

  }
  return (
    <>
      <div className="height600">
        <DnDCalendar
          localizer={localizer}
          resources={staffs() || []}
          resourceIdAccessor={"resourceId" || ""}
          resourceTitleAccessor={"resourceTitle" || ""}
          onNavigate={onNavigate}
          onView={onView}
          view={view}
          date={date}
          events={appointmentMap() || []}
          draggableAccessor={(event) => true}

          onEventDrop={e => moveEvent(e)}
          onSelectEvent={e => onSelectEvent(e)}
          onSelectSlot={(e) => onSelectSlot(e)}
          onDragOver={(e) => moveEvent(e)}
          onEventResize={(e) => moveEvent(e)}

          resizable
          selectable

          min={new Date(1972, 0, 1, 9, 0, 0, 0)}
          max={new Date(1972, 0, 1, 23, 59, 59)}

        />
      </div>

    </>
  );
}



const AppointmentModel = ({ close, onClick, cFinf, sFind, start, staffId, costomerId }) => {
  const { costomer: { costomer }, stuff: { staff }, service: { service } } = useSelector((state) => state);

  const costomerOption = costomer ? costomer.map((data, k) => ({ key: k, id: data.id, label: `${data.name} ${data.mobaile}`, })) : []

  const serviceOption = service ? service.map((data, k) => ({ key: k, id: data.id, label: `${data.name} (${data.service_time} Hour)`, })) : []

  const staffname = (i) => staff ? staff.filter(data => data.id === i)[0] : "No data Found"

  const costomerFind = useCallback((i) => (costomerId ? costomer.filter(data => data.id === i)[0] : null), [costomerId])
  const data = (data) => data ? data : "No Data Found";

  // console.log(costomerFind(costomerId));

  return (
    <>
      <div
        class="modal fade show"
        style={{ display: "block" }}
        id="hello"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Book Appointment on {moment(start).format("Do MMMM  h:mm a")} With {staffname(staffId).firstname}
              </h5>
              <button
                type="button"
                onClick={() => close()}
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div class="mb-2">
                    <label htmlFor="name" class="form-label">
                      Select Costomer
                    </label>
                    <SearchSelect
                      col={true}
                      id="name"
                      onChange={(event, id) => cFinf(id)}
                      options={costomerOption}
                      label="Add Costomer"
                    />
                  </div>
                  <div class="mb-2">
                    <label htmlFor="name" class="form-label">
                      Select Service
                    </label>
                    <SearchSelect
                      col={true}
                      id="name"
                      onChange={(event, id) => sFind(id)}
                      options={serviceOption}
                      label="Add Costomer"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <ul class="list-group">
                    <li class="list-group-item" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><span className="font-weight-bold h6">{costomerFind(costomerId) && costomerFind(costomerId).name} Past Appointment</span></li>
                    <div class="collapse" id="collapseExample">
                    {costomerFind(costomerId) && costomerFind(costomerId).past_appointment.map((d)=><li class="list-group-item">A second item</li>)}
                    </div>
                    {/* <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                onClick={() => close()}
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => onClick()}
                type="button" class="btn btn-primary">
                Book Appoitment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const AppointmentInfoModel = ({ close, event }) => {
  const { costomer: { costomer }, stuff: { staff }, service: { service } } = useSelector((state) => state);

  const events = event
  console.log(events);
  return (
    <>
      <div
        class="modal fade show"
        style={{ display: "block" }}
        id="hello"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Heading
              </h5>
              <button
                type="button"
                onClick={() => close()}
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
              <button
                type="button"
                onClick={() => close()}
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => close()}
                type="button" class="btn btn-primary">
                Book Appoitment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SearchSelect = ({ label, inputchange, col, ...data }) => {
  return (
    <>
      <div className={col ? null : "col-3"}>
        <Autocomplete
          {...data}
          disablePortal
          id="combo-box-demo"
          // sx={{ width: 300 }}
          noOptionsText={"Nothing"}
          renderInput={(params) => (
            <TextField {...params} onChange={inputchange} label={label} />
          )}
        />
      </div>
    </>
  );
};
