var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./authenticatec');
var registerController=require('./registerc');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "registerpage.html" );  
})  
 
app.get('/loginpage.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "loginpage.html" );  
})  
 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/registerc', registerController.register);
app.post('/authenticatec', authenticateController.authenticate);
app.listen(3000);

