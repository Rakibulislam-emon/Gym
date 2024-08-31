import { useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function EditUser() {
    const navigation = useNavigate()
    const axios = useAxiosSecure()
    const data = useLoaderData();
    const [email, setEmail] = useState(data?.email);
    const [planName, setPlanName] = useState(data.subscriptionPlan?.name);
    const [price, setPrice] = useState(data.subscriptionPlan?.price);
    const [features, setFeatures] = useState(data.subscriptionPlan?.features);
    const [status, setStatus] = useState(data.status);

    const handleSave = async (id) => {
        // Logic to update the data in the database

        // console.log(id);
        try {
            const updatedData = {
                email: email,
                subscriptionPlan: {
                    name: planName,
                    price: price,
                    features: features,
                },
                status: status,
            };
            const res = await axios.patch(`/users/${id}`, updatedData)
            console.log('updated data:', res.data.modifiedCount)
            if (res.data.modifiedCount > 0) {
                toast.success('updated successful')
                navigation('/dashboard')
            }
        } catch (error) {
            // console.log('error:', error)
            alert('error:', error)
        }
    };

    return (
        <div className="px-4 py-16">
            <h1 className="text-center font-bold text-5xl">EDIT MEMBERSHIP PLANS</h1>
           


            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                        <label className="text-lg sm:text-xl font-medium text-white mb-2">Email</label>
                        <input
                            type="text"
                            className="mb-4 px-3 py-2 rounded-md bg-gray-700 text-white w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="text-lg sm:text-xl font-medium text-white mb-2">Plan Name</label>
                        <input
                            type="text"
                            className="mb-4 px-3 py-2 rounded-md bg-gray-700 text-white w-full"
                            value={planName}
                            onChange={(e) => setPlanName(e.target.value)}
                        />
                        <label className="text-lg sm:text-xl font-medium text-white mb-2">Price</label>
                        <input
                            type="number"
                            className="mb-4 px-3 py-2 rounded-md bg-gray-700 text-white w-full"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label className="text-lg sm:text-xl font-medium text-white mb-2">Features</label>
                        <textarea
                            className="mb-4 px-3 py-2 rounded-md bg-gray-700 text-white w-full"
                            value={features?.join('\n')}
                            onChange={(e) => setFeatures(e.target.value.split('\n'))}
                        />
                        <label className="text-lg sm:text-xl font-medium text-white mb-2">Status</label>
                        <select
                            className="mb-4 px-3 py-2 rounded-md bg-gray-700 text-white w-full"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="active">Active</option>
                            <option value="blocked">Blocked</option>
                        </select>
                        <button
                            onClick={() => handleSave(data._id)}
                            className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                        >
                            <span className="relative text-sm font-semibold text-black">Save Changes</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
