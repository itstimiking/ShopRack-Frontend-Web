import React from 'react';
import {
    AiFillAppstore,
    AiFillContacts,
    AiFillDashboard,
    AiFillInteraction,
    AiFillProject,
    AiFillSetting,
    AiOutlineFundProjectionScreen
} from 'react-icons/ai';

export const Links = [
    {
        name:"Dashboard",
        url:"/dashboard",
        icon:<AiFillDashboard size={23} />
    },
    {
        name:"Contacts",
        url:"/dashboard/contacts",
        icon:<AiFillContacts size={23} />
    },
    {
        name:"Items",
        url:"/dashboard/items",
        icon:<AiFillProject size={23} />
    },
    {
        name:"Inventory",
        url:"/dashboard/inventory",
        icon:<AiFillAppstore size={23} />
    },
    {
        name:"Sales Order",
        url:"/dashboard/sales",
        icon:<AiOutlineFundProjectionScreen size={23} />
    },
    {
        name:"Daily Activities",
        url:"/dashboard/activities",
        icon:<AiFillInteraction size={23} />
    },
    {
        name:"Settings",
        url:"/dashboard/settings",
        icon:<AiFillSetting size={23} />
    },

]