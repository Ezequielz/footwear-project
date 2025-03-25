
import express, { Router } from 'express';
import cors from 'cors';

interface Options {
    port: number;
    routes: Router;
    public_path?: string;
}

export function createServer({ port, routes, public_path = 'public' }: Options) {
    const app = express();

    //* Middlewares

    app.use(cors())
    app.use(express.json()); // raw
    app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded


    //* Public Folder
    app.use(express.static(public_path));

    //* Routes
    app.use('/api', routes);


    const serverListener = app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });

    return {
        close: () => serverListener.close(),
    };
}
