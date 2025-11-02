import bg from '../../assets/img/breadcrumb/classes-breadcrumb.jpg';

export default function Footer() {
    return (
        <footer className='bg-black text-white px-6 md:px-20 lg:px-72 py-10 lg:py-20'>
            <section className="mb-10 flex flex-col lg:flex-row justify-around space-y-10 lg:space-y-0">
                <div className="text-center lg:text-left">
                    <p className='text-[#ea5819] pb-2 lg:pb-8'>Phone</p>
                    <h1>(123) 118 9999 - (123) 118 9999</h1>
                </div>
                <div className="text-center lg:text-left">
                    <p className='text-[#ea5819] pb-2 lg:pb-8'>Address</p>
                    <h1>72 Kangnam, 45 Opal Point Suite 391</h1>
                </div>
                <div className="text-center lg:text-left">
                    <p className='text-[#ea5819] pb-2 lg:pb-8'>Email</p>
                    <h1>contactcompany@Gutim.com</h1>
                </div>
            </section>
            <section>
                <div
                    className="flex flex-col justify-around items-center text-center text-white p-6 md:p-10"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '200px', // Adjust the height as per your design
                    }}
                >
                    <p className="mb-4 lg:mb-6">
                        <span className='font-semibold text-lg lg:text-3xl'>SUBSCRIBE TO OUR MAILING LIST</span> <br />
                        Sign up to receive the latest information
                    </p>
                    <div className="flex flex-col md:flex-row items-center w-full lg:w-96 space-y-4 md:space-y-0 md:space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 md:py-4 text-sm leading-tight text-gray-700 dark:text-black rounded shadow appearance-none focus:outline-none focus:shadow-outline w-full"
                        />
                        <button
                            className="px-4 py-2 md:px-8 md:py-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center space-x-5 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                        </a>
                        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                        </a>
                    </div>
                    <p className="text-center text-white mt-6 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
                </div>
            </section>
        </footer>
    );
}
