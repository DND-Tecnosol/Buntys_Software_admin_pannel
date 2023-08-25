import React, { useState } from 'react';
import { Button, Paper, Tabs, Tab, Box, Typography, Stack, FormControl, IconButton, Select, InputLabel, MenuItem, TextField, Checkbox } from '@mui/material';
import { MdArrowLeft, MdDelete } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
import FeedbackFormEditor from './FeedbackFormEditor';
import { addFeedbackFormData, addFeedbackTitle, changeFeedbackFormType, fetchFeedback } from '../../Store/Slice/feedbackSlice';
import { useDispatch, useSelector } from 'react-redux';
import { wait } from '@testing-library/user-event/dist/utils';
import apiRoutes, { appAxios } from '../../Constants/apiRoutes';
import { toast } from 'react-toastify';


function Index() {
  const [ui, setUi] = useState(true)
  const [editer, setEditer] = useState(true)

  const dispatch = useDispatch()

  const save = async () => {
    setEditer(!editer)
  }

  const { feedbackFomemCreate, feedbackFomemData, feedbackFomemCreate: { formType } } = useSelector(state => state.feedback)
  const saveEditorData = async () => {
    const formData = localStorage.getItem("survey-json")
    console.log(formData);
    dispatch(addFeedbackFormData(formData))
    await appAxios.post(apiRoutes.feedback, feedbackFomemCreate).then((e) => {
      dispatch(fetchFeedback())
      toast(e.data.msg)
    })
    setEditer(!editer)
    setUi(!ui)
  }

  return (
    <>
      {
        ui ?
          <>
            {/* Feedback Form List ['3px', 'solid', '#ccc', '!important'] */}
            <div className="contaner">
              <h2>Feedback</h2>
              <div className="card p-3" style={{ backgroundColor: '#f4f5f7', borderLeftColor: '#ccc', borderLeftWidth: '3px' }} >
                <ul>
                  <li >You can obtain feedback from your customers at the end of service.</li>
                  <li >Click <b>Create Form</b> to create a new survey with a new set of questions.</li>
                  <li >Click <b>Link with Bill</b> to collect feedback after the bill is generated.</li>
                  <li >Click <b>Link with Appointment</b> to collect their feedback after the appointment is completed.</li>
                </ul>
              </div>
            </div>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} my={4} >
              <h3>Feedback</h3>
              <Button variant='contained' size='large' onClick={() => setUi(!ui)} >Create Form</Button>
            </Stack>
            {feedbackFomemData.map((datas) => {

              // console.log();
              return (
                <>
                  <div key={datas.id} className="card my-3">
                    <div className="container-fluide" style={{ paddingLeft: 10 }}>
                      <div className="card-body" style={{ height: 'fit-content' }} >
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} my={0} >
                          <div className='' >
                            <div className="row">
                              <h5><b>{datas.title}</b></h5>
                              {
                                (datas.connectwith == "appointment" || datas.connectwith == "invoice") &&
                                <>
                                  <div style={{
                                    backgroundColor: '#46b85a1a',
                                    color: '#46B85A',
                                    border: 1,
                                    fontSize: 13,
                                    padding: 4,
                                    marginLeft: '10px'
                                  }} >
                                    {datas.connectwith == "appointment" ? "Default Appointment" : "Default Bill"}
                                  </div>
                                </>
                              }
                            </div>
                            {/* <p>{quit(datas.form)} Questions, {quitPage(datas.form)} Pages, Created on 20 Aug 2023</p> */}
                            <p></p>
                            <p></p>
                            <p>{`Feedback Id: [${datas.formid}]`}</p>
                          </div>
                          <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                              <InputLabel id="demo-select-small-label">Connect With</InputLabel>
                              <Select
                                labelId="demo-select-small-label"
                                value={datas.connectwith}
                                label="Age"
                                // fullWidth
                                sx={{ width: 300 }}
                                size='small'
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  appAxios.put(apiRoutes.feedback + 'connect/' + datas.id, { connectwith: e.target.value }).then(e => {
                                    toast(e.data.msg)
                                    
                                    dispatch(fetchFeedback())
                                  })
                                }}
                              >
                                <MenuItem value={'default'}>Make It Default</MenuItem>
                                <MenuItem value={'appointment'}>Link With Appointment</MenuItem>
                                <MenuItem value={'invoice'}>Link With Invoice</MenuItem>
                              </Select>
                            </FormControl>
                            <Button color={datas.form_status ? 'success' : 'error'} variant='contained' size='large' onClick={() => {
                              appAxios.put(apiRoutes.feedback + 'status/' + datas.id, { status: !datas.form_status }).then(e => {
                                toast(e.data.msg)
                                dispatch(fetchFeedback())
                              })
                            }
                            } >
                              {datas.form_status ? "Start" : "Stop"}

                            </Button>
                            <IconButton size='large' onClick={() => appAxios.delete(apiRoutes.feedback + datas.id).then(e => {
                              toast(e.data.msg)
                              dispatch(fetchFeedback())
                            })}>
                              <MdDelete color='red' />
                            </IconButton>
                          </div>
                        </Stack>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}

          </> :
          <>
            {/* Feedback Form Create Hear */}
            <div className="contaner">
              {editer ?
                <>
                  <h2>Feedback</h2>
                  <Button sx={{ fontSize: 20 }} onClick={() => setUi(!ui)} ><BsArrowLeft size={20} style={{ marginRight: 10 }} /> Back</Button>
                  <div className="col-12">
                    <center><h5 className='my-3' ><b>Create Form</b></h5></center>
                    <div className="card mx-auto col-md-6 col-sm-12" >
                      <div className="card-body">
                        <div className="container p-3">
                          <p>Feedback/Consent name</p>
                          <TextField fullWidth size='small' onChange={(e) => dispatch(addFeedbackTitle(e.target.value))} />
                          <Stack width={{ xs: "100%", lg: '45%', md: '45%' }} direction={'row'} display={'flex'} mt={3} justifyContent={'space-between'} alignItems={'center'} >
                            <Checkbox checked={formType} onClick={() => dispatch(changeFeedbackFormType(!formType))} /> <span > Mark as consent form</span>
                          </Stack>

                          <Stack width={"100%"} direction={'row'} display={'flex'} justifyContent={'center'} mt={3} alignItems={'center'} >
                            <Button sx={{ textAlign: 'center' }} variant='contained' color='info' size='small' onClick={() => save()} >Save</Button>
                          </Stack>
                        </div>
                      </div>
                    </div>
                  </div>
                </> :
                <>
                  <FeedbackFormEditor save={() => {
                    saveEditorData()
                  }} />
                </>
              }
            </div>
          </>
      }
    </>
  )
}

export default Index
/*
<Stepper activeStep={count} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <div className="container">
        {/* <Paper sx={{ borderRadius: 0 }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
            <Tab label="Feedback List" {...a11yProps(0)} />
            <Tab label="Create Form" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          
        </TabPanel>
        <TabPanel value={value} index={1}>
          
        </TabPanel>
      // </div>
*/
