import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ClientesPage = () => {
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Implementar funciones de Supabase
  /*
  Funciones a implementar cuando se configure Supabase:
  
  1. Obtener clientes:
  const fetchClientes = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('clientes')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setClientes(data || []);
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  2. Crear cliente:
  const createCliente = async (clienteData) => {
    try {
      const { data, error } = await supabase
        .from('clientes')
        .insert([clienteData])
        .select();
      
      if (error) throw error;
      setClientes(prev => [data[0], ...prev]);
    } catch (error) {
      console.error('Error al crear cliente:', error);
    }
  };

  3. Actualizar cliente:
  const updateCliente = async (id, updates) => {
    try {
      const { data, error } = await supabase
        .from('clientes')
        .update(updates)
        .eq('id', id)
        .select();
      
      if (error) throw error;
      setClientes(prev => prev.map(c => c.id === id ? data[0] : c));
    } catch (error) {
      console.error('Error al actualizar cliente:', error);
    }
  };

  4. Eliminar cliente:
  const deleteCliente = async (id) => {
    try {
      const { error } = await supabase
        .from('clientes')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      setClientes(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
    }
  };
  */

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gestión de Clientes</h1>
            <p className="text-gray-600 mt-1">Administra tu base de datos de clientes</p>
          </div>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => alert('Función no implementada aún')}
          >
            + Nuevo Cliente
          </button>
        </div>

        {/* Filtros y búsqueda */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar cliente
              </label>
              <input
                type="text"
                placeholder="Nombre, email, teléfono..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="">Todos</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="prospecto">Prospecto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="">Todas</option>
                <option value="premium">Premium</option>
                <option value="regular">Regular</option>
                <option value="nuevo">Nuevo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de clientes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Lista de Clientes</h3>
            <p className="text-sm text-gray-500 mt-1">{clientes.length} clientes registrados</p>
          </div>
          
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-500">Cargando clientes...</p>
            </div>
          ) : clientes.length === 0 ? (
            <div className="p-8 text-center">
              <span className="text-4xl">👥</span>
              <p className="mt-2 text-gray-500">No hay clientes registrados</p>
              <p className="text-sm text-gray-400">Comienza agregando tu primer cliente</p>
              <button 
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => alert('Función no implementada aún')}
              >
                Agregar Cliente
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contacto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Última actividad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Las filas de clientes aparecerán aquí cuando se implementen */}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* TODO: Integración con Supabase */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">🚧 Funcionalidades Pendientes</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Conectar con tabla 'clientes' en Supabase</p>
            <p>• Implementar CRUD completo (crear, leer, actualizar, eliminar)</p>
            <p>• Agregar búsqueda y filtros funcionales</p>
            <p>• Modal de edición de clientes</p>
            <p>• Importación masiva de clientes (CSV)</p>
            <p>• Historial de interacciones por cliente</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClientesPage; 