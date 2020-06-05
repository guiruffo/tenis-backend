const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const pool = new Pool({
    user: 'fvpmjbfbkkohok',
    password: '18cf974044dcc2d0eba982628b7c0894865430916d4b7c05e0f918e66715230d',
    host: 'ec2-54-161-208-31.compute-1.amazonaws.com',
    database: 'd2pub2rn6eak0j',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

const server = express();

server.use(cors());

server.use(express.json());


server.get('/modelos', async function(request, response){
    const result = await pool.query ('SELECT * FROM modelo');
})

server.listen(process.env.PORT || 3000);
