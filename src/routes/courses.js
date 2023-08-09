

const express = require('express');
var router = express.Router();

const courseController = require('../app/controllers/CourseController');

// newsController.index

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);//stored data will be submitted to courses/:id then apply update method in controller
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);//stored data will be submitted to courses/:id then apply update method in controller
router.delete('/:id/force', courseController.forceDestroy);//xóa khỏi thùng rác
router.get('/:slug', courseController.show);

// router.get('/', newsController.index);


module.exports = router;