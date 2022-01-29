import React from 'react';
import { FiFileText, FiPackage } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const metric = [
    {
        name : "Require Invoice",
        value : 25,
        style : "bg-blue-200 text-blue-700",
        icon : <FiFileText size={20}/>
    },
    {
        name : "Require Packaging",
        value : 7,
        style : "bg-red-200 text-red-700",
        icon : <FiPackage size={20}/>
    },
    {
        name : "Require Shipping",
        value : 40,
        style : "bg-green-200 text-green-700",
        icon : <MdOutlineLocalShipping size={20}/>
    },
    {
        name : "Require Delivery",
        value : 50,
        style : "bg-pink-200 text-pink-700",
        icon : <AiOutlineShoppingCart size={20}/>
    },
]

function StoreOverView() {
    return (
        <section className="flex flex-wrap justify-between items-center w-full px-8 py-16 min-h-0 bg-white rounded-xl shadow-xl">
            
            {
                metric.map(item => (
                    <div className="flex w-full md:w-1/2 mt-10 lg:mt-0 lg:w-1/3 xl:w-1/4 space-x-4" key={item.name}>
                        <div
                            className={`rounded-full w-16 h-16 flex items-center justify-center ${item.style}`}
                        >
                            { item.icon }
                        </div>
                        <div className="flex flex-col justify-center">
                            <h5 className=""> {item.name} </h5>
                            <span className="font-bold"> {item.value} </span>
                        </div>
                    </div>
                ))
            }
            
        </section>
    )
}

export default StoreOverView
