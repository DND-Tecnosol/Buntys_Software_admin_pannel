import { FormControl, Grid, InputLabel, Paper, tableCellClasses, TextField, TableCell, Select, MenuItem, Autocomplete, Stack, styled, Button, TableContainer, Table, TableHead, TableRow, TableBody, Switch, Card, CardHeader, CardContent, } from '@mui/material'
import React, { useCallback, useState } from 'react'
import apiRoutes, { appAxios } from '../../../Constants/apiRoutes';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import { fetchCampign } from '../../../Store/Slice/Campign';
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
  const { service: { service }, product: { product, hairweg, hairextention, hairPatch } } = useSelector(state => state)
  const dispatch = useDispatch()

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
  }
  const submit = () => {
    console.log(`data: ${JSON.stringify(data)}`);
    appAxios.post(apiRoutes.CreateTargetAudianceOffers, data).then(e => {
      console.log(e)

      dispatch(fetchCampign())
      toast.success(e.data.msg)
    })
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
              {(targetAudiance == "SelectByProduct") && <Grid item sm={12} xs={12} md={12} mt={2}>
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
                  <MenuItem value={"service"}>Selected service</MenuItem>
                  <MenuItem value={"product"}>Selected product </MenuItem>
                  <MenuItem value={"weg"}>Selected weg </MenuItem>
                  <MenuItem value={"extention"}>Selected extention </MenuItem>
                  <MenuItem value={"patch"}>Selected patch </MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} md={12} mt={4}>

              {(selectServiceSegment == "service") && <ResorceComponent label="Select service" resouce={resouce} setResouce={setResouce} resouceData={service} />}
              {(selectServiceSegment == "product") && <ResorceComponent label="Select product" resouce={resouce} setResouce={setResouce} resouceData={product} />}
              {(selectServiceSegment == "weg") && <ResorceComponent label="Select weg" resouce={resouce} setResouce={setResouce} resouceData={hairweg} />}
              {(selectServiceSegment == "patch") && <ResorceComponent label="Select patch" resouce={resouce} setResouce={setResouce} resouceData={hairPatch} />}
              {(selectServiceSegment == "extention") && <ResorceComponent label="Select extention" resouce={resouce} setResouce={setResouce} resouceData={hairextention} />}
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
              <Grid item sm={6} xs={6} md={6} mt={7}>
                <InputLabel id="demo-simple-select-label">Select Applicable Service</InputLabel>
                <FormControl fullWidth>
                  <Select
                    onChange={(e) => setSelectServiceSegment(e.target.value)}
                    value={selectServiceSegment}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                  >
                    <MenuItem value={"all"}>When Offer Created</MenuItem>
                    <MenuItem value={"service"}>Twice Day</MenuItem>
                    <MenuItem value={"product"}>Every Weekend</MenuItem>
                    <MenuItem value={"weg"}>Every Weekstart</MenuItem>
                    <MenuItem value={"extention"}>Selected Date</MenuItem>
                    <MenuItem value={"patch"}>Selected Day</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
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








