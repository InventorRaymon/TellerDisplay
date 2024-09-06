'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import qmsLogo from '../../../../public/assets/img/logo-small.svg';
import SelectTerminalDropdown from '../../../components/SelectTerminalDropdown';
import { useRouter } from "next/navigation";
import CustomSkeletonLoad from '../../../components/CustomSkeletonLoad';

const Terminal = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTerminal, setSelectedTerminal] = useState(null);
    const [selectedPort, setSelectedPort] = useState(null);

    const options = [
        {
            key: "makati",
            label: "Makati",
        },
        {
            key: "taguig",
            label: "Taguig",
        },
        {
            key: "mandaluyong",
            label: "Mandaluyong",
        },
    ];
    const mockTerminal = [

        {
            port: 'Makati',
            terminal: [
                { id: 1, label: 'Window 1' },
                { id: 2, label: 'Window 2' },
                { id: 3, label: 'Window 3' }
            ]
        }
        ,
        {
            port: 'Taguig',
            terminal: [
                { id: 1, label: 'Window 1' },
                { id: 2, label: 'Window 2' },
                { id: 3, label: 'Window 3' },
                { id: 4, label: 'Window 4' }
            ]
        },
        {
            port: 'Mandaluyong',
            terminal: [
                { id: 1, label: 'Window 1' },
                { id: 2, label: 'Window 2' },
                { id: 3, label: 'Window 3' },
                { id: 4, label: 'Window 4' },
                { id: 5, label: 'Window 5' },
                { id: 6, label: 'Window 6' },
                { id: 7, label: 'Window 7' },
                { id: 8, label: 'Window 8' },
                { id: 9, label: 'Window 9' },
                { id: 10, label: 'Window 10' }
            ]
        }

    ]

    const handleSelect = (option) => {
        setSelectedPort(option)
    }

    const handleSetDisplay = () => {
        setIsLoading(true);
        setTimeout(() => {
            router.push("/teller-display");
        }, 3000);
    }

    return (
        <>
            {
                isLoading ? <CustomSkeletonLoad /> :
                    <div className='flex h-full bg-white'>
                        <div className='left-section w-[32%]'>
                            <div className="absolute z-0 bg-cover bg-[url('/assets/img/teller.png')] w-[32%] h-[100vh]">
                                <div className='z-1 relative top-[68px] flex justify-center'>
                                    <div className='flex flex-col justify-center max-lg:hidden'>
                                        <Image src={qmsLogo} alt='Queue Master Logo' width={300} />
                                        <h3 className='text-white mt-[47px] text-[38px]'>Choose Port</h3>
                                        <p className='text-white text-[18px] font-medium'>Manage your queues effectively.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-section w-[68%] p-[50px]">
                            <h3 className='text-[37px] font-black mt-[27px]'>Port List</h3>
                            <p className='text-[18px] font-semibold mt-[5px] mb-[25px]'>Choose desired port to view and connect.</p>
                            <SelectTerminalDropdown options={options} onSelect={handleSelect} />
                            {
                                selectedPort && (
                                    <>
                                        <h1 className='text-[37px] font-black mt-[66px]'>Select Terminal</h1>
                                        <p className='text-[18px] font-semibold mt-[5px]'>Choose your designated terminal.</p>
                                    </>
                                )
                            }
                            {
                                mockTerminal && (
                                    <ul className='mt-[20px] flex flex-wrap justify-start gap-[20px]'>
                                        {
                                            mockTerminal.map((terminalData) => {
                                                if (selectedPort === terminalData.port) {
                                                    return terminalData.terminal.map((terminal) => {
                                                        return (
                                                            <li key={terminal.id} onClick={() => setSelectedTerminal(terminal.id)} className={`text-[18px] text-center ${selectedTerminal === terminal.id ? 'bg-[#FED732] text-[#454444]' : 'bg-[#ebeaea] text-[#454444]'} p-3 w-[125px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-125`}>
                                                                {terminal.label}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            })
                                        }
                                    </ul>
                                )
                            }
                            <button onClick={handleSetDisplay} className='bg-[#FED732] rounded-full pt-3 pb-3 pr-6 pl-6 text-[18px] cursor-pointer absolute bottom-[2rem] right-[2rem] transform transition-transform duration-300 hover:scale-125'>
                                Proceed
                            </button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Terminal