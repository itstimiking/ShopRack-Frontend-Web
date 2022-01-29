import React from 'react';

import DashboardIndex from './components/dashboardComponents/DashboardIndex';
import Sidenav from './components/sidenav/Sidenav';

function Dashboard() {

    return (
        <div className="w-full bg-gray-300">
            <div className="container mx-auto flex">

                <Sidenav />

                <div className="w-full lg:w-9/12 p-4">
                    <DashboardIndex />
                </div>
              
            </div>          
        </div>
    )
}

export default Dashboard;
