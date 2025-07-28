import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const ConfiguracionPage = () => {
  const [configuracion, setConfiguracion] = useState({
    empresa: {
      nombre: '',
      direccion: '',
      telefono: '',
      email: '',
      rfc: ''
    },
    sistema: {
      idioma: 'es',
      moneda: 'MXN',
      timezone: 'America/Mexico_City',
      notificaciones: true,
      emailReportes: true
    },
    facturacion: {
      folioDe: '1',
      serie: 'A',
      iva: '16'
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  // TODO: Implementar funciones de Supabase para configuración
  /*
  Funciones a implementar cuando se configure Supabase:
  
  1. Cargar configuración:
  const loadConfiguracion = async () => {
    try {
      const { data, error } = await supabase
        .from('configuracion')
        .select('*')
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      if (data) setConfiguracion(data.configuracion);
    } catch (error) {
      console.error('Error al cargar configuración:', error);
    }
  };

  2. Guardar configuración:
  const saveConfiguracion = async (nuevaConfiguracion) => {
    try {
      const { data, error } = await supabase
        .from('configuracion')
        .upsert({ 
          id: 1, 
          configuracion: nuevaConfiguracion,
          updated_at: new Date().toISOString()
        });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error al guardar configuración:', error);
    }
  };
  */

  const handleInputChange = (seccion, campo, valor) => {
    setConfiguracion(prev => ({
      ...prev,
      [seccion]: {
        ...prev[seccion],
        [campo]: valor
      }
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simular guardado
    setTimeout(() => {
      setIsSaving(false);
      alert('Configuración guardada (mock). Conectar con Supabase para persistir los datos.');
    }, 1000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Configuración del Sistema</h1>
          <p className="text-gray-600 mt-1">Personaliza la configuración de tu CRM</p>
        </div>

        {/* Información de la Empresa */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Información de la Empresa</h3>
            <p className="text-sm text-gray-500 mt-1">Datos básicos de tu empresa</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  value={configuracion.empresa.nombre}
                  onChange={(e) => handleInputChange('empresa', 'nombre', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mi Empresa S.A. de C.V."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  RFC
                </label>
                <input
                  type="text"
                  value={configuracion.empresa.rfc}
                  onChange={(e) => handleInputChange('empresa', 'rfc', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="XAXX010101000"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección
                </label>
                <input
                  type="text"
                  value={configuracion.empresa.direccion}
                  onChange={(e) => handleInputChange('empresa', 'direccion', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Calle, Número, Colonia, CP, Ciudad, Estado"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={configuracion.empresa.telefono}
                  onChange={(e) => handleInputChange('empresa', 'telefono', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={configuracion.empresa.email}
                  onChange={(e) => handleInputChange('empresa', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="contacto@miempresa.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Configuración del Sistema */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Configuración del Sistema</h3>
            <p className="text-sm text-gray-500 mt-1">Preferencias generales del sistema</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idioma
                </label>
                <select
                  value={configuracion.sistema.idioma}
                  onChange={(e) => handleInputChange('sistema', 'idioma', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Moneda
                </label>
                <select
                  value={configuracion.sistema.moneda}
                  onChange={(e) => handleInputChange('sistema', 'moneda', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="MXN">Peso Mexicano (MXN)</option>
                  <option value="USD">Dólar Americano (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zona Horaria
                </label>
                <select
                  value={configuracion.sistema.timezone}
                  onChange={(e) => handleInputChange('sistema', 'timezone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="America/Mexico_City">México (GMT-6)</option>
                  <option value="America/New_York">Nueva York (GMT-5)</option>
                  <option value="America/Los_Angeles">Los Ángeles (GMT-8)</option>
                </select>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notificaciones"
                    checked={configuracion.sistema.notificaciones}
                    onChange={(e) => handleInputChange('sistema', 'notificaciones', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="notificaciones" className="ml-2 block text-sm text-gray-700">
                    Recibir notificaciones del sistema
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailReportes"
                    checked={configuracion.sistema.emailReportes}
                    onChange={(e) => handleInputChange('sistema', 'emailReportes', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="emailReportes" className="ml-2 block text-sm text-gray-700">
                    Enviar reportes por email
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuración de Facturación */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Configuración de Facturación</h3>
            <p className="text-sm text-gray-500 mt-1">Parámetros para la generación de facturas</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Serie de Factura
                </label>
                <input
                  type="text"
                  value={configuracion.facturacion.serie}
                  onChange={(e) => handleInputChange('facturacion', 'serie', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="A"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Folio Inicial
                </label>
                <input
                  type="number"
                  value={configuracion.facturacion.folioDe}
                  onChange={(e) => handleInputChange('facturacion', 'folioDe', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  IVA (%)
                </label>
                <input
                  type="number"
                  value={configuracion.facturacion.iva}
                  onChange={(e) => handleInputChange('facturacion', 'iva', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="16"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botón Guardar */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSaving ? 'Guardando...' : 'Guardar Configuración'}
          </button>
        </div>

        {/* TODO: Integración con Supabase */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">🚧 Funcionalidades Pendientes</h3>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• Conectar con tabla 'configuracion' en Supabase</p>
            <p>• Persistir configuración en base de datos</p>
            <p>• Validación de configuración (RFC, email, etc.)</p>
            <p>• Carga de logos y personalización visual</p>
            <p>• Configuración avanzada de notificaciones</p>
            <p>• Backup y restauración de configuración</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConfiguracionPage; 