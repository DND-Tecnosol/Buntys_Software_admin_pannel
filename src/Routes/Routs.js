import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import routesconst, { routes } from '../Constants/routesconst';
import { CostomerProfile, StaffProfile } from "../Pages";
import {
    Storemanager,
    StoreClosedate,
    ManageStoreTime,
    StoreNotyfication,
    Expense,
    Security,
    StaffAttendence,
    UplodeCostumerData,
    UplodeMasterData,
    SericeManager,
    ProductManager,
    StaffManager,
    UserManger,
    Invoicemanager,
    Vaoucher,
    RewardPointManager,
    Offers,
    MembershipeManager,
    PakgeManager,
    CostumerManager,
    Inventory,
    VenderManager,
    CaseRegister,
    OnlineAppointment,
    WebsiteManager,
    SmsServices,
    WhatsappServices,
    DailySoftwareTask,
} from '../Pages/Setting/'
import { fetchServices } from '../Store/Slice/All/serviceSlice';
import { fetchStore } from '../Store/Slice/All/storeSlice';
import Page from './../Layouts/Page';

export default function Routs() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStore());
        dispatch(fetchServices());
    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page />} >
                    {routesconst.map((e, k) => <Route path={e.path} element={e.element(e.tag)} />)}
                    <Route path={routes.Storemanager} element={<Storemanager />} />
                    <Route path={routes.StoreClosedate} element={<StoreClosedate />} />
                    <Route path={routes.ManageStoreTime} element={<ManageStoreTime />} />
                    <Route path={routes.StoreNotyfication} element={<StoreNotyfication />} />
                    <Route path={routes.Expense} element={<Expense />} />
                    <Route path={routes.Security} element={<Security />} />
                    <Route path={routes.StaffAttendence} element={<StaffAttendence />} />


                    <Route path={routes.UplodeCostumerData} element={<UplodeCostumerData />} />
                    <Route path={routes.UplodeMasterData} element={<UplodeMasterData />} />

                    <Route path={routes.ServiceManger} element={<SericeManager />} />
                    <Route path={routes.ProductManger} element={<ProductManager />} />
                    <Route path={routes.StuffManger} element={<StaffManager />} />
                    <Route path={routes.UserManger} element={<UserManger />} />
                    <Route path={routes.InvoiceManger} element={<Invoicemanager />} />
                    {/* <Route path={routes.Vaoucher} element={<Vaoucher />} /> */}
                    <Route path={routes.RewardPointManager} element={<RewardPointManager />} />
                    {/* <Route path={routes.Offers} element={<Offers />} /> */}
                    <Route path={routes.MembershipeManager} element={<MembershipeManager />} />
                    <Route path={routes.PakgeManager} element={<PakgeManager />} />
                    <Route path={routes.CostomerManger} element={<CostumerManager />} />

                    <Route path={routes.Inventory} element={<Inventory />} />
                    <Route path={routes.VenderManager} element={<VenderManager />} />
                    <Route path={routes.CaseRegister} element={<CaseRegister />} />
                    <Route path={routes.OnlineAppointment} element={<OnlineAppointment />} />
                    <Route path={routes.WebsiteManager} element={<WebsiteManager />} />

                    <Route path={routes.SmsServices} element={<SmsServices />} />
                    <Route path={routes.WhatsappServices} element={<WhatsappServices />} />
                    <Route path={routes.DailySoftwareTask} element={<DailySoftwareTask />} />


                    <Route path={'costomer/:id'} element={<CostomerProfile />} />
                    <Route path={'staff/:id'} element={<StaffProfile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const Laouts = () => {
    return (
        <>
            <h1>Hello</h1>
            <Outlet/>
        </>
    )
}

