const express = require('express');
const path = require('path')
const app= express();

const PORT=8080;

app.use(express.static('public'))


app.listen(PORT,()=>{
    console.log('estoy funcionando en el puerto 8080')
})
app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'views/home.html'))
  })


