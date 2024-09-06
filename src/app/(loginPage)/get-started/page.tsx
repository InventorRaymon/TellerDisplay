import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import loginLogoBig from '../../../../public/assets/img/logo-big.svg';

function GetStarted() {
  return (
    <div className='image container-fluid vh-100 d-flex justify-content-center align-items-center flex-column'>
        <Image src={loginLogoBig} alt='Queue Master Logo'/>
        <p className='get-started-p'>Efficiently organize queue, streamline transaction</p>
        <Link href="/login" className="btn btn-lg get-started">Get Started</Link>
    </div>
  )
}

export default GetStarted