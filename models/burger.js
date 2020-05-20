// Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.
var orm = require('../config/orm')

module.exports = {
    findAll: function (callback) {
        orm.findAll('burgers', callback)
        // orm.findAll('burgers', function (err, data) {
        //     callback(err, data)
        // })
    },
    findById: function(id, callback){
        var condition = "id = " + id;
        orm.findByCondition("burgers", condition, callback)
    },
    findDevoured: function(dev, callback){
        var condition = "devoured = " + dev;
        orm.findByCondition("burgers", condition, callback)
    },
}