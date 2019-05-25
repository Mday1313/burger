var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function( cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers;";

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    updateOne: function() {
// add function to change boolean when devoured
    }
}


module.exports = orm;