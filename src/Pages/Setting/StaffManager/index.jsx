import React from 'react';
import Page from '../../../Layouts/Page';
import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../../../Components/Tabs'
import {StaffSetting,StuffCategury,StuffDetail} from './section'
const StuffManger = () => {
    return (
        <Page header={'Stuff Manger'}>
            <Tab>
                    <TabsCard>
                        <TabsBtn id={"StaffSetting-tab"} href={'#StaffSetting'} active="show active" title={'Service Manager'} aria_control={'StaffSetting'} ariaselected={true} />
                        <TabsBtn id={"StuffCategury-tabs"} href={'#StuffCategury'} title={'Service Categury Manager'} aria_control={'StuffCategury'} ariaselected={false} />
                        <TabsBtn id={"StuffDetail-tabs"} href={'#StuffDetail'} title={'PRO-Invoices'} aria_control={'StuffDetail'} ariaselected={false} />
                    </TabsCard>
                    <TabsContent>
                        <ActiveTabsContainer active="show active" id={'StaffSetting'} area_label={'StaffSetting-tab'}>
                            <StaffSetting />
                        </ActiveTabsContainer>
                        <ActiveTabsContainer id={'StuffCategury'} area_label={'StuffCategury-tabs'}>
                            <StuffCategury />
                        </ActiveTabsContainer>
                        <ActiveTabsContainer id={'StuffDetail'} area_label={'StuffDetail-tabs'}>
                            <StuffDetail />
                        </ActiveTabsContainer>
                    </TabsContent>
                </Tab>
        </Page>
    );
}

export default StuffManger;
