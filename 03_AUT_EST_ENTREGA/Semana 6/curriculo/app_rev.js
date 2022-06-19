const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3011;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "curriculo7.db";
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("../frontcv/"));

app.get("/usersalan", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Curriculo ORDER BY IDcurriculo COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

app.post("/userinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  sql = "INSERT INTO Curriculo (titulo) VALUES ('" + req.body.titulo + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});
// Deleta informações a partir do id
app.post("/userdel", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  sql = "DELETE FROM Curriculo WHERE IDcurriculo = " + req.body.IDcurriculo;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});
app.post("/userup", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  sql =
    "UPDATE curriculo SET title = '" +
    req.body.titulo +
    "' WHERE IDcurriculo = " +
    req.body.IDcurriculo;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});



























app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


