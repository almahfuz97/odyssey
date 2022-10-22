import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Pages/Header/Header'
// import bgImg from "../assets/Rectangle1"

export default function Main() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
