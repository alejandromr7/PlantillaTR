import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>
            <h1 className='text-center text-8xl font-bold mt-10 text-indigo-700'>Auth Layout</h1>

            <Outlet />
        </>
    )
}

export default AuthLayout