import { FormControl, Grid, InputLabel, Paper, tableCellClasses, TextField, TableCell, Select, MenuItem, Autocomplete, Stack, styled, Button, TableContainer, Table, TableHead, TableRow, TableBody, Switch, Card, CardHeader, CardContent, } from '@mui/material'
import React, { useCallback, useState } from 'react'
import apiRoutes, { appAxios } from '../../../Constants/apiRoutes';
import { useSelector } from 'react-redux';
import moment from 'moment';
function Index() {
  // appAxios.get(apiRoutes)
  const [selectServiceSegment, setSelectServiceSegment] = useState("all")
  const [targetAudiance, setTargetAudiance] = useState("all")
  const [selectService, setSelectService] = useState([])
  const [selectServicecategury, setSelectServicecategury] = useState([])
  const [selectcostomercategury, setSelectcostomercategury] = useState([])
  const [selectcostomerservice, setSelectcostomerservice] = useState([])
  const [costomerMinsale, setcostomerMinsale] = useState("")
  const [costomerMaxsale, setcostomerMaxsale] = useState("")
  const [name, setName] = useState("")
  const [salemaxprice, setSaleMaxprice] = useState("")
  const [benifits, setBenifits] = useState("")
  const [benifitsType, setBenifitsType] = useState("")
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
  const [endDate, setEndDate] = useState("")
  const [whatsappTemp, setWhatsappTemp] = useState("")
  const [emailTemp, setEmailTemp] = useState("")
  const [textTemp, setTextTemp] = useState("")
  const [whatsapp, setWhatsapp] = useState(false)
  const [email, setEmail] = useState(false)
  const [text, setText] = useState(false)

  const data = {
    name: name,
    vaoucherBenifitsType: benifitsType,
    maxprice: salemaxprice,
    benifits: benifits,
    startDate: startDate,
    endDate: endDate,
    targetAoudianceType: targetAudiance,
    costomerMaxsale: costomerMaxsale,
    costomerMinsale: costomerMinsale,
    costomerCategury: selectcostomercategury,
    costomerServicevice: selectcostomerservice,
    applicableService: selectServiceSegment,
    selectServices: selectService,
    selectServiceategures: selectServicecategury,
    whatsappTemp: whatsappTemp,
    emailTemp: emailTemp,
    textTemp: textTemp,
    whatsapp: whatsapp,
    email: emailTemp,
    sms: text,
  }
  const submit = () => {
    console.log(`data: ${JSON.stringify(data)}`);
  }
  return (
    <div>
      <>
        <Grid container>
          <Grid item sm={6} xs={12} md={6} height="100%" p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Grid container spacing={3}>
              <Grid item sm={12} xs={12} md={12} height="100%">
                <TextField value={name} onChange={e => setName(e.target.value)} label="Vaoucher Name" sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small" />
              </Grid>
              <Grid item sm={12} xs={12} md={12} height="100%">
                <InputLabel id="demo-simple-select-label">Vaoucher Benifits type</InputLabel>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                    value={benifitsType}
                    onChange={e => setBenifitsType(e.target.value)}
                  >
                    <MenuItem value={"disc"}>Discount Type</MenuItem>
                    <MenuItem value={"case"}>Case Type</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <div className="input-group mb-3">
                  <input type="number" value={salemaxprice} onChange={e => setSaleMaxprice(e.target.value)} className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Max Sale</span>
                  </div>
                  <input type="number" value={benifits} onChange={e => setBenifits(e.target.value)} className="form-control" placeholder="Discount Or Amount" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2"><b>{(benifitsType == 'disc') ? "%" : "₹ "}</b>{" "}  Off</span>
                  </div>
                </div>
              </Grid>
              <Grid item spacing={4} sm={12} xs={12} md={12} height="100%">
                <Grid container spacing={[{ xs: 0 }, 4]} sm={12} xs={12} md={12} height="100%">
                  <Grid item sm={6} xs={12} md={6}>
                    <InputLabel>Vaoucher Start Date</InputLabel>
                    <TextField value={startDate} onChange={(e) => setStartDate(e.target.value)} type={"date"} fullWidth size="small" />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6} >
                    <InputLabel>Vaoucher End Date</InputLabel>
                    <TextField value={endDate} onChange={(e) => setEndDate(e.target.value)} type={"date"} fullWidth size="small" />
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} md={6} height="100%" p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Grid item sm={12} xs={12} md={12} >
              <InputLabel id="demo-simple-select-label">Target Audiance</InputLabel>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                  onChange={(e) => setTargetAudiance(e.target.value)}
                  value={targetAudiance}

                >
                  <MenuItem value={"webusers"}>Only Online Users</MenuItem>
                  <MenuItem value={"all"}>All Costomer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              {(targetAudiance == "SaleviceCostomer") && <SaleviceCostomer setcostomerMaxsale={setcostomerMaxsale} costomerMaxsale={costomerMaxsale} costomerMinsale={costomerMinsale} setcostomerMinsale={setcostomerMinsale} />}
              {(targetAudiance == "ServiceviceCostumer") && <ServiceviceCostumer selectcostomerservice={selectcostomerservice} setSelectcostomerservice={setSelectcostomerservice} />}
              {(targetAudiance == "CateguryviseCostumer") && <CateguryviseCostumer selectcostomercategury={selectcostomercategury} setSelectcostomercategury={setSelectcostomercategury} />}
            </Grid>
            <Grid item sm={12} xs={12} md={12} mt={7}>
              <InputLabel id="demo-simple-select-label">Select Applicable Service</InputLabel>
              <FormControl fullWidth>
                <Select
                  onChange={(e) => setSelectServiceSegment(e.target.value)}
                  value={selectServiceSegment}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"selectedService"}>Selected Service</MenuItem>
                  <MenuItem value={"selectedServiceCategury"}>Selected Service Categury</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} md={12} mt={4}>

              {(selectServiceSegment == "selectedService") && <ServiceSearchSelect selectService={selectService} setSelectService={setSelectService} />}
              {(selectServiceSegment == "selectedServiceCategury") && <ServiceCategurySearchSelect selectServicecategury={selectServicecategury} setSelectServicecategury={setSelectServicecategury} />}
            </Grid>
          </Grid>
          <Card sx={{ width: '100%' }} >
            <div className="col-12 my-2">
              <center>Templets Keyword</center>
            </div>
            <CardContent>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <ul>
                    <li>Costomer Name : costomer_name</li>
                    <li>Code Name : offer_code</li>
                    <li>offer Velidity Start Date : offer_start_date</li>
                    <li>offer Velidity End Date : offer_end_date</li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12">
                  <ul>
                    <li>Store Name : store_name</li>
                    <li>Store Cotact No. : store_contact_no</li>
                    <li>City Name : city_name</li>
                    <li>Store Address : store_add</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Grid container spacing={3} p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Stack direction={'row'} alignItems={"center"} justifyContent={"center"} >
              <Switch onChange={() => setText(!text)} /> Text Sms
            </Stack>
            {text && <Grid item sm={12} xs={12}>
              <TextField multiline label="Text Sms Template" value={textTemp} onChange={e => setTextTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 1] }} fullWidth rows={4} />
            </Grid>}
            <Stack direction={'row'} alignItems={"center"} justifyContent={"center"} >
              <Switch onChange={() => setWhatsapp(!whatsapp)} /> Whatsapp
            </Stack>
            {whatsapp && <Grid item sm={12} xs={12}>
              <TextField multiline label="Whatsapp Sms Template" value={whatsappTemp} onChange={e => setWhatsappTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 1] }} fullWidth rows={4} />
            </Grid>}
            <Stack direction={'row'} alignItems={"center"} justifyContent={"center"} >
              <Switch onChange={() => setEmail(!email)} /> Email
            </Stack>
            {email && <Grid item sm={12} xs={12}>
              <TextField multiline label="Email Template" value={emailTemp} onChange={e => setEmailTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 0] }} fullWidth rows={4} />
            </Grid>}
          </Grid>
        </Grid>
        <Grid container >
          <Grid item sm={12} xs={12} md={12} lg={12}>
            <Stack justifyContent={"end"} alignItems={"end"}  >
              <Button onClick={() => submit()} >Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </>
    </div>
  )
}

export default Index

const ServiceSearchSelect = ({ selectService, setSelectService }) => {
  const service = useSelector(state => state.service.service)
  const serviceData = service ? service.map(val => ({ id: val.id, title: val.name })) : []

  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={serviceData}
        getOptionLabel={(option) => option.title}
        // defaultValue={selectService}
        onChange={(event, newValue) => {
          console.log(`InputValue : ${JSON.stringify(newValue)}`);
          setSelectService(newValue);
        }}
        size='small'
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Service"
            placeholder="Select Service"
          />
        )}
      />
    </>
  )
}
const ServiceCategurySearchSelect = ({ selectServicecategury, setSelectServicecategury }) => {
  const service = useSelector(state => state.categury.serviceCetegury)
  const serviceData = service ? service.map(val => ({ id: val.id, title: val.name })) : []
  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={serviceData}
        getOptionLabel={(option) => option.title}
        // defaultValue={selectServicecategury}
        onChange={(event, newValue) => {
          console.log(`InputValue : ${JSON.stringify(newValue)}`);
          setSelectServicecategury(newValue);
        }}
        size='small'
        renderInput={(params) => (
          <TextField
            {...params}
            size='small'
            label="Select Service Categury"
            placeholder="Select Service Categury"
          />
        )}
      />
    </>
  )
}

const SaleviceCostomer = ({ costomerMinsale, setcostomerMinsale, costomerMaxsale, setcostomerMaxsale }) => {
  return (
    <>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <TextField value={costomerMaxsale} onChange={e => setcostomerMaxsale(e.target.value)} label="Max Sale" fullWidth size='small' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <TextField value={costomerMinsale} onChange={e => setcostomerMinsale(e.target.value)} label="Min Sale" fullWidth size='small' />
        </Grid>
      </Grid>
    </>
  )
}
const ServiceviceCostumer = ({ selectcostomerservice, setSelectcostomerservice }) => {
  const service = useSelector(state => state.service.service)
  const serviceData = service ? service.map(val => ({ id: val.id, title: val.name })) : []
  return (
    <>
      <Grid container spacing={3} marginTop={1} >
        <Grid item xs={12} sm={12} md={12} xl={12}  >
          <Autocomplete
            multiple
            id="tags-outlined"
            options={serviceData}
            getOptionLabel={(option) => option.title}
            // defaultValue={selectcostomerservice}
            onChange={(event, newValue) => {
              // console.log(`InputValue : ${JSON.stringify(newValue)}`);
              setSelectcostomerservice(newValue);
            }}
            size='small'
            renderInput={(params) => (
              <TextField
                {...params}
                size='small'
                label="Select Service"
                placeholder="Select Service"
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  )
}
const CateguryviseCostumer = ({ selectcostomercategury, setSelectcostomercategury }) => {
  const service = useSelector(state => state.categury.costomerCetegury)
  const serviceData = service ? service.map(val => ({ id: val.id, title: val.name })) : []
  return (
    <>
      <Grid container spacing={3} marginTop={1} >
        <Grid item xs={12} sm={12} md={12} xl={12}  >
          <Autocomplete
            multiple
            id="tags-outlined"
            options={serviceData}
            getOptionLabel={(option) => option.title}
            // defaultValue={selectcostomercategury}
            onChange={(event, newValue) => {
              setSelectcostomercategury(newValue);
            }}
            size='small'
            renderInput={(params) => (
              <TextField
                {...params}
                size='small'
                label="Select Costomer Categury"
                placeholder="Select Costomer Categury"
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  )
}
export const OffersData = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
