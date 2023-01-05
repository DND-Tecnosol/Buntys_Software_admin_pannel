import React,{useState} from 'react';
import { Button, IconButton, Switch } from "@mui/material";
import {
  BsClipboard,
  BsPlus,
  BsSearch,
  BsTelephone,
  BsTrash,
  BsWhatsapp,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import apiRoutes,{appAxios as axios} from '../../Constants/apiRoutes';
// 
import { addCostomer } from '../../Store/Slice/Costomer/costumerSlice';

const Costomer = ({id}) => {
    var [mo, setmo] = useState("");
    var [name, setname] = useState("");
    var [lastname, setlastname] = useState("");
    var [email, setemail] = useState("");
    var [wmo, setwmo] = useState("");
    var [dob, setdob] = useState("");
    var [anny, setanny] = useState("");
    var [locat, setlocat] = useState("");
    var [source, setsource] = useState("");
    var [address, setaddress] = useState("");
    var [notes, setnotes] = useState("");
    var [gender, setgender] = useState("");
    var [prosms, setProsms] = useState(true);
    var [trasms, setTrasms] = useState(true);
    var [whatnot, setWhatnot] = useState(true);
    var [emailnot, setemailnot] = useState(true);
    // var [apponot, setname] = useState('');
    const dispatch = useDispatch();
  
    const submit = () => {
  
      var data = {
        storeid: "1",
        name: name,
        lastname: lastname,
        city: locat,
        email: email,
        mobaile: mo,
        whatsapp: wmo,
        DOB: dob,
        Anniversary: anny,
        mobaile_notyfication_status: trasms,
        whatsapp_notyfication_status: whatnot,
        costomer_notes: notes,
        address: address,
        promo_sms: prosms,
        gender: gender,
        email_notyfication_status:emailnot
      };
      console.log(data);
      axios.post(apiRoutes.costomer, data).then((e) => {
        alert(e.data.msg)
        dispatch(addCostomer(e.data.Costomer))
      });
    };
    return (
      <>
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
                  New Costomer
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
                    <div class="col-md-4 mb-3">
                      <label for="validationCustomUsername">Mobaile No</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend">
                            +91
                          </span>
                        </div>
                        <input
                          onChange={(e) => setmo(e.target.value)}
                          type="text"
                          class="form-control"
                          id="validationCustomUsername"
                          placeholder="Mobaile no."
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                      </div>
                    </div>
                    <Input
                      onchange={(e) => setname(e.target.value)}
                      title={"First Name"}
                      type="text"
                    />
                    <Input
                      onchange={(e) => setlastname(e.target.value)}
                      title={"Last Name"}
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      onchange={(e) => setemail(e.target.value)}
                      title={"Email Id"}
                      type="text"
                    />
                    <div class="col-md-4 mb-3">
                      <label for="validationCustomUsername">Whatsapp No</label>
                      <div class="input-group">
                        {/* <div class="input-group-append col-4">
                          <select class="custom-select" id="inputGroupSelect01">
                            <option selected>+91</option>
                            <option value="1">+92</option>
                            <option value="2">+93</option>
                            <option value="3">+94</option>
                          </select>
                        </div> */}
                        <input
                          onChange={(e) => setwmo(e.target.value)}
                          value={wmo}
                          type="text"
                         
                          class="form-control"
                          id="validationCustomUsername"
                          placeholder="Whatsapp no."
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <div class="input-group-append">
                          <button
                            onClick={() => setwmo(mo)}
                            class="btn btn-primary"
                            type="button"
                          >
                            <BsClipboard />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustomUsername">Gender</label>
                      <select
                        onChange={(e) => setgender(e.target.value)}
                        class="custom-select"
                        id="validationCustomUsername"
                      >
                        <option selected>Select Costumer Gender</option>
                        <option value={1}>Male</option>
                        <option value={0}>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <Input
                      onchange={(e) => setdob(e.target.value)}
                      type="date"
                      title={"DOB"}
                    />
                    <Input
                      onchange={(e) => setanny(e.target.value)}
                      type="date"
                      title={"Anniversary"}
                    />
                    <Input
                      onchange={(e) => setlocat(e.target.value)}
                      type="text"
                      title={"Location"}
                    />
                  </div>
                  <div className="form-row">
                    <div className="col-6">
                      <div class="form-group">
                        <label for="inputGroupSelect01">Choose Source</label>
                        <select
                          onChange={(e) => setsource(e.target.value)}
                          class="custom-select"
                          id="inputGroupSelect01"
                        >
                          <option selected>Source</option>
                          <option value="1">Instagram</option>
                          <option value="2">Google</option>
                          <option value="3">News Papper</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 col-sm-12">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Address</label>
                        <textarea
                          onChange={(e) => setaddress(e.target.value)}
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Costumer Notes
                        </label>
                        <textarea
                          onChange={(e) => setnotes(e.target.value)}
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group my-0">
                    <Switch
                      onChange={(e) => setProsms(!prosms)}
                      checked={prosms}
                    />
                    {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                    <label class="form-check-label" for="invalidCheck">
                      Send Promotional SMS
                    </label>
                  </div>
                  <div class="form-group my-0">
                    <Switch
                      onChange={(e) => setTrasms(!trasms)}
                      checked={trasms}
                    />
                    {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                    <label class="form-check-label" for="invalidCheck">
                      Send Transactional SMS
                    </label>
                  </div>
                  <div class="form-group my-0">
                    <Switch
                      onChange={(e) => setWhatnot(!whatnot)}
                      checked={whatnot}
                    />
                    {/* <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required /> */}
                    <label class="form-check-label" for="invalidCheck">
                      Whatsapp Notyfication
                    </label>
                  </div>
              </div>
              <div class="modal-footer border-0"> 
              <input type="reset" class="btn btn-danger" onClick={()=>setwmo('')} />

                <button type="button" onClick={submit} class="btn btn-primary">
                  Create Costumer
                </button>
              </div>
                </form>
            </div>
          </div>
        </div>
      </>
    );

}


  // Input
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
export default Costomer;
