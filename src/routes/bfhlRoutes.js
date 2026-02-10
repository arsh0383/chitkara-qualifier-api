const express = require('express');
const { handleBfhl, handleHealth } = require('../controllers/bfhlController');

const router = express.Router();

router.post('/bfhl', handleBfhl);
router.get('/health', handleHealth);

module.exports = router;
