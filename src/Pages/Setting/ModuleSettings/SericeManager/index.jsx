import React from 'react';
import Page from '../../../../Layouts/Page';

// import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../../../../Components/Tabs'
import { Box, Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Switch, TextField, Button, Stack } from '@mui/material';
import { ServiceManager, ServiceCateguryManeger } from './section'
const ServiceManagers = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Paper elevation={3} sx={{ width: '100%', height: '100%', borderBottomRadius: 0 }} >
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                    <Tab label="Service" {...a11yProps(0)} />
                    <Tab label="Service Categury" {...a11yProps(1)} />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <ServiceManager />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ServiceCateguryManeger />
            </TabPanel>
        </div>
    );
}

export default ServiceManagers;

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