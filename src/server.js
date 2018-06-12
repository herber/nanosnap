const express = require('express');
const cors = require('cors');
const render = require('./render');
const cache = require('memory-cache');

module.exports = port => {
  const app = express();

  app.use(cors());

  app.get('/', async (req, res) => {
    if (req.query.url != null) {
      res.type('.png');

      const c = cache.get(JSON.stringify(req.query));
  
      if (c !== null) {
        res.send(c);
      } else {
        const screenshot = await render(req.query.url || 'https://notfound.tobihrbr.gq', req.query);
  
        res.send(screenshot);
        cache.put(JSON.stringify(req.query), screenshot, 50000);
      }
    } else {
      res.send(`
        <html>
          <head>
            <title>Nanosnap</title>
            <style>
              body {
                text-align: center;
                font-family: sans-serif;
                margin-top: 40vh;
              }
            </style>
          </head>
          <body>
            <h1>Nanosnap</h1>
            <p>A simple micorservice for taking screenshots of websites.</p>
          </body>
        </html>
      `)
    }
  });

  app.listen(port);

  return app;
};
