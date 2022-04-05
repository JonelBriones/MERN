const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
require('./config/mongoose.config');
require('./routes/author.routes')(app);
app.listen(8000,()=> {
    console.log("Listening at Port 8000");
})
