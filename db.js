const Pool = require('pg').Pool

const pool = new Pool( {
    user: "anton",
    password: "1111",
    host: "localhost",
    port: "5432"

})