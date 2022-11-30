import React from 'react'
import { Login } from '../Pages'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function AuthRouts() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    
                    <Route path={'/'} element={<Login />} />
                    {/* <Route path={routes.StuffManger} element={<StaffManager />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
