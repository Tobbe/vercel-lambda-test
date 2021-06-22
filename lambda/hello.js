module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    url: req.url,
    path: req.path,
    id: 'lambda/hello.js'
  })
}
