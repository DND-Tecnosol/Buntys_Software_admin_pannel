import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  ButtonGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { FiPlus } from "react-icons/fi";
// import {PhotoCamera} from '@mui/icons-material';
import {
  addItems,
  remItems,
  allItemsRem,
} from "../../Store/Slice/All/invoiceItemsSlice";
import { MdRestoreFromTrash } from "react-icons/md";
import { data } from "jquery";

// var [totles,setTotale]=useState(0)
export default function RbsInvoice() {
  const [costomerSelected, setCostomerSelected] = useState(false);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();

  const { items, totale, miNtotale } = useSelector((stae) => stae.invoiceItems);
  const serviceData = useSelector((stae) => stae.service.service);
  const staffData = useSelector((stae) => stae.stuff.staff);
  const costomerData = useSelector((stae) => stae.costomer.costomer);

  const costomerOption = costomerData.map((data) => ({
    id: data.id,
    label: data.name,
  }));
  const serVicefind = (id) => serviceData.filter((data) => data.id === id);
  const costomerfind = (id) => {
    const data = costomerData.filter((data) => data.id === id)[0];
    setCostomerSelected(data);
    console.log(data);
    return data;
  };
  const stafffind = (id) => staffData.filter((data) => data.id === id);
  const [benifits, setbenifits] = useState("");
  const date = () => {
    const d = new Date();

    return ` ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  };

  const [discontPrice, setDiscontPrice] = useState("");


  const addDisacount = (e) => {
    const checkDiscont = miNtotale >= totale * (e.target.value / 100) ? setDiscount(e.target.value) : setDiscount(0);
    console.log({
      dis: e.target.value,
      checkDis: checkDiscont,
      miNtotale: miNtotale,
      discontValue: totale - totale * (e.target.value / 100),
    });
    var code = e.keyCode ? e.keyCode : e.which;
    
    if(code === 13){
        if (!checkDiscont) {
          setDiscount(0);
          return 0;
        } else {
          setDiscount(e.target.value);
          return 0;
        }
    }
    // setDiscontPrice(totale * (discount / 100))
  };

  const checkDiscont = (e) => {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      //Enter keycode
      const checkDiscont = miNtotale >= totale * (discount / 100);
      if (!checkDiscont) {
        setDiscount(0);
        console.log(discount);
      }
      alert("enter press");
    }
  };
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
                    <TextField col={true} id="name" value={date()} />
                  </div>
                </div>
              </div>
            </div>
            <div className="body">
              <Button onClick={() => dispatch(allItemsRem())}>
                Clear All Items
              </Button>
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
                                    </tr> */}
                </tbody>
              </table>
              <InvoiceServiceSection />
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
                        <InputLabel id="demo-simple-select-label">
                          Select Benefits
                        </InputLabel>
                        <Select
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
                            <Discount onChange={(e) => {
                                (totale - totale * (e.target.value / 100)) >= miNtotale ? setDiscount(e.target.value) : setDiscount(0)
                                console.log(`min value:${miNtotale} max:${(totale - totale * (e.target.value / 100))} , ans:${miNtotale >= (totale * (e.target.value / 100))}`)
                                }} value={discount} />
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
                            <td>{"Total:"}</td>
                            <td>{totale - totale * (discount / 100)}</td>
                          </tr>
                          <tr>
                            <td>{"Sub Total Amount:"}</td>
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
                onClick={() => dispatch(allItemsRem())}
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
        fullWidth
        className="my-3"
        placeholder="Add Discount"
      />
    </>
  );
};

const InvoiceServiceSection = ({ title, label, plase, onchange, ...props }) => {
  const dispatch = useDispatch();
  const [serviceObj, setServiceObg] = useState({});
  const [staffId, setstaffId] = useState("");
  const [disc, setdisc] = useState(0);
  const [totale, settotale] = useState("");
  const [qty, setqty] = useState(1);
  const [price, setprice] = useState("");

  const serviceData = useSelector((stae) => stae.service.service);
  const staffData = useSelector((stae) => stae.stuff.staff);

  const service = serviceData.map((data) => ({
    id: data.id,
    label: data.name,
  }));
  const staff = staffData.map((data) => ({ id: data.id, label: data.name }));
  const serVicefind = (id) =>
    setServiceObg(serviceData.filter((data) => data.id === id)[0]);
  // const stafffind = (id) => setServiceObg(serviceData.filter((data) => data.id === id)[0])
  const getDiscount = (e) => {
    // setTotal(priceTotale)
  };
  function getFinalPrice(prices, discount1) {
    console.log(discount1);
    console.log(prices);
    return;
  }
  const addService = () => {
    // const discountCheck =serviceObj.price - serviceObj.price * (disc / 100) >= serviceObj.minprice;
    var state = {
      serviceId: serviceObj.id,
      staffId: staffId,
      price: serviceObj.price,
      totale: serviceObj.price * qty,
      miNtotale: serviceObj.minprice * qty,
      qty: qty,
    };
    dispatch(addItems(state));
  };

  return (
    <>
      <div className="row d-flex justify-content-around">
        <SearchSelect
          onChange={(event, id) => serVicefind(id.id)}
          options={service}
          label="Add Service"
        />
        <SearchSelect
          onChange={(event, id) => setstaffId(id.id)}
          options={staff}
          label="Add Staff"
        />
        <div className="col-1">
          <TextField
            id="outlined-basic"
            onChange={(e) => setqty(e.target.value)}
            value={qty}
            sx={{ width: "100%" }}
            label="Qty"
            variant="outlined"
          />
        </div>
        <div className="col-1">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Price"
            onChange={(e) => setprice(e.target.value)}
            value={serviceObj.price || 0}
            variant="outlined"
          />
        </div>
        <div className="col-1">
          <IconButton onClick={addService}>
            <FiPlus color="red" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

const SearchSelect = ({ label, inputchange, col, ...data }) => {
  return (
    <>
      <div className={col ? null : "col-3"}>
        <Autocomplete
          {...data}
          disablePortal
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
