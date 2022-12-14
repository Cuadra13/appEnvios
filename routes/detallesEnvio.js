const {Router} = require('express');
const { GetdetallesEnvios, PostdetalleEnvios, putdetalleEnvios, deletedetalleEnvios } = require('../controllers/detallesEnvio');
const router = Router();
    
    router.get('/', GetdetallesEnvios)
    router.post('/', PostdetalleEnvios)
    router.put('/', putdetalleEnvios)
    router.delete('/', deletedetalleEnvios)

    module.exports = router