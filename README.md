# CRM Dashboard

Un sistema CRM completo desarrollado con React, TailwindCSS y preparado para integración con Supabase.

## 🚀 Características

- **Dashboard interactivo** con métricas en tiempo real
- **Gestión de clientes** completa (CRUD)
- **Control de ventas** con seguimiento de estados
- **Inventario de productos** con alertas de stock
- **Reportes y analíticas** avanzadas
- **Configuración personalizable** del sistema
- **Autenticación segura** (mock para desarrollo)
- **Diseño responsivo** con TailwindCSS
- **Estructura preparada para Supabase**

## 🛠️ Tecnologías

- **React 19** - Framework principal
- **React Router DOM** - Enrutamiento
- **TailwindCSS** - Estilos y diseño
- **Supabase** - Backend como servicio (por configurar)
- **Vite** - Build tool y dev server

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repo>
   cd crm-example
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales de Supabase
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

## 🔧 Configuración de Supabase

### 1. Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una nueva organización y proyecto
3. Copia la URL del proyecto y la clave pública (anon key)

### 2. Configurar variables de entorno

Edita el archivo `.env`:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-clave-publica-anonima
```

### 3. Crear tablas necesarias

Ejecuta estos scripts SQL en el SQL Editor de Supabase:

```sql
-- Tabla de clientes
CREATE TABLE clientes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  telefono TEXT,
  direccion TEXT,
  estado TEXT DEFAULT 'activo',
  categoria TEXT DEFAULT 'regular',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de productos
CREATE TABLE productos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  sku TEXT UNIQUE NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  categoria TEXT,
  estado TEXT DEFAULT 'activo',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de ventas
CREATE TABLE ventas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  folio TEXT UNIQUE NOT NULL,
  cliente_id UUID REFERENCES clientes(id),
  total DECIMAL(10,2) NOT NULL,
  estado TEXT DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de configuración
CREATE TABLE configuracion (
  id INTEGER PRIMARY KEY DEFAULT 1,
  configuracion JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE ventas ENABLE ROW LEVEL SECURITY;
ALTER TABLE configuracion ENABLE ROW LEVEL SECURITY;

-- Políticas básicas (ajustar según necesidades)
CREATE POLICY "Enable all for authenticated users" ON clientes
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable all for authenticated users" ON productos
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable all for authenticated users" ON ventas
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable all for authenticated users" ON configuracion
  FOR ALL USING (auth.role() = 'authenticated');
```

### 4. Activar funciones en el código

Una vez configurado Supabase, descomenta las funciones en los archivos:

- `src/services/auth.js` - Funciones de autenticación
- `src/pages/ClientesPage.jsx` - CRUD de clientes
- `src/pages/VentasPage.jsx` - CRUD de ventas
- `src/pages/ProductosPage.jsx` - CRUD de productos
- `src/pages/ReportesPage.jsx` - Generación de reportes
- `src/pages/ConfiguracionPage.jsx` - Persistencia de configuración

## 🎯 Uso Actual (Modo Desarrollo)

### Autenticación
- Puedes usar **cualquier email y contraseña** para acceder
- El sistema acepta todas las credenciales en modo desarrollo
- Los datos se guardan temporalmente en localStorage

### Navegación
- **Dashboard**: Vista general con métricas
- **Clientes**: Gestión de base de datos de clientes
- **Ventas**: Control y seguimiento de ventas
- **Productos**: Inventario y catálogo
- **Reportes**: Analíticas y reportes
- **Configuración**: Ajustes del sistema

## 🔄 Funcionalidades Implementadas

### ✅ Completado
- [x] Sistema de rutas protegidas
- [x] Autenticación mock funcional
- [x] Layout responsivo con sidebar
- [x] Estructura de todas las páginas
- [x] Componentes de interfaz
- [x] Configuración de TailwindCSS
- [x] Preparación para Supabase

### 🚧 Por Implementar (al conectar Supabase)
- [ ] CRUD real de clientes
- [ ] Sistema de ventas funcional
- [ ] Gestión de inventario
- [ ] Reportes con datos reales
- [ ] Persistencia de configuración
- [ ] Notificaciones en tiempo real
- [ ] Exportación de reportes (PDF/Excel)
- [ ] Subida de imágenes para productos

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── layout/
│       ├── Layout.jsx      # Contenedor principal
│       ├── Navbar.jsx      # Barra de navegación
│       └── Sidebar.jsx     # Menú lateral
├── context/
│   └── AuthContext.jsx     # Contexto de autenticación
├── pages/
│   ├── AuthPage.jsx        # Página de login/registro
│   ├── DashboardPage.jsx   # Dashboard principal
│   ├── ClientesPage.jsx    # Gestión de clientes
│   ├── VentasPage.jsx      # Gestión de ventas
│   ├── ProductosPage.jsx   # Gestión de productos
│   ├── ReportesPage.jsx    # Reportes y analíticas
│   └── ConfiguracionPage.jsx # Configuración
├── routes/
│   └── AppRoutes.jsx       # Configuración de rutas
├── services/
│   ├── auth.js            # Servicios de autenticación
│   └── supabase.js        # Cliente de Supabase
├── App.jsx                # Componente principal
└── main.jsx              # Punto de entrada
```

## 🎨 Personalización

### Colores y Temas
Los colores se pueden personalizar editando las clases de TailwindCSS en los componentes.

### Agregar Nuevas Páginas
1. Crear el componente en `src/pages/`
2. Agregar la ruta en `src/routes/AppRoutes.jsx`
3. Añadir el enlace en `src/components/layout/Sidebar.jsx`

## 🐛 Solución de Problemas

### Error de autenticación
- Verifica que las variables de entorno estén configuradas
- Asegúrate de que Supabase esté configurado correctamente

### Problemas de estilo
- Verifica que TailwindCSS esté compilando correctamente
- Revisa que todas las clases estén bien escritas

### Errores de navegación
- Confirma que todas las rutas estén definidas en `AppRoutes.jsx`
- Verifica que los componentes de página existan

## 📞 Soporte

Si encuentras algún problema o necesitas ayuda:

1. Revisa la documentación de [Supabase](https://supabase.com/docs)
2. Consulta la documentación de [React Router](https://reactrouter.com/)
3. Verifica la configuración de [TailwindCSS](https://tailwindcss.com/docs)

## 🚀 Despliegue

Para compilar para producción:

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
