import React from 'react'

const Navbar = () => {
    return (
        <div className="flex flex-row mx-8 items-center h-full">
            <div className="font-bold text-2xl text-white drop-shadow-lg cursor-pointer bg-gradient-to-r to-sky-400 from-red-400 bg-clip-text text-transparent"> Linky</div>
            <div className="ml-auto flex flex-row text-white items-center font-semibold">
                <div className="mr-4 cursor-pointer hover:text-blue-400 hover:drop-shadow-xl uppercase tracking-wider">Login</div>
                <div className="mr-4 cursor-pointer border-2 rounded-lg px-2 hover:bg-blue-400 hover:drop-shadow-xl uppercase tracking-wider">Register</div>

            </div>
        </div>
    )
}

export default Navbar