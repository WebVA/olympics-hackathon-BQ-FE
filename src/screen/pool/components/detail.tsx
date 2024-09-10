import React from 'react';

import { StakeType } from '@/screen/stake/constants';

type DetailProps = {
  pool: StakeType | undefined;
};

export const Detail = ({ pool }: DetailProps): JSX.Element => {
  return (
    <div className='flex flex-1 flex-col gap-4 rounded-sm bg-[#1E1E1E] p-[15px]'>
      <div className='flex items-center gap-[22px]'>
        <div className='w-fit min-w-[200px] text-[30px] font-bold'>
          {`${pool?.rating}`}
        </div>
        <div className='h-[1px] flex-1 bg-white/50'></div>
      </div>
      <div className='relative flex flex-col gap-4 rounded border border-white/10 bg-[#373737] px-12 py-[34px]'>
        <div className='text-[20px] font-bold'>Pool Details:</div>
        <div className='flex flex-col gap-6 text-base'>
          <div className='flex items-center justify-between'>
            <div>APY</div>
            <div>{pool?.apy}</div>
          </div>
          <div className='flex items-center justify-between'>
            <div>Total value Stacked</div>
            <div>{pool?.tvl} BTCP</div>
          </div>
          <div className='flex items-center justify-between'>
            <div>Payout Mechanism</div>
            <div>Automatic</div>
          </div>
          <div className='flex items-center justify-between'>
            <div>Payout Currency</div>
            {/* <div>{pool?.currency}</div> */}
            <div>BTCP</div>
          </div>
        </div>
      </div>
    </div>
  );
};
