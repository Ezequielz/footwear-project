import { envs } from "../../../config/envs";

export const userResolvers  = {
    Query: {
        users: async () => {
            try {
              // Realizar la petición a la API
              const response = await fetch(`${envs.API_URL}/api/users`);
              // Verificar que la respuesta sea exitosa
              if (!response.ok) {
                throw new Error('Failed to fetch users');
              }
              // Convertir la respuesta en JSON
              const {users} = await response.json();
      
              return users
            } catch (error) {
              console.error('Error fetching users:', error);
              return []; // En caso de error, retornar un array vacío
            }
          },
          findUser: async (_: any, { id }: { id: string })=> {
            try {
              const response = await fetch(`${envs.API_URL}/api/users/${id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch users');
              }
        
              const {user} = await response.json();
              return user
            } catch (error) {
              console.error('Error fetching users:', error);
              return [];
            }
          },
    },
  };
  