import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/auth';

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si hay sesión al cargar
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await authService.getCurrentSession();
        if (session) {
          const currentUser = await authService.getCurrentUser();
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error al verificar la sesión:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  // Función para iniciar sesión
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const { user, session } = await authService.login(email, password);
      
      // Guardar sesión mock en localStorage
      localStorage.setItem('crm-mock-session', JSON.stringify(session));
      
      setUser(user);
      setIsAuthenticated(true);
      return user;
    } finally {
      setIsLoading(false);
    }
  };

  // Función para registrarse
  const register = async (email, password, userData) => {
    try {
      setIsLoading(true);
      const { user, session } = await authService.register(email, password, userData);
      
      // Guardar sesión mock en localStorage
      localStorage.setItem('crm-mock-session', JSON.stringify(session));
      
      setUser(user);
      setIsAuthenticated(true);
      return user;
    } finally {
      setIsLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    try {
      setIsLoading(true);
      await authService.logout();
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Valores a exponer en el contexto
  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext; 