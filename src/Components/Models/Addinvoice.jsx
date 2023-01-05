import React, { useState } from 'react';
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
import { addItems,addItemsValue } from '../../Store/Slice/All/invoiceItemsSlice';
const Addinvoice = ({ id }) => {

  const [invoiceItem, setInvoice] = useState([])

  // var [apponot, setname] = useState('');
  const {items}=useSelector((state)=>state.invoiceItems)
  const dispatch = useDispatch();
  
  const submit = () => {
    const newInvoice = {
      id: Date.now().toString(),
      item: '',
      description: '',
      qty: 0,
      unitcost: 0
    }
    setInvoice([ ...invoiceItem, newInvoice])
    console.log(items);
  };
  // console.log(invoiceItem)
  const submits = () => {
  }
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog  modal-xl" role="document">
        <div class="modal-content border-0 ">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">
              Create Invoices
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
              <div className="row">
                {invoiceItem ? invoiceItem.map((d, i) => <>
                  <Invoiceitms key={i}/>
                </>) : null}
              </div>
                <button type='button' className='btn btn-danger m-2' onClick={submit}>Add Services</button>
                <button type='button' className='btn btn-danger m-2' onClick={submits}>submits</button>
            </div>
            <div class="modal-footer border-0">
              <input type="reset" class="btn btn-danger" />

              <button type="button" class="btn btn-primary">
                Create Costumer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addinvoice;
const Input = ({ title, plase, onchange, ...props }) => {
  return (
    <>
      <div class="m-1 mb-3">
        <label for="validationCustomUsername">{title}</label>
        <input
          class={"form-control"}
          id="validationCustomUsername"
          // onChange={onchange}
          placeholder={plase}
          aria-describedby="inputGroupPrepend"
          {...props}
        />
      </div>
    </>
  );
}

const Invoiceitms = ({props,invoi,keyid}) => {
  var [addservice, setAddservice] = useState('');
  var [addStuff, setAddStuff] = useState('');
  var [price, setPrice] = useState('');
  var [qty, setQty] = useState(1);
  var [disc, setDisco] = useState(0);
  var [total, setTotal] = useState('');
  
  var [costomer, setCostomer] = useState('');

  const dispatch = useDispatch();
  const onchangehendale=(id,data,invoi)=>{
  }
  
  const submit=()=>{
    var data={
      addStuff:addStuff,
      services:addservice,
      qty:qty,
      disc:disc,
      total:total,
    }
    dispatch(addItems(data))
  }
  console.log(total);
  const getDiscount=(e)=>{
    setDisco(e.target.value)
    (disc<0) ? setTotal(price * qty) : setTotal(price-(price * (disc/10))) 
    console.log(`onDiscount ${total}, disc: ${disc}`);
    // setTotal(priceTotale)
  }

  const PriceChange=(e)=>{
    setPrice(e.target.value)
    setTotal(price * qty)
    // console.log(`onPrice ${total}`);
  }
  return (
    <>
    <div className="form-row">
      <Input name="Services" title={'Add Services'} onChange={(e) =>setAddservice(e.target.value)} />
      <Input name="Stuff" title={'Add Stuff'} onChange={(e) => setAddStuff(e.target.value)} />
      {/* <div className="col-2"></div> */}
      <Input name="Qty" style={{width:'40px'}} value={qty} title={'Qty'} onChange={(e) =>{
    setQty(e.target.value)
    setTotal(price * qty)
    // console.log(`onPrice ${total}`);
  }} />
      <Input name="Totale" title={'Price'} value={price} onChange={e=>PriceChange(e)} />
      <Input name="Discount" title={'Discount'} value={disc} onChange={getDiscount} />
      <Input name="Totale" value={total} title={'Totale'} />
      <button type='button' className='btn btn-danger btn-sm m-2' onClick={submit}>Add Services</button>
    </div>
    </>
  )
}