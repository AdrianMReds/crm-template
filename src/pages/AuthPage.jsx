import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthPage = () => {
  // Estado para controlar si mostrar el formulario de login o registro
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  
  // Estados para los formularios
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    name: '', 
    email: '', 
    password: '' 
  });
  
  // Estado para manejar errores
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const { login, register, isLoading } = useAuth();
  
  // Manejar cambios en el formulario de login
  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData(prev => ({ ...prev, [id]: value }));
  };
  
  // Manejar cambios en el formulario de registro
  const handleRegisterChange = (e) => {
    const { id, value } = e.target;
    setRegisterData(prev => ({ ...prev, [id]: value }));
  };

  // Manejar envío del formulario de login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const { email, password } = loginData;
      
      // Validaciones básicas
      if (!email || !password) {
        setError('Por favor, completa todos los campos');
        return;
      }
      
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(error.message || 'Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  // Manejar envío del formulario de registro
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const { name, email, password } = registerData;
      
      // Validaciones básicas
      if (!name || !email || !password) {
        setError('Por favor, completa todos los campos');
        return;
      }
      
      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres');
        return;
      }
      
      await register(email, password, { name });
      navigate('/');
    } catch (error) {
      console.error('Error al registrarse:', error);
      setError(error.message || 'Error al crear la cuenta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">CRM Dashboard</h1>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            {showRegisterForm ? 'Crear una cuenta' : 'Iniciar sesión'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {showRegisterForm 
              ? '¿Ya tienes una cuenta? ' 
              : '¿No tienes una cuenta? '}
            <button
              type="button"
              onClick={() => {
                setShowRegisterForm(!showRegisterForm);
                setError(null);
              }}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {showRegisterForm ? 'Inicia sesión aquí' : 'Regístrate aquí'}
            </button>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Aviso de desarrollo */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Modo de desarrollo:</strong> Puedes usar cualquier email y contraseña para acceder.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {showRegisterForm ? (
            // Formulario de registro
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
                </button>
              </div>
            </form>
          ) : (
            // Formulario de login
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu contraseña"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 