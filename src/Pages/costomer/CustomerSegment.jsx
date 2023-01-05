import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Button, IconButton, Switch } from "@mui/material";
import {
  BsClipboard,
  BsPlus,
  BsSearch,
  BsTelephone,
  BsTrash,
  BsWhatsapp,
} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdSendToMobile } from "react-icons/md";

import apiRoutes,{appAxios as axios} from "../../Constants/apiRoutes";
import { useSelector, useDispatch } from "react-redux";
import { addCostomer, fetchCostomer } from "../../Store/Slice/Costomer/costumerSlice";
const tabelHeade = [
  "No",
  "Name",
  "Contact Detail",
  "Join Date",
  "Costomer Status",
  "Costomer Type",
  "Action",
];

const CustomerSegment = () => {
  var [costomer, setCostomer] = useState([]);
  var [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const costome = useSelector((state) => state.costomer.costomer)
  useEffect(() => {
    // dispatch(fetchCostomer());
    setCostomer(costome)
  }, []);
  
  // costomer Serch filter
  const searchS=(e)=>setCostomer(costome.filter((costomer)=>costomer.name.toLowerCase().includes(e.toLowerCase()) || costomer.mobaile.includes(e) ))

  console.log();
  return (
    <>
      <div className="container-fluide row justify-content-between px-3">
        <div class="input-group mb-3 p-0 bg-light shadow-sm col-6">
          <input
            type="text"
            class="form-control border-0"
            placeholder="Serach Costumer Name/ Mobaile No."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e)=>searchS(e.target.value)}
          />
          <Button variant="contained" startIcon={<BsSearch size={15} />}>
            Search
          </Button>
        </div>
        <div className="d-flex mt-0 mb-3">
          <Button
            data-toggle="modal"
            data-target="#exampleModal"
            variant="contained"
            size="small"
            color="error"
            startIcon={<BsPlus size={30} />}
          >
            New Costomer
          </Button>
        </div>
      </div>
      <div className="container-fluide col-sm-12">
        <div class="card">
          {/* <!-- /.card-header --> */}
              <div className="card-header">

              <h3 class="card-title">Costomer Database</h3>
              </div>
          <div class="card-body">
            <div className="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    {tabelHeade.map((e) => (
                      <TabelHead data={e} />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {costomer
                    ? costomer.map((da, key) => (
                        <TabelData key={key} no={key} data={da} />
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- /.card-body --> */}
        </div>
      </div>
    </>
  );
};

export default CustomerSegment;

const action=(id)=>alert(`perform action this ${id}`)

const TabelHead = ({ key, data }) => <th>{data}</th>;

const TabelData = ({ no, data }) => {
  const cetEguryFilter=(id,arr)=>arr.filter((arry)=>arry.id===id)
  const serviceCategury = useSelector((state) => state.categury.costomerCetegury)
  console.log(cetEguryFilter(data.costomertypeid,serviceCategury)[0].name);

  return (
    <>
      <tr>
        <td>{++no}</td>
        <td>
          <Link to={`/costomer/${data.id}`}>
            {data.name} {data.last_name}
          </Link>
        </td>
        <td>
          <div className="container d-flex justify-content-around">
            <IconButton href={`mailto:${data.email}`} variant="contained">
              <AiOutlineMail className="text-warning" size={20} />
            </IconButton>
            {/* <IconButton href={`tel:${data.mobaile}`}>

              <BsTelephone className="text-blue" size={20} />
            </IconButton> */}
            <a href={`tel:${data.mobaile}`}>
            {data.mobaile.replace(/.(?=.{4})/g, '*')}
            </a>
            <IconButton  
              variant="contained"
              color="success"
              href={`https://wa.me/+91${data.mobaile}`}
            >
              <BsWhatsapp className="text-success" size={20} />
            </IconButton>
          </div>
        </td>
        <td>23 Mar, 20</td>
        <td>
        <Statusbtn status={data.status} onClick={()=>action(data.id)} />
          {/* <button className={"btn btn-"+data.status ? 'success' : 'danger'+" btn-sm"}>{data.status ? 'Active' : 'Deactivate'}</button> */}
        </td>
        <td>{
          cetEguryFilter(data.costomertypeid,serviceCategury)[0].name
        }</td>
        <td>
          <div className="d-flex justify-content-around">
            <IconButton variant="contained" color="success" to={"Hello"}>
              <FaEdit className="text-warning" size={20} />
            </IconButton>
          </div>
        </td>
      </tr>
    </>
  );
};

const Statusbtn=({status,id,...props})=>status ? <button {...props} className="btn btn-success btn-sm">Active</button> : <button {...props} className="btn btn-danger btn-sm">DeActive</button>

// M

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
};

// {
//     "id": 1,
//     "storeid": 1,
//     "costomertypeid": 1,
//     "name": "Bhautik",
//     "last_name": "Rathod",
//     "img": null,
//     "city": "Vadodara",
//     "email": "Bhautik@gmail.com",
//     "mobaile": "6358006532",
//     "whatsapp": "2304200020",
//     "DOB": "2023-04-23",
//     "Anniversary": null,
//     "email_verified_at": null,
//     "mobaile_verified_at": null,
//     "whatsapp_verified_at": null,
//     "email_verified_status": 0,
//     "mobaile_verified_status": 0,
//     "whatsapp_verified_status": 0,
//     "email_notyfication_status": 1,
//     "mobaile_notyfication_status": 1,
//     "whatsapp_notyfication_status": 0,
//     "costomer_notes": "abcd efghi jklmano pqrstu vwxyz",
//     "address": "Vadodara",
//     "created_at": "2022-11-02T22:12:16.000000Z",
//     "updated_at": "2022-11-02T22:12:16.000000Z",
//     "promo_sms": 0,
//     "gender": 0
// }
