import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { DashboardAdmin, DashboardISP, Home, Login, BelajarQOS, BelajarThroughput } from '../../pages'

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/belajarqos/throughput' element={<BelajarThroughput />}>
                </Route>
                <Route path='/belajarqos' element={<BelajarQOS />}>
                </Route>
                <Route path='/dashboardisp' element={<DashboardISP />}>
                </Route>
                <Route path='/dashboardadmin' element={<DashboardAdmin />}>
                </Route>
                <Route path='/login' element={<Login />}>
                </Route>
                <Route path='/' element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess