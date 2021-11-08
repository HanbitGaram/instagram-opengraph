var express = require("express");
var cors = require("cors");
var axios = require("axios");

var app = express();
app.use(cors());

/*
Axios response object, properties
data, status, statusText, headers, request
http://zetcode.com/javascript/axios/
*/
app.get("/i", function(req, res) {
    let UPLOAD_URL = req.query.insta;
    axios.get(UPLOAD_URL).then(response => {
        if(response.status === 200 || response.status === 206) {
            return response.body;
        } 
    }).catch(err => {
        console.log("Error making the request");
        res.send(err);
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});