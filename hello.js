// console.log('Hello World!')
//
//
app.get('/hello', (req, res) =>
    res.send('Hello World'))

app.get('/', (req, res) =>
    res.send('Welcome to Zain\'s server'));
//
// app.get('/add/:a/:b',(req, res) =>
// {
//   const a = parseInt(req.params['a'])
//   const b = parseInt(req.params['b'])
//   const c = a + b;
//   res.send({c: c})
// })
