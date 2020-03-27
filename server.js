const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(__dirname+'/dist/ttt'));
app.get('/', (req, res) => res.sendFile(psth.join(__dirname+'/dist/ttt/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))