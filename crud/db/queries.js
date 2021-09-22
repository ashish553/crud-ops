const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my',
    host: 'localhost',
    password: 'ashish',
    database: 'api',
    port: 5432,
})

const getUsers = (req,res)=>{
    pool.query('SELECT * FROM users ORDER BY id ASC',(err,results)=>{
        if(err){
            throw err;
        }
        // res.sendFile(__dirname+'../public/html/form.html')
        return res.status(200).json(results.rows)

    })
}

const getUsersById = (req,res)=>{

    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users WHERE id=$1',[id],(err,results)=>{
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const createUser = (req,res)=>{
    const { name,email } = req.body
    pool.query('INSERT INTO users (name,email) VALUES ($1, $2)',[name,email],(err,results)=>{
        if(err){
            throw err
        }
        res.status(201).send(`User added with ID: ${name}`)
    })
}

const deleteUser = (req,res) => {
    const id = req.params.id
    pool.query('DELETE FROM users WHERE id=$1',[id],(err,results)=>{
        if(err){
            throw err
        }
        res.status(200)
    })
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser
}