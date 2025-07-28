import React from 'react';
import Layout from '../components/layout/Layout';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Bienvenido a tu CRM Dashboard</p>
        </div>
        
        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Clientes</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-green-600">+0% este mes</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">💰</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Ventas del Mes</h3>
                <p className="text-2xl font-bold text-gray-900">$0</p>
                <p className="text-sm text-green-600">+0% vs mes anterior</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📦</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Productos Activos</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">0 categorías</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">📋</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Órdenes Pendientes</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">0 urgentes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos y actividad reciente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ventas recientes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Ventas Recientes</h3>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <span className="text-4xl">📊</span>
                <p className="mt-2 text-gray-500">No hay ventas registradas</p>
                <p className="text-sm text-gray-400">Las ventas aparecerán aquí cuando se registren</p>
              </div>
            </div>
          </div>

          {/* Actividad reciente */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Actividad Reciente</h3>
            </div>
            <div className="p-6">
              <div className="text-center py-8">
                <span className="text-4xl">🕐</span>
                <p className="mt-2 text-gray-500">No hay actividad reciente</p>
                <p className="text-sm text-gray-400">La actividad del sistema aparecerá aquí</p>
              </div>
            </div>
          </div>
        </div>

        {/* TODO: Integración con Supabase */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">🚧 Funcionalidades Pendientes</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Conectar con Supabase para datos reales</p>
            <p>• Implementar gráficos de ventas interactivos</p>
            <p>• Agregar widgets configurables</p>
            <p>• Notificaciones en tiempo real</p>
            <p>• Métricas avanzadas y KPIs</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage; 