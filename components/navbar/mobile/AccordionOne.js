import Link from 'next/link';
import React, { useState } from 'react';


export default function AccordionOne({ superTitle, subTitle, data }) {

    var subCategoeries = subTitle?.split(",")

    const [subShow, setSubShow] = useState(false)
    const [dataShow, setDataShow] = useState(false)
    return (
        <div className=''>
            <div
                onClick={() => setSubShow(!subShow)}
                className='text-[#ffff] text-[15px] font-bold py-3 px-5 flex items-center justify-between'
            >
                {superTitle} <span className={`${subShow ? "rotate-90 transition-all" : null}`}>
                    {/* <BsChevronRight className='text-xs' /> */}
                </span>
            </div>

            {
                subShow ?
                    (<div>
                        <Link href='/'>
                            <>
                                {
                                    subCategoeries?.map((item, index) => {
                                        return (
                                            <div key={index} className='text-[#ffff] w-11/12 ml-auto text-[15px] py-3 px-5 flex items-center justify-between'>
                                                {item}
                                            </div>
                                        )
                                    })
                                }
                            </>
                        </Link>
                    </div>)
                    : null
            }
        </div>
    )
}


