const {Router} = require('express');
const { GetPrecios, PostPrecios, putPrecios, deletePrecios } = require('../controllers/precios');
const router = router();

router.get('/', GetPrecios)
router.post('/', PostPrecios)
router.put('/', putPrecios)
router.delete('/', deletePrecios)

module.exports = router