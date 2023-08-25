import React from 'react'
import { Box, Button, Modal, Stack, Autocomplete, TextField, Grid, Select, MenuItem, Divider, IconButton } from '@mui/material'
import { appointMentStyle } from './modelStayle';
import { useSelect } from 'react-select-search';
import { useDispatch, useSelector } from 'react-redux';
import { changeCostomer, changeRepeat, changeRepeatEnd, changeServiceData, changeStateAppointmentModel } from '../../Store/Slice/resourceSlice';
import { MdDelete } from 'react-icons/md';


const repetData = ['noremember', 'daily', '+ 1 day', '+ 2 day', '+ 4 day', '+ 5 day', '+ 6 day', '+ 7 day', '+ 1 week', '+ 2 week', '+ 3 week', '+ 4 week', '+ 5 week', '+ 6 week', '+ 7 week', '+ 1 month', '+ 2 month', '+ 4 month', '+ 5 month', '+ 6 month', '+ 7 month', '+ 9 month', '+ 10 month', '+ 11 month', '+ 12 month',]
const repetCondition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export const AppoitmentModel = () => {
    const { stuff:{staff},service: { service }, costomer: { costomer }, resource: { appointment, appointmentData } } = useSelector(state => state)
    const dispatch = useDispatch()
    const save = () => { }

    const changeReduxServiceData = (id, type,index) => {
        const serviceData = service.filter(val => val.id == id)[0]
        // console.log(id);
        const data={
            index:index,
            serId:serviceData,
            serviceid:id,
            type:type,
        }
        console.log(data);
        // dispatch(changeServiceData())
    }

    return (
        <>
            <Modal
                open={appointment}
                onClose={() => dispatch(changeStateAppointmentModel(false))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={appointMentStyle}>
                    <center><h2 className='my-2' >New Booking</h2></center>
                    <Grid container direction={'row'} >
                        <Grid item sx={{ width: { xs: '100%', md: '49%', xl: '49%' }, height: '50%' }} >
                            <Stack spacing={3} >
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12">
                                        <CostomerResorceComponent resouceData={costomer} fnc={(data) => {
                                            console.log(data);
                                            dispatch(changeCostomer(data))
                                        }} multiple={false} label={'Search Costomer'} />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <TextField size='small' value={appointmentData.date} onChange={(e) => dispatch(changeServiceData(e.target.value))} fullWidth type='date' />
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            size="small"
                                            onChange={(e) => dispatch(changeRepeat(e.target.value))}
                                            value={appointmentData.repeat}
                                            fullWidth
                                        >
                                            <MenuItem value={'noremember'}>noremember</MenuItem>
                                            {repetData.map(data => <MenuItem value={`${data}`}>{data}</MenuItem>)}
                                        </Select>
                                        {appointmentData.repeat != "noremember" &&
                                            <>
                                                <Select
                                                    sx={{ marginY: 2 }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    size="small"
                                                    onChange={(e) => dispatch(changeRepeatEnd(e.target.value))}
                                                    value={appointmentData.repeat_end}
                                                    fullWidth
                                                >
                                                    {repetCondition.map(data => <MenuItem value={`${data}`}>After {data} times</MenuItem>)}
                                                    <MenuItem value={'specificdate'}>Specific Date</MenuItem>
                                                </Select>
                                                {(appointmentData.repeat_end == "specificdate") &&
                                                    <TextField size='small' value={appointmentData.repeat_end_date} onChange={(e) => dispatch(changeRepeatEnd(e.target.value))} fullWidth type='date' />
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                                <Divider sx={{ borderColor: 'blue', borderWidth: 0.5 }} light={true} />

                                {appointmentData.service.map((val, key) => {
                                    return (
                                        <div className="row" key={key} >
                                            <div className="col-md-6 col-lg-4 col-sm-12">
                                                <ResorceComponent resouceData={service} fnc={(data) => {
                                                    changeReduxServiceData(data,'service',key);
                                                }} multiple={false} label={'Search Costomer'} />
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-sm-12">
                                                <ResorceComponent resouceData={staff} fnc={(data) => {
                                                    changeReduxServiceData(data);
                                                }} multiple={false} label={'Search Costomer'} />
                                            </div>
                                            <div className="col-md-6 col-lg-3 col-sm-12">
                                            <TextField size='small' value={appointmentData.service[key].time} onChange={(e) => dispatch(changeRepeatEnd(e.target.value))} fullWidth type='time' />
                                            </div>
                                            <div className="col-md-6 col-lg-1 col-sm-12">
                                                <IconButton>
                                                    <MdDelete color='red' />
                                                </IconButton>
                                            </div>
                                        </div>
                                    )
                                })}

                            </Stack>
                        </Grid>
                        <Divider orientation="vertical" sx={{ marginX: '0.5%' }} flexItem />
                        <Grid item sx={{ backgroundColor: 'green', width: { xs: '100%', md: '49%', xl: '49%' }, height: '100%' }} >
                            grid 2
                        </Grid>
                    </Grid>
                    <Stack direction={'row'} justifyContent={'flex-end'} px={3} >
                        <Button onClick={() => save()}>Save</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}


const ResorceComponent = ({ resouce, setResouce, resouceData, label, fnc, multiple }) => {
    // const service = useSelector(state => state.service.service)
    const serviceData = resouceData ? resouceData.map(val => ({ id: val.id, title: val.name })) : []
    const dispatch = useDispatch()
    return (
        <>
            <Autocomplete
                multiple={multiple}
                id="tags-outlined"
                options={serviceData}
                getOptionLabel={(option) => option.title}
                defaultValue={resouce}
                filterSelectedOptions
                onChange={(event, newValue) => fnc(newValue.id)}
                sx={{ width: '100%' }} size="small"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                    // placeholder="Select Service"
                    />
                )}
            />
        </>
    )
}
const CostomerResorceComponent = ({ resouce, setResouce, resouceData, label, fnc, multiple }) => {
    // const service = useSelector(state => state.service.service)
    const serviceData = resouceData ? resouceData.map(val => ({ id: val.id, title: `${val.name} ( ${val?.mobaile} )` })) : []
    const dispatch = useDispatch()
    return (
        <>
            <Autocomplete
                multiple={multiple}
                id="tags-outlined"
                options={serviceData}
                getOptionLabel={(option) => option.title}
                defaultValue={resouce}
                filterSelectedOptions
                onChange={(event, newValue) => fnc(newValue.id)}
                sx={{ width: '100%' }} size="small"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                    // placeholder="Select Service"
                    />
                )}
            />
        </>
    )
}