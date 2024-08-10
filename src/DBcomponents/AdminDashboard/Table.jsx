import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";

export default function Table() {
    const axios = useAxios()
    const { data: subscriptions = [] } = useQuery({
        queryKey: 'subscriptions',
        queryFn: async () => {
            const response = await axios.get('/subscriptions');
            return response.data;
        },
        refetchInterval: 10000, // refetch every 10 seconds
    })
    console.log(subscriptions);
    return (
        <div className="col-span-12 mt-5">
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h1 className="font-bold text-base">User Data</h1>
                    <div className="mt-4">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto">
                                <div className="py-2 align-middle inline-block min-w-full">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>

                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className="flex cursor-pointer">
                                                            <span className="mr-2">Email</span>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className="flex cursor-pointer">
                                                            <span className="mr-2">Subscription Status</span>
                                                        </div>
                                                    </th>

                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className="flex cursor-pointer">
                                                            <span className="mr-2">Package</span>
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className="flex cursor-pointer">
                                                            <span className="  w-full">Actions</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            {subscriptions.map((data, idx) => (<tbody key={idx} className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    {console.log(data)}

                                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <p>{data?.email}</p>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <div className={`flex ${data?.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-5 h-5 mr-1"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            <p>{data?.status}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <div className="flex text-green-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                className="w-5 h-5 mr-1" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <p>{data?.subscriptionPlan?.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                        <div className="flex space-x-4 justify-center ">
                                                            <Link to={`/dashboard/edit/${data?._id}`}  className="text-blue-500 hover:text-blue-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-5 h-5 mr-1"
                                                                    fill="none" viewBox="0 0 24 24"
                                                                    stroke="currentColor">
                                                                    <path strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                                <p>Edit</p>
                                                            </Link>
                                                            <a href="#" className="text-red-500 hover:text-red-600">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-5 h-5 mr-1 ml-3"
                                                                    fill="none" viewBox="0 0 24 24"
                                                                    stroke="currentColor">
                                                                    <path strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                                <p>Delete</p>
                                                            </a>
                                                            {
                                                                data.status === 'active' ? <button>blocked</button> : <button>active</button>
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>))}
                                            {/* <EditModal/> */}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
