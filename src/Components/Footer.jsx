import React from 'react'
import { version } from '../Constants/config'

export default function Footer() {

  const date=new Date()
  return (
    <footer class="main-footer" style={{height:'10px'}}>
      <strong>Copyright &copy; {date.getFullYear()} <a href="https://adminlte.io">Bunty's Hair Studio</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        
        <b>{version}</b>
      </div>
    </footer>
  )
}
