const
  express = require('express'),
  next = require('next'),
  dev = process.env.NODE_ENV !== 'production',
  app = next({ dev }),
  handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const
      actualPage = '/post',
      queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => (
    handle(req, res)
  ))
  server.listen(3000, (err) => {
    err ? console.error(err)
    : console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
