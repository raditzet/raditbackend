const router = require('express').Router()
const conn = require('../connections/connection')

router.post('/categories',async (req,res)=>{
    var sql = `INSERT INTO categories SET ?;`
    
    var sql2 = `SELECT * FROM categories`
    var data = req.body

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err)

            res.send(result)
        })
    })
})

router.patch('/categories/:catgId', (req, res) => { 
    const sql = `UPDATE categories SET ? WHERE id = ?`
    
    const data = [req.body, req.params.catgId]

    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err.mess)

        res.send(result)
    })
})


router.delete('/categories/delete', (req, res) => { 
    const sql = `DELETE FROM categories WHERE id = ?`
    const data = req.body.id

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})


router.get('/categories/catgAll', (req, res) => { 
    const sql = `SELECT * FROM categories`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.message)

        const categories = result

        if(!categories) return res.send("Categories not found")

        res.send({
            categories
        })
    })
})


module.exports = router