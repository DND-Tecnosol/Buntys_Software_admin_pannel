import React, { useState } from 'react'
import { SmsServiceProvider, SmsHeders, SmsTemplets } from './Sms'
import { Tabs, Tab, Typography, Button, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import { BsFillFilterCircleFill, BsFillTerminalFill, BsPlus } from 'react-icons/bs'

function SmsServices() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper elevation={3} sx={{ width: '100%', height: '100%', borderBottomRadius: 0 }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="Accounts Detaild" {...a11yProps(0)} />
          <Tab label="Sms Templets" {...a11yProps(1)} />
          <Tab label={"Sms Hader"} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <SmsServiceProvider />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SmsTemplets />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SmsHeders />
        </TabPanel>
      </Paper>
    </>
  )
}

export default SmsServices



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