//require("express");
import express from "express"; //para usar import --> in package.json: "type" : "module"
const app = express();

// para acceder a la API puede ser necesarios unos headers o una API key en la query string
/*
const options = {
    method : 'GET',
    headers : {
        'Authorization' : 'Bearer API_KEY'
    }
}
fetch(url, options).then(res => res.json()).then(json => console.log(json));
*/
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
    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => res.send(result))
  .catch(error => res.send('error', error));   
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
