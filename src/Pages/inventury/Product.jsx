import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  ActiveTabsContainer,
  Tab,
  TabsBtn,
  TabsCard,
  TabsContainer,
  TabsContent,
} from "../../Components/Tabs";
function Product() {
  let [status, setStatus] = useState(1);
  console.log(status);
  // product categury
  //   let [status, setStatus] = useState(1);

  //   // product Brand
  //   let [status, setStatus] = useState(1);

  // product
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  //   let [status, setStatus] = useState(1);
  return (
    <>
      <Tab>
        <TabsCard>
          <TabsBtn
            id={"Product-detail-tab"}
            href={"#Product-detail"}
            active="show active"
            title={"Product"}
            aria_control={"Product-detail"}
            ariaselected={true}
          />
          <TabsBtn
            id={"Product-categury-tabs"}
            href={"#Product-categury"}
            title={"Product categury"}
            aria_control={"Product-categury"}
            ariaselected={false}
          />
          {/* <TabsBtn id={"StuffDetasil-tabs"} href={'#StuffDetail'} title={'Product Cetegury'} aria_control={'StuffDetail'} ariaselected={false} /> */}
        </TabsCard>
        <TabsContent>
          <ActiveTabsContainer
            active="show active"
            id={"Product-detail"}
            area_label={"Product-detail-tab"}
          >
            <div className="card">
              <div className="card-header">
                <div className="row p-2 justify-content-between align-items-center">
                  <h4>Products {status}</h4>
                  <Button
                    variant="contained"
                    data-toggle="modal"
                    data-target="#product"
                  >
                    Add Product
                  </Button>
                </div>
              </div>
              <div className="card-body">
                {/* Product Tabel */}

                <table className="table border-0">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0" scope="col">
                        #
                      </th>
                      <th scope="col">Products Name</th>
                      <th scope="col">qty</th>
                      <th scope="col">Status</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-0">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>{status ? 100 : 0}</td>
                      <td>
                        <Button
                          variant="text"
                          onClick={() => setStatus(!status)}
                          color={status ? "success" : "error"}
                        >
                          {status ? "instock" : "out-off-stock"}
                        </Button>
                      </td>
                      <td>250 Rs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ActiveTabsContainer>
          <ActiveTabsContainer
            id={"Product-categury"}
            area_label={"Product-categury-tabs"}
          >
            <div className="card">
              <div className="card-header">
                <div className="row p-2 justify-content-between align-items-center">
                  <h4>Product Categury</h4>
                  <Button
                    variant="contained"
                    data-toggle="modal"
                    data-target="#productCategury"
                  >
                    Add Product ategury
                  </Button>
                </div>
              </div>
              <div className="card-body">
                <table className="table border-0">
                  <thead className="border-0">
                    <tr className="border-0">
                      <th className="border-0" scope="col">
                        #
                      </th>
                      <th scope="col">Categury Name</th>
                      {/* <th scope="col">Last</th> */}
                      {/* <th scope="col">Handle</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-0">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ActiveTabsContainer>
        </TabsContent>
      </Tab>
      {/* add Product Model */}
      <div
        className="modal fade"
        id="product"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Product</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* add Product categury Model */}
      <div
        className="modal fade"
        id="productCategury"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Categury
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
/*

*/
