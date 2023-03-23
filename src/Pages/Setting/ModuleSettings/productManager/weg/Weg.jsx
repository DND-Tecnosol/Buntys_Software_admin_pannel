import React from "react";
import {
  Select,
  TextField,
  FormControl,
  Dialog,
  MenuItem,
  Autocomplete,
  DialogContent,
  DialogContentText,
  DialogActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Stack,
  Button,
  Container,
  InputBase,
  InputLabel,
  Input,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useCallback } from "react";
import apiRoutes, { appAxios } from "../../../../../Constants/apiRoutes";
import { fetchProduct } from "../../../../../Store/Slice/All/productSlice";
import { toast } from "react-toastify";
function Weg() {
  const [data, setData] = useState(false);
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  const updateProduct = (datas, id) => {
    console.log(datas);
    appAxios.put(apiRoutes.product + id, datas).then((e) => {
      toast(e.data.msg);
      dispatch(fetchProduct());
    });
  };

  const deleteProduct = (id) => {
    appAxios.delete(apiRoutes.product + id).then((e) => {
      toast(e.data.msg);
      dispatch(fetchProduct());
    });
  };
  const saveProduct = (datas) => {
    console.log("Save Run");
    appAxios.post(apiRoutes.product, datas).then((e) => {
      toast(e.data.msg);
      dispatch(fetchProduct());
    });
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
                <TableCell align="justify">Product Qty</TableCell>
                <TableCell align="justify">Product Status</TableCell>
                <TableCell align="justify">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product &&
                product.map((row, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="">{++key}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="">{row.price}</TableCell>
                    <TableCell align="">{row.inventury_product_qty}</TableCell>
                    <TableCell align="">{row.status}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => setData(row)}>
                        <Edit color="warning" />
                      </IconButton>
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

const AddProductModel = ({ save, update, datas, close }) => {
  const [wegcategury_id, setwegcategury_id] = useState("");
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
  const [shall, setshall] = useState("");
  const [inventory_qty, setinventory_qty] = useState("");
  const { product_categury, product_brand } = useSelector(
    (state) => state.product
  );
  // const brandhandleChange = useCallback((e) => { setProBrand(e.target.value) }, [proCate]);
  // const categuryhandleChange = useCallback((e) => { setProCate(e.target.value) }, [proBrand]);
  const data = {
    wegcategury_id: "",
    name: "",
    price: "",
    cost: "",
    min_price: "",
    offers_price: "",
    front: "",
    frontRound: "",
    frontBack: "",
    back: "",
    round: "",
    neck: "",
    hairLenth: "",
    shall: "",
    inventory_qty: "",
  };

  console.log(datas);
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
                Add Product
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
                
              </div>
            </div>
            <div class="modal-footer border-0">
              <Button type="button" color="warning" onClick={() => update(data, datas.id)} >
                Update
              </Button>
              <Button type="button" onClick={() => save(data)} >
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

/*
<Stack
                  direction={"row"}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <TextField
                    label="Product Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    fullWidth
                    variant="filled"
                  />
                </Stack>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <Autocomplete
                    value={wegcategury_id}
                    onChange={(event, newValue) => {
                      setwegcategury_id(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setwegcategury_id(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Hair Weg Types" />}
                  />
                 
                </Stack>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <TextField
                    value={cost}
                    onChange={(e) => setcost(e.target.value)}
                    label="Product Cost"
                    fullWidth
                    variant="filled"
                  />
                  <TextField
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                    label="Product Price"
                    fullWidth
                    variant="filled"
                  />
                  <TextField
                    value={unite_in_product}
                    onChange={(e) => setunite_in_product(e.target.value)}
                    label="Product (gm,ml)"
                    fullWidth
                    variant="filled"
                  />
                  <TextField label="Special Price" fullWidth variant="filled" />
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <TextField
                    value={discription}
                    onChange={(e) => setdiscription(e.target.value)}
                    label="Product Discription"
                    fullWidth
                    variant="filled"
                    multiline={4}
                  />
                </Stack>
                <Stack py={0.5}>
                  <center>
                    <h5>Inventory</h5>
                  </center>
                </Stack>
                <Stack
                  value={inventury_product_qty}
                  onChange={(e) => setinventury_product_qty(e.target.value)}
                  direction={"row"}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  {/* <TextField label="Product Discription" fullWidth variant="filled"  /> *///}
                  {/* <Stack direction={'row'} spacing={2} width="100%" > */}
                //   <div className="col-md-6 col-sm-12">
                //     <TextField
                //       fullWidth
                //       value={qty}
                //       onChange={e => setqty(e.target.value)}
                //       label="Totale Qty in Store Inventory"
                //       variant="filled"
                //     />
                //   </div>
                //   <div className="col-md-6 col-sm-12">
                //     <TextField
                //       value={alertqty}
                //       fullWidth
                //       onChange={e => setalertqty(e.target.value)}
                //       label="Alert Stock qty."
                //       variant="filled"
                //     />
                //   </div>
                // </Stack>
                {/* </Stack> */}
//*/