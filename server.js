const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const pool = new Pool({
    user: 'ipkklwrcgkvlkz',
    password: '718d173f083e9afb325a3a0191ba92764920b6466f1f560a20a6365a52a8f860',
    host: 'ec2-54-86-170-8.compute-1.amazonaws.com',
    database: 'df3etrr8i5j2sn',
    port: 5432,
    ssl:  { rejectUnauthorized: false }
});

const server = express();

server.use(cors());

server.use(express.json());

server.get('/modelo', async function(request, response) {
    const result = await pool.query('SELECT * FROM modelos');
    return response.json(result.rows);
})

// request.params.id -> /modelo/:id
// request.body -> corpo da mensagem
// request.query.name -> /modelo/?name=abc

server.get('/modelo/search', async function(request, response) {
    const name = request.query.name;
    const sql = `SELECT * FROM modelos WHERE name ILIKE $1`;
    const result = await pool.query(sql, ["%" +  name + "%"]);
    return response.json(result.rows);
})

server.get('/modelo/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `SELECT * FROM modelos WHERE id = $1`
    const result = await pool.query(sql, [id]);
    return response.json(result.rows);
})

server.post('/modelo', async function(request, response) {
    const name = request.body.name; // JSON
    // SQL Injection
    // const sql = `INSERT INTO modelos (name, done) VALUES (`+ name + `, false)`;
    const sql = `INSERT INTO modelos (name, done) VALUES ($1, $2)`;
    await pool.query(sql, [name, false]);
    return response.status(204).send(); 
})

server.delete('/modelo/:id', async function(request, response) { 
    const id = request.params.id;
    const sql = `DELETE FROM modelos WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.put('/modelo/:id', async function(request, response) {
    const id = request.params.id;
    const { name, done } = request.body;
    const sql = `UPDATE modelos SET name = $1, done = $2 WHERE id = $3`;
    await pool.query(sql, [name, done, id]);
    return response.status(204).send();
})

server.patch('/modelo/:id/done', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE modelos SET done = true WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.patch('/modelo/:id/undone', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE modelos SET done = false WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

// escutar um porta com as requisições HTTP:
server.listen(process.env.PORT || 3000);
