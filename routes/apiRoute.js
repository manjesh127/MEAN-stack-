const express = require('express')
const router = express.Router();

const DataBase = require('../models/datamodel')


router.get('/', async (req, res) => {
  try {
    const data = await DataBase.find({})
    res.send({ task: data })
  } catch (error) {
    throw new Error(error)
  }
});

router.post('/', (req, res) => {
  try {
    const data = new DataBase({
      title: req.body.title,
    })
    data.save().then((result) => {
      console.log("data save")
    }).catch((err) => {
      console.log("failedto save")
    });
  } catch (error) {
    console.log(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const data = await DataBase.findOneAndUpdate(req.params.id, { title: req.body.title })
    data.save().then(res => {
      console.log("data id save")
    }).catch(e => {
      console.log(e)
    })
  } catch (error) {
    console.log("er", error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const data = await DataBase.findOneAndDelete(req.params.id, { title: req.body.title })
    data.save().then(res => {
      console.log("data id delete save")
    }).catch(e => {
      console.log(e)
    })
  } catch (error) {
    console.log("er", error)
  }
})

module.exports = router;
