import React from 'react'
import { ActiveTabsContainer, Tab, TabsBtn, TabsCard, TabsContainer, TabsContent } from '../../Components/Tabs'
function Hairweg() {
    return (
        <>
            <Tab>
                <TabsCard>
                    <TabsBtn id={"Hair-weg-details-tab"} href={'#Hair-weg-details'} active="show active" title={'Hair-wegs'} aria_control={'Hair-weg-details'} ariaselected={true} />
                    <TabsBtn id={"Hair-weg-categury-tabs"} href={'#Hair-weg-categury'} title={'Hair-weg categury'} aria_control={'Hair-weg-categury'} ariaselected={false} />
                    {/* <TabsBtn id={"StuffDetasil-tabs"} href={'#StuffDetail'} title={'Product Cetegury'} aria_control={'StuffDetail'} ariaselected={false} /> */}
                </TabsCard>
                <TabsContent>
                    <ActiveTabsContainer active="show active" id={'Hair-weg-details'} area_label={'Hair-weg-details-tab'}>
                    Hair-weg-details
                    </ActiveTabsContainer>
                    <ActiveTabsContainer id={'Hair-weg-categury'} area_label={'Hair-weg-categury-tabs'}>
                    Hair-weg-categury
                    </ActiveTabsContainer>
                </TabsContent>
            </Tab>
        </>
    )
}

export default Hairweg