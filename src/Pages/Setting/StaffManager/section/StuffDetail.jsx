import { Button, IconButton, Switch } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { BsClipboard } from 'react-icons/bs'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import apiRoutes from '../../../../Constants/apiRoutes'
import { fetchStaff } from '../../../../Store/Slice/All/staffSlice'

export default function StuffDetail() {
  const { staff } = useSelector((state => state.stuff))
  const { stuffCetegury } = useSelector((state => state.categury))
  const dispatch=useDispatch()
  const cetEguryFilter=(id,arr)=>arr.filter((arry)=>arry.id===id)
  // console.log()
  const onDelate=(id)=>{
    axios.delete(`${apiRoutes.stuff}/${id}`).then((e)=>{

      dispatch(fetchStaff())
    })
  }
  // console.log(newDate);
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
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Stuff Designation</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {staff ?

              staff.map((staff, index) => {
                const { firstname,lastname, status,id,stafftypesid } = staff
                
                return (<>
                  <tr>
                    {/* <th scope="row">{++index}</th> */}
                    <td>{firstname} {lastname}</td>
                    <td>{cetEguryFilter(stafftypesid,stuffCetegury)[0].name}</td>
                    <td>{status ? <span className='text-success'>Active</span> : <span className='text-danger'>DeActive</span>}</td>
                    <td>
                      <IconButton>
                        <MdEdit color='orange' size={20} />
                      </IconButton>
                      <IconButton onClick={()=>onDelate(id)}>
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
  const [gender, setGender] = useState("")

  const [marital, setmarital] = useState("")
  const [birthday, setBirthday] = useState("")
  const [anny, setAnny] = useState("")
  // const [gender, setGender] = useState("")

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
  const [bank_account_no, setbank_account_no] = useState("")
  const [bank_account_ifc, setbank_account_ifc] = useState("")
  const [bank_name, setbank_name] = useState("")
  const [bank_account_holder_name, setbank_account_holder_name] = useState("")
  
  // Store Categury & StffType
  const [stufftype, setstufftype] = useState("")
  
  const { store } = useSelector((state => state.store))
  const [StoreId, setStoreId] = useState('')

  
  const [addhar_no, setaddhar_no] = useState("")
  const [pan_no, setpan_no] = useState("")
  const [drl_no, setdrl_no] = useState("")

  const [addhar_doc_url, setaddhar_doc_url] = useState("")
  const [pan_doc_url, setpan_doc_url] = useState("")
  const [drl_doc_url, setdrl_doc_url] = useState("")
  const [bank_account_doc, setbank_account_doc] = useState("")

  const [pf, setPf] = useState(true)
  const [ins, setIns] = useState(true)
  const [mediClaim, setMediclaim] = useState(true)

  const [msg, setMsg] = useState("")


  const dispatch = useDispatch()
  const submit = () => {
    const formData = new FormData();
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

      birthday: birthday,
      marrige_anny: anny,
      marit_status: marital,

      // img: img,
      gender: gender,
      stufftype: stufftype,
      StoreId: StoreId,

      addhar_no: addhar_no,
      pan_no: pan_no,
      drl_no: drl_no,


      bank_account_no: bank_account_no,
      bank_account_ifc: bank_account_ifc,
      bank_name: bank_name,
      bank_account_holder_name: bank_account_holder_name,
    }
    formData.append('profile_img', img);
    formData.append('datas', JSON.stringify(data));
    formData.append('adhar_card', addhar_doc_url);
    formData.append('pancard', pan_doc_url);
    formData.append('driving_liences', drl_doc_url);
    formData.append('bankstatement', bank_account_doc);

    const data2 = {
      formData,
      datas: data
    }
    console.log(addhar_doc_url);
    axios.post(apiRoutes.stuff, formData).then(e => {
      setMsg(e.data.msg)
      console.log(e.data.msg);
      dispatch(fetchStaff())
    })
  }
  const { stuffCetegury } = useSelector((state => state.categury))

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
                        onchange={(e) => setBirthday(e.target.value)}
                        plase={'Birth Day'}
                        value={birthday}
                        title={"Staff Birthday"}
                        type="date"
                      />
                      <Input
                        onchange={(e) => setAnny(e.target.value)}
                        plase={'Staff Birthday'}
                        value={anny}
                        title={"Staff Marrige Annyversury"}
                        type="date"
                      />

                    </div>

                    <div class="form-row">
                      {/* <input */}
                      <Input
                        onchange={(e) => setImg(e.target.files[0])}
                        // plase={'9 hours'}
                        name="file"
                        // value={img}
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
                            <option value="0">Meride</option>
                            <option value="1">none marride</option>
                            <option value="3">Devorce</option>
                            <option value="4">Angage</option>
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
                        type="text"
                      />
                      <Input
                        onchange={(e) => setProductSale(e.target.value)}
                        plase={'In No'}
                        value={ProductSale}
                        title={"Product Sell Payout"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setPkgSale(e.target.value)}
                        plase={'In No'}
                        value={PkgSale}
                        title={"Package Sell Payout"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setserviceSale(e.target.value)}
                        plase={'In No'}
                        value={serviceSale}
                        title={"Service Sell Payout"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setserviceExicute(e.target.value)}
                        plase={'In No'}
                        value={serviceExicute}
                        title={"Service Exicute Payout"}
                        type="text"
                      />

                    </div>
                    {/* Stufff Document */}
                    <center className="my-3"><h5>Stuff Document's</h5></center>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setaddhar_no(e.target.value)}
                        plase={'in no.'}
                        value={addhar_no}
                        title={"Adhar Card No."}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setpan_no(e.target.value)}
                        plase={'In No'}
                        value={pan_no}
                        title={"Pan Card No."}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setdrl_no(e.target.value)}
                        plase={'Driving Lincence No.'}
                        value={drl_no}
                        title={"Driving Lincence No."}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setaddhar_doc_url(e.target.files[0])}
                        plase={'in no.'}
                        // value={addhar_doc_url}
                        title={"Adhar Card Doc"}
                        type="file"
                      />
                      <Input
                        onchange={(e) => setpan_doc_url(e.target.files[0])}
                        plase={'In No'}
                        // value={pan_doc_url}
                        title={"Pan Card Doc"}
                        type="file"
                      />
                      <Input
                        onchange={(e) => setdrl_doc_url(e.target.files[0])}
                        plase={'Driving Lincence No.'}
                        // value={drl_doc_url}
                        title={"Driving Lincence Doc"}
                        type="file"
                      />
                    </div>

                    {/* Stufff Document */}
                    <center className="my-3"><h5>Stuff Account Detail</h5></center>

                    <div class="form-row">
                      <Input
                        onchange={(e) => setbank_account_no(e.target.value)}
                        plase={'in no.'}
                        value={bank_account_no}
                        title={"Bank Account No."}
                        type="number"
                      />
                      <Input
                        onchange={(e) => setbank_account_ifc(e.target.value)}
                        plase={'In No'}
                        value={bank_account_ifc}
                        title={"Bank Account IFC Code"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setbank_name(e.target.value)}
                        plase={''}
                        value={bank_name}
                        title={"Bank Name"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setbank_account_holder_name(e.target.value)}
                        plase={'in no.'}
                        value={bank_account_holder_name}
                        title={"Bank Holder Name"}
                        type="text"
                      />
                      <Input
                        onchange={(e) => setbank_account_doc(e.target.files[0])}
                        plase={'In No'}
                        // value={bank_account_doc}
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

                            onChange={(e) =>setStoreId(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Weekend Day</option>
                            {store.map((e)=><option key={e.id} value={e.id}>{e.name}</option>)}

                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="inputGroupSelect01">Select Stuff Type</label>
                          <select
                            onChange={(e) =>setstufftype(e.target.value)}
                            class="custom-select"
                            id="inputGroupSelect01"
                          >
                            <option selected>Select Stuff Type</option>
                            {stuffCetegury.map((e)=><option key={e.id} value={e.id}>{e.name}</option>)}
                          </select>
                        </div>
                      </div>

                    </div>
                    <center className="my-3"><h5>Stuff Benifits</h5></center>
                    {/* Benifits */}
                    <div className="row">
                      <div class="form-group my-0">
                        <Switch
                          onChange={(e) => setIns(!ins)}
                          checked={ins}
                        />

                        {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                        <label class="form-check-label" for="invalidCheck">
                          Insourense
                        </label>
                      </div>
                      <div class="form-group my-0">
                        <Switch
                          onChange={(e) => setPf(!pf)}
                          checked={pf}
                        />
                        {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                        <label class="form-check-label" for="invalidCheck">
                          Pf
                        </label>
                      </div>
                      <div class="form-group my-0">
                        <Switch
                          onChange={(e) => setMediclaim(!mediClaim)}
                          checked={mediClaim}
                        />
                        {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                        <label class="form-check-label" for="invalidCheck">
                          Mediclam
                        </label>
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