const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/Category.json');
const course = require('./Data/Course.json')

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(course);
    }
    else {
        const category_course = course.filter(n => n.category_id === id);
        res.send(category_course);
    }
})

app.get('/course', (req, res) =>{
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectCourses = course.find(n => n._id === id);
    res.send(selectCourses);
    console.log(req.params)
});



app.listen(port, () => {
    console.log("digital course running", port);
})