import React from 'react'
import Layout from '../Layout'

const page = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-5 mt-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[#171717] font-[500] text-[24px]">Shipments Page</h2>
        </div>

        <div className="bg-[#F9FAFB] p-4 rounded-[12px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[14px] font-medium text-[#171717]">Shipments Page</h3>
          </div>
          {/* Address list goes here */}
        </div>
      </div>
    </Layout>
  )
}

export default page
