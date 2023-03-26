import React from "react";
import {
  TextField,
  Autocomplete,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useCallback } from "react";
import apiRoutes, { appAxios } from "../../../../../Constants/apiRoutes";
import { fetchHairWeg } from "../../../../../Store/Slice/All/productSlice";
import { toast } from "react-toastify";
function Weg() {
  const [data, setData] = useState(false);
  const hairweg = useSelector((state) => state.product.hairPatch);
  const dispatch = useDispatch();

  const updateProduct = (datas, id) => {
    console.log(datas);
    appAxios.put(apiRoutes.hairweg + id, datas).then((e) => {
      toast(e.data.msg);
      dispatch(fetchHairWeg());
    });
  };

  const deleteProduct = (id) => {
    appAxios.delete(apiRoutes.hairweg + id).then((e) => {
      toast(e.data.msg);
      dispatch(fetchHairWeg());
    });
  };
  const saveProduct = (datas) => {
    console.log("Save Run");

  };
  return (
    <>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <Button
          data-toggle="modal"
          data-target="#addproducts"
          variant="contained"
        >
          Add Product
        </Button>
      </Stack>
      <div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell># No. </TableCell>
                <TableCell align="justify">Product Name</TableCell>
                <TableCell align="justify">Product Price</TableCell>
                <TableCell align="justify">Product Offers Price</TableCell>
                <TableCell align="justify">Product Qty</TableCell>
                <TableCell align="justify">Product Status</TableCell>
                <TableCell align="justify">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hairweg &&
                hairweg.map((row, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="">{++key}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="">{row.price}</TableCell>
                    <TableCell align="">{(row.offers_price || <><Button color="error" >No Offer Price</Button></>)}</TableCell>
                    <TableCell align="">{row.inventory_qty}</TableCell>
                    <TableCell align="">{(row.status)}</TableCell>
                    {/* <TableCell align="">{row.status}</TableCell> */}
                    <TableCell>
                      {/* <IconButton onClick={() => setData(row)}>
                        <Edit color="warning" />
                      </IconButton> */}
                      <IconButton onClick={() => deleteProduct(row.id)}>
                        <Delete color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {data && <AddProductModel datas={data} update={updateProduct} close={() => setData(false)} />}
      {!data && <AddProductModel datas={data} save={saveProduct} close={() => setData(false)} />}
    </>
  );
}

export default Weg;

const AddProductModel = ({  update, datas, close }) => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [cost, setcost] = useState("");
  const [min_price, setmin_price] = useState("");
  const [offers_price, setoffers_price] = useState("");
  const [front, setfront] = useState("");
  const [frontRound, setfrontRound] = useState("");
  const [frontBack, setfrontBack] = useState("");
  const [back, setback] = useState("");
  const [round, setround] = useState("");
  const [neck, setneck] = useState("");
  const [hairLenth, sethairLenth] = useState("");
  const [inventory_qty, setinventory_qty] = useState("");
  const [hair_color, sethair_color] = useState("");
  const [alertinventory_qty, setalertinventory_qty] = useState("");
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const hairweg = useSelector((state) => state.product.hairwegtype);
  const hairwegTypeFilter = hairweg.map(e => ({ label: e.name, id: e.id }))
  // const brandhandleChange = useCallback((e) => { setProBrand(e.target.value) }, [proCate]);
  // const categuryhandleChange = useCallback((e) => { setProCate(e.target.value) }, [proBrand]);
  const dispatch = useDispatch();

  const save =()=>{
    const data = {
      name: name,
      wegcategury_id: value.id,
      price: price,
      cost: cost,
      min_price: min_price,
      offers_price: offers_price,
      front: front,
      frontRound: frontRound,
      frontBack: frontBack,
      back: back,
      round: round,
      neck: neck,
      hairLenth: hairLenth,
      inventory_qty: inventory_qty,
      alert_qty: alertinventory_qty,
    }

    appAxios.post(apiRoutes.hairweg, data).then((e) => {
      toast(e.data.msg);
      dispatch(fetchHairWeg());
    });

  } 

  // console.log(` Value : ${value.id}  inputValue: ${inputValue}`);
  return (
    <>
      <div
        class={`modal fade ${datas ? "show" : ""}`}
        id="addproducts"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={datas ? "true" : "false"}
        style={{ display: datas ? "block" : "none", padding: datas ? '0px' : "17px" }}
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Hair Weg In Store Inventory
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={close}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body border-0">
              <div className="container">
                <Grid container spacing={3} >
                  <Grid item sm={6} md={6} xs={12} lg={6} >
                    <TextField label="Name" value={name} onChange={(e)=>setname(e.target.value)} size="small" fullWidth />
                  </Grid>
                  <Grid item sm={6} md={6} xs={12} lg={6} >
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}

                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={hairwegTypeFilter || []}
                      size="small"
                      fullWidth
                      renderInput={(params) => <TextField {...params} label="Hair Weg Categury" />}
                    />
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Cost" onChange={(e)=>setcost(e.target.value)} value={cost} size="small" fullWidth />
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Price" size="small" onChange={(e)=>setprice(e.target.value)} value={price} fullWidth />
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Minimum Price" size="small" value={min_price} onChange={(e)=>setmin_price(e.target.value)} fullWidth />
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Offer Price" size="small" onChange={(e)=>setoffers_price(e.target.value)} fullWidth value={offers_price} />
                  </Grid>
                  <Grid item sm={12} md={12} xs={12} lg={12}>
                    <center>Size</center>
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3}  >
                    <TextField label="Front" size="small" value={front} onChange={(e)=>setfront(e.target.value)} fullWidth />
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Front Round" size="small" fullWidth value={frontRound} onChange={(e)=>setfrontRound(e.target.value)} />
                  </Grid>
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Front Back " size="small" fullWidth value={frontBack} onChange={(e)=>setfrontBack(e.target.value)} />
                  </Grid> 
                  <Grid item sm={6} md={3} xs={12} lg={3} >
                    <TextField label="Back" size="small" fullWidth onChange={(e)=>setback(e.target.value)} value={back} />
                  </Grid>
                  <Grid item sm={4} md={4} xs={12} lg={4} >
                    <TextField label="Round" size="small" fullWidth onChange={(e)=>setround(e.target.value)} value={round} />
                  </Grid>
                  <Grid item sm={4} md={4} xs={12} lg={4} >
                    <TextField label="Neck" size="small" fullWidth onChange={(e)=>setneck(e.target.value)} value={neck} />
                  </Grid>
                  <Grid item sm={4} md={4} xs={12} lg={4} >
                    <TextField label="Hair Lenth" size="small" fullWidth onChange={(e)=>sethairLenth(e.target.value)} value={hairLenth} />
                  </Grid>
                  <Grid item sm={12} md={12} xs={12} lg={12}>
                    <center>Hair Color</center>
                  </Grid>
                  <Grid item sm={12} md={12} xs={12} lg={12} >
                    <TextField label="Hair Color" size="small" fullWidth onChange={(e)=>sethair_color(e.target.value)} value={hair_color} />
                  </Grid>
                  <Grid item sm={12} md={12} xs={12} lg={12}>
                    <center>Inventory</center>
                  </Grid>
                  <Grid item sm={6} md={6} xs={12} lg={6} >
                    <TextField label="Store Inventory Stock" size="small" fullWidth value={inventory_qty} onChange={(e)=>setinventory_qty(e.target.value)} />
                  </Grid>
                  <Grid item sm={6} md={6} xs={12} lg={6} >
                    <TextField label="Alert Inventory Stock" size="small"  fullWidth value={alertinventory_qty} onChange={(e)=>setalertinventory_qty(e.target.value)} />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div class="modal-footer border-0">
              <Button type="button" color="warning" onClick={() => update()} >
                Update
              </Button>
              <Button type="button" onClick={() => save()} >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const UpdateProductModel = ({ key, data }) => {
  return (
    <>
      <div
        class="modal fade"
        id="updateproducts"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
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
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-text" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
