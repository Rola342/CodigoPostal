const express = require('express');
const mysql = require('mysql');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const { StatusCodes, getStatusCode } = require('http-status-codes');

// Cargamos las variables de entorno
dotenv.config();

const PORT = process.env.PORT || 3050;

// SQL
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT || 3306,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get('/zip-code', ({ query: { q } }, res) => {
  const sqlQuery = `SELECT * FROM codigos_postales WHERE cp = "${q}"`;

  connection.query(sqlQuery, (error, results) => {
    if (error) return res.status(StatusCodes.BAD_REQUEST).json(error);

    return res.status(StatusCodes.OK).json(results);
  });
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Check Connect
connection.connect((error) => {
  if (error) throw error;
  console.log('--- Base de datos corriendo ---');
});

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
