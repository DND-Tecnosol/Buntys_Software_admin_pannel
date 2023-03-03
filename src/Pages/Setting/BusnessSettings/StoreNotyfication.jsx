import React,{useState} from 'react'
import { Box, Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Switch, TextField, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';

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

const ChildTabPanel = (props) => {
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
        <Box sx={{ py: 2 }}>
          <Typography>{children}</Typography>
        </Box>
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


function StoreNotyfication() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="Client Notification" {...a11yProps(0)} />
          <Tab label="Report Notification" {...a11yProps(1)} />
          <Tab label="Reminder Notification" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Client />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Report />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Reminder />
      </TabPanel>

    </>
  )
}

export default StoreNotyfication

const Client = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="SMS Notification" {...a11yProps(0)} />
          <Tab label="Whatsapp Msg Notification" {...a11yProps(1)} />
          <Tab label="Email Notification" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <ChildTabPanel value={value} index={0}>
        <Accordian />
      </ChildTabPanel>
      <ChildTabPanel value={value} index={1}>
        <div class="accordion" id="accordionExample"></div>
      </ChildTabPanel>
      <ChildTabPanel value={value} index={2}>
        <div class="accordion" id="accordionExample"></div>
      </ChildTabPanel>
    </>
  )
}
const Report = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Email Notification" variant="scrollable" scrollButtons="auto"  {...a11yProps(0)} />
        </Tabs>
      </Paper>
      <ChildTabPanel value={value} index={0}>
        <div class="accordion" id="accordionExample"></div>
      </ChildTabPanel>
    </>
  )
}
const Reminder = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Paper sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="SMS Notification" {...a11yProps(0)} />
          <Tab label="Whatsapp Msg Notification" {...a11yProps(1)} />
          <Tab label="Email Notification" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <ChildTabPanel value={value} index={0}>
        <div class="accordion" id="accordionExample"></div>
      </ChildTabPanel>
      <ChildTabPanel value={value} index={1}>
        <div class="accordion" id="accordionExample"></div>
      </ChildTabPanel>
      <ChildTabPanel value={value} index={2}>
        <div class="accordion" id="accordionExample"></div>
      </ChildTabPanel>
    </>
  )
}

const Accordian = () => {
  const [msg,setMsg]=useState("nsoisodikl dsvsdopvbj dfvb dfiouvipds v sdipogbvodf vj dfvbiodf vb dfh ibfiodgbvidgvigdfibnifdnbidfihbidfvibdibvidfhvb ifdbvifupdihgodfogorutgrugpijdfpghagfub g udfbghaf8fh f8hgdfgoeigbufdboyfbaduifsda fuafbusdf fgudgbs8gho8sdbgdsbugbaufbuisd f sduohfo8bgv80UAvsduiGVASD AFVVF FBASFBIAGV")
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Invoice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack my={1.5} justifyContent={"space-between"} direction={"row"} >
            <div className='row'>
              <Switch />
              <Typography mt={1}>
                Disable SMS Invoice
              </Typography>
            </div>
            <Button variant='contained' color='error'>Update Notification Msg</Button>
          </Stack>
          <textarea onChange={(e)=>setMsg(e.target.value)} style={{border:1,width:"100%"}} value={msg}/>
        </AccordionDetails>
      </Accordion>
    </>
  )
}