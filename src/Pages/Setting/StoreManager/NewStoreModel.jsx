import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import apiRoutes from '../../../Constants/apiRoutes';
import axios from 'axios';
import { fetchServices } from '../../../Store/Slice/All/serviceSlice';
import { fetchStore } from '../../../Store/Slice/All/storeSlice';

const NewStoreModel = ({ ids }) => {


    const { serviceCetegury } = useSelector(state => state.categury)
    var [avatar, setavatar] = useState("");
    var [name, setName] = useState("");
    var [password, setpassword] = useState('');
    var [email, setemail] = useState("");
    var [mobaile, setmobaile] = useState("");
    var [whatsapp, setwhatsapp] = useState("");
    var [city, setcity] = useState("");
    var [pin, setpin] = useState("");
    var [address, setaddress] = useState("");
    var [opentime, setopentime] = useState('');
    var [closetime, setclosetime] = useState("");
    var [map, setmap] = useState('');
    // var [minPrice, setMinPrice] = useState("");
    // var [msg, setMsg] = useState(false);

    // var [apponot, setname] = useState('');
    const dispatch = useDispatch();

    const submit = () => {

        var data = {
            avatar: avatar,
            name: name,
            password: password,
            email: email,
            mobaile:`91${mobaile}`,
            address:address ,
            pin: pin,
            city: city,
            opentime: opentime,
            closetime: closetime,
            map: map
        };

        // console.log(data);
        axios.post(apiRoutes.store, data).then((e) => {
            // setMsg(e.data.msg)
            setName('')
            setpassword('')
            setemail('')
            setmobaile('')
            setwhatsapp('')
            setcity('')
            setpin('')
            setaddress('')
            setopentime('')
            setmap('')
            dispatch(fetchStore())
            // setTimeout(()=>setMsg(false),10000)
        });
        // useEffect(() => {
        // }, []);
    };
    return (

        <div>
            <div
                class="modal fade"
                id={ids}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content border-0">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLabel">
                                New Store
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
                                {/* {msg ? <Alertmsg msg={msg} /> : null} */}

                                <div className="container">
                                    Store Detail
                                    <div class="form-row">
                                        <Input
                                            onchange={(e) => setName(e.target.value)}
                                            plase={'Store Name'}
                                            value={name}
                                            title={"Store Name"}
                                            type="text"
                                        />
                                        <Input
                                            onchange={(e) => setpassword(e.target.value)}
                                            plase={'Password'}
                                            value={password}
                                            title={"Password"}
                                            type="Password"
                                        />
                                        {/* <div class="col-md-6 mb-3">
                    <label for="validationCustomUsername">Service Categury</label>
                    <select
                      onChange={(e) => setServiceCategury(e.target.value)}
                      value={serviceCategury}
                      class="custom-select"
                      id="validationCustomUsername"
                    >
                      <option selected>Select Service Categury</option>
                      {serviceCetegury.map((e,i)=><option value={e.id}>{e.name}</option>)}
                    </select>
                  </div> */}
                                    </div>
                                    Store Contact Details
                                    <div className="form-row">
                                        <Input
                                            onchange={(e) => setemail(e.target.value)}
                                            plase={'Email Id'}
                                            value={email}
                                            title={"Email Id"}
                                            type="text"
                                        />
                                        <Input
                                            onchange={(e) => setmobaile(e.target.value)}
                                            plase={'Mobaile No.'}
                                            value={mobaile}
                                            title={"Mobaile No."}
                                            type="text"
                                        />
                                        <Input
                                            onchange={(e) => setwhatsapp(e.target.value)}
                                            plase={'Whatsapp No.'}
                                            value={whatsapp}
                                            title={"Whatsapp No."}
                                            type="text"
                                        />
                                    </div>
                                    Store Address
                                    <div className="form-row">

                                        <Input
                                            onchange={(e) => setcity(e.target.value)}
                                            type="text"
                                            value={city}
                                            plase={'City'}
                                            title={"City"}
                                        />
                                        <Input
                                            onchange={(e) => setpin(e.target.value)}
                                            plase={'Pin Code (Postal Code)'}
                                            value={pin}
                                            title={"Pin Code (Postal Code)"}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Address</label>
                                        <textarea
                                            onChange={(e) => setaddress(e.target.value)}
                                            class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                        >
                                            {address}
                                        </textarea>
                                    </div>
                                    Store Account Detail
                                    <div className="form-row">
                                        <Input
                                            onchange={(e) => setopentime(e.target.value)}
                                            plase={'Open Timing'}
                                            value={opentime}

                                            title={"Open Timing"}
                                            type="time"
                                        />
                                        <Input
                                            onchange={(e) => setclosetime(e.target.value)}
                                            plase={'Close Timing'}
                                            value={closetime}

                                            title={"Close Timing"}
                                            type="time"
                                        />
                                        <div class="form-group col-12">
                                            <label for="exampleFormControlTextarea1">Google Map Link</label>
                                            <textarea
                                                onChange={(e) => setmap(e.target.value)}
                                                class="form-control"
                                                
                                                id="exampleFormControlTextarea1"
                                                rows="3"
                                            >
                                                {map}
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer border-0">
                                <input type="reset" class="btn btn-danger" />

                                <button type="button" onClick={submit} class="btn btn-primary">
                                    Create New Service
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewStoreModel;

const Alertmsg = ({ msg }) => {
    return (<>
        <div class="alert alert-success" role="alert">
            {msg}
        </div>
    </>)
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

