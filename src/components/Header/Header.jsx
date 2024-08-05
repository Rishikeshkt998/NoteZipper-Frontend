
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../../store/slice/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = localStorage.getItem('userId');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('userId');
    localStorage.removeItem('userValue');
    localStorage.removeItem('userToken');


    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to='/'>
            Note-zipper
          </Link>
        </div>
        <div className="flex-grow">
          <form className="flex justify-center">
            
          </form>
        </div>
        <div>
          {userInfo ? (
            <div className="flex items-center space-x-4">
              <Link to='/mynotes' className="text-white">
                My notes
              </Link>
              <div className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="text-white"
                >
                  {userInfo}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    
                    <div className="border-t border-gray-200"></div>
                    <button 
                      onClick={logoutHandler}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to='/login' className="text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;