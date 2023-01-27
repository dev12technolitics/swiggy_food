import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { GrGallery } from 'react-icons/gr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiUserCircle } from "react-icons/bi";

function MobileFooter() {

    const pathNow = useRouter()
    let currentPath = pathNow?.pathname

    return (
        <div className='mobile_slider w-full bottom-0 bg-[#0074B6] sticky'>
            <div className='grid grid-cols-3 w-full pt-2 pb-1 flex justify-center'>
                <div className='flex justify-center'>
                    <Link href='/'>
                        <div>
                            <div className='w-full justify-center flex'>
                                <AiOutlineHome className='text-xl' color="#fff" />
                            </div>
                            <span className='text-[13px] tracking-[0.5px] text-[#fff]'>Home</span>

                        </div>
                    </Link>
                </div>
                <div className='flex justify-center items-center'>
                    <Link href='/shop'>
                        <div>
                            <span className='w-full justify-center flex'><BsCart color="#fff"  className='text-xl' />
                            </span>
                            <span className='text-[13px] tracking-[0.5px] text-[#fff]'>Cart</span>
                            
                        </div>
                    </Link>
                </div>

                <div className='flex justify-center'>
                    <Link href='/profile'>
                        <div>
                            <div className='w-full justify-center flex'><BiUserCircle color="#fff" className='text-xl'  />
                            </div>
                            <span className='text-[13px] tracking-[0.5px] text-[#fff]'>Profile</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter
