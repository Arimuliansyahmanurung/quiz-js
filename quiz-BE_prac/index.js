const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Manurung081020*",
  database: "hr-db",
  port: 5432,
});
app.use(bodyParser.json());
app.get("/employees", (req, res) => {
  const sql = "select * from employees";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results.rows);
  });
});

app.get("/employees/:id", (req, res) => {
  const sql = `select * from employees where employee_id = ${req.params.id}`;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results.rows);
  });
});

app.post("/employees", (req, res) => {
  const { first_name, last_name } = req.body;
  const sql = `insert into employees (first_name,last_name) values ($1,$2) RETURNING *`;
  pool.query(sql, [first_name, last_name], (err, results) => {
    if (err) throw err;
    res.send(results.rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
