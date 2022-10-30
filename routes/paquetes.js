const {Router} = require('express');
const { GetPaquetes, PostPaquetes, putPaquetes, deletePaquetes } = require('../controllers/paquetes');
const router = router();
    
    router.get('/', GetPaquetes)
    router.post('/', PostPaquetes)
    router.put('/', putPaquetes)
    router.delete('/', deletePaquetes)

    module.exports = router