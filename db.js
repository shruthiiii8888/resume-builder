const HOST = "localhost";
 const USER = "postgres";
const PASSWORD = "shrut@8888";
 const DB = "shrut";
 const dialect = "postgres";
const port = 8888;
const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};
module.exports = {
    DB,
    USER,
    PASSWORD,
    HOST,
    port,
    dialect,
    pool,
  };
