const db = require('../db.connection')



const createTable = async () => {
    return new Promise((res, req) => {
        db.query("CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY,fisrtname VARCHAR(255),lastname VARCHAR(255),age VARCHAR(255), department VARCHAR(255))", (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}
const getStudents = async (sql) => {
    return new Promise((res, req) => {
        db.query('select * from students', (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}

const getStudentById = (id) => {
    return new Promise((res, req) => {
        db.query(`select * from students where id=?`, [id], (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
};

const deleteById = async (id) => {
    return new Promise((res, req) => {
        db.query('Delete from students where id=?', [id], (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}
const createStudent = async (payload) => {
    return new Promise((res, req) => {
        db.query("insert into students values(null,'" + payload.fisrtname + "','" + payload.lastname + "','" + payload.age + "','" + payload.department + "')", (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}

const updateById = async (id, payload) => {
    return new Promise((res, req) => {
        db.query("update students set name='" + payload.name + "',age= " + payload.age + ",department='" + payload.department + "' where id=? ", [id], (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}
const pickLike = async (payload,name) => {
    return new Promise((res) => {
        db.query(`select * from students where ${name} LIKE '${payload}%'`, (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}
const getOrder = async(payload,order,limit)=>{
    return new Promise((res)=>{
        db.query(`SELECT * FROM students ORDER BY ${payload} ${order} LIMIT ${limit} `,(err,rows)=>{
            if(err){
                console.log('error',err);
            }
            return res(rows);
        })
    })
}

const concat = async (name) => {
    return new Promise((res) => {

        db.query(`SELECT * FROM students WHERE CONCAT(fisrtname, ' ', lastname) LIKE '%${name}%'`, (err, result) => {
            if (err) {
                console.log("error", err);
            }
            return res(result);
        })
    })
}
const ageCompaire = async(small,large,limit)=>{
    return new Promise((res)=>{
        db.query(`select * from students where age >='${small}' and age<='${large}' LIMIT ${limit}`,(err,rows)=>{
            if(err){
                console.log('error',err);
            }
            return res(rows);
        })
    })
}
module.exports = {
    createTable,
    getStudents,
    getStudentById,
    deleteById,
    createStudent,
    updateById,
    pickLike,
    concat,
    getOrder,
    ageCompaire

}