import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import routesconst, { routes } from '../Constants/routesconst';
import { SericeManager, StaffManager, StoreManager, UserManger, Invoicemanager, productManager} from "../Pages";
// import { Dashbord,  } from '../Pages';
import { fetchServices } from '../Store/Slice/All/serviceSlice';
import { fetchStore } from '../Store/Slice/All/storeSlice';

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
                    {routesconst.map((e, k) => <Route path={e.path} element={e.element(e.tag)} />)}
                    <Route path={routes.ServiceManger} element={<SericeManager />} />
                    <Route path={routes.StuffManger} element={<StaffManager />} />
                    <Route path={routes.StoreManger} element={<StoreManager />} />
                    <Route path={routes.UserManger} element={<UserManger />} />
                    <Route path={routes.InvoiceManger} element={<Invoicemanager />} />
                    <Route path={routes.ProductManger} element={<productManager />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

{/* <Route path="teams" element={<Teams />}>
<Route path=":teamId" element={<Team />} />
<Route path="new" element={<NewTeamForm />} />
<Route index element={<LeagueStandings />} />
</Route> */}