import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ReportesPage = () => {
  const [filtros, setFiltros] = useState({
    fechaInicio: '',
    fechaFin: '',
    tipoReporte: 'ventas'
  });
  const [isGenerating, setIsGenerating] = useState(false);

  // TODO: Implementar funciones de Supabase para reportes
  /*
  Funciones a implementar cuando se configure Supabase:
  
  1. Reporte de ventas:
  const generateVentasReport = async (fechaInicio, fechaFin) => {
    try {
      const { data, error } = await supabase
        .from('ventas')
        .select(`
          *,
          clientes(nombre, email),
          productos(nombre, precio, categoria)
        `)
        .gte('created_at', fechaInicio)
        .lte('created_at', fechaFin);
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al generar reporte de ventas:', error);
    }
  };

  2. Reporte de clientes:
  const generateClientesReport = async () => {
    try {
      const { data, error } = await supabase
        .from('clientes')
        .select(`
          *,
          ventas(total, created_at)
        `);
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al generar reporte de clientes:', error);
    }
  };

  3. Reporte de productos:
  const generateProductosReport = async () => {
    try {
      const { data, error } = await supabase
        .from('productos')
        .select('*');
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al generar reporte de productos:', error);
    }
  };
  */

  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simular generación de reporte
    setTimeout(() => {
      setIsGenerating(false);
      alert('Función no implementada aún. Conectar con Supabase para generar reportes reales.');
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reportes y Analíticas</h1>
          <p className="text-gray-600 mt-1">Genera reportes detallados de tu negocio</p>
        </div>

        {/* Configuración de reportes */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Reporte</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Reporte
              </label>
              <select 
                value={filtros.tipoReporte}
                onChange={(e) => setFiltros(prev => ({ ...prev, tipoReporte: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="ventas">Reporte de Ventas</option>
                <option value="clientes">Reporte de Clientes</option>
                <option value="productos">Reporte de Productos</option>
                <option value="inventario">Reporte de Inventario</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Inicio
              </label>
              <input
                type="date"
                value={filtros.fechaInicio}
                onChange={(e) => setFiltros(prev => ({ ...prev, fechaInicio: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Fin
              </label>
              <input
                type="date"
                value={filtros.fechaFin}
                onChange={(e) => setFiltros(prev => ({ ...prev, fechaFin: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isGenerating ? 'Generando...' : 'Generar Reporte'}
              </button>
            </div>
          </div>
        </div>

        {/* Resumen de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">📈</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Ventas del Período</h3>
                <p className="text-2xl font-bold text-gray-900">$0</p>
                <p className="text-sm text-gray-500">0 transacciones</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Clientes Activos</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">0 nuevos este mes</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Producto Top</h3>
                <p className="text-lg font-bold text-gray-900">N/A</p>
                <p className="text-sm text-gray-500">0 unidades vendidas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vista previa de reportes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Vista Previa del Reporte</h3>
            <p className="text-sm text-gray-500 mt-1">
              {filtros.tipoReporte === 'ventas' && 'Reporte detallado de ventas por período'}
              {filtros.tipoReporte === 'clientes' && 'Análisis de base de datos de clientes'}
              {filtros.tipoReporte === 'productos' && 'Reporte de inventario y productos'}
              {filtros.tipoReporte === 'inventario' && 'Estado actual del inventario'}
            </p>
          </div>
          
          <div className="p-8 text-center">
            <span className="text-4xl">📊</span>
            <p className="mt-2 text-gray-500">No hay datos para mostrar</p>
            <p className="text-sm text-gray-400">Los reportes aparecerán aquí cuando conectes con Supabase</p>
          </div>
        </div>

        {/* Reportes predefinidos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Reportes Predefinidos</h3>
            <p className="text-sm text-gray-500 mt-1">Reportes rápidos para análisis común</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💰</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Ventas del Mes</h4>
                    <p className="text-sm text-gray-500">Resumen mensual de ventas</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Top Clientes</h4>
                    <p className="text-sm text-gray-500">Clientes con más compras</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📦</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Stock Bajo</h4>
                    <p className="text-sm text-gray-500">Productos con inventario bajo</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📈</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Tendencias</h4>
                    <p className="text-sm text-gray-500">Análisis de tendencias de venta</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Metas vs Realidad</h4>
                    <p className="text-sm text-gray-500">Comparación con objetivos</p>
                  </div>
                </div>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📋</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Reporte Completo</h4>
                    <p className="text-sm text-gray-500">Análisis integral del negocio</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* TODO: Integración con Supabase */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">🚧 Funcionalidades Pendientes</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Conectar con Supabase para datos reales</p>
            <p>• Implementar consultas complejas para reportes</p>
            <p>• Gráficos interactivos con Chart.js o similar</p>
            <p>• Exportación a PDF y Excel</p>
            <p>• Reportes programados por email</p>
            <p>• Dashboard personalizable con widgets</p>
            <p>• Comparativas por períodos</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportesPage; 