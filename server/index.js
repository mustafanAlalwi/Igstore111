import express  from 'express';
import  mysql  from'mysql';
import bodyParser from 'body-parser';




const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

//MySQL code
const pool = mysql.createPool({
    connectionLimit : 10,
    host            :'localhost',
    user            : 'root',
    password        : '',
    database        :'ice group store'
})


//Get acounts
app.get('/', (req,res) =>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)


        connection.query('SELECT * from accounts', (err,rows)=>{
            connection.release() // return the connection to pool
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})






app.post('/', (req,res) =>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body
        connection.query('INSERT INTO accounts SET ?', params, (err,rows)=>{
            connection.release() // return the connection to pool
            if(!err){
                res.send(`Account with the Record id:${params.email} has benn added`)
            }else{
                console.log(err)
            }
        })
        console.log
    })
})







/// listen on envirement port
app.listen(port, () =>console.log(`sever is live and on port ${port}`))