import React, { useState } from 'react';
import CustomerSegment from './CustomerSegment';
import ServiceSegment from './ServiceSegment';
import UpcomingSegment from './UpcomingSegment';
import { Tabs, Tab, Typography, Button, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import { BsFillFilterCircleFill, BsFillTerminalFill, BsPlus } from 'react-icons/bs'

const CostomerSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper elevation={3} sx={{ width: '100%', height: '100%', borderBottomRadius: 0 }} >
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="All customer" {...a11yProps(0)} />
          <Tab label="By Service customer" {...a11yProps(1)} />
          <Tab label={"Wish customer"} {...a11yProps(2)} />
          <div>
            <Button
              data-toggle="modal"
              data-target="#exampleModal"
              variant="contained" color='error' sx={{ margin: 1 }} type="button"
              startIcon={<BsPlus size={30} />}
            >
              New Costomer
            </Button>
            {/* <BsFillFilterCircleFill/> */}

            {(value <=0) && <Button startIcon={<BsFillFilterCircleFill size={20} />} variant="contained" color='info' sx={{ margin: 1 }} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Fillter
            </Button>}
          </div>
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <CustomerSegment />
      </TabPanel>
    </>
  );
}

export default CostomerSection;


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