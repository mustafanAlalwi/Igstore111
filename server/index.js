const express  = require('express');
const bodyParser  = require('body-parser');
const cors  = require('cors');
const axios = require('axios')


const app = express();



// Middle ware
app.use(bodyParser.json());
app.use(cors());
app.use(axios())


const port = 3000


app.listen(port, () => {
    console.log(`server port is on ${port}`)
})