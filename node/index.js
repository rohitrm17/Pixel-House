var mysql = require('mysql');
var ejs = require('ejs');
var morgan = require('morgan');
var cors = require('cors')
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const {write, appendFile} = require('fs');
const { connect } = require('http2');
var app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname)));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname)));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const PORT = process.env.PORT || 3001;

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pixel house"
})

// app.get('/',function(req,res){
//     res.sendFile('Pixel-House-master\\src\\App.js',{root : __dirname})
// });

// app.get('/SignUp',function(req,res){
//     res.sendFile('Pixel-House-master\\src\\Components\\SignUp.js',{root : __dirname})
// });

app.post('/SignUp',  (req, res) => {
    const uname = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(uname);

    var sql = `INSERT INTO userdetails(username,email,password) VALUES ("${uname}","${email}","${password}")`;
    con.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql pool' + err);
        }
        else {
            console.log('connected');
            connection.query(sql, function (err, results) {
                if (err) {
                    console.log("Error code", err.code);
                    console.log("Error executing code", err.message);
                    var result;
                    if (err.code == "ER_DUP_ENTRY") {
                        result = { "success": 400, "message": "user already exists" };
                    }
                    result = { "success": 400, "message": "Failed to create account" };
                    return res.json({
                        data: result
                    })
                }
                else {
                    console.log("records" + results.length);
                    console.log(results);
                    var result = { "success": 200, "message": "account created successfully" };
                    return res.json({
                        data: result
                    })
                }
            });
        }
    });
});

app.post('/LogIn',(req,res)=>{
    email = req.body.email;
    password = req.body.password;
    console.log("email: " + email);
    console.log("pass: " + password);
    var sql = `SELECT * FROM userdetails where email="${email}" and password="${password}"`;
    con.getConnection(function(err,connection){
        if(err){
            connection.release();
            console.log("Error getting mysql pool" + err);
        }
        else{
            console.log("connected");
            connection.query(sql,(err,results)=>{
                if(err){
                    console.log("Error executing",err);
                }
                else{
                    console.log("records: " + results.length);
                    if(results.length == 0){
                        var result = {'success' : 400,'message' : 'failed'};
                        return res.json({
                            data : result
                        })
                    }
                    else{
                        var result = {'success' : 200,'message' : 'login successful', results};
                        return res.json({
                            data : result
                        })
                    }
                }
            })
        }
    })
})

app.post('/Profile' , (req,res)=>{

})

app.post('/PhotoClicked',(req,res)=>{
    st = req.body.st;

    var sql = `SELECT url FROM photodata where id="${st}"`;
    con.getConnection(function(err,connection){
        if(err){
            connection.release();
            console.log('Error connecting to pool'+err);
        }
        else{
            console.log("Connected");
            connection.query(sql,(err,results)=>{
                if(err){
                    console.log("Error executing",err);
                }
                else{
                    console.log("records" + results.length);
                    if(results == 0){
                        var result = {'success' : 400,'message' : 'failed'};
                        return res.json({
                            data : result
                        })
                    }
                    else{
                        return res.json({
                            data : results
                        })
                    }
                }
            })
        }
    })
})
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});