var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/result", function(req, res){
    var query = req.query.search;
        url = "https://api.themoviedb.org/3/search/movie?api_key=7db63aef6afd9020b464017fc659e1ff&query="+query;        

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("result", {data: data})
        }
    });

});

var server = app.listen(3000, function(){
});