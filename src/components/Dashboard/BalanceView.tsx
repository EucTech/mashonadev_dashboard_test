import React from 'react'


const BalanceView = () => {
  return (
    <div className='w-[95%] lg:w-[350px] xl:w-[448px] h-[163px] rounded-[8px] bg-[#5A65AB] px-6 flex flex-col items-start gap-2 justify-center  '>
        <p className='text-[12px] text-[#fff]/70 font-[300]'>Your Balance</p>
        <h3 className={`text-[#fff] text-[24px] font-[900]`}>N3,000,000.28</h3>
        <button className='mt-3 text-[#5A65AB] bg-[#FFFFFF] text-[12px] font-[500] py-[8px] px-[16px] rounded-[8px]'>Fund Wallet</button>
    </div>
  )
}

export default BalanceView