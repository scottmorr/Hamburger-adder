
var orm = require('../config/orm')

module.exports = {
    findAll: function (callback) {
        orm.findAll('burgers', callback)
        // orm.findAll('burgers', function (err, data) {
        //     callback(err, data)
        // })
    },
    findById: function (id, callback) {
        var condition = "id = " + id;
        orm.findByCondition("burgers", condition, callback)
    },
    findDevoured: function (dev, callback) {
        var condition = "devoured = " + dev;
        orm.findByCondition("burgers", condition, callback)
    },
    updateById: function (id, options, callback) {
        var where = "id = " + id;
        orm.update('burgers', options, where, callback)
    },

    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
}