import { Box, Tabs, Tab, Typography, Paper, Button, Stack } from '@mui/material';
import React from 'react';
import Page from '../../../../Layouts/Page';
import ExtentionCategury from './extention/ExtentionCategury';
import Extention from './extention/Extention';
import Weg from './weg/Weg';
import WegCategury from './weg/WegCategury';
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
                <Paper sx={{borderRadius:0}}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                        <Tab label="Product Inventory" {...a11yProps(0)} />
                        <Tab label="Hair Weg Inventory" {...a11yProps(1)} />
                        <Tab label="Hair Extention Inventory" {...a11yProps(2)} />
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                    <ProductInventory />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <HairWegInventory />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <HairExtentionInventory />
                </TabPanel>

            </div>
        </>
    );
}

const ProductInventory = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                    <Tab label="Product" {...a11yProps(0)} />
                    <Tab label="Product Categury" {...a11yProps(1)} />
                    <Tab label="Product Brand" {...a11yProps(2)} />
                </Tabs>
            </>
            <ChildTabPanel value={value} index={0}>
                <Stack direction={"row"} spacing={3} justifyContent="flex-end">
                    <Button style={{ marginTop: 10, marginBottom: 10 }} variant="outlined">Transfer Product</Button>
                </Stack>
                <Product />
            </ChildTabPanel>
            <ChildTabPanel value={value} index={1}>
                <ProductCategury />
            </ChildTabPanel>
            <ChildTabPanel value={value} index={2}>
                <ProductBrand />
            </ChildTabPanel>
        </>
    )
}
const HairWegInventory = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                    <Tab label="Hair Weg" {...a11yProps(0)} />
                    <Tab label="Hair Weg Categury" {...a11yProps(1)} />
                </Tabs>
            </>
            <ChildTabPanel value={value} index={0}>
                <Stack direction={"row"} spacing={3} justifyContent="flex-end">
                    <Button style={{ marginTop: 10, marginBottom: 10 }} variant="outlined">Transfer Product</Button>
                </Stack>
                <Weg />
            </ChildTabPanel>
            <ChildTabPanel value={value} index={1}>
                <WegCategury />
            </ChildTabPanel>

        </>
    )
}
const HairExtentionInventory = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            < >
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
                    <Tab label="Hair Extention" {...a11yProps(0)} />
                    <Tab label="Hair Extention Categury" {...a11yProps(1)} />
                </Tabs>
            </>
            <ChildTabPanel value={value} index={0}>
                <Stack direction={"row"} spacing={3} justifyContent="flex-end">
                    <Button style={{ marginTop: 10, marginBottom: 10 }} variant="outlined">Transfer Product</Button>
                </Stack>
                <Extention />
            </ChildTabPanel>
            <ChildTabPanel value={value} index={1}>
                <ExtentionCategury />
            </ChildTabPanel>
        </>
    )
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

