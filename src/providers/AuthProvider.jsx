"use client"
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserDetails = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/aboutme");
      setUserData(response.data.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
