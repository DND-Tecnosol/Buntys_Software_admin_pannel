import React from 'react'
import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../Components/Tabs'
import Page from '../Layouts/Page'
import { PkgInvoice, Proinvoice, RbsInvoice } from './Invoice'

export default function Quicksale({ header }) {





  return (
    <>
      <Page header={header}>
        <Tab>
          <TabsCard>
            <TabsBtn id={"RBS-Invoices-tab"} href={'#RBS-Invoices'} active="show active" title={'RBS-Invoices'} aria_control={'RBS-Invoices'} ariaselected={true} />
            <TabsBtn id={"PKG-Invoices-tabs"} href={'#PKG-Invoices'} title={'PKG-Invoices'} aria_control={'PKG-Invoices'} ariaselected={false} />
            <TabsBtn id={"PRO-Invoices-tabs"} href={'#PRO-Invoices'} title={'PRO-Invoices'} aria_control={'PRO-Invoices'} ariaselected={false} />
          </TabsCard>
          <TabsContent>
            <ActiveTabsContainer active="show active" id={'RBS-Invoices'} area_label={'RBS-Invoices-tab'}>
              <h1>Rbs Invoice</h1>
              <RbsInvoice/>
            </ActiveTabsContainer>
            <ActiveTabsContainer id={'PKG-Invoices'} area_label={'PKG-Invoices-tabs'}>
              <h1>pkg Invoice</h1>
              <PkgInvoice/>
            </ActiveTabsContainer>
            <ActiveTabsContainer id={'PRO-Invoices'} area_label={'PRO-Invoices-tabs'}>
              <h1>product Invoice</h1>
              <Proinvoice/>
            </ActiveTabsContainer>
          </TabsContent>
        </Tab>
      </Page>
    </>
  )
}
