import PropTypes from 'prop-types';
import { useContext } from 'react';


import {  Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../utilitis/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <div className='p-10 flex justify-center'><span className="loading loading-dots loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRouter.propTypes = {
    children: PropTypes.object
};
export default PrivateRouter;