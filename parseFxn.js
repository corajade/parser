module.exports=function(IP, lang, user){
    var arrOS=user.split("(");
    arrOS=arrOS[1].split(")");
    var OS=arrOS[1];
    
    var infoObj={"IP Address":IP, "language":lang, "software": OS};
    return infoObj;
}