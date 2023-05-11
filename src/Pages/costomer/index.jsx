import React,{useState} from 'react';
import CustomerSegment from './CustomerSegment';
import ServiceSegment from './ServiceSegment';
import UpcomingSegment from './UpcomingSegment';
import { Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';

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
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0}>
                <CustomerSegment />
          </TabPanel>
      {/* <div class="col-12 col-sm-12">
        <div class="card-tabs">
          <div class="card-body">
            <div class="tab-content" id="custom-tabs-three-tabContent">
              <div class="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
              </div>
              <div class="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                <ServiceSegment />
              </div>
              <div class="tab-pane fade" id="custom-tabs-three-settings" role="tabpanel" aria-labelledby="custom-tabs-three-settings-tab">
                <UpcomingSegment />
              </div>

            </div>
          </div>
        </div>
      </div> */}
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