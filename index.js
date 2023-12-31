const express=require('express');
const port=8000;

const app=express();

//use express router
app.use('/',require("./routes"));

//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`)
    }
    console.log(`server is running successfully on port ${port}`);
})