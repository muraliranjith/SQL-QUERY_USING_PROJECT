const express = require('express');
const api = require('./route/student')

const app = express();

const port = 8000;

// middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use('/api/students',api)
app.get('/',(req,res)=>{
    res.send('welcome');
})
app.listen(port, () => {

    console.log(`Server running at http://localhost: ${port}`);
});
