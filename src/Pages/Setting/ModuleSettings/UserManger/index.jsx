import React from 'react';

import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../../../../Components/Tabs'
import Users from './Users';
import Role from './Role';
import Page from '../../../../Layouts/Page';
// import {UsersManager,RoleManeger} from './section'

const UserManger = () => {
    return (
        <Page header={"User Manager"}>
            <Tab>
                    <TabsCard>
                        <TabsBtn id={"Users-Manager-tab"} href={'#Users-Manager'} active="show active" title={'Users Manager'} aria_control={'Users-Manager'} ariaselected={true} />
                        <TabsBtn id={"RoleManeger-tabs"} href={'#RoleManeger'} title={'User Roles Manager'} aria_control={'RoleManeger'} ariaselected={false} />
                        {/* <TabsBtn id={"PRO-Invoices-tabs"} href={'#PRO-Invoices'} title={'PRO-Invoices'} aria_control={'PRO-Invoices'} ariaselected={false} /> */}
                    </TabsCard>
                    <TabsContent>
                        <ActiveTabsContainer active="show active" id={'Users-Manager'} area_label={'Users-Manager-tab'}>
                            <Users />
                        </ActiveTabsContainer>
                        <ActiveTabsContainer id={'RoleManeger'} area_label={'RoleManeger-tabs'}>
                            <Role />
                        </ActiveTabsContainer>
                    </TabsContent>
                </Tab>
        </Page>
    );
}

export default UserManger;
