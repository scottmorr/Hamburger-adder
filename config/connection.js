var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection("mysql://aki85jh87n2k7h48:vdsvsep81n7dhydr@ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vhyuxsvbo206ehg5");
}else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });

}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
