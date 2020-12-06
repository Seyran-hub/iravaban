const mysql = require('mysql');


const connnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "iravabanakan"
});

connnect.connect(function (err) {
    if (err) throw err;
});

module.exports = connnect