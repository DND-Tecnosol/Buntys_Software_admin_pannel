import React from 'react';
import { Box, Tabs, Tab, Typography, Paper, Button, Stack } from '@mui/material';
import { StaffSetting, StuffCategury, StuffDetail } from './section'
const StuffManger = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper sx={{ borderRadius: 0 }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                    <Tab label="Staff Manager" {...a11yProps(0)} />
                    <Tab label="Staff Categury Manager" {...a11yProps(1)} />
                    <Tab label="Staff-Report" {...a11yProps(2)} />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <StuffDetail />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <StuffCategury />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <StaffSetting />
            </TabPanel>
        </>
    );
}

export default StuffManger;


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
                <Box bgcolor={'#ffffff'} boxShadow={3}>
                    <Typography>{children}</Typography>
                </Box>
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