const express = require('express');
const bodyparser = require('body-parser')
const app = express();
var cors = require('cors')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cors())

//port
port = process.env.PORT || 5000

//sample students list
let students = [
    {
        id: 1,
        name: 'Rahul',
        age: 19,
        class: '12',
        rollNo: 34,
        dob: '12-Feb-1999'

    },
    {
        id: 2,
        name: 'Yash',
        age: 17,
        class: '11',
        rollNo: 5,
        dob: '25-June-1997'

    },
    {
        id: 3,
        name: 'Harshit',
        age: 18,
        class: '12',
        rollNo: 12,
        dob: '2-Nov-2000'

    },
    {
        id: 4,
        name: 'Abhishek',
        age: 16,
        class: '10',
        rollNo: 43,
        dob: '21-Jan-2001'

    },
    {
        id: 6,
        name: 'Umang',
        age: 20,
        class: '12',
        rollNo: 23,
        dob: '21-March-2000'

    },
    {
        id: 7,
        name: 'Deepanshu',
        age: 18,
        class: '10',
        rollNo: 2,
        dob: '31-Aug-1999'

    },
    {
        id: 8,
        name: 'Mukul',
        age: 16,
        class: '8',
        rollNo: 43,
        dob: '13-Dec-2003'

    },
    {
        id: 9,
        name: 'Hritik',
        age: 21,
        class: '12',
        rollNo: 29,
        dob: '9-Sept-1998'

    }

]
//get request for all students
app.get('/students', (req, res) => {
    if (students.length == 0) {
        res.send('List is empty')
        return
    }
    res.send(students);
})

//get request for specific student
app.get('/students/:id', (req, res) => {
    const student = students.find(x => x.id === parseInt(req.params.id))
    if (!student) {
        res.send('Student not found')
        return
    }
    res.send(student)
})

//listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})