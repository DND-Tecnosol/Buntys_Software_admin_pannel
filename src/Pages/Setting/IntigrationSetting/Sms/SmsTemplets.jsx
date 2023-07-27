import React from 'react'
import { Box, Button, Select, MenuItem, Modal, TextField, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



function SmsTemplets() {
  const [open, setOpen] = React.useState(false);
  const [filter, setfilter] = React.useState('Choose Sms Type');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Select size='small' value={filter} onChange={(e) => setfilter(e.target.value)}>
        <MenuItem value="Choose Sms Type" selected >Choose Sms Type</MenuItem>
        <MenuItem value="notification" >Notification</MenuItem>
        <MenuItem value="campign">Campign</MenuItem>
        <MenuItem value="alert">Alert</MenuItem>
      </Select>
      <SmsModel open={open} handleClose={handleClose} />
    </div>
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
  border: `1px solid ${theme.palette.divider}`,
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
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const SmsModel = ({open,handleClose}) => {
  const [data, setData] = React.useState({
    name: "",
    header: "",
    temp: "",
    temptype: "Choose Sms Type",
  });
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
              <div className="col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <div class="mb-4">
                      {/* <label for="exampleFormControlInput1" class="form-label">Select Sms Type</label> */}
                      <Select size='small' fullWidth value={data.temptype} onChange={(e) => setData({ ...data, temptype: e.target.value })} >
                        <MenuItem value="Choose Sms Type" selected >Choose Sms Type</MenuItem>
                        <MenuItem value="notification" >Notification</MenuItem>
                        <MenuItem value="campign">Campign</MenuItem>
                        <MenuItem value="alert">Alert</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div class="mb-4">
                      <TextField size='small' label='Sms Title' fullWidth type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div class="mb-4">
                      <TextField size='small' fullWidth type="text" label="Template Header" placeholder='Sms Template Header' value={data.header} onChange={(e) => setData({ ...data, header: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <div class="mb-4">
                      <TextField label="Templete" size='small' fullWidth multiline rows={4} placeholder='Type Sms Template Hear . . . .' type="email" value={data.temp} onChange={(e) => setData({ ...data, temp: e.target.value })} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">

              </div>
            </div>
          </div>
          <Stack direction={'row'} justifyContent={'flex-end'} px={3} >
            <Button onClick={() => console.log(data)}  >Save</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}