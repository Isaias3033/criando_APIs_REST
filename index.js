const express = require("express")
const app = express()

app.get('/usuarios', (req, res) => {
    console.log(`request`)
    res.send('Coisas Legais!')
  })

app.listen(3000, () => {
    console.log(`serivdor rodando na porta 3000`)
})