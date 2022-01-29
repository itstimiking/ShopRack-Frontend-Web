import React,{ useRef } from 'react';
import { FaRegCalendarAlt, FaAngleDown} from 'react-icons/fa';


function SummarySection() {
    const date = useRef(null);
    return (
        <section className="w-full flex flex-wrap lg:flex-nowrap min-h-0 space-x-5">
            <div className="w-full md:w-2/3 lg:w-5/12 bg-white rounded-2xl p-4 md:p-10 flex flex-col">
                <div>
                    <h2 className="font-black text-xl"> Product Details </h2>
                </div>
                <div className="flex">
                    <div className="flex flex-col my-4 w-1/3 space-y-5 pb-10">
                        <div className="w-full flex justify-between"> 
                            <span className="text-red-400">Low Stock Items </span>
                            <span className="font-bold text-xl text-red-600"> {0} </span>
                        </div>
                        <div className="w-full flex justify-between"> 
                            <span className="">All items </span>
                            <span className="font-bold text-xl"> {0} </span>
                        </div>
                        <div className="w-full flex justify-between"> 
                            <span className="">All Items Gross </span>
                            <span className="font-bold text-xl"> {0} </span>
                        </div>
                        
                    </div>
                    <div className="flex justify-end my-4 w-2/3">
                        <div className="w-40 h-40 bg-gray-200 rounded-full flex justify-center items-center">
                            <div className="w-34 h-32 bg-blue-300 rounded-full flex justify-center items-center p-2">
                                No active items
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-7/12 flex space-x-4">

                <div className="bg-white rounded-2xl p-4 lg:w-1/2 lg:p-10">
                    <div>
                        <h2 className="font-black text-xl"> Inventory Summary </h2>
                    </div>
                    <div className="flex flex-col my-4 w-full pb-10">
                        
                        <div className="w-full flex justify-between bg-blue-300 p-4 rounded-lg mt-5"> 
                            <span className="">Quantity at hand </span>
                            <span className="font-bold text-xl"> {0} </span>
                        </div>
                        <div className="w-full flex justify-between bg-blue-300 p-4 rounded-lg mt-10"> 
                            <span className=""> Quantity to be recieved </span>
                            <span className="font-bold text-xl"> {0} </span>
                        </div>
                        
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 lg:w-1/2 lg:p-10">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="font-black text-xl"> Puchase Order </h2>
                        <div 
                            className="relative flex w-10 h-10 mt-2 overflow-hidden"
                            onClick={()=>{
                                date.current.focus()
                                console.log(date.current.open())
                            }}
                        >
                            
                            <span className="flex items-center absolute top-0 right-0">                            
                                <FaRegCalendarAlt />
                                <FaAngleDown />
                            </span>
                            <input type="date" className="w-40 appearance-none focus:outline-none" ref={date} id="session-date"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pb-10">
                        <div className="w-full flex items-center flex-col mt-5 p-4 "> 
                            <span className="">Quantity Ordered</span>
                            <span className="font-bold text-xl mt-5"> {0} </span>
                        </div>
                        <div className="w-full flex items-center flex-col mt-10 p-4"> 
                            <span className=""> Total Cost </span>
                            <span className="font-bold text-xl mt-5"> NGN {0} </span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SummarySection
