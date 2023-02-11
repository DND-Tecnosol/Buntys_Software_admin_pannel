import React, { useState } from 'react'
import { IconButton, Button, Switch } from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import apiRoutes,{appAxios as axios} from '../../../../../Constants/apiRoutes';

import { fetchServices } from '../../../../../Store/Slice/All/serviceSlice';
import { refreshStore } from '../../../../../Store/Slice/refresh';
import { addmsg } from '../../../../../Store/Slice/All/msgSlice';

export default function ServiceManager() {
  const [id, setid] = useState('')
  const dispatch = useDispatch();
  const { service } = useSelector(state => state.service)
  const { msg } = useSelector(state => state.msg)
  console.log(service);
  const DelateService = (id) => {
    axios.delete(`${apiRoutes.Service}/${id}`).then(e => {
      dispatch(fetchServices())
      console.log(e.data.msg);
      dispatch(addmsg(e.data))
    })
  }
  console.log(msg);
  return (
    <>
      <div>
        {msg ? 
          msg.map((data)=>{
            var clasName=(data.code==1) ? "alert-success" :(data.code==2) ? "alert-warning" : "alert-danger"
            return (
            <>
        <div className={`alert ${clasName} alert-dismissible fade show`} role="alert">
          <strong>{data.msg}</strong>.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
            </>
            )
          })
          : null
        }
      </div>
      <div className="container d-flex justify-content-between">
        <div className="">
        </div>
        <Button onClick={() => setid(0)} variant='contained' data-toggle="modal" data-target="#services" className='my-3' color='warning'>
          Add Service
        </Button>
      </div>
      <div className="table-card bg-white rounded-lg m-3">
        <table class="table border-0">
          <thead className='border-0'>
            <tr className='border-0'>
              <th scope="col">#</th>
              <th scope="col">Service Name</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {service ?
              service.map((service, index) => {
                // const { name, status } = categury
                return (<>
                  <tr key={index} >
                    <th scope="row">{++index}</th>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.status ? <span className='text-success'>Active</span> : <span className='text-danger'>DeActive</span>}</td>
                    <td>
                      <IconButton onClick={() => setid(service.id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                        <MdEdit color='orange' size={20} />
                      </IconButton>
                      <IconButton onClick={() => DelateService(service.id)}>
                        <MdDelete color='red' size={20} />
                      </IconButton>
                    </td>
                  </tr>
                </>)
              }) : null
            }
          </tbody>
        </table>
      </div>
      {id ? <UpdateAddService id={'updateServices'} close={() => setid(0)} sid={id} /> : null}
    </>
  )
}

// const SwitchStatus=({status})=>{
// const [staus,setStatus] =useState(status)

//   const chengeStatus=()=>{
//    const newsta= setStatus(!status)

//   }
//   return(
//   <>
//   <Switch onChange={()=>}  />
//   </>
//   )
// }


const Alertmsg = ({ msg }) => {
  return (<>
    <div class="alert alert-success" role="alert">
      {msg}
    </div>
  </>)
}

const UpdateAddService = ({ id, sid = 0, close }) => {


  const { serviceCetegury } = useSelector(state => state.categury)
  var services = useSelector(state => state.service.service)
  var serviceData = services.filter(data => data.id == sid)[0]

  var { name, id, servicetypeid, minprice, price, service_duration, service_time } = serviceData

  var [names, setName] = useState(name);
  var [serviceCategury, setServiceCategury] = useState(servicetypeid);
  var [prices, setPrice] = useState(price);
  var [minPrice, setMinPrice] = useState(minprice);
  var [serviceDuration, setServiceDuration] = useState(service_duration);
  var [serviceTime, setServiceTime] = useState(service_time);
  var [msg, setMsg] = useState(false);
  // var [apponot, setname] = useState('');
  const dispatch = useDispatch();
  console.log(`serId:${sid} serName:${serviceData.name} serStateName:${name}`);
  const submit = () => {

    var data = {
      id: sid,
      servicetypeid: serviceCategury,
      name: names,
      price: prices,
      minprice: minPrice,
      service_duration: serviceDuration,
      service_time: serviceTime
    };
    console.log(data);
    axios.put(`${apiRoutes.Service}/${id}`, data).then((e) => {
      dispatch(addmsg(e.data))
      setName('')
      setServiceCategury('')
      setPrice('')
      setMinPrice('')
      setMsg('')
      setServiceDuration('')
      setServiceTime('')
      dispatch(refreshStore())
      // setTimeout(()=>setMsg(false),10000)
    });
  };
  return (

    <>
      <div class="modal fade show" style={{ display: 'block' }} id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="exampleModalLabel">
                New Sevice
              </h5>
              <button
                onClick={close}
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
                      value={names}
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
                      // value={}
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
                      value={prices}
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

                <button type="button" onClick={submit} class="btn btn-warning text-white">
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
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