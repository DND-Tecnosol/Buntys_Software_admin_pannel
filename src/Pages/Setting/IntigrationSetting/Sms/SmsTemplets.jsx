import React, { useCallback } from 'react'
import { Box, Button, Select, MenuItem, Modal, TextField, Stack, Switch, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import apiRoutes, { appAxios } from '../../../../Constants/apiRoutes';
import { fetchSmsTemp } from '../../../../Store/Slice/All/smsTemplateSlice';
import { toast } from 'react-toastify';
import { Delete } from '@mui/icons-material';


function SmsTemplets() {
    const [open, setOpen] = React.useState(false);
    const [filter, setfilter] = React.useState('Choose Sms Type');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const tamp = useSelector(state => state.smsTemp.smsTemp) || []
    const Compo=useCallback(()=>{
        return (tamp && tamp.map((data, key) => <SmsTemplates datas={data} ind={key} key={key} />))
    },[tamp])
    return (
        <>
            <Stack direction={'row'} justifyContent={'flex-end'} spacing={3} px={3} >
                <Button onClick={handleOpen}>Add New Template</Button>
                <Select size='small' value={filter} sx={{ border: 'none' }} onChange={(e) => setfilter(e.target.value)}>
                    <MenuItem value="Choose Sms Type" selected >Choose Sms Template Type</MenuItem>
                    <MenuItem value="notification" >Notification</MenuItem>
                    <MenuItem value="campign">Campign</MenuItem>
                    <MenuItem value="alert">Alert</MenuItem>
                </Select>
            </Stack>
            {<Compo/>}
            <SmsModel open={open} handleClose={handleClose} />
        </>
    )
}

export default SmsTemplets


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "95%", xl: '65%', md: '80%' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    borderRadius: 8,
    // borderBottomRightRadius:8,
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const SmsModel = ({ open, handleClose }) => {
    const [data, setData] = React.useState({
        type: "Choose Sms Type",
        name: "",
        sender: "",
        temp: "",
    });
    const dispatch = useDispatch()
    const save = () => {
        appAxios.post(apiRoutes.SmsTemp, data).then(e => {
            if (e.data.code == 1) {
                dispatch(fetchSmsTemp())
                toast.success(e.data.msg)
                setData({
                    ...data,
                    type: "Choose Sms Type",
                    name: "",
                    sender: "",
                    temp: "",
                })
                return 0
            }
            toast.error(e.data.msg)
            return 0
        })
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <div class="mb-4">
                                            {/* <label for="exampleFormControlInput1" class="form-label">Select Sms Type</label> */}
                                            <Select size='small' fullWidth value={data.type} onChange={(e) => setData({ ...data, type: e.target.value })} >
                                                <MenuItem value="Choose Sms Type" selected >Choose Sms Type</MenuItem>
                                                <MenuItem value="notification" >Notification</MenuItem>
                                                <MenuItem value="campign">Campign</MenuItem>
                                                <MenuItem value="alert">Alert</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 mb-4">
                                        <div className="mb-3">
                                            <center>Sms Varible Keyword</center>
                                        </div>
                                        {data.type == "campign" && <CampignSmsTemp />}
                                        {data.type == "alert" && <AlertSmsTemp />}
                                        {data.type == "notification" && <NotificationSmsTemp />}
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-lg-6">
                                        <div class="mb-4">
                                            <TextField size='small' label='Sms Title' fullWidth type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-lg-6">
                                        <div class="mb-4">
                                            <TextField size='small' fullWidth type="text" label="Template Header" placeholder='Sms Template Header' value={data.sender} onChange={(e) => setData({ ...data, sender: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-lg-12">
                                        <div class="mb-4">
                                            <TextField label="Templete" size='small' fullWidth multiline rows={4} placeholder='Type Sms Template Hear . . . .' type="email" value={data.temp} onChange={(e) => setData({ ...data, temp: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Stack direction={'row'} justifyContent={'flex-end'} px={3} >
                        <Button onClick={() => save()}>Save</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

const SmsTemplates = ({ ind, datas }) => {
    // console.log(datas);
    // return 0
    const [expanded, setExpanded] = React.useState(`panel1`);
    const [data, setData] = React.useState({
        type: datas.type,
        name: datas.name,
        sender: datas.sender,
        temp: datas.temp,
        status: datas.status,
    });
    const dispatch = useDispatch()

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const idb = ++ind

    const statusChange = async (status, id) => {
        setData({ ...data, status: status })
        appAxios.put(apiRoutes.SmsTemp + 'status/' + id, data).then(e => {
            if ((e.data.code == 1) || (e.data.code == 3)) {
                dispatch(fetchSmsTemp())

                if (e.data.code == 1) {
                    toast.success(e.data.msg)
                } else {
                    toast.error(e.data.msg)
                }
                return 0
            }
            toast.error(e.data.msg)
            return 0
        })
    }
    const upadetData = async (id) => {
        appAxios.put(apiRoutes.SmsTemp + id, data).then(e => {
            if (e.data.code == 1) {
                dispatch(fetchSmsTemp())
                toast.success(e.data.msg)
                return 0
            }
            toast.error(e.data.msg)
            return 0
        })
    }
    const deleteData = async (id) => {
        console.log(`id`, id);
        // return
        appAxios.delete(apiRoutes.SmsTemp + id).then(e => {
            if (e.data.code == 1) {
                dispatch(fetchSmsTemp())
                toast.success(e.data.msg)
                return 0
            }
            dispatch(fetchSmsTemp())
            toast.error(e.data.msg)
            return 0
        })
    }
    // console.log(`data : ${JSON.stringify(data)}`);
    return (
        <>
            <div className='px-3 my-3'>
                <Accordion expanded={expanded === `panel${idb}`} onChange={handleChange(`panel${idb}`)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Stack direction="row"
                            width={"100%"}
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}>
                            <div className='px-2'>
                                <Typography>#{idb}  {data.name}</Typography>
                            </div>
                            <div className='px-3'>
                            </div>

                            {/* <Button onClick={() => upadetData(datas.id)} color='warning' >Update</Button>
                            <Switch color='success' value={data.status} onChange={() => statusChange(!data.status,datas.id)} /> */}
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <div class="mb-3">
                                    {/* <label for="exampleFormControlInput1" class="form-label">Select Sms Type</label> */}
                                    <Select size='small' fullWidth value={data.type} onChange={(e) => setData({ ...data, type: e.target.value })} >
                                        <MenuItem value="Choose Sms Type" selected >Choose Sms Type</MenuItem>
                                        <MenuItem value="notification" >Notification</MenuItem>
                                        <MenuItem value="campign">Campign</MenuItem>
                                        <MenuItem value="alert">Alert</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-6">
                                <div class="mb-3">
                                    <TextField size='small' label='Sms Title' fullWidth type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-6">
                                <div class="mb-3">
                                    <TextField size='small' fullWidth type="text" label="Template Header" placeholder='Sms Template Header' value={data.sender} onChange={(e) => setData({ ...data, sender: e.target.value })} />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <div class="mb-1">
                                    <TextField label="Templete" size='small' fullWidth multiline rows={4} placeholder='Type Sms Template Hear . . . .' type="email" value={data.temp} onChange={(e) => setData({ ...data, temp: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <Stack direction={'row'} justifyContent={'flex-end'} px={3} mt={0} spacing={3} >
                            <IconButton onClick={() => deleteData(datas.id)} >
                                <Delete color='error' />
                            </IconButton>
                            <Switch color='success' value={datas.status} checked={datas.status} onChange={() => statusChange(!datas.status, datas.id)} />
                            <Button onClick={() => upadetData(datas.id)} color='warning' >Update</Button>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

const CampignSmsTemp = () => {
    const [expanded, setExpanded] = React.useState(`panel1`);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <div className="mb-2">
                <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Stack direction="row"
                            width={"100%"}
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}>
                            <div className='px-2'>
                                <Typography># Offers</Typography>
                            </div>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card sx={{ width: '100%' }} >
                            <div className="col-12 my-2">
                                <center>Templets Keyword</center>
                            </div>
                            <CardContent>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <ul>
                                            <li>Costomer Name : costomer_name</li>
                                            <li>Code Name : offer_code</li>
                                            <li>offer Velidity Start Date : validitystart</li>
                                            <li>offer Velidity End Date : validityend</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ul>
                                            <li>offer type : offer_type</li>
                                            <li>offer amount : offer_amount</li>
                                            <li>appointment booking link : appointment_booking_link</li>
                                            <li>appointment booking no : appointment_booking_no</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
const NotificationSmsTemp = () => {
    const [expanded, setExpanded] = React.useState(`panel1`);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <div className="mb-2">
                <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Stack direction="row"
                            width={"100%"}
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}>
                            <div className='px-2'>
                                <Typography># Appointment Sms Template Keyword</Typography>
                            </div>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card sx={{ width: '100%' }} >
                            <div className="col-12 my-2">
                                <center>Templets Keyword</center>
                            </div>
                            <CardContent>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <ul>
                                            <li>Costomer Name : costomer_name</li>
                                            <li>service name : service_name</li>
                                            <li>staff name : staff_name</li>
                                            <li>all staff : all_staff</li>
                                            <li>store name : store_name </li>
                                            <li>store contact : store_contact</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ul>
                                            <li>costomer account_link : costomer_account_link </li>
                                            <li>feedback link : feedback_link. store_contact_no</li>
                                            <li>appointment start time : appointment_start_time </li>
                                            <li>appointment end time : appointment_end_time </li>
                                            <li>store location : store_location </li>
                                            <li>store contact_no : store_contact_no </li>
                                            <li>appointment booking link : appointment_booking_link </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="mb-2">
                <Accordion expanded={expanded === `panel2`} onChange={handleChange(`panel2`)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Stack direction="row"
                            width={"100%"}
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}>
                            <div className='px-2'>
                                <Typography># Invoice Sms Template Keyword</Typography>
                            </div>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card sx={{ width: '100%' }} >
                            <div className="col-12 my-2">
                                <center>Templets Keyword</center>
                            </div>
                            <CardContent>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <ul>
                                            <li>costomer name  : costomer_name</li>
                                            <li>store name  : store_name</li>
                                            <li>store contact  : store_contact</li>
                                            <li>costomer account link  : costomer_account_link</li>
                                            <li>feedback link  : feedback_link </li>
                                            <li>invoice totale  : invoice_totale</li>
                                            <li>invoice discount  : invoice_discount</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ul>
                                            <li>invoice pending ammount  : invoice_pending_ammount </li>
                                            <li>invoice id  : feedback_link. invoice_id</li>
                                            <li>invoice link  time : invoice_link </li>
                                            <li>invoice downlode link  time : invoice_downlode_link </li>
                                            <li>web link  : web_link </li>
                                            <li>invoice date  : invoice_date </li>
                                            <li>invoice time  : invoice_time </li>
                                            <li>store location : store_location </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
const AlertSmsTemp = () => {
    return (
        <>
        </>
    )
}


/*
"Notification" => [
    "Appointment" => ['costomer_name', 'service_name', 'all_service', 'staff_name', 'all_staff', 'store_name', 'store_contact', 'costomer_account_link', 'feedback_link', 'appointment_start_time', 'appointment_end_time', 'store_location', 'store_contact_no', 'appointment_booking_link'],
    "Invoice" => ['costomer_name', 'store_name', 'store_contact', 'costomer_account_link', 'feedback_link', 'invoice_totale', 'invoice_discount', 'invoice_pending_ammount', 'invoice_id', 'invoice_link', 'invoice_downlode_link', 'web_link', 'invoice_date', 'invoice_time','store_location'],

    "PendingService" => [],
]
*/