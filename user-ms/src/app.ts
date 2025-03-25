import { envs } from './config/envs';
import { createServer } from './presentation/server';
import { AppRoutes } from './presentation/routes';
import { database } from './infrastructure/database/connection/database';


async function main() {
    try {
        await database.connect(); // Conectar la base de datos primero
        console.log('Database connected successfully');

        const server = createServer({
            port: envs.PORT,
            routes: AppRoutes.routes,
        });

        console.log(`Server running on port ${envs.PORT}`);

        return server;
    } catch (error) {
        console.error('Error starting the application:', error);
        process.exit(1); // Salir con código de error si algo falla
    }
}

(async () => {
    await main();
})();
