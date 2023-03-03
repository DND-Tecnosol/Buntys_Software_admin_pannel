import { Box, Tabs, Tab, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Switch, TextField, Button, Stack } from '@mui/material';
import React from 'react';
import Page from '../../../../Layouts/Page';
import Product from './Product';
import ProductBrand from './ProductBrand';
import ProductCategury from './ProductCategury';
const ProductManger = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <div className="container">
                <Stack direction={"row"} spacing={3} justifyContent="flex-end">
                    <Button style={{marginTop:10,marginBottom:10}} variant="outlined">Transfer Product</Button>
                </Stack>
                <Paper elevation={3} sx={{ width: '100%', height: '100%',borderBottomRadius:0 }} >
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                        <Tab label="Product Inventory" {...a11yProps(0)} />
                        <Tab label="Product Categury" {...a11yProps(1)} />
                        <Tab label="Product Brand" {...a11yProps(2)} />
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                    <Product/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ProductCategury/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ProductBrand/>
                </TabPanel>
            </div>
        </>
    );
}

export default ProductManger;

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

