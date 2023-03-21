import React, { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Divider
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
  changeServiceDisc, addPoduct, changePoduct, changePoductStaff, changePoductQty, remPoduct,
} from "../../Store/Slice/All/invoiceItemsSlice";
import { MdRestoreFromTrash } from "react-icons/md";

import apiRoutes, { appAxios as axios } from '../../Constants/apiRoutes';
import { BsPlus } from "react-icons/bs";
// var [totles,setTotale]=useState(0)
export default function RbsInvoice() {
  const [costomerSelected, setCostomerSelected] = useState(false);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();

  const { data: { service, totale, miNtotale, product } } = useSelector((stae) => stae.invoiceItems);
  const costomerData = useSelector((stae) => stae.costomer.costomer) || [];
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
      // console.log(e)
    })
  }

  const getTotle = useCallback(() => {
    var instant = 0;
    for (let index = 0; index < service.length; index++) {
      var insta = instant += Number(service[index].serviceTotalePrice);
    }

    var productTotale = 0;
    for (let index = 0; index < product.length; index++) {
      var productTotales = productTotale += Number(product[index].productTotalePrice);
    }
    var insta=insta ? insta : 0;
    var productTotales=productTotales ? productTotales :0 ;
    dispatch(setTotaleValue(Number(insta += productTotales)))
    // return instant
  }, [service, product])
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
                      noOptionsText={<Button data-toggle="modal" data-target="#exampleModal" startIcon={<BsPlus />} variant="text" fullWidth={true} color="error">New Costomer</Button>}
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
              {product.map((e, k) => <InvoiceProduct key={k} serviceReduxid={k} />)}

              {/* 
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
                <InvoiceBtn title={"Add Service"} onClick={() => dispatch(addService())} />
                <InvoiceBtn title={"Add Product"} onClick={() => dispatch(addPoduct())} ></InvoiceBtn>
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
  // // console.log(`componet index ${serviceReduxid} qty value ${data.service[serviceReduxid].serviceQty}`);
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

  // console.log(Number(data.service[serviceReduxid].serviceQty) * (data.service[serviceReduxid].servicePrice - (data.service[serviceReduxid].servicePrice * (data.service[serviceReduxid].serviceDisc / 100))));
  // console.log(10 * (250 - (250 * (10 / 100))));
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
            label="Discount"
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
        <div className="col-1">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Totale Price"
            value={data.service[serviceReduxid].serviceTotalePrice || 0}
            variant="outlined"
            size="small"
          />
        </div>
        <div className="col-1">
          <IconButton onClick={() => dispatch(remService({ id: data.service[serviceReduxid].serviceId, price: data.service[serviceReduxid].servicePrice }))}>
            <MdRestoreFromTrash color="red" />
          </IconButton>
        </div>
      </div>
    </>
  )
}

const InvoiceProduct = ({ serviceReduxid }) => {
  const dispatch = useDispatch()
  const { product: { product }, invoiceItems: { data }, stuff: { staff } } = useSelector(state => state)
  const productData = product.map((e) => ({ label: e.name, id: e.id }))
  const staffData = staff.map((e) => ({ label: e.firstname, id: e.id }))

  const serVicefind = useCallback((id) => {
    const servicedata = product.filter(data => data.id === id)[0];
    // console.log(servicedata);
    // setserviceState(serviceData.filter(data => data.id === id)[0])
    dispatch(changePoduct({ id: servicedata.id, key: serviceReduxid, minprice: servicedata.minprice, price: servicedata.price }))
    return servicedata
  }, [data]);

  const stafffind = useCallback((id) => {
    const servicedata = staff.filter(data => data.id === id)[0];
    dispatch(changePoductStaff({ key: serviceReduxid, staffId: servicedata.id }))
    return servicedata
  }, [data]);

  const labelName = useCallback((id) => {
    const datas = productData.filter((data) => data.id === id)
    // console.log(`labelname: ${id}`);
    if (datas !== []) {
      return datas
    } else {
      return null
    }
  }, [data])
  const changePoductQtyByVal = useCallback(e => {
    dispatch(changePoductQty({ key: serviceReduxid, value: e }))
  }, [data])
  return (
    <>
      {((serviceReduxid === 0) && (data.service.length != 0)) && <Divider sx={{ margin: 1.5 }} />}
      <div className="row d-flex justify-content-around m-2">
        <SearchSelect
          value={labelName(data.product[serviceReduxid].productId)[0] || null}
          onChange={(event, id) => {
            serVicefind(id.id)
          }}
          options={productData || []}
          label="Add Product"
        />
          <SearchSelect
            onChange={(event, id) => stafffind(id.id)}
            options={staffData}
            label="Add Staff"
          />
        <div className="col-2">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Product Qty"
            value={data.product[serviceReduxid].productQty || 0}
            variant="outlined"
            size="small"
            onChange={(e) => changePoductQtyByVal(e.target.value)}
          />
        </div>
        <div className="col-2">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Product Price"
            value={data.product[serviceReduxid].productPrice || 0}
            variant="outlined"
            size="small"
          />
        </div>
        <div className="col-1">
          <IconButton onClick={() => {
            dispatch(remPoduct({ id: data.product[serviceReduxid].productId, price: data.product[serviceReduxid].productPrice }))
          }}>
            <MdRestoreFromTrash color="red" />
          </IconButton>
        </div>
      </div>
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
          renderInput={(params) => (
            <TextField {...params} onChange={inputchange} label={label} />
          )}
        />
      </div>
    </>
  );
};