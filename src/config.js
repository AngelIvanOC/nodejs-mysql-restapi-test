// Debug completo de variables de entorno
console.log("=== TODAS LAS VARIABLES DE ENTORNO ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("RAILWAY_ENVIRONMENT_ID:", process.env.RAILWAY_ENVIRONMENT_ID);
console.log("RAILWAY_PROJECT_ID:", process.env.RAILWAY_PROJECT_ID);

// Variables personalizadas
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

// Variables nativas de Railway MySQL
console.log("MYSQLHOST:", process.env.MYSQLHOST);
console.log("MYSQLPASSWORD:", process.env.MYSQLPASSWORD);
console.log("MYSQLPORT:", process.env.MYSQLPORT);
console.log("MYSQLUSER:", process.env.MYSQLUSER);
console.log("MYSQLDATABASE:", process.env.MYSQLDATABASE);
console.log("MYSQL_URL:", process.env.MYSQL_URL);
console.log("=====================================");

// Usar las variables nativas de Railway que SÍ deberían funcionar
export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.MYSQLPORT || 3306;
export const DB_HOST = process.env.MYSQLHOST || "localhost";
export const DB_USER = process.env.MYSQLUSER || "root";
export const DB_PASSWORD = process.env.MYSQLPASSWORD || "root";
export const DB_DATABASE = process.env.MYSQLDATABASE || "railway";
