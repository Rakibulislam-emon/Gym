
import Slider from "react-slick";
import classes1 from '../../../assets/img/classes/classes-1.jpg';
import classes2 from '../../../assets/img/classes/classes-2.jpg';
import classes3 from '../../../assets/img/classes/classes-3.jpg';
import classes4 from '../../../assets/img/classes/classes-4.jpg';
import classes5 from '../../../assets/img/classes/classes-5.jpg';
import classes6 from '../../../assets/img/classes/classes-6.jpg';
import classes7 from '../../../assets/img/classes/classes-7.jpg';
import classes8 from '../../../assets/img/classes/classes-8.jpg';
import classes9 from '../../../assets/img/classes/classes-9.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestSlides() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            img: classes1,
            title: "Yoga & Pilates",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            img: classes2,
            title: "Boxing & MMA",
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: classes3,
            title: "Dance & Choreography",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            img: classes4,
            title: "Meditation & Mindfulness",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: classes5,
            title: "Meditation & Mindfulness",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: classes6,
            title: "Meditation & Mindfulness",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: classes7,
            title: "Meditation & Mindfulness",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: classes8,
            title: "Meditation & Mindfulness",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: classes9,
            title: "Meditation & Mindfulness",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    return (
        <div className="slider-container mt-96 md:mt-60 lg:mt-20 max-w-full overflow-x-hidden">
            <h2 className="text-3xl font-bold text-center mb-8">UNLIMITED CLASSES</h2>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-center items-center">
                            <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                <img
                                    className="w-full h-auto rounded-lg"
                                    src={item.img}
                                    alt={item.title}
                                />
                                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-lg">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
