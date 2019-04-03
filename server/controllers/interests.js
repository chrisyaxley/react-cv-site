const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  req.contentful.then((contentful) => {
    contentful
      .getEntries({ content_type: 'interests', order: 'sys.createdAt', select: 'sys.id,fields' })
      .then(response => res.send(response.items))
      .catch(console.error);
  });
});

module.exports = router;
