const dbconnection = require('./dbconnection');

const Dbmethods = {

    
    // hakee kaikki opiskelijat
    findAll : function (callback) {
        let sql = `SELECT * FROM yritys`;
        return dbconnection.query(sql, callback);
    }
}

module.exports = Dbmethods;

