'use client';
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from 'recharts';

const RecentShipment = () => {
    const [selectedTab, setSelectedTab] = useState('Year');

  const data = [
    { name: '1', value: 300 },
    { name: '2', value: 320 },
    { name: '3', value: 330 },
    { name: '4', value: 340 },
    { name: '5', value: 350 },
    { name: '6', value: 400 },
    { name: '7', value: 390 },
    { name: '8', value: 500 },
    { name: '9', value: 600 },
    { name: '10', value: 550 },
    { name: '11', value: 200 },
    { name: '12', value: 1000 },
  ];

  const tabs = ['Year', 'Month', 'Week'];

  return (
    <div className="w-full flex flex-col gap-5 mt-10">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[#171717] font-[500] text-[24px]">
          Recent shipment
        </h2>

        <div className="w-fit flex items-center justify-between gap-3 text-[14px] font-[500] bg-[#FFFFFF] text-[#737373] rounded-[8px] py-[8px] px-[12px] border border-[#E5E5E5] ">
          <p>See All</p>
        </div>
      </div>

      <div className="bg-[#F9FAFB] p-4 rounded-[12px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[14px] font-medium text-[#171717]">Company Growth</h3>
          <div className="flex space-x-2 bg-white p-1 rounded-[8px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1 text-[12px] rounded-[6px] ${
                  selectedTab === tab
                    ? 'bg-[#171717] text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            {/* This is where we define the gradient */}
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5A65AB" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#5A65AB" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            {/* Line with gradient fill under it */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#5A65AB"
              fill="url(#colorValue)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RecentShipment;
