import React from "react";
import { Link , Outlet  } from "react-router-dom";
import { routes } from "../Constants/routesconst";
import Page from "../Layouts/Page";
import "../themes/index.css";
export default function Setting({ header }) {
  return (
    <Page header={header}>
      <div className="card">
        <div className="card-header">Sallon Menagement</div>
        <div className="card-body">
          <div className="row">
          <LinkComponents title={'Store Manage'} to={`/${routes.StoreManger}`} info={'Create store , Update store Detail'}/>
          <LinkComponents to={`/${routes.ServiceManger}`}  title={'Service Manager'}  info={'Create Service , Update Service Detail'}/>
          <LinkComponents title={'Product Manager'} to={`/${routes.ProductManger}`}  info={'Create Product , Update Product Detail'}/>
          <LinkComponents title={'Staff Manager'} to={`/${routes.StuffManger}`}  info={'Create staff , Update staff Detail'}/>
          <LinkComponents title={'User Manager'} to={`/${routes.UserManger}`}  info={'Create User , Update User Detail'}/>
          <LinkComponents title={'Invoice Manager'} to={`/${routes.InvoiceManger}`}  info={'Change Invoice Setting'}/>
          </div>
        </div>
      </div>
      {/* <div className="card">
        <div className="card-header">Staff Menagement</div>
        <div className="card-body">
          <div className="row">

          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">User Menagement</div>
        <div className="card-body">Card Body</div>
      </div> */}
    </Page>
  );
}

const LinkComponents = ({title,info,...props}) => {
  return (
    <>
      <Link   className="col-md-3 col-sm-12 p-3 link-selecter" {...props}>
      {/* <div className="col-3 p-3 link-selecter" {...props}> */}
        <h6>{title}</h6>
        <p className="text-muted">{info}</p>
      {/* </div> */}
      </Link>
    </>
  );
};
