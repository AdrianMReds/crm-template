import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const VentasPage = () => {
  const [ventas, setVentas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtros, setFiltros] = useState({
    fechaInicio: '',
    fechaFin: '',
    estado: '',
    cliente: ''
  });

  // TODO: Implementar funciones de Supabase
  /*
  Funciones a implementar cuando se configure Supabase:
  
  1. Obtener ventas:
  const fetchVentas = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('ventas')
        .select(`
          *,
          clientes(nombre, email),
          productos(nombre, precio)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setVentas(data || []);
    } catch (error) {
      console.error('Error al obtener ventas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  2. Crear venta:
  const createVenta = async (ventaData) => {
    try {
      const { data, error } = await supabase
        .from('ventas')
        .insert([ventaData])
        .select();
      
      if (error) throw error;
      setVentas(prev => [data[0], ...prev]);
    } catch (error) {
      console.error('Error al crear venta:', error);
    }
  };

  3. Actualizar estado de venta:
  const updateVentaStatus = async (id, estado) => {
    try {
      const { data, error } = await supabase
        .from('ventas')
        .update({ estado })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      setVentas(prev => prev.map(v => v.id === id ? data[0] : v));
    } catch (error) {
      console.error('Error al actualizar venta:', error);
    }
  };
  */

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gestión de Ventas</h1>
            <p className="text-gray-600 mt-1">Administra y da seguimiento a todas las ventas</p>
          </div>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => alert('Función no implementada aún')}
          >
            + Nueva Venta
          </button>
        </div>

        {/* Métricas de ventas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">💰</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Ventas Hoy</h3>
                <p className="text-2xl font-bold text-gray-900">$0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">📊</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Este Mes</h3>
                <p className="text-2xl font-bold text-gray-900">$0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⏳</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Pendientes</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">🎯</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Meta Mensual</h3>
                <p className="text-2xl font-bold text-gray-900">0%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Filtros</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Inicio
              </label>
              <input
                type="date"
                value={filtros.fechaInicio}
                onChange={(e) => setFiltros(prev => ({ ...prev, fechaInicio: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select 
                value={filtros.estado}
                onChange={(e) => setFiltros(prev => ({ ...prev, estado: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Todos</option>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
                <option value="cancelada">Cancelada</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cliente
              </label>
              <input
                type="text"
                placeholder="Buscar cliente..."
                value={filtros.cliente}
                onChange={(e) => setFiltros(prev => ({ ...prev, cliente: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        {/* Lista de ventas */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Registro de Ventas</h3>
            <p className="text-sm text-gray-500 mt-1">{ventas.length} ventas registradas</p>
          </div>
          
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-2 text-gray-500">Cargando ventas...</p>
            </div>
          ) : ventas.length === 0 ? (
            <div className="p-8 text-center">
              <span className="text-4xl">💰</span>
              <p className="mt-2 text-gray-500">No hay ventas registradas</p>
              <p className="text-sm text-gray-400">Comienza registrando tu primera venta</p>
              <button 
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={() => alert('Función no implementada aún')}
              >
                Registrar Venta
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Folio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Productos
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Las filas de ventas aparecerán aquí cuando se implementen */}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* TODO: Integración con Supabase */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">🚧 Funcionalidades Pendientes</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Conectar con tabla 'ventas' en Supabase</p>
            <p>• Implementar CRUD completo para ventas</p>
            <p>• Relaciones con clientes y productos</p>
            <p>• Cálculo automático de totales</p>
            <p>• Filtros por fechas y estados funcionales</p>
            <p>• Generación de reportes y facturas</p>
            <p>• Dashboard de métricas en tiempo real</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VentasPage; 