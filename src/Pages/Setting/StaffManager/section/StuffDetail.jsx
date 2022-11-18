import { Button, IconButton } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { BsClipboard } from 'react-icons/bs'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import apiRoutes from '../../../../Constants/apiRoutes'
import { fetchStaff } from '../../../../Store/Slice/All/staffSlice'

export default function StuffDetail() {
  const { staff } = useSelector((state => state.stuff))
  function addHours(date, hours) {
    date.setHours(date.getHours() + hours);

    return date;
  }

  const date = new Date();

  const newDate = addHours(date, 1);

  console.log(newDate);
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="">
        </div>
        <Button variant='contained' data-toggle="modal"
          data-target="#addstuff" className='my-3' color='warning'>
          Add Stuff Categury
        </Button>
      </div>
      <div className="table-card bg-white rounded-lg m-3">
        <table class="table border-0">
          <thead className='border-0'>
            <tr className='border-0'>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Stuff Designation</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {staff ?

              staff.map((staff, index) => {
                const { name, status } = staff
                return (<>
                  <tr>
                    {/* <th scope="row">{++index}</th> */}
                    <td>{name}</td>
                    <td>{status ? <span className='text-success'>Active</span> : <span className='text-danger'>DeActive</span>}</td>
                    <td>
                      <IconButton>
                        <MdEdit color='orange' size={20} />
                      </IconButton>
                      <IconButton>
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
      <AddStuff id={'addstuff'} />
    </>
  )
}


const AddStuff = ({ id }) => {
  // personel Info
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [middelname, setmiddelname] = useState("")

  const [img, setImg] = useState("")
  const [marital, setmarital] = useState("")
  const [gender, setGender] = useState("")
  
  const [birthday, setBirthday] = useState("")
  const [anny, setAnny] = useState("")
  // const [gender, setGender] = useState("")

  // Store Categury & StffType
  const [stufftype, setstufftype] = useState("")
  const [StoreId, setStoreId] = useState("")
  // Contact Info
  const [mobaile, setmobaile] = useState("")
  const [whatmobaile, setwhatmobaile] = useState("")
  const [email, setemail] = useState("")
  // Address
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pin, setPin] = useState("")
  const [permenentAddress, setpermenentAddress] = useState("")
  const [ResidentAddresses, setResidentAddresses] = useState("")
  // Jpb Timeing
  const [jobstart, seteJobstart] = useState("")
  const [jobhours, setJobhours] = useState("")
  const [Weekend, setWeekend] = useState("")
  // Payout
  const [sallery, setSellary] = useState("")
  const [ProductSale, setProductSale] = useState("")
  const [PkgSale, setPkgSale] = useState("")
  const [serviceSale, setserviceSale] = useState("")
  const [serviceExicute, setserviceExicute] = useState("")
  // Benifits
  const [pf, setPf] = useState("")
  const [ins, setIns] = useState("")
  const [mediClaim, setMediclaim] = useState("")

  const [msg, setMsg] = useState("")
  const dispatch = useDispatch()
  const submit = () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      middelname: middelname,
      mobaile: mobaile,
      whatmobaile: whatmobaile,
      email: email,
      city: city,
      state: state,
      pin: pin,
      permenentAddress: permenentAddress,
      ResidentAddresses: ResidentAddresses,
      jobstart: jobstart,
      jobhours: jobhours,
      Weekend: Weekend,
      sallery: sallery,
      ProductSale: ProductSale,
      PkgSale: PkgSale,
      serviceSale: serviceSale,
      serviceExicute: serviceExicute,
      pf: pf,
      ins: ins,
      mediClaim: mediClaim,
      
      img:img,
      gender:gender ,
      stufftype:stufftype,
      StoreId:StoreId

    }
    axios.post(apiRoutes.stuff, data).then(e => {
      setMsg(e.data.msg)
      dispatch(fetchStaff())
    })
  }

  return (
    <>
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
                  New Staff

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
                  {/* personel Info */}
                  <center className="my-3"><h5>Staff Personel Info</h5></center>

                  <div className="container">
                    <div class="form-row">
                      <Input
                        onchange={(e) => setfirstname(e.target.value)}
                        plase={'First Name'}
                        value={firstname}
                        title={"First Name"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setlastname(e.target.value)}
                        plase={'Last Name'}
                        value={lastname}
                        title={"Last Name"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setmiddelname(e.target.value)}
                        plase={'Middel Name'}
                        value={middelname}
                        title={"Middel Name"}
                        type="text"
                      />
                    </div>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setfirstname(e.target.value)}
                        plase={'Birth Day'}
                        value={firstname}
                        title={"Staff Birthday"}
                        type="date"
                      />
                      <Input
                        onchange={(e) => setlastname(e.target.value)}
                        plase={'Staff Birthday'}
                        value={lastname}
                        title={"Staff Marrige Annyversury"}
                        type="date"
                      />
                      
                    </div>

                    <div class="form-row">
                    {/* <input */}
                    <Input
                        onchange={(e) => setJobhours(e.target.value)}
                        plase={'9 hours'}
                        value={jobhours}
                        title={"Profile Img"}
                        type="file"
                      />
                    <div className="col-4">
                        <div class="form-group">
                          <label for="inputGroupSelect01">Gender</label>
                          <select
                            onChange={(e) => setGender(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Staff Gender</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-4">
                        <div class="form-group">
                          <label for="inputGroupSelect01">Marital Status</label>
                          <select
                            onChange={(e) => setWeekend(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Weekend Day</option>
                            <option value="Mon">Meride</option>
                            <option value="Thu">none marride</option>
                            <option value="Thu">Devorce</option>
                            <option value="Thu">Angage</option>
                          </select>
                        </div>
                      </div>
                      
                    </div>
                    {/* Contact Info */}
                    <div class="form-row">
                      <Input
                        onchange={(e) => setmobaile(e.target.value)}
                        plase={'Mobaile No.'}
                        value={mobaile}
                        title={"Mobaile No"}
                        type="text"
                      />
                      <div class="col-md-4 mb-3">
                        <label for="validationCustomUsername">Whatsapp No</label>
                        <div class="input-group">
                          <input
                            onChange={(e) => setwhatmobaile(e.target.value)}
                            value={whatmobaile}
                            type="text"

                            class="form-control"
                            id="validationCustomUsername"
                            placeholder="Whatsapp no."
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <div class="input-group-append">
                            <button
                              onClick={() => setwhatmobaile(mobaile)}
                              class="btn btn-primary"
                              type="button"
                            >
                              <BsClipboard />
                            </button>
                          </div>
                        </div>
                      </div>

                      <Input
                        onchange={(e) => setemail(e.target.value)}
                        plase={'Email Id'}
                        value={email}
                        title={"Email Id"}
                        type="email"
                      />
                    </div>
                    {/* Address */}
                    <center className="my-3"><h5>Staff Address</h5></center>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setCity(e.target.value)}
                        plase={'City'}
                        value={city}
                        title={"City"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setState(e.target.value)}
                        plase={'State'}
                        value={state}
                        title={"state"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setPin(e.target.value)}
                        plase={'Pin'}
                        value={pin}
                        title={"pin"}
                        type="text"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Permenent Addreess</label>
                          <textarea
                            onChange={(e) => setpermenentAddress(e.target.value)}
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">
                            Resident Address
                          </label>
                          <textarea
                            onChange={(e) => setResidentAddresses(e.target.value)}
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    {/* Job Shedule */}
                    <center className="my-3"><h5>Job Scidule & Time</h5></center>
                    <div class="form-row">
                      <Input
                        onchange={(e) => seteJobstart(e.target.value)}
                        plase={'Job Starting Time'}
                        value={jobstart}
                        title={"Job Starting Time"}
                        type="time"
                      />
                      <Input
                        onchange={(e) => setJobhours(e.target.value)}
                        plase={'9 hours'}
                        value={jobhours}
                        title={"Working Hours"}
                        type="text"
                      />
                      <div className="col-4">
                        <div class="form-group">
                          <label for="inputGroupSelect01">Select Weekend Day</label>
                          <select
                            onChange={(e) => setWeekend(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Weekend Day</option>
                            <option value="Mon">Monday</option>
                            <option value="Thu">Thusday</option>
                            <option value="Wen">Wenusday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <center className="my-3"><h5>Stuff Payouts</h5></center>
                    <div class="form-row">
                      <Input
                        onchange={(e) => setSellary(e.target.value)}
                        plase={'in no.'}
                        value={sallery}
                        title={"Sallery"}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setProductSale(e.target.value)}
                        plase={'In No'}
                        value={ProductSale}
                        title={"Product Sell Payout"}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setPkgSale(e.target.value)}
                        plase={'In No'}
                        value={PkgSale}
                        title={"Package Sell Payout"}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setserviceSale(e.target.value)}
                        plase={'In No'}
                        value={serviceSale}
                        title={"Service Sell Payout"}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setserviceExicute(e.target.value)}
                        plase={'In No'}
                        value={serviceExicute}
                        title={"Service Exicute Payout"}
                        type="number"
                      />

                    </div>
                    {/* Benifits */}
                    <center className="my-3"><h5>Stuff Benifits</h5></center>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setPf(e.target.value)}
                        plase={'in no.'}
                        value={pf}
                        title={"PF"}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setIns(e.target.value)}
                        plase={'In No'}
                        value={ins}
                        title={"Insaurence"}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setMediclaim(e.target.value)}
                        plase={'In No'}
                        value={mediClaim}
                        title={"Mediclaim"}
                        type="number"
                      />
                    </div>

                    {/* Stufff Document */}
                    <center className="my-3"><h5>Stuff Document's</h5></center>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setPf(e.target.value)}
                        plase={'in no.'}
                        value={pf}
                        title={"Adhar Card No."}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setIns(e.target.value)}
                        plase={'In No'}
                        value={ins}
                        title={"Pan Card No."}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setMediclaim(e.target.value)}
                        plase={'Driving Lincence No.'}
                        value={mediClaim}
                        title={"Driving Lincence No."}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setPf(e.target.value)}
                        plase={'in no.'}
                        value={pf}
                        title={"Adhar Card Doc"}
                        type="file"
                      />
                      <Input
                        onchange={(e) => setIns(e.target.value)}
                        plase={'In No'}
                        value={ins}
                        title={"Pan Card Doc"}
                        type="file"
                      />
                      <Input
                        onchange={(e) => setMediclaim(e.target.value)}
                        plase={'Driving Lincence No.'}
                        value={mediClaim}
                        title={"Driving Lincence Doc"}
                        type="file"
                      />
                    </div>

                    {/* Stufff Document */}
                    <center className="my-3"><h5>Stuff Account Detail</h5></center>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setPf(e.target.value)}
                        plase={'in no.'}
                        value={pf}
                        title={"Bank Account No."}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setIns(e.target.value)}
                        plase={'In No'}
                        value={ins}
                        title={"Bank Account IFC Code"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setMediclaim(e.target.value)}
                        plase={'Driving Lincence No.'}
                        value={mediClaim}
                        title={"Bank Name"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setPf(e.target.value)}
                        plase={'in no.'}
                        value={pf}
                        title={"Bank Holder Name"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setIns(e.target.value)}
                        plase={'In No'}
                        value={ins}
                        title={"Passbook Ya cheq Copy"}
                        type="file"
                      />
                    </div>

                    {/* Stufff Document */}
                    <center className="my-3"><h5>Center & Stuff Categury</h5></center>

                    <div class="form-row">
                    <div className="col-6">
                        <div class="form-group">
                          <label for="inputGroupSelect01">Select store</label>
                          <select
                            onChange={(e) => setWeekend(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Weekend Day</option>
                            <option value="Mon">Monday</option>
                            <option value="Thu">Thusday</option>
                            <option value="Wen">Wenusday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="inputGroupSelect01">Select Stuff Type</label>
                          <select
                            onChange={(e) => setWeekend(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Weekend Day</option>
                            <option value="Mon">Monday</option>
                            <option value="Thu">Thusday</option>
                            <option value="Wen">Wenusday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer border-0">
                  <input type="reset" class="btn btn-danger" />

                  <button type="button" onClick={submit} class="btn btn-primary">
                    Create New Stuff
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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
}

const Alertmsg = ({ msg }) => {
  return (<>
    <div class="alert alert-success" role="alert">
      {msg}
    </div>
  </>)
}