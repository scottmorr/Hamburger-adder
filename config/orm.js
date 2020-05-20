// Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//    * `selectAll()`
//    * `insertOne()`
//    * `updateOne()`

//  * Export the ORM object in `module.exports


var connection = require("./connection");
module.exports = {
    findAll: function (tableName, callback) {
        var sql = 'SELECT * FROM ??';
        var data = [tableName];

        connection.query(sql, data, callback)
        // connection.query(sql, data, function (err, data) {
        //     callback(err, data)
        // })
    },
    findByCondition: function (tableName, condition, callback) {
        var sql = "SELECT * FROM ?? "
        sql += "WHERE " + condition;
        var data = [tableName]
        connection.query(sql, data, callback)
    }
}