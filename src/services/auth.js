// import supabase from './supabase'; // Descomenta cuando configures Supabase

/**
 * Servicios de autenticación 
 * NOTA: Actualmente usando implementación mock para desarrollo
 * TODO: Descomentar y usar las funciones de Supabase cuando esté configurado
 */
export const authService = {
  /**
   * Inicia sesión con email y contraseña
   * @param {string} email 
   * @param {string} password 
   * @returns {Promise}
   */
  login: async (email, password) => {
    // TODO: Reemplazar con implementación real de Supabase
    /* 
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
    */
    
    // IMPLEMENTACIÓN MOCK - Acepta cualquier credencial
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: 'mock-user-id',
            email: email,
            user_metadata: {
              name: 'Usuario Mock'
            }
          },
          session: {
            access_token: 'mock-token',
            user: {
              id: 'mock-user-id',
              email: email
            }
          }
        });
      }, 1000); // Simula delay de red
    });
  },

  /**
   * Registra un usuario nuevo
   * @param {string} email 
   * @param {string} password 
   * @param {Object} userData - Datos adicionales del usuario
   * @returns {Promise}
   */
  register: async (email, password, userData = {}) => {
    // TODO: Reemplazar con implementación real de Supabase
    /*
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    
    if (error) throw error;
    return data;
    */
    
    // IMPLEMENTACIÓN MOCK - Acepta cualquier registro
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: 'mock-user-id',
            email: email,
            user_metadata: {
              ...userData,
              name: userData.name || 'Usuario Nuevo'
            }
          },
          session: {
            access_token: 'mock-token',
            user: {
              id: 'mock-user-id',
              email: email
            }
          }
        });
      }, 1000);
    });
  },

  /**
   * Cierra la sesión actual
   * @returns {Promise}
   */
  logout: async () => {
    // TODO: Reemplazar con implementación real de Supabase
    /*
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    */
    
    // IMPLEMENTACIÓN MOCK
    return new Promise((resolve) => {
      setTimeout(() => {
        // Limpiar localStorage si se usa para guardar sesión
        localStorage.removeItem('crm-mock-session');
        resolve();
      }, 500);
    });
  },

  /**
   * Obtiene la sesión actual
   * @returns {Promise}
   */
  getCurrentSession: async () => {
    // TODO: Reemplazar con implementación real de Supabase
    /*
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
    */
    
    // IMPLEMENTACIÓN MOCK - Verifica localStorage
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockSession = localStorage.getItem('crm-mock-session');
        resolve(mockSession ? JSON.parse(mockSession) : null);
      }, 300);
    });
  },

  /**
   * Obtiene el usuario actual
   * @returns {Promise}
   */
  getCurrentUser: async () => {
    // TODO: Reemplazar con implementación real de Supabase
    /*
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
    */
    
    // IMPLEMENTACIÓN MOCK
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockSession = localStorage.getItem('crm-mock-session');
        if (mockSession) {
          const session = JSON.parse(mockSession);
          resolve(session.user);
        } else {
          resolve(null);
        }
      }, 300);
    });
  },
};

export default authService; 