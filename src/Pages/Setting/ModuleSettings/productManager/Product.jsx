import React from "react";
import {
  Select,
  TextField,
  FormControl,
  Dialog,
  MenuItem,
  DialogTitle,
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
import {useDispatch, useSelector} from "react-redux";
import {Delete, Edit} from "@mui/icons-material";
import {DataGrid} from "@mui/x-data-grid";
import {useState, useCallback} from "react";
import apiRoutes, {appAxios} from "../../../../Constants/apiRoutes";
import {fetchProduct} from "../../../../Store/Slice/All/productSlice";
import {toast} from "react-toastify";
function Product() {
  const [data, setData] = useState(false);
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  const updateProduct = (datas,id) => {
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
          <Table sx={{minWidth: 650}} aria-label="simple table">
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
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
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
      <AddProductModel datas={data} save={saveProduct} update={updateProduct} />
      {data && <AddProductModel datas={data} update={updateProduct} close={() => setData(false)} />}
    </>
  );
}

export default Product;

const AddProductModel = ({save, update, datas,close}) => {
  const [proCate, setProCate] = useState(datas.proCate);
  const [proBrand, setProBrand] = useState(datas.proBrand);
  const [name, setname] = useState(datas.name);
  const [cost, setcost] = useState(datas.cost);
  const [price, setprice] = useState(datas.price);
  const [special_price, setspecial_price] = useState(datas.special_price);
  const [discription, setdiscription] = useState(datas.discription);
  const [expiry_date, setexpiry_date] = useState(datas.expiry_date);
  const [menuefacture_date, setmenuefacture_date] = useState(
    datas.menuefacture_date
  );
  const [qty, setqty] = useState(datas.qty);
  const [productcategury, setproductcategury] = useState(datas.productcategury);
  const [inventury_product_unit, setinventury_product_unit] = useState(
    datas.inventury_product_unit
  );
  const [inventury_product_qty, setinventury_product_qty] = useState(
    datas.inventury_product_qty
  );
  const [totale_qty, settotale_qty] = useState(datas.totale_qty);
  const {product_categury, product_brand} = useSelector(
    (state) => state.product
  );
  const brandhandleChange = useCallback(
    (e) => {
      setProBrand(e.target.value);
    },
    [proCate]
  );
  const categuryhandleChange = useCallback(
    (e) => {
      setProCate(e.target.value);
    },
    [proBrand]
  );
  const data = {
    producttypes_id: proCate,
    brand_id: proBrand,
    productcategury: productcategury,
    name: name,
    cost: cost,
    price: price,
    special_price: special_price,

    discription: discription,
    expiry_date: expiry_date,
    menuefacture_date: menuefacture_date,
    qty: qty,
    totale_qty: totale_qty,

    inventury_product_qty: inventury_product_qty,
    per_unite_price: cost / qty,
  };

  console.log(data);
  return (
    <>
      <div
        class={`modal fade ${datas ? "show" : ""}`}
        id="addproducts"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{display: datas ? "block" : "none"}}
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
                  direction={{xs: "column", md: "row"}}
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <TextField
                    select
                    placeholder="Product Type"
                    label="Product Type"
                    variant="filled"
                    value={productcategury}
                    onChange={(e) => setproductcategury(e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="insallon">Insalon</MenuItem>
                    <MenuItem value="selling">Selling</MenuItem>
                  </TextField>

                  <TextField
                    select
                    label="Product Categury"
                    variant="filled"
                    fullWidth
                    defaultValue={proCate}
                    onChange={categuryhandleChange}
                    shado
                  >
                    {product_categury.map((e) => (
                      <MenuItem key={e.id} value={e.id}>
                        {e.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    label="Product Brand"
                    variant="filled"
                    fullWidth
                    defaultValue={proBrand}
                    onChange={brandhandleChange}
                    shado
                  >
                    {product_brand &&
                      product_brand.map((e, key) => (
                        <MenuItem key={e.id} value={e.id}>
                          {e.brand_name}
                        </MenuItem>
                      ))}
                  </TextField>
                </Stack>
                <Stack
                  direction={{xs: "column", md: "row"}}
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
                  {/* <TextField label="Product Discription" fullWidth variant="filled"  /> */}
                  <div className="col-md-6 col-sm-12">
                    <TextField
                      fullWidth
                      label="Totale Qty in Store Inventory"
                      variant="filled"
                    />
                  </div>
                </Stack>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {!data ? (
                <>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => save(data)}
                  >
                    Save changes
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    class="btn btn-primary"
                      onClick={() => update(data, datas.id)}
                  >
                    Upadet
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const UpdateProductModel = ({key, data}) => {
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
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
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
