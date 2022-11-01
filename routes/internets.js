const express = require('express');
const router = express.Router();


const { 
    readData, 
    readOne,
    createData,
    updateData,
    deleteData
  } = require('../controllers/internet_controller');

router
    .get('/', readData)
    .get('/:id', readOne)
    .post('/', createData)
    .put('/:id', updateData)
    .delete('/:id', deleteData);

module.exports = router;