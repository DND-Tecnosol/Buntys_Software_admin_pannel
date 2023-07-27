import { FormControl, Grid, InputLabel, Paper, TextField, Select, MenuItem, Autocomplete, Stack, Button } from '@mui/material'
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
  const [resouce, setResouce] = useState([])
  const { service: { service }, product: { product, hairweg, hairextention, hairPatch } } = useSelector(state => state)

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
    whatsapp: whatsappTemp,
    email: emailTemp,
    sms: textTemp,
    resouce: resouce,
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
                  <MenuItem value={"Birthday"}>Birth Day</MenuItem>
                  <MenuItem value={"Anniversuryday"}>Anniversury</MenuItem>
                  {/* <MenuItem value={"product"}>Selected product </MenuItem> */}
                  {/* <MenuItem value={"case"}>Hair Produt Salevise Costumer</MenuItem> */}
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
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
          <Grid container spacing={3} p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Grid item sm={6} xs={12}>
              <TextField multiline label="Text Sms Template" value={textTemp} onChange={e => setTextTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 1] }} fullWidth rows={4} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField multiline label="Whatsapp Sms Template" value={whatsappTemp} onChange={e => setWhatsappTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 1] }} fullWidth rows={4} />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField multiline label="Email Template" value={emailTemp} onChange={e => setEmailTemp(e.target.value)} sx={{ marginY: [{ xs: 1 }, 0] }} fullWidth rows={4} />
            </Grid>
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
        size='small'
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
