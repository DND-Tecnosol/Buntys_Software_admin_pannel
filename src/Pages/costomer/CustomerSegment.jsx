import React, { useEffect, useState, useCallback } from "react";
import $ from "jquery";
import { Button, IconButton, Switch } from "@mui/material";
import { Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';

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

import apiRoutes, { appAxios as axios } from "../../Constants/apiRoutes";
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
  }, [costome]);

  // costomer Serch filter
  const searchS = useCallback((e) => setCostomer(costome.filter((costomer) => `${costomer.name.toLowerCase()} ${costomer.last_name.toLowerCase()}`.includes(e.toLowerCase()) || costome.mobaile.includes(e))))
  const firstChar = useCallback((c)=> setCostomer(costome.filter((costomer)=> costomer.name.toLowerCase().charAt(0) == c.toLowerCase())))
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
            onChange={(e) => searchS(e.target.value)}
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
      <div className="col-12">
        <IconButton onClick={()=>firstChar('a')} >A</IconButton>
      </div>
      <div className="table-responsive">
        <table class="table">
          <thead className="border-0" >
            <tr className="border-0 ">
              {tabelHeade.map((e) => (
                <TabelHead data={e} />
              ))}
            </tr>
          </thead>
          <tbody>
            {costomer
              && costomer.map((da, key) => (
                <TabelData key={key} no={key} data={da} />
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="container-fluide col-sm-12">
        <div class="card">
              <div className="card-header">

              <h3 class="card-title">Costomer Database</h3>
              </div>
          <div class="card-body">
           
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CustomerSegment;

const action = (id) => alert(`perform action this ${id}`)

const TabelHead = ({ key, data }) => <th>{data}</th>;

const TabelData = ({ no, data }) => {
  const cetEguryFilter = (id, arr) => arr.filter((arry) => arry.id == id)
  const serviceCategury = useSelector((state) => state.categury.costomerCetegury)
  // console.log();
  const supers = cetEguryFilter(data.costocateguryid, serviceCategury)
  const datct = supers ? cetEguryFilter(data.costocateguryid, serviceCategury)[0].name : "No Data Found"

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
          <Statusbtn status={data.status} onClick={() => action(data.id)} />
          {/* <button className={"btn btn-"+data.status ? 'success' : 'danger'+" btn-sm"}>{data.status ? 'Active' : 'Deactivate'}</button> */}
        </td>
        <td>{
          datct
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

const Statusbtn = ({ status, id, ...props }) => status ? <button {...props} className="btn btn-success btn-sm">Active</button> : <button {...props} className="btn btn-danger btn-sm">DeActive</button>

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