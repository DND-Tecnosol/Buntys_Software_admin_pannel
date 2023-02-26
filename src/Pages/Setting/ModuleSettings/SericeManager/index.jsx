import React from 'react';
import Page from '../../../../Layouts/Page';
import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../../../../Components/Tabs'
import {ServiceManager,ServiceCateguryManeger} from './section'
const ServiceManagers = () => {
    return (
        <>
            <>
                <Tab>
                    <TabsCard>
                        <TabsBtn id={"Service-Manager-tab"} href={'#Service-Manager'} active="show active" title={'Service Manager'} aria_control={'Service-Manager'} ariaselected={true} />
                        <TabsBtn id={"ServiceCateguryManeger-tabs"} href={'#ServiceCateguryManeger'} title={'Service Categury Manager'} aria_control={'ServiceCateguryManeger'} ariaselected={false} />
                        {/* <TabsBtn id={"PRO-Invoices-tabs"} href={'#PRO-Invoices'} title={'PRO-Invoices'} aria_control={'PRO-Invoices'} ariaselected={false} /> */}
                    </TabsCard>
                    <TabsContent>
                        <ActiveTabsContainer active="show active" id={'Service-Manager'} area_label={'Service-Manager-tab'}>
                            <ServiceManager />
                        </ActiveTabsContainer>
                        <ActiveTabsContainer id={'ServiceCateguryManeger'} area_label={'ServiceCateguryManeger-tabs'}>
                            <ServiceCateguryManeger />
                        </ActiveTabsContainer>
                    </TabsContent>
                </Tab>
            </>
        </>
    );
}

export default ServiceManagers;
