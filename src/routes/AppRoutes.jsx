import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import ClientesPage from '../pages/ClientesPage';
import VentasPage from '../pages/VentasPage';
import ProductosPage from '../pages/ProductosPage';
import ReportesPage from '../pages/ReportesPage';
import ConfiguracionPage from '../pages/ConfiguracionPage';

// Componente para rutas protegidas
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-3 text-blue-600">Cargando...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-3 text-blue-600">Cargando...</p>
        </div>
      </div>
    );
  }
  
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route 
        path="/auth" 
        element={
          isAuthenticated 
            ? <Navigate to="/" replace /> 
            : <AuthPage />
        } 
      />
      
      {/* Rutas protegidas */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/clientes" 
        element={
          <ProtectedRoute>
            <ClientesPage />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/ventas" 
        element={
          <ProtectedRoute>
            <VentasPage />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/productos" 
        element={
          <ProtectedRoute>
            <ProductosPage />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/reportes" 
        element={
          <ProtectedRoute>
            <ReportesPage />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/configuracion" 
        element={
          <ProtectedRoute>
            <ConfiguracionPage />
          </ProtectedRoute>
        }
      />
      
      {/* Ruta por defecto si no encuentra ninguna */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 