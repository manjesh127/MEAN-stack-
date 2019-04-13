const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send("api is working")
});

router.post('/', (req, res) => {
  console.log("posss")
  res.send("post api working")
});

router.put('/:id', (req, res) => {
  res.send(`${req.params.id} receve to edit`)
});

router.delete('/:id', (req, res) => {
  res.send(`${req.params.id} receve to delete`)
})

module.exports = router;
