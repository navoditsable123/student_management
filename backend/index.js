const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "reactconect"
})

app.get("/students", (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) {
            console.log(error)
        } else {
            var sql = "select * from students"
            connection.query(sql, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                } else {
                    return res.json(data)
                }
            })
        }
    })
})
app.post("/students", (req, res) => {

    pool.getConnection((error, connection) => {
        if (error) {
            console.log(error)
        } else {
            // var sql = "create database reactconect"
            //  var sql = "create table students(rollno INT(11) AUTO_INCREMENT PRIMARY KEY , fname varchar(255) , lname  varchar(255), email  varchar(255), course  varchar(255), date varchar(255), gender  varchar(255),state  varchar(255), city  varchar(255), address  varchar(255),pin INT (11))"
            var sql = "insert into students (`fname`,`lname`,`email`,`course`,`date`,`gender`,`state`,`city`,`address`,`pin`) values (?,?,?,?,?,?,?,?,?,?)"
            const values = [
                req.body.fname,
                req.body.lname,
                req.body.email,
                req.body.course,
                req.body.date,
                req.body.gender,
                req.body.state,
                req.body.city,
                req.body.address,
                req.body.pin
            ]
            connection.query(sql, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send({ error: "data not added in database" })
                } else {
                    //  console.log("database created")
                    console.log("data inserted")
                    // console.log("table created")
                    console.log(data)
                    return res.json(data)
                }
            })
        }
    })
})

app.get('/students/get/:rollno', (req, res) => {
    const studentID = req.params.rollno
    pool.getConnection((error, connection) => {
        if (error) {
            console.log(error)
            res.status(500).send(error)
        } else {
            var sql = "select * from students where rollno = ?"
            connection.query(sql, [studentID], (error, result) => {
                if (error) {
                    console.log(error)
                    res.status(500).send(error)
                } else {
                    if (result.length > 0) {
                        console.log(`Data retrieved successfully for id ${studentID}`)
                        res.status(200).json(result[0])
                    } else {
                        console.log("no data found for id")
                        res.status(404).send("No data found for inserted id" + studentID)
                    }
                }
            })
        }
    })
})

app.put("/students/update/:rollno", (req, res) => {
    const studentID = req.params.rollno
    pool.getConnection((error, connection) => {
        if (error) {
            console.log(error)
            return res.status(500).send(error)
        } else {
            var sql = "UPDATE students SET `fname`=?, lname=? , email=?, course=?, date=?, gender=?, state=?, city=?, address=?, pin=? WHERE rollno = ? "


            const values = [
                req.body.fname,
                req.body.lname,
                req.body.email,
                req.body.course,
                req.body.date,
                req.body.gender,
                req.body.state,
                req.body.city,
                req.body.address,
                req.body.pin,
                studentID
            ]
            connection.query(sql, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send({ error: "Error while updating the data" })
                } else {
                    return res.json(data)
                }
            })
        }
    })
})
app.delete("/students/delete/:rollno", (req, res) => {
    const studentID = req.params.rollno
    pool.getConnection((error, connection) => {
        if (error) {
            console.log(error)
            return res.status(500).send(error)
        } else {
            var sql = "Delete from students where rollno = ?"
            connection.query(sql, [studentID], (error, data) => {
                if (error) {
                    console.log(error)
                    res.status(500).send(error)
                } else {
                    console.log("data deleted " + studentID)
                    res.json(data)
                }
            })
        }
    })
})


app.listen(8001, () => {
    console.log("8001 port is running")
})