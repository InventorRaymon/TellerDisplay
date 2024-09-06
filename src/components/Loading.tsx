import React from 'react';
import Image from 'next/image';
import qmsLogo from '../../public/assets/img/logo-small.svg';
import { Spinner } from '@nextui-org/react';

const Loading: React.FC = () => {
  return (
    <div className='flex flex-col h-full bg-white'>
        <div className="bg-cover bg-[url('/assets/img/loadingImg.png')] h-[20vh] w-full bg-center">
            <div className='flex justify-center relative top-[60px]'>
                <Image src={qmsLogo} alt='Queue Master Logo' width={355}/>
            </div>
        </div>
        <div className="flex justify-center items-center w-full h-[70vh] text-[18px]">
            <div className='flex flex-col'>
            <Spinner color='default'/>
            <span className='text-[#8d8c8c] '>
                Setting up your teller display.
            </span>
            </div>
        </div>
    </div>
  )
}

export default Loading