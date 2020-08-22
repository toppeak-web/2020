const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/customers", (req, res) =>{
    res.send([{
        "id": 1,
        "name": "홍길동",
        "gender": "남",
        "img": "https://placeimg.com/64/64/1"
      },
      {
        "id": 2,
        "name": "이무기",
        "gender": "남",
        "img": "https://placeimg.com/64/64/2"
      },
      {
        "id": 3,
        "name": "홍여령",
        "gender": "여",
        "img": "https://placeimg.com/64/64/3"
      }])
})

app.listen(port, () => console.log(`listening on port ${port}`))
