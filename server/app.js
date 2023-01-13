require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/user.js");
const certRouter = require("./routes/cert.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const cors =require("cors");
const path=require('path')
app.use(cors());
app.use(express.json());

/*mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>console.log("Mongodb is successfully connected")
).catch(
    (err)=>console.log(err)
)*/

const connect = async () => {
    try {
        await mongoose.connect( process.env.mongodb_url, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log( 'connected to db' );
    } catch( error ) {
        console.error( error.message );
        process.exit( 1 );
    }
};
connect();

//configuring body parser(accepts key value from request and parses)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//configuring morgan(logger)
app.use(morgan("dev"));
//
//use it to work on database;
app.use("/users",userRouter);
app.use("/certs",certRouter);

////////

/*if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'/Frontend/dist/')));

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'Frontend/dist/index.html'))
    })
}
else{
    app.get("/",(req,res)=>{
        res.send("API Running")
    })
}*/
/*
const PORT=process.env.PORT;
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});*/


const PORT = process.env.PORT || 4000;

app.listen( PORT, () => {
        console.log( `Server running on http://localhost:${PORT}` );
    }) // listen() returns server
    .on( 'error', error => { // server.on( ... )
        console.error( error.message );
    });
module.exports = app;
