import { useLocation } from 'react-router-dom';
import hero from '../../assets/img/hero-bg.jpg';
import { FaHome } from "react-icons/fa";

export default function Hero() {
    const location = useLocation()
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    // convert to uppercase
    const pathSegmentsUppercase = pathSegments.map(segment => segment.toUpperCase());
    console.log('pathSegmentsUppercase:', pathSegmentsUppercase)
    console.log('pathSegments:', pathSegments)
  
    return (
        <div
            className="hero min-h-96 relative"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
            <div className="hero-overlay bg-black bg-opacity-30 absolute inset-0"></div>
            <div className="hero-content text-neutral-content absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 max-w-lg w-full p-6  bg-opacity-80 rounded-md shadow-lg text-center">
                    <h1 className="text-white block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{pathSegmentsUppercase}</h1>
                    <div className="flex items-center justify-center space-x-2 text-white text-xl">
                        <FaHome />
                        <span>HOME  &gt; {pathSegments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
