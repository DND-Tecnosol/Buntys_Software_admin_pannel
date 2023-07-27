import React, { useCallback, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  Paper,
  tableCellClasses,
  TextField,
  TableCell,
  Select,
  MenuItem,
  Autocomplete,
  Stack,
  styled,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Switch,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";
import moment from "moment";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import apiRoutes, { appAxios } from "../../../Constants/apiRoutes";
import { fetchCampign } from "../../../Store/Slice/Campign";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { routes } from "../../../Constants/routesconst";
export default function WeboffersData() {
  const dispatchs = useDispatch();

  const targetAudianceOffersData = useSelector(
    (s) => s.campign.targetAudianceOffers
  );
  const status = (status, id) => {
    console.log(`${status} ${id}`);
    appAxios
      .put(`${apiRoutes.CampignData}targetAudianceOffers/${id}`, {
        status: status,
      })
      .then((e) => {
        if (e.data.code == 200) {
          // toast(e.data.msg)
          toast.success(e.data.msg);
        } else {
          toast.error(e.data.msg);
        }
        dispatchs(fetchCampign());
      });
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Min Amount</StyledTableCell>
              <StyledTableCell>Costomer Count</StyledTableCell>
              <StyledTableCell>Benifits Type</StyledTableCell>
              <StyledTableCell>Benifits</StyledTableCell>
              <StyledTableCell>Applicable</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell>End Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {targetAudianceOffersData.map((row) => {
              console.log(row.costomercount.length);
              return (
                <StyledTableRow key={row.name}>
                    <StyledTableCell><LinkData data={row} /></StyledTableCell>
                    <StyledTableCell>{row.minsale}</StyledTableCell>
                    <StyledTableCell>{row.costomercount.length}</StyledTableCell>
                    <StyledTableCell>{row.BenifitsType == "disc" ? "Discount" : "Case"}</StyledTableCell>
                    <StyledTableCell>{row.BenifitsType == "disc" ? `${row.benifit} %` : `${row.benifit} ₹`}</StyledTableCell>
                    <StyledTableCell>{row.offeraplicable}</StyledTableCell>
                    <StyledTableCell>
                      <Switch
                        disabled={row.end_date <= moment().format("YYYY-MM-DD")}
                        onChange={() => status(!row.status, row.id)}
                        checked={row.status}
                      />{" "}
                    </StyledTableCell>
                    <StyledTableCell>
                      {moment(row.start_date).format("Do MMM YY")}
                    </StyledTableCell>
                    <StyledTableCell>
                      {moment(row.end_date).format("Do MMM YY")}
                    </StyledTableCell>
                    {/* <Link href="/">
                  </Link> */}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const LinkData=({data})=><Link to={`${routes.targetaudience}/${data.id}`}>{data.name}</Link> 
