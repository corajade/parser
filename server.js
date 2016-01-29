var express=require("express");
var app= express();
var parseFxn=require(process.cwd()+ "/parseFxn.js")

app.get("/", function(req, res){
    var strIP= req.get("x-forwarded-for");
    var strLang= req.get("accept-language");
    var strUser= req.get("User-agent");
   var obj=parseFxn(strIP, strLang, strUser);
   console.log(strUser);
   res.json(obj);
    res.end();
})

app.listen(process.env.PORT||8080);