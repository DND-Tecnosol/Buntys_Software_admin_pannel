import React from 'react'
import { Login,Resetpassword } from '../Pages'
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
                    <Route path={'/password-reset'} element={<Resetpassword />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
