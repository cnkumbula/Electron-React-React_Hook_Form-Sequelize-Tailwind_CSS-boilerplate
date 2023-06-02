require('dotenv').config();


module.exports = {
  "host": process.env.SERVER,
  "username": process.env.USER,
  "database": process.env.DB,
  "password": process.env.PASSWORD,
  "dialect": "mssql",
  "port": 1433,
  "dialectOptions": {
    "timezone": "+02:00",
    "options": {
      "encrypt": false,
      "trustServerCertificate": true
    }
  }
}
  