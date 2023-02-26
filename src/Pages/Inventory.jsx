import React from "react";
import Page from "../Layouts/Page";
import {
  ActiveTabsContainer,
  Tab,
  TabsBtn,
  TabsCard,
  TabsContainer,
  TabsContent,
} from "../Components/Tabs";
import { Hairweg, Product } from "./inventury";
export default function Inventory({ header }) {
  return (
    <>
      <div className="card border-0">
        <div className="card-body">
          <Tab>
            <TabsCard>
              <TabsBtn
                id={"Product-tab"}
                href={"#Product"}
                active="show active"
                title={"Product"}
                aria_control={"Product"}
                ariaselected={true}
              />
              <TabsBtn
                id={"Hair-weg-tabs"}
                href={"#Hair-weg"}
                title={"Hair Weg"}
                aria_control={"Hair-weg"}
                ariaselected={false}
              />
              {/* <TabsBtn id={"StuffDetasil-tabs"} href={'#StuffDetail'} title={'Product Cetegury'} aria_control={'StuffDetail'} ariaselected={false} /> */}
            </TabsCard>
            <TabsContent>
              <ActiveTabsContainer
                active="show active"
                id={"Product"}
                area_label={"Product-tab"}
              >
                <Product />
              </ActiveTabsContainer>
              <ActiveTabsContainer id={"Hair-weg"} area_label={"Hair-weg-tabs"}>
                <Hairweg />
              </ActiveTabsContainer>
            </TabsContent>
          </Tab>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="card-footer">

        </div> */
}
