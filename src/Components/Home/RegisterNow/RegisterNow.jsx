import { Link, useNavigate } from 'react-router-dom';
import register from '../../../assets/img/register-pic.jpg';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth';
import useAxios from '../../../Hooks/useAxios';

export default function RegisterNow() {
    const navigate = useNavigate()
    const { createUser } = useAuth()
    const axiosCommon = useAxios()
    // handle register 
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.firstName.value + ' ' + form.lastName.value; // Combine first and last name for username
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.mobile.value;
        try {
            const userInfo = {
                username,
                email,
                password,
                phone,
                role:'user'
            }
            console.log(userInfo);
            await createUser(email, password)
            if (!userInfo) {
                toast.error('userInfo required')
            } else {
                const res = await axiosCommon.post('/users', userInfo)
                if (res.status === 200) toast.success('Registered successfully! Please log in.')
                navigate('/login')
            }

        } catch (error) {
            console.log('error:', error)
            toast.error('error', error.message)
        }
    }

    return (
        <div className="h-full py-20">
            <div className="mx-auto">
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4'>REGISTER NOW</h1>
                    <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
                </div>
                <div className="flex justify-center px-6 py-12 flex-col-reverse lg:flex-row">
                    <div className="w-full lg:w-3/12 lg:bg-cover bg-gray-400 dark:bg-gray-800 rounded-lg mb-6 lg:mb-0 order-2 lg:order-1"
                        style={{
                            backgroundImage: `url(${register})`,
                            minHeight: '300px' // Adjust the minimum height as needed
                        }}></div>
                    <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-lg order-1 lg:order-2">
                        <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                        <form
                            onSubmit={handleRegister}
                            className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="md:ml-2 w-full">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-whit shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-whit shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-whit shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    placeholder="Mobile Number"
                                />
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                    href="#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <Link to={'/login'} className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                >
                                    Already have an account? Login!
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
