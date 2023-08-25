import { Button, Grid, Box, TableContainer, Autocomplete, Table, TableHead, TableRow, TableCell, TableBody, Modal, TextField, Stack, Tabs, Tab, FormControl, Select, MenuItem, Paper, Typography, Switch, IconButton, InputLabel, InputAdornment, Input } from '@mui/material'
import React, { useCallback, useState } from 'react'



import { MdDelete, MdEdit, MdEditSquare } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import apiRoutes, { appAxios } from '../../../../Constants/apiRoutes';
import { BsFillFilterCircleFill, BsFillTerminalFill, BsPlus } from 'react-icons/bs'
import { fetchPoint } from '../../../../Store/Slice/All/pointSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: "95%", xl: '40%', md: '40%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};



export default function Index() {

  const [modelOpen, setModelOpen] = useState(false)
  const [value, setValue] = useState(0);
  const [rsValue, setRsValue] = useState(0);
  const [innervalue, setinnerValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const innerhandleChange = (event, newValue) => {
    setinnerValue(newValue);
  };

  const { points } = useSelector(state => state.point)
  return (
    <>
      <Grid spacing={2} direction={'row'} >
        <Grid item display={'flex'} justifyContent={'end'} spacing={'2'} alignItems={'flex-end'} direction={'row'} margin={4} >
          <Button onClick={() => setModelOpen(!modelOpen)} variant='contained'  >
            Create New Reward Point
          </Button>
        </Grid>
      </Grid>
      <Paper elevation={3} sx={{ width: '100%', height: '100%', borderBottomRadius: 0 }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          {points && points.map((data, key) => (
            <>
              <Tab label={data.point_title} onClick={() => setValue(key)} {...a11yProps(key)} />
            </>
          ))}
        </Tabs>
      </Paper>
      {points && points.map((data, key) => {
        // setRsValue(data.point_value);
        return (
          <>
            <TabPanel value={value} index={key}>
              <Grid container rowSpacing={2} columnSpacing={2} my={2} direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} justifyContent={'space-around'} >

                <PointsValue data={data} />

                <Grid item xs={12} sm={6} md={3} lg={3} >
                  <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack>
                      <center>
                        <h3>{data.points_wallet.length}</h3>
                      </center>
                      <center>
                        <h5>Totale Active Walet Account</h5>
                      </center>
                    </Stack>
                    {/* <Paper >
            </Paper> */}
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={3} >
                  <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack>
                      <center>
                        <h3>{data.points_wallet_total}</h3>
                      </center>
                      <center>
                        <h5>Wallet Balance</h5>
                      </center>
                    </Stack>
                    {/* <Paper >
            </Paper> */}
                  </Paper>
                </Grid>

              </Grid>
              <Paper elevation={3} my={1} sx={{ width: '100%', height: '100%', borderBottomRadius: 0 }} >
                <Tabs value={innervalue} onChange={innerhandleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                  <Tab label={"Event"} {...a11yProps(0)} />
                  <Tab label={"Wallet"} {...a11yProps(1)} />
                </Tabs>
              </Paper>
              <TabPanel value={innervalue} index={0}>
                <EventTable data={data} />
              </TabPanel>
              <TabPanel value={innervalue} index={1}>
                <WalletTable data={data} />
              </TabPanel>
            </TabPanel>
          </>
        )
      })}

      <SmsModel open={modelOpen} handleClose={() => setModelOpen(!modelOpen)} />
    </>
  )
}

const PointsValue = ({ data }) => {
  const [datas, setData] = useState({
    point_title: data.point_value,
    point_value: data.point_value
  })
  const dispatch = useDispatch()

  const handelValueChange = () => {
    appAxios.put(apiRoutes.points + data.id, datas).then(e => {
      toast(e.data.msg)
      dispatch(fetchPoint())
    })
  }
  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={3} >
        <Paper sx={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack>
            <center>
              {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
              <Input
                // id="standard-adornment-password"
                value={datas.point_value}
                sx={{ width: '50%', borderBottom: 0 }}
                onChange={(e) => setData({ ...data, point_value: e.target.value })}
                endAdornment={
                  <InputAdornment position="end">
                    Rs. <IconButton
                      aria-label="toggle password visibility"
                      onClick={handelValueChange}
                    >
                      <MdEdit color='info' />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </center>
            <center className='mt-2' >
              <h5>Value In Rs</h5>
            </center>
          </Stack>
        </Paper>
      </Grid>
    </>
  )
}

const SmsModel = ({ open, handleClose }) => {
  const [data, setData] = React.useState({
    name: "",
    value: "",
  });
  const dispatch = useDispatch()
  const save = () => {
    appAxios.post(apiRoutes.points, data).then(e => {
      toast(e.data.msg)
      dispatch(fetchPoint())
      return 0
    }).then(() => {
      handleClose()
    })
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-md-12 col-sm-12 mb-4">
                    <div className="mb-3">
                      <center>Create New Reward Point's Type</center>
                    </div>
                  </div>
                  <div className="col-12">
                    <div class="mb-4">
                      <TextField size='small' label={`Point's Title`} fullWidth type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-12">
                    <Stack spacing={2} direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                      <Typography style={{ fontSize: { xs: 30 } }} >1 Points = </Typography><TextField size='small' sx={{ width: '65%', fontSize: 30 }} variant='standard' type="text" label="Value In Rs" value={data.value} onChange={(e) => setData({ ...data, value: e.target.value })} />
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Stack direction={'row'} justifyContent={'flex-end'} px={3} >
            <Button onClick={() => save()}>Save</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}



const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Paper>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const WalletTable = ({ data }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Stack display={'flex'} direction={'row'} alignItems={'flex-end'} justifyContent={'end'} >
        <Button
          onClick={() => setOpen(!open)}
          variant="contained" color='info' sx={{ margin: 1 }} type="button"
          startIcon={<BsPlus size={30} />}
        >
          Create Wallet
        </Button>
      </Stack>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Costomer Name</TableCell>
              <TableCell align='center'>Point Totale Balance</TableCell>
              <TableCell align='center'>Point</TableCell>
              <TableCell align='center'>Point Credit</TableCell>
              <TableCell align='center'>Point Debit</TableCell>
              <TableCell align='center' >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.points_wallet && data.points_wallet.map((row, key) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {++key}
                </TableCell>
                <TableCell >
                  {row.costomer.name}
                </TableCell>
                <TableCell align='center' >{row.totale_wallet_ballance}</TableCell>
                <TableCell align='center' sx={{ color: 'green' }}>{row.points}</TableCell>
                <TableCell align='center' sx={{ color: 'green' }} >+ {row.points_wallet_credit_total}</TableCell>
                <TableCell align='center' sx={{ color: 'red' }} >- {row.points_wallet_debit_total}</TableCell>
                <TableCell align='center' >
                  <Switch />
                  <Button  >
                    Show History
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <WalletModel open={open} handleClose={() => setOpen(!open)} pointId={data.id} />
    </>
  )
}
const EventTable = ({ data }) => {

  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const deleteFnc = (id) => {
    appAxios.delete(apiRoutes.points + 'event/' + id).then(e => {
      toast(e.data.msg)
      dispatch(fetchPoint())
      return 0
    }).then(() => {
      // handleClose()
    })
  }
  const updateFnc = (id, status) => {
    appAxios.put(apiRoutes.points + 'event/status/' + id, { status: status }).then(e => {
      toast(e.data.msg)
      dispatch(fetchPoint())
      return 0
    }).then(() => {
      dispatch(fetchPoint())
    })
  }

  return (
    <>
      <Stack display={'flex'} direction={'row'} alignItems={'flex-end'} justifyContent={'end'} >
        <Button
          onClick={() => setOpen(!open)}
          variant="contained" color='info' sx={{ margin: 1 }} type="button"
          startIcon={<BsPlus size={30} />}
        >
          New Event
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Point Value</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.points_event && data.points_event.map((row, key) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {++key}
                </TableCell>
                <TableCell >
                  {row.points_event == "service" && "Purches Service"}
                  {row.points_event == "product" && "Purches Product"}
                  {row.points_event == "weg" && "Purches Weg"}
                  {row.points_event == "patch" && "Purches Patch"}
                  {row.points_event == "extention" && "Purches Extention"}
                  {row.points_event == "invoice" && "Genrate Invoice"}
                  {row.points_event == "create" && "Craete New Costomer"}
                  {row.points_event == "wishes" && "Greting"}
                  {row.points_event == "event_day" && "Specific Evennt Day Like ( Diwali , new Year)"}
                </TableCell>
                <TableCell>{row.val} {row.create_points_in == "point" ? "Point".toUpperCase() : "%"}</TableCell>
                <TableCell sx={{ color: row.status ? "green" : "red" }} >{row.status ? "Active" : "Deactive"}</TableCell>
                <TableCell>
                  <Switch onChange={() => updateFnc(row.id, (!row.status))} checked={row.status} />
                  <IconButton onClick={() => deleteFnc(row.id)}>
                    <MdDelete color='red' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EventModel open={open} handleClose={() => setOpen(!open)} pointId={data.id} />
    </>
  )
}
const WalletModel = ({ open, handleClose }) => {
  const save = () => { }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <ResorceComponent /> */}

          <Stack direction={'row'} justifyContent={'flex-end'} px={3} >
            <Button onClick={() => save()}>Save</Button>
          </Stack>
        </Box>
      </Modal>

    </>
  )
}

const EventModel = ({ open, handleClose, pointId }) => {
  const [resouce, setResouce] = useState([])
  const [data, setData] = React.useState({
    points_id: pointId,
    points_event: "create",
    create_points_in: "point",
    val: "",
    resouce: [],
    invoice: "",
    wishes: "",
    event_date: ""
  });
  const dispatch = useDispatch()
  const save = () => {
    console.log(resouce)
    const datas = { ...data, resouce: resouce }
    console.log(datas)
    appAxios.post(apiRoutes.points + 'event', datas).then(e => {
      toast(e.data.msg)
      dispatch(fetchPoint())
      return 0
    }).then(() => {
      handleClose()
    })
  }
  const { service: { service }, product: { product, hairweg, hairextention, hairPatch } } = useSelector(state => state)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div className="col-md-12 col-sm-12 mb-4">
              <div className="mb-3">
                <center>Create New Reward Point's Event</center>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div class="mb-4">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    onChange={(e) => setData({ ...data, points_event: e.target.value })}
                    value={data.points_event}
                    fullWidth
                  >
                    <MenuItem value={"service"}>Service</MenuItem>
                    <MenuItem value={"product"}>Product</MenuItem>
                    <MenuItem value={"weg"}>Weg</MenuItem>
                    <MenuItem value={"patch"}>Patch</MenuItem>
                    <MenuItem value={"extention"}>Extention</MenuItem>
                    <MenuItem value={"invoice"}>Invoice</MenuItem>
                    <MenuItem value={"create"}>Whene Create New Costomer</MenuItem>
                    <MenuItem value={"wishes"}>Wishes</MenuItem>
                    <MenuItem value={"event_day"}>Event day</MenuItem>
                    {/* <MenuItem value={"SelectByViseteddaterange"}>Select By Viseted date range</MenuItem> */}
                  </Select>
                </div>
              </div>
              <div className="col-12">
                {(data.points_event == "service") && <ResorceComponent label="Select service" resouce={data.resouce} setResouce={setResouce} resouceData={service} />}
                {(data.points_event == "product") && <ResorceComponent label="Select product" resouce={resouce} setResouce={setResouce} resouceData={product} />}
                {(data.points_event == "weg") && <ResorceComponent label="Select weg" resouce={resouce} setResouce={setResouce} resouceData={hairweg} />}
                {(data.points_event == "patch") && <ResorceComponent label="Select patch" resouce={resouce} setResouce={setResouce} resouceData={hairPatch} />}
                {(data.points_event == "extention") && <ResorceComponent label="Select extention" resouce={resouce} setResouce={setResouce} resouceData={hairextention} />}
                {(data.points_event == "invoice") && <>
                  <TextField size='small' sx={{ width: '65%', fontSize: 30 }} variant='standard' type="text" label="Invoice Totale Sale" value={data.invoice} onChange={(e) => setData({ ...data, invoice: e.target.value })} />
                </>}
                {(data.points_event == "wishes") && <>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                      onChange={(e) => setData({ ...data, wishes: e.target.value })}
                      value={data.wishes}
                      fullWidth
                    >
                      <MenuItem value={'birt'}>Birthday</MenuItem>
                      <MenuItem value={'aniver'}>Aniversery</MenuItem>
                    </Select>
                  </FormControl>
                </>}
                {(data.points_event == "event_day") && <>
                  <TextField size='small' type="date" fullWidth value={data.event_date} onChange={(e) => setData({ ...data, event_date: e.target.value })} />
                </>}
              </div>
              <div className="col-12">
                <div class="my-4">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    onChange={(e) => setData({ ...data, create_points_in: e.target.value })}
                    value={data.create_points_in}
                    fullWidth
                  >
                    <MenuItem value={"point"}>{`Point (0)`}</MenuItem>
                    <MenuItem value={"persant"}>{`Persent (%)`}</MenuItem>
                    {/* <MenuItem value={"SelectByViseteddaterange"}>Select By Viseted date range</MenuItem> */}
                  </Select>
                </div>
              </div>
              <div className="col-12">
                <div className="my-4">
                  <TextField size='small' fullWidth type="text" label="Point" value={data.val} onChange={(e) => setData({ ...data, val: e.target.value })} />
                </div>
              </div>
            </div>
          </div>
          <Stack direction={'row'} justifyContent={'flex-end'} px={3} >
            <Button onClick={() => save()}>Save</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

const ResorceComponent = ({ resouce, setResouce, resouceData, label }) => {
  // const service = useSelector(state => state.service.service)
  const serviceData = resouceData ? resouceData.map(val => ({ id: val.id, title: val.name })) : []

  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={serviceData}
        getOptionLabel={(option) => option.title}
        defaultValue={resouce}
        onChange={(event, newValue) => {
          // console.log(`InputValue : ${JSON.stringify(newValue)}`);
          setResouce(newValue);
        }}
        sx={{ width: '100%' }} size="small"
        renderInput={(params) => (
          <TextField
            multiline
            {...params}
            label={label}
          // placeholder="Select Service"
          />
        )}
      />
    </>
  )
}

/*
 <div className="container">
            <div className="col-md-12 col-sm-12 mb-4">
              <div className="mb-3">
                <center>Create New Reward Point's Event</center>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div class="mb-4">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    onChange={(e) => setData({ ...data, points_event: e.target.value })}
                    value={data.points_event}
                    fullWidth
                  >
                    <MenuItem value={"service"}>Service</MenuItem>
                    <MenuItem value={"product"}>Product</MenuItem>
                    <MenuItem value={"weg"}>Weg</MenuItem>
                    <MenuItem value={"patch"}>Patch</MenuItem>
                    <MenuItem value={"extention"}>Extention</MenuItem>
                    <MenuItem value={"invoice"}>Invoice</MenuItem>
                    <MenuItem value={"create"}>Whene Create New Costomer</MenuItem>
                    <MenuItem value={"wishes"}>Wishes</MenuItem>
                    <MenuItem value={"event_day"}>Event day</MenuItem>
                    <MenuItem value={"SelectByViseteddaterange"}>Select By Viseted date range</MenuItem>
                    </Select>
                    </div>
                  </div>
                  <div className="col-12">
                    {(data.points_event == "service") && <ResorceComponent label="Select service" resouce={data.resouce} setResouce={setResouce} resouceData={service} />}
                    {(data.points_event == "product") && <ResorceComponent label="Select product" resouce={resouce} setResouce={setResouce} resouceData={product} />}
                    {(data.points_event == "weg") && <ResorceComponent label="Select weg" resouce={resouce} setResouce={setResouce} resouceData={hairweg} />}
                    {(data.points_event == "patch") && <ResorceComponent label="Select patch" resouce={resouce} setResouce={setResouce} resouceData={hairPatch} />}
                    {(data.points_event == "extention") && <ResorceComponent label="Select extention" resouce={resouce} setResouce={setResouce} resouceData={hairextention} />}
                    {(data.points_event == "invoice") && <>
                      <TextField size='small' sx={{ width: '65%', fontSize: 30 }} variant='standard' type="text" label="Invoice Totale Sale" value={data.invoice} onChange={(e) => setData({ ...data, invoice: e.target.value })} />
                    </>}
                    {(data.points_event == "wishes") && <>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                          onChange={(e) => setData({ ...data, wishes: e.target.value })}
                          value={data.wishes}
                          fullWidth
                        >
                          <MenuItem value={'birt'}>Birthday</MenuItem>
                          <MenuItem value={'aniver'}>Aniversery</MenuItem>
                        </Select>
                      </FormControl>
                    </>}
                    {(data.points_event == "event_day") && <>
                      <TextField size='small' type="date" fullWidth value={data.event_date} onChange={(e) => setData({ ...data, event_date: e.target.value })} />
                    </>}
                  </div>
                  <div className="col-12">
                    <div class="my-4">
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        size="small"
                        onChange={(e) => setData({ ...data, create_points_in: e.target.value })}
                        value={data.create_points_in}
                        fullWidth
                      >
                        <MenuItem value={"point"}>{`Point (0)`}</MenuItem>
                        <MenuItem value={"persant"}>{`Persent (%)`}</MenuItem>
                        <MenuItem value={"SelectByViseteddaterange"}>Select By Viseted date range</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="my-4">
                      <TextField size='small' fullWidth type="text" label="Point" value={data.val} onChange={(e) => setData({ ...data, val: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>
*/