import React from 'react';
import serviceImg from '../../../assets/img/services/service-pic.jpg';
import icon1 from '../../../assets/img/services/service-icon-1.png';
import icon2 from '../../../assets/img/services/service-icon-2.png';
import icon3 from '../../../assets/img/services/service-icon-3.png';
import icon4 from '../../../assets/img/services/service-icon-4.png';

export default function Services() {
    return (
        <main>
            <section className='max-h-[600px] grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-4 p-4 md:p-0'>
                <div className='col-span-1 md:col-span-2'>
                    <img src={serviceImg} alt="Service" className="w-full h-full object-cover rounded-lg md:rounded-none" />
                </div>
                <div className='col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-0 gap-4'>
                    <div className='bg-[#1e1e1e] text-white font-medium p-4 sm:p-8 md:p-4 rounded-lg md:rounded-none'>
                        <img src={icon1} alt="Icon" className="w-10 h-10 mb-4" />
                        <h1 className="text-xl font-bold">Strategies</h1>
                        <p className="mt-2">Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                    </div>
                    <div className='bg-[#141414] text-white font-medium p-4 sm:p-8 md:p-4 rounded-lg md:rounded-none'>
                        <img src={icon2} alt="Icon" className="w-10 h-10 mb-4" />
                        <h1 className="text-xl font-bold">Services 2</h1>
                        <p className="mt-2">Another service description here.</p>
                    </div>
                    <div className='bg-[#1e1e1e] text-white font-medium p-4 sm:p-8 md:p-4 rounded-lg md:rounded-none'>
                        <img src={icon3} alt="Icon" className="w-10 h-10 mb-4" />
                        <h1 className="text-xl font-bold">Services 3</h1>
                        <p className="mt-2">Another service description here.</p>
                    </div>
                    <div className='bg-[#141414] text-white font-medium p-4 sm:p-8 md:p-4 rounded-lg md:rounded-none'>
                        <img src={icon4} alt="Icon" className="w-10 h-10 mb-4" />
                        <h1 className="text-xl font-bold">Services 4</h1>
                        <p className="mt-2">Another service description here.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
