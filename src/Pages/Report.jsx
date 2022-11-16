import React from 'react'
import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../Components/Tabs'
import Page from '../Layouts/Page'

export default function Report({ header }) {
  return (
    <Page header={header}>
      <Tab>
        <TabsCard>
          <TabsBtn id={"Store-Report-tab"} href={'#Store-Report'} active="show active" title={'Store-Report'} aria_control={'Store-Report'} ariaselected={true} />
          <TabsBtn id={"Sales-Report-tabs"} href={'#Sales-Report'} title={'Sales-Report'} aria_control={'Sales-Report'} ariaselected={false} />
          <TabsBtn id={"Costomer-Report-tabs"} href={'#Costomer-Report'} title={'Costomer-Report'} aria_control={'Costomer-Report'} ariaselected={false} />
          <TabsBtn id={"Campign-Report-tabs"} href={'#Campign-Report'} title={'Campign-Report'} aria_control={'Campign-Report'} ariaselected={false} />
        </TabsCard>
        <TabsContent>
          <ActiveTabsContainer active="show active" id={'Store-Report'} area_label={'Store-Report-tab'}>
            <h1>Store Report Hear</h1>
          </ActiveTabsContainer>
          <ActiveTabsContainer id={'Sales-Report'} area_label={'Sales-Report-tabs'}>
            <h1>Sales Report</h1>
          </ActiveTabsContainer>
          <ActiveTabsContainer id={'Costomer-Report'} area_label={'Costomer-Report-tabs'}>
            <h1>Costomer Report</h1>
          </ActiveTabsContainer>
          <ActiveTabsContainer id={'Campign-Report'} area_label={'Campign-Report-tabs'}>
            <h1>Campign Report</h1>
          </ActiveTabsContainer>
        </TabsContent>
      </Tab>
    </Page>
  )
}
