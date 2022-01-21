const db = require('../db.connection')
const studentService = require('../service/student')

const createTable = async (req, res) => {
    await studentService.createTable();

    res.send('table created');
}
const getStudents = async (req, res) => {
    const user = await studentService.getStudents();

    res.send(user);
}

const getStudentById = async (req, res) => {

    const user = await studentService.getStudentById(req.params.id);

    res.send(user);
}

const deleteStudentById = async (req, res) => {

    const user = await studentService.deleteById(req.body.id);

    res.send(user);
}

const createStudent = async (req, res) => {

    const payload = {

        fisrtname: req.body.fisrtname,
        lastname: req.body.lastname,
        age: req.body.age,
        department: req.body.department
    }
    const user = await studentService.createStudent(payload);
    res.send(user);
}

const updateStudentById = async (req, res) => {
    const payload = {

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        department: req.body.department
    }
    const id = req.params.id;
    const user = await studentService.updateById(id, payload);

    res.send(user);
}
const pickLike = async (req, res) => {
    const payload = req.body.name;
    const name = req.body.field
    const user = await studentService.pickLike(name, payload);

    res.send(user);
}
const fultext = async (req, res) => {
    const fisrtname = req.body.firstname;
    const lastname = req.body.lastname;
    const name = (fisrtname || lastname)
    const user = await studentService.concat(name);

    res.send(user);
}
const order = async (req, res) => {

    const order = req.body.order;
    const sort = (req.body.limit);

    const name = (req.body.fisrtname || req.body.lastname || req.body.department)
    const user = await studentService.getOrder(name, order, sort);
    res.send(user);
}
const age = async (req, res) => {
    const smallAge = req.body.smallAge;
    const largeAge = req.body.largeAge;
    const limit = req.body.limit

    if (limit == undefined) {
        const limit1 = 10
        const user = await studentService.ageCompaire(smallAge, largeAge, limit1);
        res.send(user);
    } else {

        const user = await studentService.ageCompaire(smallAge, largeAge, limit);
        res.send(user);
    }

}
const searching = async (req, res) => {

    const smallAge = req.body.smallAge;
    const largeAge = req.body.largeAge;
    const order = req.body.order;
    const name = (req.body.firstname || req.body.lastname)
    const option = (req.body.fisrtname || req.body.lastname || req.body.department)
    const limit = (req.body.limit);

    if ((smallAge == undefined && largeAge == undefined) || name == undefined || option == undefined || order == undefined || limit == undefined) {

        if (smallAge == undefined && largeAge == undefined) {
            smallAge = 20;
            largeAge = 29;
            const user = await studentService.searching(smallAge, largeAge, name, option, order, limit);
            res.send(user);

        } else if (name == undefined) {
            const name1 = 'a';
            const user = await studentService.searching(smallAge, largeAge, name1, option, order, limit);
            res.send(user);


        } else if (option == undefined) {
            const option1 = 'fisrtname';
            const user = await studentService.searching(smallAge, largeAge, name, option1, order, limit);
            res.send(user);

        } else if (order == undefined) {
            const order1 = 'ASC';
            const user = await studentService.searching(smallAge, largeAge, name, option, order1, limit);
            res.send(user);

        } else if (limit == undefined) {
            const limit1 = 10;
            const user = await studentService.searching(smallAge, largeAge, name, option, order, limit1);
            res.send(user);

        }else{
            res.status.json({
                message:"please fill all the field"
            });
        }

    } else {
        const user = await studentService.searching(smallAge, largeAge, name, option, order, limit);
        res.send(user);
    }
}
module.exports = {
    createTable,
    getStudents,
    getStudentById,
    deleteStudentById,
    createStudent,
    updateStudentById,
    pickLike,
    fultext,
    order,
    age,
    searching
}