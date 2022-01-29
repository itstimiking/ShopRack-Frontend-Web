import React from 'react';
import { AiOutlineBell, AiOutlineCaretDown, AiOutlineSearch} from 'react-icons/ai';


function SearchAndProfileSection() {
    return (
        <section className="flex justify-between">
            <div className="w-2/6 relative">
                <AiOutlineSearch className="absolute top-2 left-3 text-gray-400" size={40} />
                <input 
                    type="search" 
                    placeholder="Search..." 
                    className="w-full min-h-0 rounded-2xl px-16 shadow-xl py-4 focus:outline-none focus:ring-2" 
                />
            </div>
            <div className="flex min-h-0 bg-white rounded-2xl shadow-xl px-4 py-2 justify-between space-x-5">
                <div className="relative">
                    <AiOutlineBell size={40} className="text-gray-400" />
                    <div 
                        className={`
                            w-4 h-4 bg-red-500 text-white rounded-full flex 
                            justify-center items-center absolute top-0 right-0
                        `}
                    >
                        <small>2</small> 
                    </div>
                </div>
                <div className="flex space-x-4 items-center">
                    <div
                        className="rounded-full w-10 h-10 flex overflow-hidden ring-1 ring-gray-200"
                    >
                        <img src="/img/avatar2.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 className="text-sm"> Betty Doe </h5>
                        <small className="font-bold"> owner </small>
                    </div>
                    <AiOutlineCaretDown />
                </div>
            </div>
        </section>
    )
}

export default SearchAndProfileSection
