import React from "react";
import {
  Button,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Page from "../../../Layouts/Page";
import {
  BsClipboard,
  BsPlus,
  BsSearch,
  BsTelephone,
  BsTrash,
  BsWhatsapp,
} from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import NewStoreModel from "./NewStoreModel";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const StoreManger = () => {
    var count=0
  const { store } = useSelector((state) => state.store);
  // console.log(store);
  return (
    <Page header={"Store Manger"}>
      {/* <Button title='New Store' variant='outlined' color='danger' /> */}
      <div className="row justify-content-between my-43">
        <div></div>
        <Button
          data-toggle="modal"
          data-target="#NEWSTORE"
          variant="contained"
          color="error"
          className="mx-3"
          startIcon={<BsPlus size={20} />}
        >
          New Store
        </Button>
      </div>
      <div className="container my-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Timing</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Live Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {store.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {++count}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{`${row.opentime} To ${row.closetime}`}</TableCell>
                  <TableCell align="center">{row.status ? <Active /> : <Deactive/>}</TableCell>
                  <TableCell align="center">9:00 To N/A</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <NewStoreModel ids={"NEWSTORE"} />
    </Page>
  );
};

export default StoreManger;

const Active=d=><span className="text-success">Open</span>
const Deactive=d=><span className="text-danger">Closs</span>