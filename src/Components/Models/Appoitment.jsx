import React, { useState, useEffect } from "react";
import {
  Button,
  IconButton,
  Switch,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import apiRoutes, {appAxios} from "../../Constants/apiRoutes";
import { refreshStore } from "../../Store/Slice/refresh";
// import { appAxios } from "../../Constants/apiRoutes";
const Appoitment = ({ id }) => {
  var [date, setDate] = useState("");
  var [time, setTime] = useState("");
  var [nextAppoitment, setNextAppoitment] = useState(true);
  const [serviceObj, setServiceObg] = useState({});
  const [costomerSelected, setCostomerSelected] = useState(false);
  const [staffSelected, setStafffSelected] = useState(false);

  const dispatch = useDispatch();

  const costomerData = useSelector((stae) => stae.costomer.costomer);
  const serviceData = useSelector((stae) => stae.service.service);
  const staffData = useSelector((stae) => stae.stuff.staff);

  const service = serviceData
    ? serviceData.map((data) => ({ id: data.id, label: data.name }))
    : [];
  const costomerOption = serviceData
    ? costomerData.map((data) => ({
        id: data.id,
        label: data.name + " " + data.mobaile.replace(/.(?=.{4})/g, '*'),
      }))
    : [];
  const staff = staffData
    ? staffData.map((data) => ({ id: data.id, label: data.name }))
    : [];
  const serVicefind = (id) =>
    setServiceObg(serviceData.filter((data) => data.id === id)[0]);
  const costomerfind = (id) =>
    setCostomerSelected(costomerData.filter((data) => data.id === id)[0]);
  const stufffind = (id) =>
    setStafffSelected(staffData.filter((data) => data.id === id)[0]);

  const submit = () => {

    var data = {
      costomer_id: costomerSelected.id,
      staffid: staffSelected.id,
      serviceid: serviceObj.id,
      appoitment_date: date.toString(),
      appoitment_time: time.toString(),
      nextappoitment: true,
    };
    appAxios.post(apiRoutes.bookAppoitment, data).then((e) => {
      console.log(e.data);
      // alert(e.data)
      dispatch(refreshStore());
    });
  };
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">
              Add New Appoitment
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form class="needs-validation" novalidate>
            <div class="modal-body">
              <div class="form-row">
                <div class="mb-2 col-12">
                  <div className="row m-1">
                    <div className="col-md-12 col-sm-12">
                      <SearchSelect
                        col={true}
                        id="name"
                        onChange={(event, id) => costomerfind(id.id)}
                        options={costomerOption}
                        label="Add Costomer"
                      />
                    </div>
                  </div>
                  <div className="row m-1">
                    <div className="col-md-6 col-sm-12 p-2">
                      <SearchSelect
                        onChange={(event, id) => serVicefind(id.id)}
                        options={service}
                        label="Add Service"
                        col={true}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 p-2">
                      <SearchSelect
                        col={true}
                        onChange={(event, id) => {
                          stufffind(id.id);
                        }}
                        options={staff}
                        label="Add Staff"
                      />
                    </div>
                  </div>
                  <div className="row m-1">
                    <div className="col-md-6 col-sm-12 p-2">
                      <TextField
                        type="date"
                        fullWidth
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 p-2">
                      <TextField
                        fullWidth
                        type="time"
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div class="form-group my-0 m-1 p-1">
                      <Switch
                        onChange={(e) => setNextAppoitment(!nextAppoitment)}
                        checked={nextAppoitment}
                      />
                      {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                      <label class="form-check-label" for="invalidCheck">
                        Next Appoitment Scedule
                      </label>
                    </div>
                  </div>
                    {nextAppoitment ? (
                      <>
                        <div className="row m-1">
                          <div className="col-md-6 col-sm-12">
                            <SearchSelect
                              onChange={(event, id) => serVicefind(id.id)}
                              options={service}
                              label="Add Service"
                              col={true}
                            />
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <SearchSelect
                              col={true}
                              onChange={(event, id) => {
                                stufffind(id.id);
                              }}
                              options={staff}
                              label="Add Staff"
                            />
                          </div>
                        </div>
                      </>
                    ) : null}
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              {/* <input type="reset" class="btn btn-danger" onClick={() => setwmo('')} /> */}

              <button type="button" onClick={submit} class="btn btn-primary">
                Create Costumer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = ({ title, plase, onchange, ...props }) => {
  return (
    <>
      <div class="col-md-4 mb-3">
        <label for="validationCustomUsername">{title}</label>
        <input
          class="form-control"
          id="validationCustomUsername"
          onChange={onchange}
          placeholder={plase}
          aria-describedby="inputGroupPrepend"
          {...props}
        />
      </div>
    </>
  );
};
export default Appoitment;

const SearchSelect = ({ label, inputchange, col, ...data }) => {
  return (
    <>
      <div className={col ? null : "col-12"}>
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
