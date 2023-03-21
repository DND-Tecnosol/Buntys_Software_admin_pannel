import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import apiRoutes, { appAxios as axios } from '../../Constants/apiRoutes';
// import {appAxios as axios} from '../../constants/apiRoutes.js'
import { fetchServices } from '../../Store/Slice/All/serviceSlice';
import { refreshStore } from '../../Store/Slice/refresh';
import { addmsg } from '../../Store/Slice/All/msgSlice';
import { Autocomplete, TextField } from '@mui/material';
import { toast } from 'react-toastify';

const Alertmsg = ({ msg }) => {
  return (<>
    <div class="alert alert-success" role="alert">
      {msg}
    </div>
  </>)
}


const serviceTimes = ['noduration', '+ 10 minute', '+ 15 minute', '+ 20 minute', '+ 30 hour', '+ 45 minute', '+ 1 hour', '+ 2 hour', '+ 3 hour', '+ 4 hour', '+ 5 hour', '+ 6 hour', '+ 7 hour', '+ 8 hour', '+ 9 hour', '+ 10 hour', '+ 11 hour', '+ 12 hour', '+ 90 minute', '+ 150 minute', '+ 210 minute', '+ 270 minute'];
const serviceReminder = ['noremember', '+ 1 day', '+ 2 day', '+ 4 day', '+ 5 day', '+ 6 day', '+ 1 week', '+ 8 day', '+ 9 day', '+ 10 day', '+ 15 day', '+ 2 week', '+ 3 day', '+ 3 week', '+ 4 week', '+ 1 month', '+ 2 month', '+ 4 month', '+ 5 month', '+ 6 month', '+ 7 month', '+ 9 month', '+ 10 month', '+ 11 month', '+ 12 month',];

function AddService({ id }) {


  const { serviceCetegury } = useSelector(state => state.categury);
  const { product } = useSelector(state => state.product);
  const productOpt = product && product.filter(e => e.producttypes == "insalon").map(e => ({ id: e.id, label: e.name }));
  const serviceCeteguryOpt = serviceCetegury && serviceCetegury.map((e, k) => ({ id: e.id, label: e.name }));
  const serviceTimesOpt = serviceTimes.map((e, k) => ({ id: String(k), label: e }));
  const serviceReminderOpt = serviceReminder.map((e, k) => ({ id: String(k), label: e }));
  var [progress, setProgrss] = useState(false);

  var [name, setName] = useState("");
  var [serviceCategury, setServiceCategury] = useState("");
  var [price, setPrice] = useState("");
  var [minPrice, setMinPrice] = useState("");
  var [serviceTime, setServiceTime] = useState("");
  const [value, setValue] = React.useState('');
  var [serviceDuration, setServiceDuration] = useState("");

  var [inputserviceDuration, setServiceDurationinput] = useState("");
  var [inputserviceCategury, setServiceCateguryinput] = useState("");
  var [inputserviceTime, setServiceTimeinput] = useState("");
  const [inputValue, setInputValue] = React.useState('');

  // var [apponot, setname] = useState('');
  const dispatch = useDispatch();

  const submit = () => {

    var data = {
      product_id: value.id,
      servicetypeid: serviceCategury.id,
      name: name,
      price: price,
      minprice: minPrice,
      service_duration: serviceTime.label,
      service_remember: serviceDuration.label
    };
    console.log(data);
    axios.post(apiRoutes.Service, data, {
      onUploadProgress: (e) => {
        setProgrss(true);
      }
    }).then((e) => {
      // setMsg(e.data.msg)
      toast(e.data.msg)
      console.log(e.data);
      setProgrss(false);
      dispatch(addmsg(e.data));
      setName('')
      setServiceCategury('')
      setPrice('')
      setMinPrice('')
      setServiceTime('')
      setValue('')
      setServiceDuration('')
      dispatch(fetchServices());
      // setTimeout(()=>setMsg(false),10000)
    });
  };
  console.log(serviceReminderOpt);
  return (

    <div>

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
                New Sevice
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
                <div className="container">
                  <div class="form-row my-2">
                    <div className="col-md-12">
                      <TextField variant='filled'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        label={"Service Name"}
                        type="text"
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-md-6 col-sm-12">
                      <Autocomplete
                        // 
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}

                        options={productOpt}
                        // sx={{ width: 300 }}
                        fullWidth
                        renderInput={(params) => <TextField variant='filled'  {...params} label="asigned Product" />} />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Autocomplete
                        // 
                        value={serviceCategury}
                        onChange={(event, newValue) => {
                          setServiceCategury(newValue);
                        }}
                        inputValue={inputserviceCategury}
                        onInputChange={(event, newInputValue) => {
                          setServiceCateguryinput(newInputValue);
                        }}

                        options={serviceCeteguryOpt}
                        // sx={{ width: 300 }}
                        fullWidth
                        renderInput={(params) => <TextField variant='filled'  {...params} label="Service Categury" />}
                      />
                    </div>
                  </div>
                  <div className="form-row my-2">
                    <div className="col-md-6 col-sm-12">
                      <TextField variant='filled'
                        onChange={(e) => setPrice(e.target.value)}
                        label={'Price'}
                        value={price}
                        title={"Price"}
                        type="text"
                        fullWidth
                      />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <TextField variant='filled'
                        onChange={(e) => setMinPrice(e.target.value)}
                        type="text"
                        value={minPrice}
                        label={'Min Price'}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 col-sm-12">
                      <Autocomplete

                        value={serviceTime}
                        onChange={(event, newValue) => {
                          setServiceTime(newValue);
                        }}
                        inputValue={inputserviceTime}
                        onInputChange={(event, newInputValue) => {
                          setServiceTimeinput(newInputValue);
                        }}
                        options={serviceTimesOpt}
                        fullWidth
                        renderInput={(params) => <TextField variant='filled'  {...params} label="service Hours" />}

                      />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <Autocomplete

                        value={serviceDuration}
                        onChange={(event, newValue) => {
                          setServiceDuration(newValue);
                        }}
                        inputValue={inputserviceDuration}
                        onInputChange={(event, newInputValue) => {
                          setServiceDurationinput(newInputValue);
                        }}

                        options={serviceReminderOpt || []}
                        // sx={{ width: 300 }}
                        fullWidth
                        renderInput={(params) => <TextField variant='filled'  {...params} label="Service Reminder " />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <input type="reset" class="btn btn-danger" />

                <button type="button" onClick={submit} class={`btn btn-${progress ? 'warning' : 'primary'}`}>
                  {progress ? <><div class="spinner-grow mx-1" style={{ marginTop: '3px', height: '1rem', width: '1rem' }} role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                    Please Wait...
                  </> : 'Create New Service'}

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddService;
