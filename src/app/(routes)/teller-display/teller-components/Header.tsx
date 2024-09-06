import { Button, Image } from '@nextui-org/react'
import React from 'react'

interface headerProps {
    headerTitle?: string;
    dateYear?: string;
    dateHour?: string;
    imageWidth?: string;
    style?: React.CSSProperties;
}

const Header: React.FC<headerProps> = ({ headerTitle = 'Government Service Insurance System', dateYear = 'AUGUST 5, 2024', dateHour = '11:32 AM', imageWidth = 30, style }) => {
    return (
        <div className='flex justify-between m-3 w-[99%] h-[92%] overflow-hidden text-white text-[2.25rem]' style={style}>
            <Image src="/assets/img/logo-teller.png" alt='Teller Logo' className='w-full h-full flex-shrink-0' />
            <div className='w-full h-full flex flex-row items-center p-5 rounded-xl ml-3' style={{
                backgroundImage: `linear-gradient(180deg, #1575AF 28%, #67AA45)`
            }}>
                <div className='flex flex-row justify-between w-full items-center'>
                    <div className='italic font-normal flex-none'>
                        {headerTitle}
                    </div>
                    <div className='flex flex-row items-center gap-16'>
                        <div className='flex flex-row gap-24'>
                            <div className='flex-none'>
                                {dateYear}
                            </div>
                            <div className='flex-none'>
                                {dateHour}
                            </div>
                        </div>
                        <Button className='rounded-full h-[61px] min-w-16 bg-white'>
                            <Image src='/assets/img/vector.png' width={imageWidth} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;