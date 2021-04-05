const { Router } = require('express');
const { userGet, userPatch, userPost, userDelete, userPut } = require('../controllers/user');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.patch('/', userPatch);

router.delete('/', userDelete);


module.exports = router;