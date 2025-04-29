"use client";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const CompanyGrowthChart = () => {
  const [selectedTab, setSelectedTab] = useState("Year");
  const tabs = ["Year", "Month", "Week"];

  const data = [
    { name: "1", value: 250 },
    { name: "2", value: 350 },
    { name: "3", value: 300 },
    { name: "4", value: 380 },
    { name: "5", value: 350 },
    { name: "6", value: 450 },
    { name: "7", value: 350 },
    { name: "8", value: 530 },
    { name: "9", value: 380 },
    { name: "10", value: 650 },
    { name: "11", value: 200 },
    { name: "12", value: 1000 },
  ];

  return (
    <div className="w-full flex flex-col mt-10">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[#171717] font-[500] text-[24px]">
          Recent shipment
        </h2>

        <div className="w-fit flex items-center justify-between gap-3 text-[14px] font-[500] bg-[#FFFFFF] text-[#737373] rounded-[8px] py-[6px] px-[12px] border border-[#E5E5E5] ">
          <p>See All</p>
        </div>
      </div>
      <Card
        className={`w-full rounded-xl border bg-white p-4 mt-5 ${manrope.className}`}
      >
        <CardHeader className="flex flex-col gap-8 sm:flex-row items-start sm:items-center justify-between p-2 mb-4">
          <CardTitle className="text-[18px] font-[600] text-[#1D2939]">
            Company Growth
          </CardTitle>

          <ToggleGroup
            type="single"
            value={selectedTab}
            onValueChange={(val) => val && setSelectedTab(val)}
            className="bg-[#F2F4F7] p-1 rounded-[8px]"
          >
            {tabs.map((tab) => (
              <ToggleGroupItem
                key={tab}
                value={tab}
                className={`px-6 py-1 text-[14px] rounded-[8px] ${
                  selectedTab === tab
                    ? "!bg-[#FFFFFF] shadow-sm !text-[#1D2939]"
                    : "text-[#1D2939]"
                }`}
              >
                {tab}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardHeader>

        <CardContent className="p-2">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5A65AB" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#5A65AB" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={{ stroke: "#98A2B3", strokeDasharray: "0" }}
                className="text-[12px] text-[#98A2B3] font-[400]"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
                ticks={[0, 200, 400, 600, 800, 1000]}
                className="text-[12px] text-[#98A2B3] font-[400] "
              />
              <Tooltip
                contentStyle={{ backgroundColor: "white", borderRadius: 8 }}
                cursor={{ stroke: "#E0E7FF", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#5A65AB"
                fill="url(#areaColor)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyGrowthChart;
