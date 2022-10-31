const {Router} = require('express');
const { Getseguimientos, Postseguimientos, putseguimientos, deleteseguimientos } = require('../controllers/seguimientos');
const router = Router();

router.get('/seguimiento', Getseguimientos)
router.post('/seguimiento', Postseguimientos)
router.put('/seguimiento', putseguimientos)
router.delete('/seguimiento', deleteseguimientos)

module.exports = router