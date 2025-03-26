import { envs } from "../../../../config/envs";
import { FootwearCreateDTO, FootwearUpdateDTO } from "../../../../domain/dtos/product/footwear.dto";



export const footwearResolvers = {
    Query: {
        footwear: async () => {
            console.log('first')
            try {
                // Realizar la petición a la API
                const response = await fetch(`${envs.API_FOOTWEAR}`);
                // Verificar que la respuesta sea exitosa

                if (!response.ok) {
                    console.log('first')
                    throw new Error('Failed to fetch footwear');
                }
                // Convertir la respuesta en JSON
                const { products } = await response.json();

                return products
            } catch (error) {
                console.error('Error fetching footwear:', error);
                return []; // En caso de error, retornar un array vacío
            }
        },
        findFootwear: async (_: any, { id }: { id: string }) => {
            try {
                const response = await fetch(`${envs.API_FOOTWEAR}/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch footwear');
                }

                const { product } = await response.json();
                return product
            } catch (error) {
                console.error('Error fetching footwear:', error);
                return [];
            }
        },
    },

    Mutation: {
        updateFootwear: async (_: any, { footwearUpdateDTO }: { footwearUpdateDTO: FootwearUpdateDTO }) => {
            try {
       
                const response = await fetch(`${envs.API_FOOTWEAR}/${footwearUpdateDTO.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(footwearUpdateDTO),
                });

         
                // ⚠️ Si la API devuelve un error, response.ok será false
                if (!response.ok) {
                    const errorText = await response.text(); // Obtener el mensaje de error
                    throw new Error(`Error en la API: ${response.status} - ${errorText}`);
                }
           
                
                // ✅ Obtener la respuesta en formato JSON
                const { footwear } = await response.json();
   
         

                return footwear;
            } catch (error) {
                console.error("Error en updateFootwear:", error);
                return null; // Retorna null en caso de error
            }
        },
        createFootwear: async (_: any, { footwearCreateDTO }: { footwearCreateDTO: FootwearCreateDTO }) => {
            try {
       
                const response = await fetch(`${envs.API_FOOTWEAR}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(footwearCreateDTO),
                });

         
                // ⚠️ Si la API devuelve un error, response.ok será false
                if (!response.ok) {
                    const errorText = await response.text(); // Obtener el mensaje de error
                    throw new Error(`Error en la API: ${response.status} - ${errorText}`);
                }
           
                
                // ✅ Obtener la respuesta en formato JSON
                const { footwear } = await response.json();
   
           

                return footwear;
            } catch (error) {
                console.error("Error en updateFootwear:", error);
                return null; // Retorna null en caso de error
            }
        }
    },
}