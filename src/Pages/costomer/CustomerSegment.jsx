import React, { useEffect, useState, useCallback } from "react";
import $ from "jquery";
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { InputLabel, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';

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

import apiRoutes, { appAxios, appAxios as axios } from "../../Constants/apiRoutes";
import { useSelector, useDispatch } from "react-redux";
import { addCostomer, fetchCostomer } from "../../Store/Slice/Costomer/costumerSlice";
import { toast } from "react-toastify";
const tabelHeade = [
  "No",
  "Name",
  "Contact Detail",
  "Join Date",
  "Costomer Status",
  "Costomer Type",
  "Action",
];

var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(alphabetArray[0]);

const SwitchText=({status})=> status ? <span className="text-success" >Active</span> : <span className="text-danger" >Close</span>

const CustomerSegment = () => {
  var [costomer, setCostomer] = useState([]);
  var [stat, setStat] = useState(true);
  var [cate, setCate] = useState('');
  const costome = useSelector((state) => state.costomer.costomer)
  const categury = useSelector((state) => state.categury.costomerCetegury)
  useEffect(() => {
    // dispatch(fetchCostomer());
    setCostomer(costome.filter((costo) => costo.status == stat))
  }, [costome,stat]);

  // costomer Serch filter ${costomer.last_name.toLowerCase()}
  const searchS = useCallback((e) => setCostomer(costome.filter((costo) => `${costo.name.toLowerCase()} ${costo.last_name.toLowerCase()}`.includes(e.toLowerCase()) || costo.mobaile.includes(e))))
  const firstChar = useCallback((c) => setCostomer(costome.filter((costo) => costo.name.toLowerCase().charAt(0) == c.toLowerCase())))
  const categuryFilter = useCallback((c) => setCostomer(costome.filter((costo) => costo.costocateguryid == c)))

  return (
    <>
      <div class="collapse" id="collapseExample">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <TextField
                  type="text"
                  placeholder="Serach Costumer Name/ Mobaile No."
                  variant="outlined"
                  size='small'
                  fullWidth
                  onChange={(e) => searchS(e.target.value)}
                />
              </div>
              <div className="col-md-3 col-sm-6">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cate}
                  label="Age"
                  fullWidth
                  placeholder="Select Costomer Type"
                  size="small"
                  onChange={(e) => categuryFilter(e.target.value)}
                >
                  {categury && categury.map(e => <MenuItem value={e.id}>{e.name}</MenuItem>)}
                </Select>
              </div>
              <div className="col-md-3 col-sm-6">
                <Switch value={stat} onChange={()=>setStat(!stat)} /> : <SwitchText status={stat} />
              </div>
              <div className="col-12">
                {alphabetArray.map((e, k) => {
                  // console.log(e[0]);
                  return (
                    <>
                      <IconButton sx={{ padding: 1.5 }} onClick={() => firstChar(e[0])} size="small" ><span className="" >{e[0]}</span></IconButton>
                    </>
                  )
                })}
                
                <IconButton sx={{ padding: 1.5 }} o
                  nClick={() => setCostomer(costome)} size="small" ><span className="" >*</span></IconButton>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default CustomerSegment;


const TabelHead = ({ key, data }) => <th>{data}</th>;

const TabelData = ({ no, data }) => {
  const cetEguryFilter = (id, arr) => arr.filter((arry) => arry.id == id)
  const serviceCategury = useSelector((state) => state.categury.costomerCetegury)
  // console.log();
  const supers = cetEguryFilter(data.costocateguryid, serviceCategury)
  const datct = supers ? cetEguryFilter(data.costocateguryid, serviceCategury)[0].name : "No Data Found"
  const dispatch = useDispatch();

  const action = (id, status) => {
    appAxios.put(`${apiRoutes.costomerStatus}status/${id}`, { status: !status }).then(e => {
      dispatch(fetchCostomer())
      toast.success(e.data.msg)

      console.log(e.data);
    })
  }

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
              target="_blank"
              href={`https://wa.me/+91${data.mobaile}`}
            >
              <BsWhatsapp className="text-success" size={20} />
            </IconButton>
          </div>
        </td>
        <td>23 Mar, 20</td>
        <td>
          <Statusbtn status={data.status} onClick={() => action(data.id, data.status)} />
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