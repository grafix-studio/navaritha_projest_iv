import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, BookOpen, Brain, User, LogOut } from 'lucide-react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/courses" className="flex items-center space-x-2">
              <Compass className="h-6 w-6" />
              <span className="font-bold text-xl">CareerCompass</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/courses" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Course Catalog
              </Link>
              <Link to="/ai-recommendations" className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center">
                <Brain className="h-4 w-4 mr-1" />
                <span>AI Guidance</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile" className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{user.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;