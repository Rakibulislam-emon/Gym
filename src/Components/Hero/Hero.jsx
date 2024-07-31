import { Link } from 'react-router-dom';
import hero from '../../assets/img/hero-bg.jpg';
import Buttons from '../../Shared/Buttons/Buttons';

export default function Hero() {
    return (
        <div
            className="hero min-h-screen relative"
            style={{
                backgroundImage: `url(${hero})`,
            }}>
            <div className="hero-overlay bg-opacity-30 absolute inset-0"></div>
            <div className="hero-content text-neutral-content absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 max-w-lg w-full p-6 bg-opacity-80 rounded-md shadow-lg text-left">
                    <span className=" text-[#f15d44] block ">FITNESS ELEMENTS</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl   whitespace-nowrap  font-bold ">BMI CALCULATOR</h1>
                    <p>Gutim comes packed with the user-friendly BMI Calculator
                    shortcode which lets</p>
                    <Link to={'/login'}><Buttons text={'Read More'} /></Link>
                </div>
            </div>
        </div>
    );
}
