
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";



const UserLoggedIn = () => {
    const userInfo = useSelector((state) => state.auth);
    return (
        userInfo.userInfo ? < Outlet /> : <Navigate to='/mynotes' />
    )
}

export default UserLoggedIn