const express = require('express')
const {callback} = require("pg/lib/native/query");

const PORT = process.env.PORT || 8080

const app =express()

app.get('/', (req, res) => {
    res.send('nodemon work')

})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
