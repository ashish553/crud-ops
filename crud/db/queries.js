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
    const { projectname,sitename,siteurl,gender,normal,disruption,responsetime,availability,ssl,broken,dynamic } = req.body
    pool.query('INSERT INTO users (projectname,sitename,gender,siteurl,normal,disruption,responsetime,availability,ssl,brokenlink,dynamic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',[projectname,sitename,gender,siteurl,parseInt(normal),parseInt(disruption),parseInt(responsetime),availability,ssl,broken,dynamic],(err,results)=>{
        if(err){
            throw err
        }
        res.status(201).send(`User added with ID: ${projectname}`)
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

const updateUser = (req,res) => {
    const {projectname,sitename,gender,id,siteurl,normal,disruption,responsetime,availability,ssl,broken,dynamic} = req.body
    // const id = req.params
    pool.query('UPDATE users SET projectname=$1, sitename=$2, gender=$3, siteurl=$4, normal=$6, disruption=$7, responsetime=$8, availability=$9, ssl=$10, brokenlink=$11, dynamic=$12 WHERE id=$5',[projectname,sitename,gender,siteurl,id,parseInt(normal),parseInt(disruption),parseInt(responsetime),availability,ssl,broken,dynamic],(err,results)=>{
        if(err){
            throw err
        }
        res.status(201).send('Update Successfull')
    })
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}