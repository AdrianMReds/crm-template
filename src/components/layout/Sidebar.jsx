import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', name: 'Dashboard', icon: '📊' },
    { path: '/clientes', name: 'Clientes', icon: '👥' },
    { path: '/ventas', name: 'Ventas', icon: '💰' },
    { path: '/productos', name: 'Productos', icon: '📦' },
    { path: '/reportes', name: 'Reportes', icon: '📈' },
    { path: '/configuracion', name: 'Configuración', icon: '⚙️' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Overlay para móvil cuando el sidebar está abierto */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white shadow-md z-30
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:static lg:h-full lg:z-0
        `}
      >
        <div className="p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => toggleSidebar()} // Usar toggleSidebar en lugar de setIsSidebarOpen
                className={`
                  flex items-center px-4 py-3 text-sm rounded-lg transition-colors
                  ${isActive(item.path) 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 