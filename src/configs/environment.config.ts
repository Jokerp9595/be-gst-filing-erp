import path from "path";

/****************************
 Configuration
 ****************************/
const serverType = (process.env.NODE_ENV ?? "development").trim();
let environment;
// if (serverType === "development") {
    environment = {
        dbHost: "localhost",
        dbPort: "3306",
        dbUser: "root",
        dbPassword: "root",
        dbDataBaseName: "accounting-erp",
        serverPort: "3000",
        baseUrl: "api/v1",
        rootUrl: "http://localhost:",
        swaggerUrl: "http://localhost:3000/api/v1",
        publicDirectory: path.join(__dirname, '..', '..', '..')
    // };
}

export default { ...environment };