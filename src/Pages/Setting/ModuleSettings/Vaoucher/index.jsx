import { FormControl, Grid, InputLabel, Paper, TextField, Select, MenuItem, Autocomplete } from '@mui/material'
import React, { useCallback, useState } from 'react'
import apiRoutes, { appAxios } from './../../../../Constants/apiRoutes';
import { useSelector } from 'react-redux';

function Index() {
  // appAxios.get(apiRoutes)
  const [selectServiceSegment, setSelectServiceSegment] = useState("all")
  const [targetAudiance, setTargetAudiance] = useState("all")
  return (
    <div>
      <Paper elevation={3} sx={{ width: '100%', borderBottomRadius: 2, padding: 2.5 }}>
        <Grid container>
          <Grid item sm={6} xs={12} md={6} height="100%" p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Grid container spacing={3}>
              <Grid item sm={12} xs={12} md={12} height="100%">
                <TextField label="Vaoucher Name" sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small" />
              </Grid>
              <Grid item sm={12} xs={12} md={12} height="100%">
                <InputLabel id="demo-simple-select-label">Vaoucher Benifits type</InputLabel>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ width: { xs: '100%', sm: '50%', md: '50%', xl: '50%' } }} size="small"
                  >
                    <MenuItem value={"disc"}>Discount Type</MenuItem>
                    <MenuItem value={"case"}>Case Type</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <div class="input-group mb-3">
                  <input type="number" class="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Max Sale</span>
                  </div>
                  <input type="number" class="form-control" placeholder="Discount Or Amount" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">  Off</span>
                  </div>
                </div>
              </Grid>
              <Grid item spacing={4} sm={12} xs={12} md={12} height="100%">
                <Grid container spacing={[{ xs: 0 }, 4]} sm={12} xs={12} md={12} height="100%">
                  <Grid item sm={6} xs={12} md={6}>
                    <InputLabel>Vaoucher Start Date</InputLabel>
                    <TextField type={"date"} fullWidth size="small" />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6} >
                    <InputLabel>Vaoucher End Date</InputLabel>
                    <TextField type={"date"} fullWidth size="small" />
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
                  <MenuItem value={"SaleviceCostomer"}>Salevice Costomer</MenuItem>
                  <MenuItem value={"ServiceviceCostumer"}>Servicevice Costumer</MenuItem>
                  <MenuItem value={"CateguryviseCostumer"}>Categuryvise Costumer</MenuItem>
                  {/* <MenuItem value={"case"}>Hair Produt Salevise Costumer</MenuItem> */}
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} md={12}>
              {(targetAudiance == "SaleviceCostomer") && <SaleviceCostomer />}
              {(targetAudiance == "ServiceviceCostumer") && <ServiceviceCostumer />}
              {(targetAudiance == "CateguryviseCostumer") && <CateguryviseCostumer />}
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
            <Grid item sm={12} xs={12} md={12} mt={1}>

              {(selectServiceSegment == "selectedService") && <ServiceSearchSelect />}
              {(selectServiceSegment == "selectedServiceCategury") && <ServiceCategurySearchSelect />}
            </Grid>
          </Grid>
          <Grid container spacing={3} p={{ xs: 0, sm: 2.5, md: 2.5, xl: 2.5 }} py={{ xs: 2.5 }} >
            <Grid item sm={6} xs={12}>
              <TextField multiline label="Text Sms Template" sx={{ marginY: [{ xs: 1 }, 1] }} fullWidth rows={4} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField multiline label="Whatsapp Sms Template" sx={{ marginY: [{ xs: 1 }, 1] }} fullWidth rows={4} />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField multiline label="Email Template" sx={{ marginY: [{ xs: 1 }, 0] }} fullWidth rows={4} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Index

const ServiceSearchSelect = () => {
  const service = useSelector(state => state.service.service)

  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={(service.map(val => ({ id: val.id, title: val.name }))) || []}
        getOptionLabel={(option) => option.title}
        // defaultValue={}
        // filterSelectedOptions
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
const ServiceCategurySearchSelect = () => {
  const service = useSelector(state => state.categury.serviceCetegury)

  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={(service.map(val => ({ id: val.id, title: val.name }))) || []}
        getOptionLabel={(option) => option.title}
        // defaultValue={}
        // filterSelectedOptions
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

const SaleviceCostomer = () => {
  return (
    <>
      <Grid container spacing={3} marginTop={1} >
        <Grid item xs={12} sm={6} md={6} xl={6}  >
          <TextField label="Max Sale" fullWidth size='small' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}  >
          <TextField label="Min Sale" fullWidth size='small' />
        </Grid>
      </Grid>
    </>
  )
}
const ServiceviceCostumer = () => {
  const service = useSelector(state => state.service.service)

  return (
    <>
      <Grid container spacing={3} marginTop={1} >
        <Grid item xs={12} sm={12} md={12} xl={12}  >
          <Autocomplete
            multiple
            id="tags-outlined"
            options={(service.map(val => ({ id: val.id, title: val.name }))) || []}
            getOptionLabel={(option) => option.title}
            // defaultValue={}
            // filterSelectedOptions
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
const CateguryviseCostumer = () => {
  const service = useSelector(state => state.categury.costomerCetegury)

  return (
    <>
      <Grid container spacing={3} marginTop={1} >
        <Grid item xs={12} sm={12} md={12} xl={12}  >
          <Autocomplete
            multiple
            id="tags-outlined"
            options={(service.map(val => ({ id: val.id, title: val.name }))) || []}
            getOptionLabel={(option) => option.title}
            // defaultValue={}
            // filterSelectedOptions
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