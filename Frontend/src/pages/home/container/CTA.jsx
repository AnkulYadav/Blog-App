import React from 'react'

function CTA() {
    return (
        <>
            <svg className='w-full h-auto max-h-40 translate-y-[1px]' preserveAspectRatio='none' viewBox="0 0 2160 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Wave" fill-rule="evenodd" clip-rule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#0D2436" />
            </svg>

            <section className='relative bg-dark-hard px-5'>
                <div className='container grid grid-cols-12 mx-auto'>
                    <div className='col-span-12'>
                        <h2 className='text-white font-rotobo font-bold text-xl'>Get Our Stories Delivered From us to your inbox weekly</h2>
                        <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto'>
                            <input className='w-full  text-white px-4 py-3 rounded-lg focus:outline-none placeholder:text-dark-light' type="text" placeholder='Enter your email address' />
                            <button className='w-full bg-primary text-white rounded-lg px-4 py-3 font-bold'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA
