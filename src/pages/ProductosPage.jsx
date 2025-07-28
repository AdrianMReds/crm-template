import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ProductosPage = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtros, setFiltros] = useState({
    categoria: '',
    estado: '',
    busqueda: ''
  });

  // TODO: Implementar funciones de Supabase
  /*
  Funciones a implementar cuando se configure Supabase:
  
  1. Obtener productos:
  const fetchProductos = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('productos')
        .select(`
          *,
          categorias(nombre)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProductos(data || []);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  2. Crear producto:
  const createProducto = async (productoData) => {
    try {
      const { data, error } = await supabase
        .from('productos')
        .insert([productoData])
        .select();
      
      if (error) throw error;
      setProductos(prev => [data[0], ...prev]);
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  3. Actualizar stock:
  const updateStock = async (id, nuevoStock) => {
    try {
      const { data, error } = await supabase
        .from('productos')
        .update({ stock: nuevoStock })
        .eq('id', id)
        .select();
      
      if (error) throw error;
      setProductos(prev => prev.map(p => p.id === id ? data[0] : p));
    } catch (error) {
      console.error('Error al actualizar stock:', error);
    }
  };
  */

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Gestión de Productos</h1>
            <p className="text-gray-600 mt-1">Administra tu inventario y catálogo de productos</p>
          </div>
          <button 
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => alert('Función no implementada aún')}
          >
            + Nuevo Producto
          </button>
        </div>

        {/* Métricas de productos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📦</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Productos</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">✅</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">En Stock</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⚠️</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Stock Bajo</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-xl">❌</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Agotados</h3>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros y búsqueda */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Filtros y Búsqueda</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar producto
              </label>
              <input
                type="text"
                placeholder="Nombre, SKU, descripción..."
                value={filtros.busqueda}
                onChange={(e) => setFiltros(prev => ({ ...prev, busqueda: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select 
                value={filtros.categoria}
                onChange={(e) => setFiltros(prev => ({ ...prev, categoria: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Todas las categorías</option>
                <option value="electronica">Electrónica</option>
                <option value="ropa">Ropa</option>
                <option value="hogar">Hogar</option>
                <option value="deportes">Deportes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select 
                value={filtros.estado}
                onChange={(e) => setFiltros(prev => ({ ...prev, estado: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Todos</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="agotado">Agotado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de productos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Catálogo de Productos</h3>
            <p className="text-sm text-gray-500 mt-1">{productos.length} productos registrados</p>
          </div>
          
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-2 text-gray-500">Cargando productos...</p>
            </div>
          ) : productos.length === 0 ? (
            <div className="p-8 text-center">
              <span className="text-4xl">📦</span>
              <p className="mt-2 text-gray-500">No hay productos registrados</p>
              <p className="text-sm text-gray-400">Comienza agregando tu primer producto</p>
              <button 
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                onClick={() => alert('Función no implementada aún')}
              >
                Agregar Producto
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Producto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Las filas de productos aparecerán aquí cuando se implementen */}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* TODO: Integración con Supabase */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">🚧 Funcionalidades Pendientes</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Conectar con tabla 'productos' en Supabase</p>
            <p>• Implementar CRUD completo para productos</p>
            <p>• Gestión de categorías y subcategorías</p>
            <p>• Control de inventario y alertas de stock</p>
            <p>• Carga de imágenes de productos</p>
            <p>• Código de barras y SKU automático</p>
            <p>• Historial de movimientos de inventario</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductosPage; 