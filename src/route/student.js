const studentController = require('../controller/student.controller');

const router = require('express').Router()

router.post('/createtable',studentController.createTable)
router.get('/mysql',studentController.getStudents);
router.get('/picklike',studentController.pickLike);
router.get('/fulltext',studentController.fultext);
router.get('/order',studentController.order);
router.get('/agecompair',studentController.age);

router.get('/searching',studentController.searching);

router.post('/mysql',studentController.createStudent);

router.get('/mysql/:id',studentController.getStudentById);
router.delete('/mysql/',studentController.deleteStudentById);
router.put('/mysql/:id',studentController.updateStudentById)

module.exports= router;