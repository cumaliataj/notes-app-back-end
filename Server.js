const Hapi = require("@hapi/hapi");
const routes= require("./Routes/routes");
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });
    server.route(routes);
    await server.start();
    console.log(`server berjalan di ${server.info.uri}`);
}

init();