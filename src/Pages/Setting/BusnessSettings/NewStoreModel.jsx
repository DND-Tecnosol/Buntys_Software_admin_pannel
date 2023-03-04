import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { fetchServices } from '../../../Store/Slice/All/serviceSlice';
import { fetchStore } from '../../../Store/Slice/All/storeSlice';
import apiRoutes, { appAxios as axios } from '../../../Constants/apiRoutes';
import { IconButton, Stepper, Step, StepLabel, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { RemoveRedEye } from '@mui/icons-material';
import { toast } from 'react-toastify';

const steps = [
    'Create Store Detail',
    'Add Store Address',
    'Add Store Social Platform',
    'Store Account setting',
];

const NewStoreModel = ({ ids }) => {
    // const storeData=
    var [name, setName] = useState('')
    var [email, setemail] = useState("")
    var [store_email, setstore_email] = useState("")
    var [mobaile, setmobaile] = useState("")
    var [whatsapp, setwhatsapp_no] = useState("")
    var [password, setpassword] = useState("")
    var [opentime, setopentime] = useState("")
    var [closetime, setclosetime] = useState("")
    var [sessionopentime, setsessionopentime] = useState("")
    var [sessionclosetime, setsessionclosetime] = useState("")
    var [address, setaddress] = useState("")
    var [pin, setpin] = useState("")
    var [city, setcity] = useState(1)
    var [newcity, setNewcity] = useState("")
    var [state, setstate] = useState("")
    var [insta_link, setinsta_link] = useState("")
    var [facebook_link, setfacebook_link] = useState("")
    var [whatsapp_chat_link, setwhatsapp_no_chat_link] = useState("")
    var [twitter, settwitter] = useState("")
    var [youtube, setyoutube] = useState("")
    var [map, setmap] = useState("")
    
    var [sec, setsec] = useState(0);
    var [hide, setHide] = useState(0);
    // var [minPrice, setMinPrice] = useState("");
    // var [msg, setMsg] = useState(false);

    // var [apponot, setname] = useState('');
    const dispatch = useDispatch();

    const submit = () => {

        var data = {
            name: name
            , email: email
            , store_email: store_email
            , mobaile: mobaile
            , whatsapp_no: whatsapp
            , password: password

            , address: address
            , pin: pin
            , city: !(city == "New City") ? city : newcity
            , state: state

            , insta_link: insta_link
            , facebook_link: facebook_link
            , whatsapp_chat_link: whatsapp_chat_link
            , twitter: twitter
            , youtube: youtube
            , map: map
        };

        console.log(data);
        axios.post(apiRoutes.store, data).then((e) => {
            // setMsg(e.data.msg)
            if(e.data.code==403){
                toast(e.data.msg)
                return 0
            }
            setName('')
            setpassword('')
            setemail('')
            setmobaile('')
            setwhatsapp_no('')
            setcity('')
            setpin('')
            setaddress('')
            setopentime('')
            setmap('')
            dispatch(fetchStore())
            toast(e.data.msg)
            return 0
            // setTimeout(()=>setMsg(false),10000)
        });
        // useEffect(() => {
        // }, []);
    };

    const cityss=useSelector(state=>state.store.city)
    return (

        <div>
            <div
                class="modal fade"
                // style={{ display: 'inline' }}
                id={ids}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content border-0">
                        <div class="modal-header border-0 col-12">
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
                                <center>
                                    <h5 class="modal-title" id="exampleModalLabel">
                                        New Store
                                    </h5>
                                    <Stepper activeStep={sec} alternativeLabel>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </center>
                                <div className="container">
                                    {sec == 0 &&
                                        (
                                            <>
                                                <div class="form-row mt-3">
                                                    <Input
                                                        onchange={(e) => setName(e.target.value)}
                                                        plase={'Store Name'}
                                                        value={name}
                                                        title={"Store Name"}
                                                        type="text"
                                                        col={12}
                                                    />
                                                    <Input
                                                        onchange={(e) => setemail(e.target.value)}
                                                        plase={'Email'}
                                                        value={email}
                                                        title={"Email"}
                                                        type="text"
                                                        col={6}
                                                    />
                                                    <Input
                                                        col={6}
                                                        onchange={(e) => setstore_email(e.target.value)}
                                                        plase={'Store Email'}
                                                        value={store_email}
                                                        title={"Store Email"}
                                                        type="email"
                                                    />
                                                    <Input
                                                        col={6}
                                                        onchange={(e) => setmobaile(e.target.value)}
                                                        plase={'Mobaile No.'}
                                                        value={mobaile}
                                                        title={"Mobaile No."}
                                                        type="mobaile"
                                                    />
                                                    <Input
                                                        col={6}
                                                        onchange={(e) => setwhatsapp_no(e.target.value)}
                                                        plase={'Whatsapp No.'}
                                                        value={whatsapp}
                                                        title={"Whatsapp No."}
                                                        type="mobaile"
                                                    />
                                                    <Input
                                                        onchange={(e) => setopentime(e.target.value)}
                                                        plase={'Open Timing'}
                                                        value={opentime}
                                                        col={6}
                                                        title={"Open Timing"}
                                                        sm={12}
                                                        type="time"
                                                    />
                                                    <Input
                                                        onchange={(e) => setclosetime(e.target.value)}
                                                        plase={'Close Timing'}
                                                        value={closetime}
                                                        col={6}
                                                        sm={12}
                                                        title={"Close Timing"}
                                                        type="time"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    {sec == 1 &&
                                        (
                                            <>
                                                <div className="form-row mt-3">

                                                    {
                                                        (city == "New City") &&
                                                        <>
                                                            <Input
                                                                onchange={(e) => setmobaile(e.target.value)}

                                                                value={newcity}
                                                                title={"City"}
                                                                type="text"
                                                                onChange={(e) => setNewcity(e.target.value)}
                                                                col={6}
                                                            />
                                                        </>
                                                    }
                                                    {
                                                        !(city == "New City") &&
                                                        <>
                                                            <div className="col-6">
                                                                <div class="form-group">
                                                                    <label for="validationCustomUsername">City</label>
                                                                    <select defaultValue={city} onChange={(e) => setcity(e.target.value)} class="form-control" >
                                                                        {cityss && cityss.map((e,k)=><option key={k} value={e.name}>{e.name}</option>)}
                                                                        <option value={"New City"}>Create New City</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </>
                                                    }
                                                    <Input
                                                        onchange={(e) => setstate(e.target.value)}
                                                        plase={'State'}
                                                        value={state}
                                                        title={"State"}
                                                        type="text"
                                                        col={6}
                                                    />
                                                    <Input
                                                        onchange={(e) => setpin(e.target.value)}
                                                        plase={'Pin Code'}
                                                        value={pin}
                                                        title={"Pin Code"}
                                                        type="text"
                                                        col={6}
                                                    />
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
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    {sec == 2 &&
                                        (
                                            <>
                                                <div className="form-row mt-3">
                                                    <Input
                                                        onchange={(e) => setfacebook_link(e.target.value)}
                                                        type="text"
                                                        value={facebook_link}
                                                        title={"Facebook Link"}
                                                        plase={"Facebook Link"}
                                                        col={6}
                                                        sm={12}
                                                    />
                                                    <Input
                                                        onchange={(e) => setinsta_link(e.target.value)}
                                                        value={insta_link}
                                                        title={"intsagram Link"}
                                                        plase={"intsagram Link"}
                                                        type="text"
                                                        col={6}
                                                        sm={12}
                                                    />
                                                    <Input
                                                        onchange={(e) => setwhatsapp_no_chat_link(e.target.value)}
                                                        type="text"
                                                        value={whatsapp_chat_link}
                                                        title={"Add Whatsapp Direct Chat Link"}
                                                        plase={"Add Whatsapp Direct Chat Link"}
                                                        col={6}
                                                        sm={12}
                                                    />
                                                    <Input
                                                        onchange={(e) => settwitter(e.target.value)}
                                                        type="text"
                                                        value={twitter}
                                                        title={"Twitter Link"}
                                                        plase={"Twitter Link"}
                                                        col={6}
                                                        sm={12}
                                                    />
                                                    <Input
                                                        onchange={(e) => setyoutube(e.target.value)}
                                                        type="text"
                                                        value={youtube}
                                                        title={"Youtube Channel Link"}
                                                        plase={"Youtube Channel Link"}
                                                        col={6}
                                                        sm={12}
                                                    />
                                                    <Input
                                                        onchange={(e) => setmap(e.target.value)}
                                                        value={map}
                                                        title={"Google Map Link"}
                                                        plase={"Google Map Link"}
                                                        type="text"
                                                        col={6}
                                                        sm={12}
                                                    />
                                                </div>
                                            </>
                                        )}

                                    {sec == 3 &&
                                        <>
                                            <div className="row col-12 mt-3">
                                                <Input
                                                    col={6}
                                                    sm={6}
                                                    plase={'User Email Id'}
                                                    value={email}
                                                    title={"User Email Id"}
                                                    type={"text"}
                                                />
                                                <Input
                                                    col={5}
                                                    sm={6}
                                                    onchange={(e) => setpassword(e.target.value)}
                                                    plase={'Password'}
                                                    value={password}
                                                    title={"Password"}
                                                    type={hide ? "Password" : "text"}
                                                />
                                                <IconButton onClick={() => setHide(!hide)} size='small' sx={{ paddingY: 2, marginTop: 2 }}>
                                                    <RemoveRedEye />
                                                </IconButton>
                                                <Input
                                                    onchange={(e) => setsessionopentime(e.target.value)}
                                                    plase={'Session Open Time'}
                                                    value={sessionopentime}
                                                    col={6}
                                                    title={"Session Open Time"}
                                                    sm={12}
                                                    type="time"
                                                />
                                                <Input
                                                    onchange={(e) => setsessionclosetime(e.target.value)}
                                                    plase={'Session Close Time'}
                                                    value={sessionclosetime}
                                                    col={6}
                                                    sm={12}
                                                    title={"Session Close Time"}
                                                    type="time"
                                                />
                                            </div>
                                        </>
                                    }

                                </div>

                            </div>
                            <div class="modal-footer border-0">
                                <input type="reset" class="btn btn-danger" />
                                <button type="button" onClick={() => setsec(sec > 0 ? --sec : sec)} class="btn btn-primary">
                                    Back
                                </button>
                                <button type="button" onClick={() => setsec(sec < 3 ? ++sec : sec)} class="btn btn-primary">
                                    next
                                </button>
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

const Input = ({ title, col, sm, plase, onchange, ...props }) => {
    return (
        <>
            <div class={`col-md${col && '-' + col} col-sm-${sm ? sm : "12"} mb-3`}>
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

