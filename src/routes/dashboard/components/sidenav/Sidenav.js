import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import { Links } from "./data"; 

function Sidenav() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="hidden md:flex lg:w-3/12 p-4 text-blue-700">
            <div className="flex flex-col w-full min-h-0 pb-40 bg-white rounded-xl">
                <div className="w-full py-10 flex justify-center">
                    <img
                        className='w-24 lg:w-48'
                        src='/img/logo.svg'
                        alt='Logo'
                    />
                </div>
                <ul className="flex flex-col space-y-10 items-center lg:items-start p-4">
                    {
                        Links.map(({icon,name,url}) =>(
                            <li 
                                className={`
                                    flex space-x-6 items-center w-full transition ease-in-out delay-15
                                    hover:bg-blue-800 hover:text-white duration-500
                                    rounded-xl p-2 py-4 cursor-pointer
                                    ${location.pathname === url && "bg-blue-800 text-white"}
                                `}
                                key={url}
                                onClick = {()=>navigate(url)}
                            >
                                {icon}
                                <span className="hidden xl:flex">
                                    {name}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidenav
