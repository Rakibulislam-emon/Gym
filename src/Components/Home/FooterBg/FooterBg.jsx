import bg1 from '../../../assets/img/footer-banner/footer-banner-1.jpg';
import bg2 from '../../../assets/img/footer-banner/footer-banner-2.jpg';
import Buttons from '../../../Shared/Buttons/Buttons';

export default function FooterBg() {
    return (
        <main className='flex flex-col lg:flex-row'>
            <div
                className='flex-1 bg-cover bg-center h-96 lg:h-[600px] flex items-center justify-center'
                style={{
                    backgroundImage: `url(${bg1})`,
                }}
            >
                <div className='text-center p-6 bg-black bg-opacity-50 rounded-lg'>
                    <p className=' text-[#ff4c4c]'>NEW MEMBER</p>
                    <h1 className='text-white text-lg lg:text-2xl mb-4'>
                        7 days for free <br />
                        Complete the training sessions with us, surely you will be happy
                    </h1>
                    <Buttons text={'Get Started'} />
                </div>
            </div>
            <div
                className='flex-1 bg-cover bg-center h-96 lg:h-[600px] flex items-center justify-center'
                style={{
                    backgroundImage: `url(${bg2})`,
                }}
            >
                <div className='text-center p-6  bg-black bg-opacity-50 rounded-lg'>
                    <p className=' text-[#ff4c4c]'>CONTACT US</p>
                    <h1 className='text-white text-lg lg:text-2xl mb-4'>
                        09 746 204 <br />
                        If you trust us on your journey they dark sex does not disappoint you!
                    </h1>
                    <Buttons text={'Get Started'} />
                </div>
            </div>
        </main>
    );
}
