import { envs } from './config/envs';
import { createServer } from './presentation/server';

async function main() {
    try {
 
        const server = createServer({
            port: envs.PORT,
        });
        return server;
    } catch (error) {
        console.error('Error starting the application:', error);
        process.exit(1); // Salir con código de error si algo falla
    }
}

(async () => {
    await main();
})();
