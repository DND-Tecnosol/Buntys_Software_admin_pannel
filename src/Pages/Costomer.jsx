import React from 'react'
import Page from '../Layouts/Page'
import CostomerSection from './costomer/index'

export default function Costomer({header}) {
  return (
    <Page header={header}>
      <CostomerSection/>
    </Page>
  )
}
