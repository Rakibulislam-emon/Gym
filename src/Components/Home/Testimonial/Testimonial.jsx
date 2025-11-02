
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bg from '../../../assets/img/testimonial/testimonial-bg.png';
import img from '../../../assets/img/testimonial/testimonial-1.jpg';
import logo from '../../../assets/img/testimonial/quote-left.png';

import './Testimonial.css'
// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';

export default function Testimonial() {
    const data = [
        {
            name: 'John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vel sapien semper pharetra. Donec luctus consectetur dolor, sed vestibulum velit consequat nec.',
            img: img,
            logo: logo,
            degisgention: 'member'
        },
        {
            name: 'Jane Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vel sapien semper pharetra. Donec luctus consectetur dolor, sed vestibulum velit consequat nec.',
            img: img,
            logo: logo,
            degisgention: 'member'

        },
        {
            name: 'Michael Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vel sapien semper pharetra. Donec luctus consectetur dolor, sed vestibulum velit consequat nec.',
            img: img,
            logo: logo,
            degisgention: 'member'

        },
        {
            name: 'Sarah Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros vel sapien semper pharetra',
            img: img,
            logo: logo
        }
    ];

    return (
        <>
        <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay ]}
                className="mySwiper"
            >
                {data.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="mx-auto p-4 lg:p-20"
                            style={{
                                backgroundImage: `url(${bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-5xl my-10 lg:my-20">
                                SUCCESS STORIES
                            </h1>
                            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto relative">
                                <p className="text-center text-base sm:text-lg lg:text-xl">{item.content}</p>
                                <div className="my-10 relative flex justify-center items-center">
                                    <img className="z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full" src={item.img} alt="" />
                                    <img className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" src={item.logo} alt="" />
                                </div>
                                <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold mt-4">{item.name}</h2>
                                <span className=" sm:text-2xl    flex justify-center font-semibold mt-4 text-[#f57533] mb-8">{item.degisgention}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

          
        </>
    );
}
