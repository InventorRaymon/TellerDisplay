import React from 'react';
import { Card, CardBody } from "@nextui-org/card";


interface NowServingProps {
  children?: React.ReactNode; // Defines that `children` can be any valid React node
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; // Optional prop with specific string values
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRight?: string;
  borderLeft?: string;
  padding?: string;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

const NowServing: React.FC<NowServingProps> = ({gap, alignItems, justifyContent,fontWeight, fontSize, padding, color }) => {
  return (
    <Card className='flex m-3 w-[98%] h-[96%] overflow-hidden'>
      <CardBody className='flex flex-row overflow-hidden w-full h-full p-0' style={{ alignItems, justifyContent, gap, padding, color, fontSize, fontWeight }}>
        <div className='w-full'>
          <div className='flex justify-center align-middle items-center gap-[80px] w-full'>
            <h2 className='font-black text-[40px]'>NOW SERVING :</h2>
            <h1 className='font-black text-[#DE0000] text-[75px]'>G1234</h1>
          </div>
          <div className='w-full flex flex-row'>
            <div className='w-1/2 flex flex-col justify-center items-center font-black border-r-2 border-slate-300 border-solid'>
              <div className='w-full flex justify-center items-center bg-[#C5E9B3] h-[130px]'>
                <div className='text-[30px]'>WALK-INS</div>
              </div>
              <div className='text-[42px]'>
                <div>G1235</div>
                <div>G1236</div>
                <div>G1237</div>
                <div>G1238</div>
                <div>G1239</div>
              </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center font-black'>
              <div className='w-full flex justify-center items-center bg-[#CDE4ED] h-[130px]'>
                <div className='text-[30px]'>APPOINTMENT</div>
              </div>
              <div className='text-[42px]'>
                <div>G1235</div>
                <div>G1236</div>
                <div>G1237</div>
                <div>G1238</div>
                <div>G1239</div>
              </div>
            </div>
            
          </div>
        </div>

      </CardBody>
    </Card>
  );
}

export default NowServing;