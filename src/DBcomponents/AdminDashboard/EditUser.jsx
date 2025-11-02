import { useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaEnvelope, FaDollarSign, FaList, FaToggleOn, FaTimes, FaSave } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function EditUser() {
  const navigation = useNavigate();
  const axios = useAxiosSecure();
  const data = useLoaderData();

  // State management
  const [email, setEmail] = useState(data?.email || '');
  const [planName, setPlanName] = useState(data.subscriptionPlan?.name || '');
  const [price, setPrice] = useState(data.subscriptionPlan?.price || 0);
  const [features, setFeatures] = useState(data.subscriptionPlan?.features || []);
  const [status, setStatus] = useState(data.status || 'active');
  const [isLoading, setIsLoading] = useState(false);

  // Validation state
  const [errors, setErrors] = useState({});

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!planName.trim()) {
      newErrors.planName = 'Plan name is required';
    }

    if (!price || price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (features.length === 0 || features.every(f => !f.trim())) {
      newErrors.features = 'At least one feature is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle save
  const handleSave = async (id) => {
    if (!validateForm()) {
      toast.error('Please fix the errors before saving');
      return;
    }

    setIsLoading(true);

    try {
      const updatedData = {
        email: email.trim(),
        subscriptionPlan: {
          name: planName.trim(),
          price: parseFloat(price),
          features: features.filter(f => f.trim()),
        },
        status: status,
      };

      const res = await axios.patch(`/users/${id}`, updatedData);

      if (res.data.modifiedCount > 0) {
        toast.success('User updated successfully!');
        setTimeout(() => navigation('/dashboard'), 1000);
      } else {
        toast.error('No changes were made');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigation('/dashboard');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Edit User Subscription
            </h1>
            <p className="text-gray-400">Update user membership details</p>
          </div>
          <button
            onClick={handleCancel}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg">
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-400" />
                  Email Address
                </div>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
                placeholder="user@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Plan Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <div className="flex items-center gap-2">
                  <FaList className="text-indigo-400" />
                  Plan Name
                </div>
              </label>
              <input
                type="text"
                value={planName}
                onChange={(e) => {
                  setPlanName(e.target.value);
                  if (errors.planName) setErrors({ ...errors, planName: '' });
                }}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.planName ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
                placeholder="Basic Plan"
              />
              {errors.planName && (
                <p className="mt-1 text-sm text-red-400">{errors.planName}</p>
              )}
            </div>

            {/* Price Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-indigo-400" />
                  Price (per month)
                </div>
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  if (errors.price) setErrors({ ...errors, price: '' });
                }}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.price ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
                placeholder="50"
                min="0"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-400">{errors.price}</p>
              )}
            </div>

            {/* Features Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <div className="flex items-center gap-2">
                  <FaList className="text-indigo-400" />
                  Features (one per line)
                </div>
              </label>
              <textarea
                value={features?.join('\n')}
                onChange={(e) => {
                  setFeatures(e.target.value.split('\n'));
                  if (errors.features) setErrors({ ...errors, features: '' });
                }}
                rows={6}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.features ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors resize-none`}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              />
              {errors.features && (
                <p className="mt-1 text-sm text-red-400">{errors.features}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Enter each feature on a new line
              </p>
            </div>

            {/* Status Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <div className="flex items-center gap-2">
                  <FaToggleOn className="text-indigo-400" />
                  Account Status
                </div>
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">
                {status === 'active' 
                  ? 'User can access all features' 
                  : 'User account is blocked'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
              <button
                onClick={() => handleSave(data._id)}
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <FaSave />
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handleCancel}
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <FaTimes />
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4">
          <p className="text-indigo-300 text-sm">
            💡 <strong>Tip:</strong> Changes will take effect immediately after saving. 
            The user will see updated plan details on their dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}