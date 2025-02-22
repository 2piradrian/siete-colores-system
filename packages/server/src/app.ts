import { env } from './config';
import { MongoDatabase } from './data';
import { Server, AppRouter } from './presentation';

(async () => {
    main();
})();

async function main() {

    const mongo = new MongoDatabase();
    await mongo.connect();
    

    const server = new Server({
        port: env.PORT,
        routes: AppRouter.routes
    });

    server.start();
}