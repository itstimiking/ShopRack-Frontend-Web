import React from 'react';
import LineChart from './charts/LineChart';


function ChartSection() {
    return (
        <section className="w-full flex flex-wrap lg:flex-nowrap min-h-0 space-x-5">

            <div className="w-full md:w-1/2 rounded-2xl p-4 md:p-10 flex flex-col">
                <LineChart />
            </div>

            <div className="w-full md:w-1/2 bg-white rounded-2xl p-4 md:p-10 flex flex-col">
                <LineChart />
            </div>
            
        </section>
    )
}

export default ChartSection;
