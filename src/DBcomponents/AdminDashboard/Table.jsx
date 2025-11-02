import { useState, useMemo, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaSearch, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import StatusBadge from '../shared/StatusBadge';
import ActionButton from '../shared/ActionButton';
import LoadingSpinner from '../shared/LoadingSpinner';
import EmptyState from '../shared/EmptyState';

export default function Table() {
  const axiosSecureInstance = useAxiosSecure();
  const axios = useMemo(() => axiosSecureInstance, [axiosSecureInstance]);

  const token = localStorage.getItem('token');
  const decode = jwtDecode(token);
  const userEmail = decode?.userEmail;

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState('email');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch subscriptions
  const { data: subscriptions = [], refetch, isLoading } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const response = await axios.get('/subscriptions');
      return response.data;
    },
  });

  // Fetch users
  const { data: users = [] } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await axios.get('/users');
      return response.data;
    },
  });

  // Get username by email
  const getUserNameByEmail = useMemo(() => (email) => {
    const user = users.find(u => u.email === email);
    return user?.username || 'Unknown';
  }, [users]);

  // Handle status change
  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`/users/${id}`, { status });
      toast.success(`User ${status === 'active' ? 'activated' : 'blocked'} successfully`);
      refetch();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  // Handle delete
  const handleDeleteSubscription = async (id, email) => {
    if (email === userEmail) {
      toast.error("You cannot delete your own account!");
      return;
    }

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
          console.error('Error deleting:', error);
          Swal.fire("Error!", "Failed to delete subscription.", "error");
        }
      }
    });
  };

  // Sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = subscriptions.filter(sub =>
      (sub.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        sub.subscriptionPlan?.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        getUserNameByEmail(sub.email).toLowerCase().includes(debouncedSearch.toLowerCase())) &&
      (statusFilter === 'all' || sub.status === statusFilter)
    );

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortField) {
        case 'email':
          aValue = a.email;
          bValue = b.email;
          break;
        case 'name':
          aValue = getUserNameByEmail(a.email);
          bValue = getUserNameByEmail(b.email);
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'plan':
          aValue = a.subscriptionPlan?.name || '';
          bValue = b.subscriptionPlan?.name || '';
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [subscriptions, debouncedSearch, getUserNameByEmail, statusFilter, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
/* eslint-disable react/prop-types */

  // Sort icon
  const SortIcon = ({ field }) => {
    if (sortField !== field) return <FaSort className="text-gray-500" />;
    return sortOrder === 'asc' ? <FaSortUp className="text-indigo-400" /> : <FaSortDown className="text-indigo-400" />;
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">User Management</h2>
        <p className="text-gray-400 text-sm">Manage subscriptions and user accounts</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, or plan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>

        {/* Items per page */}
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
        </select>
      </div>

      {/* Results count */}
      <div className="mb-4 text-gray-400 text-sm">
        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} results
      </div>

      {/* Table */}
      {paginatedData.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th 
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                    onClick={() => handleSort('email')}
                  >
                    <div className="flex items-center gap-2">
                      Email
                      <SortIcon field="email" />
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-2">
                      Name
                      <SortIcon field="name" />
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                    onClick={() => handleSort('status')}
                  >
                    <div className="flex items-center gap-2">
                      Status
                      <SortIcon field="status" />
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                    onClick={() => handleSort('plan')}
                  >
                    <div className="flex items-center gap-2">
                      Plan
                      <SortIcon field="plan" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {paginatedData.map((data) => (
                  <tr 
                    key={data._id} 
                    className="hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm text-gray-300">{data.email}</td>
                    <td className="px-4 py-4 text-sm text-white font-medium">
                      {getUserNameByEmail(data.email)}
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge status={data.status} />
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {data.subscriptionPlan?.name}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Link to={`/dashboard/edit/${data._id}`}>
                          <ActionButton
                            icon={FaEdit}
                            variant="edit"
                            tooltip="Edit"
                          />
                        </Link>
                        <ActionButton
                          icon={data.status === 'active' ? FaTrash : FaEdit}
                          variant={data.status === 'active' ? 'block' : 'edit'}
                          tooltip={data.status === 'active' ? 'Block' : 'Activate'}
                          onClick={() => handleStatusChange(data._id, data.status === 'active' ? 'blocked' : 'active')}
                        />
                        <ActionButton
                          icon={FaTrash}
                          variant="delete"
                          tooltip="Delete"
                          onClick={() => handleDeleteSubscription(data._id, data.email)}
                          disabled={data.email === userEmail}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                        currentPage === pageNum
                          ? 'bg-indigo-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <EmptyState message="No users found" />
      )}
    </div>
  );
}