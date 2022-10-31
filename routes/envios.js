const {Router} = require('express');
const { GetEnvios, PostEnvios, putEnvios, deleteEnvios } = require('../controllers/envios');
const router = Router();

router.get('/', GetEnvios)
router.post('/', PostEnvios)
router.put('/:id', putEnvios)
router.delete('/:id', deleteEnvios)

module.exports = router