import { FormControl, Grid, InputLabel, Paper, tableCellClasses, TextField, TableCell, Select, MenuItem, Autocomplete, Stack, styled, Button, TableContainer, Table, TableHead, TableRow, TableBody, Switch, Card, CardHeader, Box, Modal } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import apiRoutes, { appAxios } from '../../../Constants/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import { fetchCampign } from '../../../Store/Slice/Campign';
import { Link } from 'react-router-dom';
import { routes } from '../../../Constants/routesconst';
import { apiDomain } from './../../../Constants/apiRoutes';
import { LocalizationProvider, TimePicker, } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const smsObj = {
  temp: "Hello",
  sendOption: "",
  time: '',
  onedate: ''
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: "95%", xl: '65%', md: '80%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};
function Index() {
  // appAxios.get(apiRoutes)
  const [selectServiceSegment, setSelectServiceSegment] = useState("all")
  const [targetAudiance, setTargetAudiance] = useState("all")
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
  const [email_banner, setemail_banner] = useState("")
  const [textTemp, setTextTemp] = useState("")
  const [whatsapp, setWhatsapp] = useState(false)
  const [email, setEmail] = useState(false)
  const [text, setText] = useState(false)
  const [resouce, setResouce] = useState([])
  const [costocateguryid, setcostocateguryid] = useState("")
  const [services, setservices] = useState([])
  const [producttype, setproducttype] = useState("all")
  const [products, setproducts] = useState([])
  const [gender, setgender] = useState("")
  const [startTime, setstartTime] = useState("")
  const [endTime, setendTime] = useState("")
  const [moreThen, setmoreThen] = useState("")
  const [selecet_start_date, setselecet_start_date] = useState("")
  const [selecet_end_date, setselecet_end_date] = useState("")
  const [open, setOpen] = useState(false)
  const [smsService, setSmsService] = useState(smsObj)

  const dataFromRedux = useSelector(s => s.store.store)

  const { service: { service }, product: { product, hairweg, hairextention, hairPatch } } = useSelector(state => state)
  const dispatch = useDispatch()
  const storeDetaild = dataFromRedux.filter(s => s.id == localStorage.getItem('store'))[0];
  const data = {
    name: name,
    customertype: targetAudiance,
    offeraplicable: selectServiceSegment,
    BenifitsType: benifitsType,
    benifit: benifits,
    minsale: salemaxprice,
    start_date: startDate,
    end_date: endDate,
    email_send: email,
    email_banner: email_banner,
    email_temp: emailTemp,
    resouce: resouce,
    costocateguryid: costocateguryid,
    services: services,
    producttype: producttype,
    products: products,
    gender: gender,
    startTime: startTime,
    endTime: endTime,
    moreThen: moreThen,
    selecet_start_date: selecet_start_date,
    selecet_end_date: selecet_end_date,
    smsService: smsService,
  }
  const submit = () => {
    console.log(`data: ${JSON.stringify(data)}`);
    appAxios.post(apiRoutes.CreateTargetAudianceOffers, data).then(e => {
      console.log(e)

      dispatch(fetchCampign())
      toast.success(e.data.msg)
    })
  }

  const smsFindText = { "costomer_name": 'Mr', "offer_code": '123456', "validitystart": `${moment(data.start_date).format('Do MMM')}`, "validityend": `${moment(data.end_date).format('Do MMM')}`, "offer_type": data.selectServiceSegment, "offer_amount": `${data.benifit} ${(benifitsType == 'disc') ? "%" : "₹ "}`, "appointment_booking_link": storeDetaild?.appointment_booking_link, "appointment_booking_no": storeDetaild?.mobaile, "store_location": storeDetaild?.city, "store_contact_no": storeDetaild?.mobaile }


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
                  <MenuItem value={"all"}>All Costomer</MenuItem>
                  <MenuItem value={"ReturningCostomer"}>Returning Costomer</MenuItem>
                  <MenuItem value={"NoReturningCostomer"}>No Returning Costomer</MenuItem>
                  <MenuItem value={"SelectByCostumerCategury"}>Select By Costumer Categury</MenuItem>
                  <MenuItem value={"SelectByservice"}>Select By service</MenuItem>
                  <MenuItem value={"SelectByProduct"}>Select By Product</MenuItem>
                  <MenuItem value={"SelectByGender"}>Select By Gender</MenuItem>
                  <MenuItem value={"NewCustomer"}>New Customer</MenuItem>
                  <MenuItem value={"SelectByViseteddaterange"}>Select By Viseted date range</MenuItem>
                </Select>
              </FormControl>
              {(targetAudiance == "ReturningCostomer") && <ReturningCostomer label="return Time" count={moreThen} setCount={setmoreThen} startDate={selecet_start_date} setStartDate={setselecet_start_date} endDate={selecet_end_date} setEndDate={setselecet_end_date} />}
              {(targetAudiance == "NoReturningCostomer") && <ReturningCostomer label="No return Time" count={moreThen} setCount={setmoreThen} startDate={selecet_start_date} setStartDate={setselecet_start_date} endDate={selecet_end_date} setEndDate={setselecet_end_date} />}
              {(targetAudiance == "SelectByCostumerCategury") && <SelectByCostumerCategury cateid={costocateguryid} setcateid={setcostocateguryid} />}
              {(targetAudiance == "SelectByGender") && <SelectByGender setxender={setgender} xender={gender} />}
              {(targetAudiance == "NewCustomer") && <NewCustomer startDate={startTime} setStartDate={setstartTime} endDate={endTime} setEndDate={setendTime} />}
              {(targetAudiance == "SelectByViseteddaterange") && <SelectByViseteddaterange startDate={startTime} setStartDate={setstartTime} endDate={endTime} setEndDate={setendTime} />}
              {(targetAudiance == "SelectByservice") && <ResorceComponent label="Select service" resouce={products} setResouce={setproducts} resouceData={service} />}
              {(targetAudiance == "SelectByProduct") && 
              <Grid item sm={12} xs={12} md={12} mt={2}>
                <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
                <FormControl fullWidth>

                  <Select
                    onChange={(e) => setproducttype(e.target.value)}
                    value={producttype}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                  >
                    <MenuItem value={"product"}>Selected product </MenuItem>
                    <MenuItem value={"weg"}>Selected weg </MenuItem>
                    <MenuItem value={"extention"}>Selected extention </MenuItem>
                    <MenuItem value={"patch"}>Selected patch </MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
                <Grid item sm={12} xs={12} md={12} mt={2}>
                  {(producttype == "product") && <ResorceComponent label="Select product" resouce={products} setResouce={setproducts} resouceData={product} />}
                  {(producttype == "weg") && <ResorceComponent label="Select weg" resouce={products} setResouce={setproducts} resouceData={hairweg} />}
                  {(producttype == "patch") && <ResorceComponent label="Select patch" resouce={products} setResouce={setproducts} resouceData={hairPatch} />}
                  {(producttype == "extention") && <ResorceComponent label="Select extention" resouce={products} setResouce={setproducts} resouceData={hairextention} />}
                </Grid>
              </Grid>}
            </Grid>
            <Grid item sm={12} xs={12} md={12} mt={7}>
            </Grid>
            <Grid item sm={12} xs={12} md={12} mt={4}>

              {(selectServiceSegment == "service") && <ResorceComponent label="Select service" resouce={resouce} setResouce={setResouce} resouceData={service} />}
              {(selectServiceSegment == "product") && <ResorceComponent label="Select product" resouce={resouce} setResouce={setResouce} resouceData={product} />}
              {(selectServiceSegment == "weg") && <ResorceComponent label="Select weg" resouce={resouce} setResouce={setResouce} resouceData={hairweg} />}
              {(selectServiceSegment == "patch") && <ResorceComponent label="Select patch" resouce={resouce} setResouce={setResouce} resouceData={hairPatch} />}
              {(selectServiceSegment == "extention") && <ResorceComponent label="Select extention" resouce={resouce} setResouce={setResouce} resouceData={hairextention} />}
            </Grid>
          </Grid>
          <Grid container spacing={3} p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Stack direction={'row'} alignItems={"center"} justifyContent={"center"} >
              {/* <Switch onChange={() => setText(!text)} /> Text Sms */}
              <Button onClick={() => setText(!text)}>Set Text Sms Notification</Button>
            </Stack>
            <Stack direction={'row'} alignItems={"center"} justifyContent={"center"} >
              {/* <Switch onChange={() => setEmail(!email)} /> Email */}
              <Button onClick={() => setText(!text)}>Set Email Notification</Button>
            </Stack>
            {email && <Grid item sm={12} xs={12}>
              <TextField multiline label="Email Template" value={emailTemp} onChange={e => setEmailTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 0] }} fullWidth rows={4} />
            </Grid>}
            {smsService.temp?.temp && <Grid item sm={12} xs={12}>
              <TextField multiline value={replaceKeywords(data.smsService.temp?.temp, smsFindText)} sx={{ marginY: [{ xs: 1 }, 0] }} fullWidth rows={4} />
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
      <SmsModel open={text} handleClose={() => setText(!text)} data={smsService} setData={setSmsService} />
    </div>
  )
}

export default Index
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
        sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
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

const ReturningCostomer = ({ count, setCount, startDate, setStartDate, endDate, setEndDate, label }) => {
  return (
    <>
      <Grid container >
        <Grid container spacing={[{ xs: 0 }, 4]} sm={12} xs={12} md={12} height="100%">
          <Grid item sm={4} xs={12} md={4}>
            <InputLabel>Start Date</InputLabel>
            <TextField value={startDate} onChange={(e) => setStartDate(e.target.value)} type={"date"} fullWidth size="small" />
          </Grid>
          <Grid item sm={4} xs={12} md={4} >
            <InputLabel>End Date</InputLabel>
            <TextField value={endDate} onChange={(e) => setEndDate(e.target.value)} type={"date"} fullWidth size="small" />
          </Grid>
          <Grid item sm={4} md={4} xs={12} >
            <InputLabel>Return Time</InputLabel>
            <TextField label={label} type='number' size='small' sx={{ width: '100%' }} value={count} onChange={(e) => setCount(e.target.value)} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

const SelectByCostumerCategury = ({ cateid, setcateid, menu }) => {
  const categury = useSelector(s => s.categury.costomerCetegury);
  return (
    <>
      <Grid item sm={12} xs={12} md={12} mt={7}>
        <InputLabel id="demo-simple-select-label">Select Applicable Service</InputLabel>
        <FormControl fullWidth>
          <Select
            onChange={(e) => setcateid(e.target.value)}
            value={cateid}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
          >
            {categury && categury.map((e) => <MenuItem value={e.id}>{e.name}</MenuItem>)}
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
    </>
  )
}


const SelectByGender = ({ xender, setxender }) => {
  return (
    <>
      <Grid item sm={12} xs={12} md={12} mt={7}>
        <InputLabel id="demo-simple-select-label">Select Applicable Service</InputLabel>
        <FormControl fullWidth>
          <Select
            onChange={(e) => setxender(e.target.value)}
            value={xender}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
          >
            <MenuItem value={"1"}>Male</MenuItem>
            <MenuItem value={"0"}>Female</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
    </>
  )
}


const NewCustomer = ({ count, setCount, startDate, setStartDate, endDate, setEndDate, label }) => {
  return (
    <>
      <Grid container spacing={[{ xs: 0 }, 4]} sm={12} xs={12} md={12} height="100%">
        <Grid item sm={6} xs={12} md={6}>
          <InputLabel>Start Date</InputLabel>
          <TextField value={startDate} onChange={(e) => setStartDate(e.target.value)} type={"date"} fullWidth size="small" />
        </Grid>
        <Grid item sm={6} xs={12} md={6} >
          <InputLabel>End Date</InputLabel>
          <TextField value={endDate} onChange={(e) => setEndDate(e.target.value)} type={"date"} fullWidth size="small" />
        </Grid>
      </Grid>
    </>
  )
}


const SelectByViseteddaterange = ({ count, setCount, startDate, setStartDate, endDate, setEndDate, label }) => {
  return (
    <>
      <Grid container spacing={[{ xs: 0 }, 4]} sm={12} xs={12} md={12} height="100%">
        <Grid item sm={6} xs={12} md={6}>
          <InputLabel>Start Date</InputLabel>
          <TextField value={startDate} onChange={(e) => setStartDate(e.target.value)} type={"date"} fullWidth size="small" />
        </Grid>
        <Grid item sm={6} xs={12} md={6} >
          <InputLabel>End Date</InputLabel>
          <TextField value={endDate} onChange={(e) => setEndDate(e.target.value)} type={"date"} fullWidth size="small" />
        </Grid>
      </Grid>
    </>
  )
}

const SmsModel = ({ open, handleClose, data, setData }) => {
  const sms = useSelector(s => s.smsTemp.smsTemp)
  console.log(sms.filter(e => e.type == "campign").length);

  useEffect(()=>{
    if (data.time <= "10:00" || data.time >= "20:46") {
       console.log(data.time);
       setData({...data,time:"00:00"})
     }
  },[data.time])

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
              <div className="col-md-6 col-lg-6 col-sm-12 mb-3">
                <InputLabel id="demo-simple-select-label">Select Sms Sending Option</InputLabel>
                <Select
                  fullWidth
                  onChange={(e) => setData({ ...data, sendOption: e.target.value })}
                  value={data.sendOption}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} 
                  size="small"
                >
                  <MenuItem value={"DailySend"}>Daily Send</MenuItem>
                  <MenuItem value={"OneTime"}>One Time</MenuItem>
                  <MenuItem value={"ManullySend"}>Manully Send</MenuItem>
                  <MenuItem value={"TwiceDay"}>Twice Day</MenuItem>
                  <MenuItem value={"WeekStart"}>Week Start</MenuItem>
                  <MenuItem value={"WeekEnd"}>Week End</MenuItem>
                </Select>
              </div>
              {
                data.sendOption == "OneTime"
                  ?
                  (
                    <>
                      <div className="col-sm-6 col-6 row">
                        <div className="col-md-5 col-lg-5 col-sm-12 mb-3">
                          <InputLabel id="demo-simple-select-label">Select Sms Sending Date</InputLabel>
                          <TextField onChange={(e) => setData({ ...data, onedate: e.target.value })} inputProps={{ min: '9:00', max: '16:00' }} value={data.onedate} type='date' fullWidth size='small' />
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 mb-3">
                          <InputLabel id="demo-simple-select-label">Select Sms Sending Time</InputLabel>
                          <p style={{fontSize:1,color:'red'}} >Messages can only be sent between 10am to 8:45pm as restricted by TRAI NCCP regulation</p>
                          <TextField onChange={(e) => setData({ ...data, time: e.target.value })} value={data.time} type='time' min="09:00" max="18:00" />
                        </div>
                      </div>
                    </>
                  )
                  :
                  (
                    <div className="col-md-6 col-lg-6 col-sm-12 mb-3 row">
                      <InputLabel id="demo-simple-select-label">Select Sms Time</InputLabel>
                      <TextField onChange={(e) => setData({ ...data, time: e.target.value })}  value={data.time} type='time' minTime={"09:00"} max="18:00" fullWidth size='small' />
                      <span style={{fontSize:12,color:'red',marginTop:5}} >Messages can only be sent between 10am to 8:45pm as restricted by TRAI NCCP regulation</span>
                    </div>
                  )
              }
              <div className="col-md-6 col-sm-12 mb-3"></div>
              <div className="col-12 mb-3">
                {(sms.filter(e => e.type == "campign").length >= 0) && sms.filter(e => e.type == "campign")?.map((e) => {
                  return (
                    <>
                      <button onClick={() => setData({ ...data, temp: e })} className='my-2' style={{ width: '100%', backgroundColor: '#dfdfdf', borderRadius: 10, borderWidth: (data.temp?.id == e.id) ? 2 : 0, borderColor: '#3768de', padding: 20 }}>
                        {e.temp}
                      </button>
                    </>
                  )
                }) ||
                  <center>No Campign Sms Register.<Link to={`/${routes.SmsServices}`}>Create New Sms Template</Link></center>
                }
              </div>
            </div>
          </div>
          <Stack direction={'row'} justifyContent={'flex-end'} spacing={3} px={3} >
            <Button onClick={() => setData(smsObj)}>Save</Button>
            <Button onClick={() => handleClose()} color='error' >Clear</Button>
          </Stack>
          <center>Please register your template by clicking <Link to={`/${routes.SmsServices}`}>"Register Template"</Link> here.</center>
        </Box>
      </Modal>
    </>
  )

}

function replaceKeywords(inputString = "Hello", keywordsToReplace) {

  console.log(inputString);
  // Create a regular expression pattern that matches any of the keywords
  const keywordPattern = new RegExp(Object.keys(keywordsToReplace).join('|'), 'gi');

  // Use the replace method with the regular expression to replace all occurrences of the keywords
  const replacedString = inputString.replace(keywordPattern, matchedKeyword => {
    return keywordsToReplace[matchedKeyword.toLowerCase()] || matchedKeyword;
  });

  return replacedString;
}