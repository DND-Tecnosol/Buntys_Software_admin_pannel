import React from 'react'
import { Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import { Voucher, TagetAudiansOffers, Offers, TagetAudiansVoucher, UpcomingWishes } from './Campaign';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { OffersData } from './Campaign/Offers';

const Campigns = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div>
                <Paper elevation={3} sx={{ width: '100%', height: '100%', borderBottomRadius: 0 }} >
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                        <Tab label="Web Offers" {...a11yProps(0)} />
                        <Tab label="voucher" {...a11yProps(1)} />
                        <Tab label={"Targeted Audience"} {...a11yProps(2)} />
                        <Tab label={"Upcoming Wishes Offers"} {...a11yProps(3)} />
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Create New Offers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Offers />
                        </AccordionDetails>
                    </Accordion>
                    <div className='mt-4'>
                        <OffersData />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Create New Voucher</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Voucher />
                        </AccordionDetails>
                    </Accordion>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Accordion sx={{ marginY: "10px" }} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Create New Taget Audians Offers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TagetAudiansOffers />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ marginY: "10px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Create New Taget Audians Voucher</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TagetAudiansVoucher />
                        </AccordionDetails>
                    </Accordion>
                </TabPanel>
  
                <TabPanel value={value} index={3}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Create New Upcoming Wishes Offers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <UpcomingWishes />
                        </AccordionDetails>
                    </Accordion>
                </TabPanel>
            </div>
        </>
    );
}


export default Campigns;


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

