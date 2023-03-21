import { Paper } from '@mui/material'
import React from 'react'
import apiRoutes, { appAxios } from './../../../../Constants/apiRoutes';

function index() {
appAxios.get(apiRoutes)
  return (
    <div>
      <Paper elevation={3} sx={{ width: '100%', height: '100%', borderBottomRadius: 2 }}>
         {}
      </Paper>
    </div>
  )
}

export default index