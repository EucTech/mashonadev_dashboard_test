import React from 'react'
import Layout from './Layout';
import HeaderSection from '@/components/Dashboard/HeaderSection';
import Overview from '@/components/Dashboard/Overview';
import RecentShipment from '@/components/Dashboard/RecentShipment';
import ShipmentDetails from '@/components/Dashboard/ShipmentDetails';

const page = () => {
  return (
    <Layout>
      <div className='h-full w-full flex flex-col items-start px-[5px] md:px-[29px] py-[5px] md:py-[20px]'>
      <HeaderSection/>
      <Overview/>
      <RecentShipment/>
      <ShipmentDetails/>
      </div>
    </Layout>
  )
}

export default page
