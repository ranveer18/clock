const express = require('express')
const path = require('path')
port=3000
const app =express()

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
  })

app.listen(port, () => {
    console.log(`example app http://localhost:${port}`)
  })