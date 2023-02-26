import React from "react";
import { Link, Outlet } from "react-router-dom";
import { routes } from "../Constants/routesconst";
import Page from "../Layouts/Page";
import "../themes/index.css";
export default function Setting({ header }) {
  return (
    <>
      <div className="card">
        <div className="card-header border-0">Business Settings</div>
        <div className="card-body">
          <div className="row">
            <LinkComponents title={'Store Manage'} to={`/${routes.Storemanager}`} info={'Create store , Update store Detail'} />
            <LinkComponents title={'Add Store Close Date'} to={`/${routes.StoreClosedate}`} info={'Manage Store closing date, Add event'} />
            <LinkComponents title={'Manage Store Time'} to={`/${routes.ManageStoreTime}`} info={'Manage Your Store Close Time'} />
            <LinkComponents title={'Notyfication'} to={`/${routes.StoreNotyfication}`} info={'Manage Client,staff,Report & Reminder notification'} />
            <LinkComponents title={'Expense'} to={`/${routes.Expense}`} info={'Manage Outlate Daily Expense'} />
            <LinkComponents title={'Security'} to={`/${routes.Security}`} info={'Manage Outlate Pannel Session Login Hours'} />
            <LinkComponents title={'Staff Atendence'} to={`/${routes.StaffAttendence}`} info={'Manage Staff Atendence'} />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-0">Data & Migration Settings</div>
        <div className="card-body">
          <div className="row">
            <LinkComponents title={'Uplode Customer Data'} to={`/${routes.UplodeCostumerData}`} info={'Easily Mange Your Customer Data'} />
            <LinkComponents to={`/${routes.UplodeMasterData}`} title={'Uplode Master Data'} info={'Uplode Your Store Master Data. like Services,Product,Category Staff'} />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-0">Module Level Settings</div>
        <div className="card-body">
          <div className="row">
            <LinkComponents to={`/${routes.ServiceManger}`} title={'Service Manager'} info={'Add Service , Manage Service Detail'} />
            <LinkComponents title={'Product Manager'} to={`/${routes.ProductManger}`} info={'Add Product , Manage Product Detail'} />
            <LinkComponents title={'Costumer Manager'} to={`/${routes.ProductManger}`} info={'Add Costumer , Manage Costumer Settings'} />
            <LinkComponents title={'Staff Manager'} to={`/${routes.StuffManger}`} info={'Add staff , Manage staff Detail'} />
            <LinkComponents title={'User Manager'} to={`/${routes.UserManger}`} info={'Add User , Manage User Detail'} />
            <LinkComponents title={'Invoice Manager'} to={`/${routes.InvoiceManger}`} info={'Change Invoice Setting'} />
            <LinkComponents title={'Vaoucher Manager'} to={`/${routes.Vaoucher}`} info={'Create New Vaoucher, Manage Old Vaoucher'} />
            <LinkComponents title={'Reward Points Manager'} to={`/${routes.RewardPointManager}`} info={'Change Reward Points Setting, & Detail of Reward Points'} />
            <LinkComponents title={'Offers Manager'} to={`/${routes.Offers}`} info={'Create New Offers, Manage Old Offers'} />
            <LinkComponents title={'Membershipe Card Manager'} to={`/${routes.MembershipeManager}`} info={'Create New Membershipe Card, Manage Membershipe Card'} />
            <LinkComponents title={'Pakage Manager'} to={`/${routes.PakgeManager}`} info={'Create New Pakage, Manage Old Pakage'} />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-0">Store Service</div>
        <div className="card-body">
          <div className="row">
            <LinkComponents title={'Inventory'} to={`/${routes.Inventory}`} info={'Manage Your Store Inventory, Inventory Invoice, tranfer Inventory Product'} />
            <LinkComponents title={'Vender Manager'} to={`/${routes.VenderManager}`} info={'Manage Your Store Vendor, Vendor Invoice'} />
            <LinkComponents to={`/${routes.CaseRegister}`} title={'Case Register'} info={'Register Your Daily case & Closing Case , Opning Case '} />
            <LinkComponents to={`/${routes.OnlineAppointment}`} title={'Online Appointment'} info={'Create Service , Update Service Detail'} />
            <LinkComponents to={`/${routes.WebsiteManager}`} title={'Website Manage'} info={'Create Service Page,Manage Offers,Manage Store Feedback,'} />
            {/* <LinkComponents title={'Uplode Master Data'} to={`/${routes.ProductManger}`}  info={'Create Product , Update Product Detail'}/> */}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header border-0">3rd Party Integrate Service</div>
        <div className="card-body">
          <div className="row">
            <LinkComponents title={'Sms Service'} to={`/${routes.SmsServices}`} info={'Uplode Store Data Customer'} />
            <LinkComponents to={`/${routes.WhatsappServices}`} title={'Whatsapp Service'} info={'Create Service , Update Service Detail'} />
            <LinkComponents title={'Daily Software Task'} to={`/${routes.DailySoftwareTask}`}  info={'Show Auto Mation Task'}/>
          </div>
        </div>
      </div>
    </>
  );
}

const LinkComponents = ({ title, info, ...props }) => {
  return (
    <>
      <Link className="col-md-3 col-sm-12 p-3 link-selecter" {...props}>
        {/* <div className="col-3 p-3 link-selecter" {...props}> */}
        <h6>{title}</h6>
        <p className="text-muted">{info}</p>
        {/* </div> */}
      </Link>
    </>
  );
};
