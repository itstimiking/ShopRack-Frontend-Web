import React from 'react';

import DashboardIndex from './components/DashboardIndex';
import Sidenav from './components/Sidenav';

function Dashboard() {

    return (
        <div className="w-full bg-gray-300">
            <div className="container mx-auto flex p-4 md:p-8">

                <Sidenav />

                <DashboardIndex />
              
            </div>          
        </div>
    )
}

export default Dashboard;
