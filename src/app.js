const express = require('express');
const app     = express();
const bodyParser = require("body-parser");

require('dotenv').config();

 // parse requests of content-type - application/json
 app.use(bodyParser.json());
  
 // parse requests of content-type - application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }));

// configure routs
app.use('/', require('./routes/api'));
app.use(express.static('./public'));





const port = process.env.PORT || 2000;
app.listen(port, ()=>{ 
    console.log(`Server created at PORT: ${port}`);
});