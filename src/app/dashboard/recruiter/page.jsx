"use client"

import DashboardStats from '@/components/dashboardComponents/DashBoardStats';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterPage = () => {

    const stats = [
  { id: 1, title: "My Job Posts", value: 12, icon: "briefcase" },
  { id: 2, title: "Total Applicants", value: 186, icon: "users" },
  { id: 3, title: "Active Jobs", value: 8, icon: "trending" },
  { id: 4, title: "Jobs Closed", value: 4, icon: "completed" },
];

    const {data : session , isPending} = useSession();
    if(isPending){
        return <div>Loading....</div>
    }

    const user = session?.user;
    console.log(user)
    return (
        <div>
            <h2 className='text-2xl'>Welcome Back , {user?.name}</h2>

            <DashboardStats stats={stats} />;
            
        </div>
    );
};

export default RecruiterPage;