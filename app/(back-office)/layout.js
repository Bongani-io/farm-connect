import Navbar from '@/components/back-office/Navbar'
import Sidebar from '@/components/back-office/Sidebar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex'> 
         {/* sidebar */}
         <Sidebar/>
         <div className="w-full">
            {/* Header */}
            <Navbar/>
            <main className='ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16'>
                {children}
            </main>
            {/* Main */}
         </div>
         {/* Main Body */}
    </div>
  )
}