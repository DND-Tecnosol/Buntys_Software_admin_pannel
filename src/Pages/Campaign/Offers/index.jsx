import { FormControl, Grid, InputLabel,TextField,Select, MenuItem, Autocomplete, Stack,Button,} from '@mui/material'
import React, { useCallback, useState } from 'react'
import apiRoutes, { appAxios } from '../../../Constants/apiRoutes';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { fetchCampign } from '../../../Store/Slice/Campign';

function Index() {
  // appAxios.get(apiRoutes)
  const [selectServiceSegment, setSelectServiceSegment] = useState("all")
  const [targetAudiance, setTargetAudiance] = useState("all")
  const [name, setName] = useState("")
  const [salemaxprice, setSaleMaxprice] = useState("")
  const [benifits, setBenifits] = useState("")
  const [benifitsType, setBenifitsType] = useState("")
  const [resouce, setResouce] = useState([])
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
  const [endDate, setEndDate] = useState("")

  // const datas=
  const { service: { service }, product: { product, hairweg, hairextention, hairPatch } } = useSelector(state => state)

  const dispatch = useDispatch()
  const submit = () => {

    const data = {
      name: name,
      offeraplicable: selectServiceSegment,
      BenifitsType: benifitsType,
      benifit: benifits,
      minsale: salemaxprice,
      start_date: startDate,
      end_date: endDate,
      costommercount: 100,
      costomercounttotale: "0",
      web_show: true,
      email_send: true,
      web_banner: "web_banner",
      email_temp: "email_temp",
      offercostomertype: "all",
      aplicabeleresource: resouce
    }
    // console.log(`data: ${JSON.stringify(data)}`);
    appAxios.post(apiRoutes.CreateOffers, data).then(e => {
      if (e.data.code == 200) {
        toast(e.data.msg)
        dispatch(fetchCampign())

      }

    }).catch(e => console.error(e))
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
                  <MenuItem value={"NewCostomer"}>New Costomer</MenuItem>
                  <MenuItem value={"CountedCostomer"}>Counted Costomer</MenuItem>
                  <MenuItem value={"AllCostomer"}>All Costomer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              {/* {(targetAudiance == "NewCostomer") && <SaleviceCostomer setcostomerMaxsale={setcostomerMaxsale} costomerMaxsale={costomerMaxsale} costomerMinsale={costomerMinsale} setcostomerMinsale={setcostomerMinsale} />} */}
              {(targetAudiance == "CountedCostomer") && <TextField variant='outlined' />}
              {/* {(targetAudiance == "AllCostomer") && <CateguryviseCostumer selectcostomercategury={selectcostomercategury} setSelectcostomercategury={setSelectcostomercategury} />} */}
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