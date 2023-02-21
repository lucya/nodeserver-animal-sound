const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rio', (req, res) => {
  res.send('<h1>Hello Rio!<//h1>')
})

app.get('/ggomi', (req, res) => {
  res.json({ 'sound': '에잉 냐옹' })
})

app.get('/user/:id', (req, res) => {
  const p = req.params;
  console.log(p)

  const q = req.query;
  console.log(q);

  res.send('id : ' + p.id + ', age : ' + q.age)
})

app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  console.log(name);

  if (name === 'cat') {
    res.json({ 'sound': '냐옹' })
  } else if (name === 'dog') {
    res.json({ 'sound': '멍멍' })
  } else if (name === 'pig') {
    res.json({ 'sound': '꿀꿀' })
  } else {
    res.json({ 'sound': '오키도키' })
  }
})

// app.post('/user/:id', (req, res) => {
//   const p = req.body;
//   console.log(p);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})