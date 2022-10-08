const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

const routes = require("./routes/index");
const connect = require('./db/connect');




const PORT = 3000;

app.use("/", routes);



connect.then(() => {
    app.listen(PORT, () => {
        console.log('the server listen on '+ PORT+ " And connecting to db");
})
}).catch( erro => console.log(erro))
