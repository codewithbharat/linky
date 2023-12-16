import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen">
            <div className="basis-1/12 bg-slate-800">
                <Navbar />
            </div>
            <div className="basis-11/12">
                <div className='bg-slate-800 h-full px-12 text-white '>
                    {children}
                </div>
                <div className="absolute bottom-0 h-6 bg-slate-700 w-full"></div>
            </div>
        </div>
    )
}

export default Layout