import { createClient } from '@supabase/supabase-js';

// URL de tu proyecto Supabase
// TODO: Configurar las variables de entorno en .env
// VITE_SUPABASE_URL=tu_url_de_supabase
// VITE_SUPABASE_ANON_KEY=tu_clave_publica_anonima
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tu-proyecto.supabase.co';

// Clave API anónima (pública)
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'tu-clave-anonima';

// Crear el cliente de Supabase
// NOTA: Esto no funcionará hasta que configures las variables de entorno correctas
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase; 