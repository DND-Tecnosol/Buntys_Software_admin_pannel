import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import apiRoutes,{appAxios as axios} from '../../Constants/apiRoutes';
// import {appAxios as axios} from '../../constants/apiRoutes.js'
import { fetchServices } from '../../Store/Slice/All/serviceSlice';
import { refreshStore } from '../../Store/Slice/refresh';
import { addmsg } from '../../Store/Slice/All/msgSlice';

const Alertmsg = ({ msg }) => {
  return (<>
    <div class="alert alert-success" role="alert">
      {msg}
    </div>
  </>)
}

const AddService = ({ id }) => {


  const { serviceCetegury } = useSelector(state => state.categury)
  var [name, setName] = useState("");
  var [progress, setProgrss] = useState(false);
  var [serviceCategury, setServiceCategury] = useState("");
  var [price, setPrice] = useState("");
  var [minPrice, setMinPrice] = useState("");
  var [serviceDuration, setServiceDuration] = useState("");
  var [serviceTime, setServiceTime] = useState("");
  var [msg, setMsg] = useState(false);
  // var [apponot, setname] = useState('');
  const dispatch = useDispatch();

  const submit = () => {

    var data = {
      servicetypeid: serviceCategury,
      name: name,
      price: price,
      minprice: minPrice,
      service_duration: serviceDuration,
      service_time: serviceTime,
    };
    console.log(data);
    axios.post(apiRoutes.Service, data, {
      onUploadProgress: (e) => {
        setProgrss(true)
      }
    }).then((e) => {
      // setMsg(e.data.msg)
      console.log(e.data);
      setProgrss(false)
      dispatch(addmsg(e.data))
      setName('')
      setServiceCategury('')
      setPrice('')
      setMinPrice('')
      setMsg('')
      dispatch(fetchServices())
      // setTimeout(()=>setMsg(false),10000)
    });
  };
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
        <div class="modal-dialog" role="document">
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
                {msg ? <Alertmsg msg={msg} /> : null}

                <div className="container">
                  <div class="form-row">
                    <Input
                      onchange={(e) => setName(e.target.value)}
                      plase={'Service Name'}
                      value={name}
                      title={"Service Name"}
                      type="text"
                    />
                    <div class="col-md-6 mb-3">
                      <label for="validationCustomUsername">Service Categury</label>
                      <select
                        onChange={(e) => setServiceCategury(e.target.value)}
                        value={serviceCategury}
                        class="custom-select"
                        id="validationCustomUsername"
                      >
                        <option selected>Select Service Categury</option>
                        {serviceCetegury.map((e, i) => <option value={e.id}>{e.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <Input
                      onchange={(e) => setPrice(e.target.value)}
                      plase={'Price'}
                      value={price}
                      title={"Price"}
                      type="text"
                    />
                    <Input
                      onchange={(e) => setMinPrice(e.target.value)}
                      type="text"
                      value={minPrice}
                      plase={'Min Price'}
                      title={"Min Price"}
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      onchange={(e) => setServiceDuration(e.target.value)}
                      plase={'Service Duration'}
                      value={serviceDuration}
                      title={"Service Duration"}
                      type="text"
                    />
                    <Input
                      onchange={(e) => setServiceTime(e.target.value)}
                      type="text"
                      value={serviceTime}
                      plase={'Service Time'}
                      title={"Service Time"}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <input type="reset" class="btn btn-danger" />

                <button type="button" onClick={submit} class={`btn btn-${progress ? 'warning' : 'primary'}`}>
                 {progress ? <><div class="spinner-grow mx-1" style={{marginTop:'3px',height:'1rem',width:'1rem'}} role="status">
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
const Input = ({ title, plase, onchange, ...props }) => {
  return (
    <>
      <div class="col-md-6 mb-3">
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
}
export default AddService;
