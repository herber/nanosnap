const express = require('express');
const cors = require('cors');
const render = require('./render');
const cache = require('memory-cache');

module.exports = port => {
  const app = express();

  app.use(cors());

  app.get('/', async (req, res) => {
    res.type('.png');

    const c = cache.get(JSON.stringify(req.query));

    if (c !== null) {
      res.send(c);
    } else {
      const screenshot = await render(req.query.url || 'https://notfound.tobihrbr.gq', req.query);

      res.send(screenshot);
      cache.put(JSON.stringify(req.query), screenshot, 50000);
    }
  });

  app.listen(port);

  return app;
};
