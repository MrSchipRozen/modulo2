var element = document.getElementById('element');
alert = ('Bem vindo ao curriculo')


const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3011;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "BD.Curriculo.db";
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("../frontcv/"));
app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  var db = new sqlite3.Database(DBPATH);
  var sql = "SELECT * FROM Curriculo ORDER BY Curriculo COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close();
});
app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Curriculo ORDER BY Curriculo COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const tableBody = document.getElementById("alan1234");


$.ajax({
  url: "http://127.0.0.1:3011/usersalan",
  type: 'GET',
  success: data => {
      data.forEach(element => {
          const div = document.createElement("div");
      div.innerHTML = `
          
              <h3>${element.titulo}</h3>       
      `
          tableBody.appendChild(div);
      });
  }
});