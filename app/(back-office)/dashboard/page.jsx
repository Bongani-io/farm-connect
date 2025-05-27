import CustomDataTable from '@/components/back-office/CustomDataTable'
import DashboardCharts from '@/components/back-office/DashboardCharts'
import Heading from '@/components/back-office/Heading'
import LargeCards from '@/components/back-office/LargeCards'
import SmallCards from '@/components/back-office/SmallCards'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <Heading title='Dashboard Overview'/>

        {/* Large Cards */}
        <LargeCards/>

        {/* Small Cards */}
        <SmallCards/>

        {/* Charts */}
        <DashboardCharts/>
        
        {/* Recent Orders Tables */}
        <CustomDataTable/>
    </div>
  )
}