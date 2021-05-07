const express = require('express')
const app = express()
const port = 6000


app.listen(port, (err) => {
    if(err) throw console.log(err)
    console.log(`App listening on http://localhost:${port}`)
})