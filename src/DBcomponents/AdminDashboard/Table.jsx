import { useState, useMemo } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { CgUnblock } from "react-icons/cg";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { jwtDecode } from 'jwt-decode';


export default function Table() {

    
    const axiosSecureInstance = useAxiosSecure();
    const token = localStorage.getItem('token')

    const decode = jwtDecode(token);

    const userEmail = decode?.userEmail

    // Memoize axios instance to prevent unnecessary re-renders
    const axios = useMemo(() => axiosSecureInstance, [axiosSecureInstance]);

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all'); // State for filtering by status

    const { data: subscriptions = [], refetch } = useQuery({
        queryKey: ['subscriptions'],
        queryFn: async () => {
            const response = await axios.get('/subscriptions');
            return response.data;
        },
        // refetchInterval: 10000,
        onError: (error) => {
            console.error('Error fetching subscriptions:', error);
        },
        onSuccess: () => {
            console.log('Subscriptions fetched successfully');
        },
        // refetchOnWindowFocus: false,
        // staleTime: 5000,
    });

    const { data: users = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const response = await axios.get('/users');
            return response.data;
        },
        // refetchInterval: 10000, // refetch every 10 seconds
    });

    const getUserNameByEmail = (email) => {
        const user = users.find(user => user.email === email);
        return user?.username || 'Unknown';
    };

    const handleStatusChange = async (id, status) => {
        try {
            await axios.patch(`/users/${id}`, { status });
            toast.success('Subscription updated successfully');
            refetch();
        } catch (error) {
            console.error('Error updating subscription status:', error.message);
            toast.error('Failed to update subscription status');
        }
    };

    const handleDeleteSubscription = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/users/${id}`);
                    Swal.fire("Deleted!", "The subscription has been deleted.", "success");
                    refetch();
                } catch (error) {
                    console.error('Error deleting subscription:', error.response ? error.response.data : error.message);
                    Swal.fire("Error!", "There was an error deleting the subscription.", "error");
                }
            }
        });
    };

    const filteredSubscriptions = subscriptions.filter(sub =>
        (sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sub.subscriptionPlan?.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (statusFilter === 'all' || sub.status === statusFilter)
    );

    return (
        <div className="col-span-12 mt-5">
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h1 className="text-2xl font-extrabold text-gray-800 mb-4 border-b-4 border-green-400 pb-2">User Subscriptions</h1>
                    <div className="flex justify-end items-center mb-6 space-x-4">
                        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="bg-gray-100 outline-none p-2 w-full"
                                type="text"
                                placeholder="Search by email or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-2 py-2 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer hover:bg-gray-100 transition">
                            <select
                                className="bg-gray-100 p-2 rounded-lg"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="active">Active</option>
                                <option value="blocked">Blocked</option>
                            </select>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="py-2 align-middle inline-block min-w-full">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredSubscriptions.map((data, idx) => (
                                            <tr key={idx}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data?.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{getUserNameByEmail(data?.email)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className={`flex items-center ${data?.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>{data?.status}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="flex items-center text-green-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>{data?.subscriptionPlan?.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="flex space-x-4">
                                                        <Link to={`/dashboard/edit/${data?._id}`} className="text-blue-500 hover:text-blue-700 flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12l-3-3m0 0l-3 3m3-3v12" />
                                                            </svg>
                                                            Edit
                                                        </Link>
                                                        <>
                                                           {data?.status === 'active' ?
                                                                <button
                                                                    onClick={() => handleStatusChange(data?._id, 'blocked')}
                                                                    className="text-red-500 hover:text-red-700 flex items-center"
                                                                >
                                                                    <CgUnblock className="mr-1" size={16} />
                                                                    Block
                                                                </button> : <button
                                                                    onClick={() => handleStatusChange(data?._id, 'active')}
                                                                    className="text-green-500 hover:text-green-700 flex items-center"
                                                                >
                                                                    <CgUnblock className="mr-1" size={16} />
                                                                    active
                                                                </button>
                                                            }
                                                        </>
                                                        <button
                                                            onClick={() => handleDeleteSubscription(data?._id, data?.email)}
                                                            className={`flex items-center ${data?.email === userEmail ? 'text-gray-400 cursor-not-allowed' : 'text-red-500 hover:text-red-700'}`}
                                                            disabled={data?.email === userEmail}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
