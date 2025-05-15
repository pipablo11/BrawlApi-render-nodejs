//require("express");
import express from "express"; //para usar import --> in package.json: "type" : "module"
const app = express();

// para acceder a la API puede ser necesarios unos headers o una API key en la query string
const options = {
    method : 'GET',
    headers : {
        'Authorization' : 'Bearer ${process.env.API_KEY}',
        'Content-Type' : 'application/json'
    } 
}

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

     

app.get("/", (req, res) => {
    fetch('https://api.brawlstars.com/v1/players/%23YCRVPVPV/battlelog', options)
    .then(response => response.json())
    .then(json => {res.send(json);})
    .catch(err => console.error('error:' + err));
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
