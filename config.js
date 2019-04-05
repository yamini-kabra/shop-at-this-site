var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',

  user     : 'root',
  password : 'your-password',
  database : 'mydb'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ");
} else {
    console.log("Error connecting database");
}
});
