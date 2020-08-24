const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database : conf.database
})
connection.connect();

const multer = require("multer");
const upload = multer({dest: "./upload"})

app.get("/api/customers", (req, res) =>{
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
})

app.use("/image", express.static("./upload"));

app.post("/api/customers", upload.single("img"), (req, res)=>{
  let sql = "INSERT INTO CUSTOMER VALUES (null, ?, ? ,?)";
  let img = "http://localhost:5000/image/" + req.file.filename;
  let name = req.body.name;
  let gender = req.body.gender;
  let params = [img, name, gender];
  connection.query(sql, params,
    (err, rows, fields)=>{
      res.send(rows);
      console.log(err)
    })
})

app.listen(port, () => console.log(`listening on port ${port}`))
