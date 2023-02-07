import React, { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { FiPlus } from "react-icons/fi";
// import {PhotoCamera} from '@mui/icons-material';
import {
  setTotaleValue,
  remService,
  allItemsRem,
  addService,
  changeService,
  changeServiceQty,
  changeServiceStaff,
  changeServiceDisc
} from "../../Store/Slice/All/invoiceItemsSlice";
import { MdRestoreFromTrash } from "react-icons/md";

import apiRoutes, { appAxios as axios } from '../../Constants/apiRoutes';
// var [totles,setTotale]=useState(0)
export default function RbsInvoice() {
  const [costomerSelected, setCostomerSelected] = useState(false);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();

  const { data: { service, totale, miNtotale } } = useSelector((stae) => stae.invoiceItems);
  const serviceData = useSelector((stae) => stae.service.service);
  const staffData = useSelector((stae) => stae.stuff.staff);
  const costomerData = useSelector((stae) => stae.costomer.costomer);
  // const {data:{service}} = useSelector((stae) => stae);

  const costomerOption = costomerData.map((data) => ({ id: data.id, label: `${data.name} ${data.mobaile}`, }));
  const costomerfind = (id) => {
    const data = costomerData ? costomerData.filter((data) => data.id === id)[0] : [];
    setCostomerSelected(data);
    return data;
  };
  const [benifits, setbenifits] = useState("");
  const date = () => {
    const d = new Date();

    return ` ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  };

  const createInvoice = () => {


    const invoiceData = {
      store_id: 1,
      costomer_id: costomerSelected.id,
      invoicetypes_id: 1,
      totale: totale - totale * (discount / 100),
      discount_is: (discount === 0) ? 0 : 1,
      discounted_amount: totale * (discount / 100),
      discount: discount,
      reward_point_readeem: "0",
      reward_point_amount: "0",
      reward_point: "0",
      vaocher: "0",
      vaocher_code: "0",
      vaocher_amount: "0",
      gst: "0",
      gst_amount: "0",
      paid: true,
      service: service
    }
    axios.post(apiRoutes.invoice, invoiceData).then((e) => {
      console.log(e)
    })
  }

  const getTotle = useCallback(() => {
    var instant = 0;
    for (let index = 0; index < service.length; index++) {
      var insta = instant += Number(service[index].serviceTotalePrice);
    }
    // console.log(insta);
    dispatch(setTotaleValue(insta))
    // return instant
  }, [service])
  return (
    <>
      <div className="container-fluide">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <div class="mb-2">
                    <label htmlFor="name" class="form-label">
                      Select Costomer
                    </label>
                    <SearchSelect
                      col={true}
                      id="name"
                      onChange={(event, id) => costomerfind(id.id)}
                      options={costomerOption}
                      label="Add Costomer"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div class="mb-2">
                    <label htmlFor="name" class="form-label">
                      Costomer No.
                    </label>
                    <TextField
                      col={true}
                      id="name"
                      size="small"
                      value={costomerSelected.mobaile || 0}
                      label="Select Costemer"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div class="mb-2">
                    <label htmlFor="name" class="form-label">
                      Invoice Date
                    </label>
                    <TextField size="small" col={true} id="name" value={date()} />
                  </div>
                </div>
                <div className="col-3">
                  <table>
                    <tr>
                      <td><label htmlFor="name" class="form-label">GST :</label></td>
                      <td><Switch /></td>
                    </tr>
                    <tr>
                      <td><label htmlFor="name" class="form-label">Appointment :</label></td>
                      <td><Switch /></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="body">
              <Button onClick={() => dispatch(allItemsRem())}>
                Clear All Items
              </Button>
              {service.map((e, k) => <InvoiceService key={k} serviceReduxid={k} />)}
              {/* <InvoiceProduct/>
              <InvoicePkg/>
              <InvoiceVoucher/>
              <InvoiceWeg/>
              <InvoiceExtention/>
              <InvoiceWegRepair/> */}
              {/* <InvoiceServiceSection /> */}
            </div>
            <div className="container my-3">
              <div className="row">
              </div>
              <div className="row container">
                <InvoiceBtn title={"Add Serrvice"} onClick={() => dispatch(addService())} />
                <InvoiceBtn title={"Add Product"} ></InvoiceBtn>
                <InvoiceBtn title={"Create Pkg"} ></InvoiceBtn>
                <InvoiceBtn title={"Create Voucher"} ></InvoiceBtn>
                <InvoiceBtn title={"Add Weg"} ></InvoiceBtn>
                <InvoiceBtn title={"Add Extention"} ></InvoiceBtn>
                <InvoiceBtn title={"Weg Repair"} ></InvoiceBtn>
              </div>
            </div>
            <div className="container my-3">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="card">
                    <div className="card-header">Benefits</div>
                    <div className="card-body">
                      <div class="">
                        <label
                          htmlFor="exampleFormControlInput1"
                          class="form-label"
                        >
                          Costomer Detaile
                        </label>
                      </div>
                      <FormControl fullWidth>
                        <InputLabel size="small" id="demo-simple-select-label">
                          Select Benefits
                        </InputLabel>
                        <Select
                          size="small"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={benifits}
                          label="Age"
                          onChange={(e) => setbenifits(e.target.value)}
                        >
                          <MenuItem value={1}>Discount</MenuItem>
                          <MenuItem value={2}>Vaoucher</MenuItem>
                          <MenuItem value={3}>Reward</MenuItem>
                        </Select>
                      </FormControl>
                      {benifits === 1 ? (
                        <>
                          <Discount onChange={(e) => (totale - totale * (e.target.value / 100)) >= miNtotale ? setDiscount(e.target.value) : setDiscount(0)} value={discount} />
                        </>
                      ) : null || benifits === 2 ? (
                        "Vaoucher"
                      ) : null || benifits === 3 ? (
                        "Reward Points"
                      ) : null}
                    </div>
                    <div className="card-footer"></div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="card">
                    <div className="card-header">Payment Details</div>
                    <div className="card-body"></div>
                    <div className="card-footer"></div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="card">
                    <div className="card-header">Sub Total</div>
                    <div className="card-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>{"Sub Total Amount:"}</td>
                            <td>{totale}</td>
                          </tr>
                          <tr>
                            <td>{"GST:"}</td>
                            <td>{totale}</td>
                          </tr>
                          <tr>
                            <td>{"Discount:"}</td>
                            <td>{discount}</td>
                          </tr>
                          <tr>
                            <td>{"Discounted Price:"}</td>
                            <td>{totale * (discount / 100)}</td>
                          </tr>
                          <tr>
                            {getTotle()}
                            <td>{"Total:"}</td>
                            {/* <td>{getTotle()}</td> */}
                            <td>{totale - totale * (discount / 100)}</td>
                          </tr>
                          <tr>
                            <td>{"Sub Total Amount:"}</td>
                            {/* <td>{getTotle()}</td> */}
                            <td>{totale - totale * (discount / 100)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button
                variant="contained"
                onClick={() => createInvoice()}
              >
                Create Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Discount = ({ ...props }) => {
  return (
    <>
      <TextField
        {...props}
        size="small"
        fullWidth
        className="my-3"
        placeholder="Add Discount"
      />
    </>
  );
};

const InvoiceBtn = ({ onClick, title }) => {
  return (
    <>
      <div className="m-2">
        <Button size="small" variant="contained" onClick={onClick}>
          {title}
        </Button>
      </div>
    </>
  )
}

const InvoiceService = ({ serviceReduxid }) => {
  const { service: { service }, invoiceItems: { data }, stuff: { staff } } = useSelector(state => state)
  // console.log(`componet index ${serviceReduxid} qty value ${data.service[serviceReduxid].serviceQty}`);
  const serviceData = service.map((e) => ({ label: e.name, id: e.id }))
  const staffData = staff.map((e) => ({ label: e.firstname, id: e.id }))
  const dispatch = useDispatch()
  const serVicefind = useCallback((id) => {
    const servicedata = service.filter(data => data.id === id)[0];
    // setserviceState(serviceData.filter(data => data.id === id)[0])
    dispatch(changeService({ id: servicedata.id, key: serviceReduxid, minprice: servicedata.minprice, price: servicedata.price }))
    return servicedata
  }, [data]);

  const stafffind = useCallback((id) => {
    const servicedata = staff.filter(data => data.id === id)[0];
    dispatch(changeServiceStaff({ key: serviceReduxid, staffId: servicedata.id }))
    return servicedata
  }, [data]);

  // const getPrice=useCallback(e=>data.service[serviceReduxid].servicePrice)
  const labelName = useCallback((id) => {
    const data = serviceData.filter((data) => data.id === id)
    if (data !== []) {
      return data
    } else {
      return null
    }
  }, [data])
  const serviceQtyChange = useCallback(e => {
    dispatch(changeServiceQty({ key: serviceReduxid, value: e }))
  }, [data])

  const serviceDiscChange = useCallback(e => {
    dispatch(changeServiceDisc({ key: serviceReduxid, value: e }))
  }, [data])

  console.log(Number(data.service[serviceReduxid].serviceQty) * (data.service[serviceReduxid].servicePrice - (data.service[serviceReduxid].servicePrice * (data.service[serviceReduxid].serviceDisc / 100))));
  console.log(10 * (250 - (250 * (10 / 100))));
  return (
    <>
      <div className="row d-flex justify-content-around m-2">
        {/* <p>{data.service[serviceReduxid].servicePrice - (data.service[serviceReduxid].servicePrice * (data.service[serviceReduxid].serviceDisc/100))}</p> */}
        <SearchSelect
          value={labelName(data.service[serviceReduxid].serviceId)[0] || null}
          onChange={(event, id) => {
            serVicefind(id.id)
          }}
          options={serviceData || []}
          label="Add Service"
        />
        <SearchSelect
          onChange={(event, id) => stafffind(id.id)}
          options={staffData}
          label="Add Staff"
        />
        <div className="col-1">
          <TextField
            id="outlined-basic"
            onChange={(e) => serviceQtyChange(e.target.value)}
            value={data.service[serviceReduxid].serviceQty}
            sx={{ width: "100%" }}
            label="Qty"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="col-1">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Price"
            value={data.service[serviceReduxid].serviceDisc}
            onChange={(e) => serviceDiscChange(e.target.value)}
            variant="outlined"
            size="small"
          />

        </div>
        <div className="col-1">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Price"
            value={data.service[serviceReduxid].servicePrice || 0}
            variant="outlined"
            size="small"
          />
        </div>
        <div className="col-3">
          <IconButton onClick={() => dispatch(remService({ id: data.service[serviceReduxid].serviceId, price: data.service[serviceReduxid].servicePrice }))}>
            <MdRestoreFromTrash color="red" />
          </IconButton>
        </div>
      </div>
    </>
  )
}

const InvoiceProduct = ({ }) => {
  return (
    <>

    </>
  )
}

const InvoicePkg = ({ }) => {
  return (
    <>

    </>
  )
}

const InvoiceVoucher = ({ }) => {
  return (
    <>

    </>
  )
}

const InvoiceWeg = ({ }) => {
  return (
    <>

    </>
  )
}

const InvoiceExtention = ({ }) => {
  return (
    <>

    </>
  )
}

const InvoiceWegRepair = ({ }) => {
  return (
    <>

    </>
  )
}

// const InvoiceServiceSection = ({ title, label, plase, onchange, ...props }) => {
//   const dispatch = useDispatch();
//   const [serviceObj, setServiceObg] = useState({});
//   const [staffId, setstaffId] = useState("");
//   const [qty, setqty] = useState(1);
//   const [price, setprice] = useState("");

//   const serviceData = useSelector((stae) => stae.service.service);
//   const staffData = useSelector((stae) => stae.stuff.staff);

//   const service =serviceData ? serviceData.map((data) => ({
//     id: data.id,
//     label: data.name,
//   })) : [];
//   const serVicefind = (id) =>setServiceObg(serviceData.filter((data) => data.id === id)[0]);

//   const staff = staffData ? staffData.map((data) => ({ id: data.id, label: data.name })):[];

//   const addService = () => {
//     // const discountCheck =serviceObj.price - serviceObj.price * (disc / 100) >= serviceObj.minprice;
//     var state = {
//       serviceId: serviceObj.id,
//       staffId: staffId,
//       price: serviceObj.price,
//       totale: serviceObj.price * qty,
//       miNtotale: serviceObj.minprice * qty,
//       qty: qty,
//     };
//     dispatch(addItems(state));
//   };

//   return (
//     <>
//       <div className="row d-flex justify-content-around">
//         <SearchSelect
//           onChange={(event, id) => serVicefind(id.id)}
//           options={service}
//           label="Add Service"
//         />
//         <SearchSelect
//           onChange={(event, id) => setstaffId(id.id)}
//           options={staff}
//           label="Add Staff"
//         />
//         <div className="col-1">
//           <TextField
//             id="outlined-basic"
//             onChange={(e) => setqty(e.target.value)}
//             value={qty}
//             sx={{ width: "100%" }}
//             label="Qty"
//             variant="outlined"
//           />
//         </div>
//         <div className="col-1">
//           <TextField
//             sx={{ width: "100%" }}
//             id="outlined-basic"
//             label="Price"
//             onChange={(e) => setprice(e.target.value)}
//             value={serviceObj.price || 0}
//             variant="outlined"
//           />
//         </div>
//         <div className="col-1">
//           <IconButton onClick={addService}>
//             <FiPlus color="red" />
//           </IconButton>
//         </div>
//       </div>
//     </>
//   );
// };

const SearchSelect = ({ label, inputchange, col, ...data }) => {
  return (
    <>
      <div className={col ? null : "col-3"}>
        <Autocomplete
          {...data}
          disablePortal
          size="small"
          id="combo-box-demo"
          // sx={{ width: 300 }}
          noOptionsText={"Nothing"}
          renderInput={(params) => (
            <TextField {...params} onChange={inputchange} label={label} />
          )}
        />
      </div>
    </>
  );
};

/*
 <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Service</th>
                    <th scope="col">Staff</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Totale</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items
                    ? items.map((e, i) => {
                        // setTotale(e.totale)
                        var ik = ++i;
                        return (
                          <tr>
                            <th scope="row">{ik}</th>
                            <td>{serVicefind(e.serviceId)[0].name}</td>
                            <td>{stafffind(e.staffId)[0].name}</td>
                            <td>{e.qty}</td>
                            <td>{e.price}</td>
                            <td>{discount}</td>
                            <td>{e.totale}</td>
                            <td>
                              <IconButton
                                onClick={() =>
                                  dispatch(
                                    remItems({ id: --i, totale: e.totale })
                                  )
                                }
                              >
                                <MdRestoreFromTrash color="red" />
                              </IconButton>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                  {/* <tr>
                                        <td colspan="6" className='text-right px-5'>Totle</td>
                                        <td>{totale}</td>
                                        <td>{ }</td>
                                        (serviceObj.price - serviceObj.price * (disc / 100))
                    </tr> *///}
  //                                  </tbody>
//                                    </table>
//*/