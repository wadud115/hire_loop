import { Dashboard } from '@/components/dashboardComponents/Dashboard';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <Dashboard></Dashboard>
            <div className='flex-1'>{children}</div>
            
        </div>
    );
};

export default DashboardLayout;