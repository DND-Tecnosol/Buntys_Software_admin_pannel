import React from "react";
import PropTypes from "prop-types";
import { IconButton, Switch } from "@mui/material";
import { useState, useCallback } from "react";
import { HiBellAlert } from "react-icons/hi2";
import { MdAlarm, MdDoorbell, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import Page from "../Layouts/Page";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
require("react-big-calendar/lib/css/react-big-calendar.css");

// import 'react-big-calendar/lib/sass/styles'
const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

const Appoitment = ({ header }) => {
  const [modelActive, setMopdelActive] = useState(false);
  const [costomers, setCostomerData] = useState();

  const {
    costomer: { costomer },
    stuff: { staff },
  } = useSelector((state) => state);

  const clientDetail = (id) => {
    // alert(id)
    setMopdelActive(true);
    setCostomerData(id);
    // console.log()
    // cetEguryFilter(costomers)
  };

  return (
    <Page header={header}>
      {/* <div className="row justify-content-around">
                {staff ? staff.map((data) => <AppoitmentCard data={data} clientDetail={clientDetail} />) : null}
          </div> */}
      <div className="container">
        <Resource localizer={localizer} />
      </div>
      {modelActive ? (
        <AppointmentModel close={() => setMopdelActive(false)} id={costomers} />
      ) : null}
    </Page>
  );
};

const AppointmentModel = ({ close, id }) => {
  const {
    costomer: { costomer },
    stuff: { staff },
    appointment: { appoitment },
  } = useSelector((state) => state);

  const cetEguryFilter = (id) => {
    const appointmentData = id
      ? appoitment.filter((arry) => arry.id == id)[0]
      : false;
    const costomerData = appointmentData
      ? costomer.filter((arry) => arry.id == appointmentData.costomer_id)[0]
      : false;
    const staffData = costomerData
      ? staff.filter((arry) => arry.id == appointmentData.staffid)[0]
      : false;
    const data = {
      appoitment: appointmentData,
      costomer: costomerData,
      staff: staffData,
    };
    console.log(data);
  };
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
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
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
            <div class="modal-body">{cetEguryFilter(id) || null}</div>
            <div class="modal-footer">
              <button
                type="button"
                onClick={() => close()}
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AppoitmentCard = ({ data, clientDetail }) => {
  const { costomer_id, serviceid, id, staffid } = data;
  const {
    appointment: { appoitment },
  } = useSelector((state) => state);
  const staffAppointment = appoitment
    ? appoitment.filter((datas) => datas.staffid == data.id)
    : [];
  return (
    <>
      <div
        className="card col-md-5 col-sm-12 m-1"
        style={{ height: "fit-content" }}
      >
        <div className="">
          <div className="card-header text-center text-capitalize">
            <h5>{data.name || "staff name"}</h5>
          </div>
          <div className="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Costomer Name</th>
                  <th scope="col">Time</th>
                  <th scope="col">Service</th>
                </tr>
              </thead>
              <tbody>
                {staffAppointment
                  ? staffAppointment.map((e, k) => (
                      <AppoitmentTable
                        clientClick={() => clientDetail(e.id)}
                        data={e}
                      />
                    ))
                  : null}
                {/* <AppoitmentTable /> */}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <div className="justyfy-between">
              <h5>{staffAppointment.length}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AppoitmentTable = ({ clientClick, data }) => {
  const {
    costomer: { costomer },
    service: { service },
  } = useSelector((state) => state);
  const costomerFind = (id) =>
    costomer ? costomer.filter((datas) => datas.id == id)[0].name : [];
  const serviceFind = (id) =>
    service ? service.filter((datas) => datas.id == id)[0].name : [];
  const { name } = data;
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }
  return (
    <>
      <tr className="">
        <th scope="row">1</th>
        <td>
          <span onClick={clientClick} className="text-link" role="button">
            {costomerFind(data.costomer_id)}
          </span>
        </td>
        <td>{tConvert(data.appoitment_time)}</td>
        <td>{serviceFind(data.serviceid)}</td>
      </tr>
    </>
  );
};

export default Appoitment;

function Resource({ localizer }) {
  const events = [
    {
      id: 0,
      title: "Board meeting",
      start: new Date(2023, 0, 22, 9, 0, 0),
      end: new Date(2023, 0, 22, 13, 0, 0),
      resourceId: 1,
    },
    {
      id: 1,
      title: "MS training",
      start: new Date(2023, 0, 22, 14, 0, 0),
      end: new Date(2023, 0, 22, 16, 30, 0),
      resourceId: 2,
    },
    {
      id: 2,
      title: "Team lead meeting",
      start: new Date(2023, 0, 22, 8, 30, 0),
      end: new Date(2023, 0, 22, 12, 30, 0),
      resourceId: 3,
    },
    {
      id: 11,
      title: "Birthday Party",
      start: new Date(2023, 0, 22, 7, 0, 0),
      end: new Date(2023, 0, 22, 10, 30, 0),
      resourceId: 4,
    },
  ];

  const resourceMap = [
    { resourceId: 1, resourceTitle: "havi" },
    { resourceId: 2, resourceTitle: "hardik" },
    { resourceId: 3, resourceTitle: "zara" },
    { resourceId: 4, resourceTitle: "kavi" },
  ];
  const [date, setDate] = useState(new Date(2023, 0, 22));
  const [view, setView] = useState(Views.DAY);

  const onNavigate = useCallback((newDate) => setDate(newDate), [setDate]);
  const onView = useCallback((newView) => setView(newView), [setView]);

  // const date = new Date(2023, 0, 22, 8, 30, 0);
  // console.log(date);
  return (
    <>
      <div className="height600">
        <DnDCalendar
          localizer={localizer}
          resources={resourceMap}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          onNavigate={onNavigate}
          onView={onView}
          view={view}
          date={date}
          events={events || []}
          draggableAccessor={(event) => true}
        />
        {events.map((e, k) => (
          <button>{e.title}</button>
        ))}
      </div>
    </>
  );
}

// Resource.propTypes = {
//   localizer: PropTypes.instanceOf(DateLocalizer),
// }
