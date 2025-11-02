import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    console.log('token:', token)

    // Simulating loading state, you can replace this with actual loading logic
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) return <span className="loading loading-spinner loading-lg"></span>;
    if (token) return children;


    return <Navigate to='/login' state={{ from: location }} replace={true} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivateRoute;
