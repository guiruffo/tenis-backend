// yarn add pg

const Pool = require('pg').Pool;

// 1 - Abrir a conexão
// 2 - Executar o comando SQL (query, insert) 30ms (índice)
// 3 - Fechar a conexão

const pool = new Pool({
    user: 'badefamtpsspmy',
    password: '51fe1e6485419fa6d19f8db993e7dc37be22cadeab7f05834760d39ffce09461',
    host: 'ec2-35-171-31-33.compute-1.amazonaws.com',
    database: 'd8b39cu34g2696',
    port: 5432,
    ssl:  { rejectUnauthorized: false }
});

// const sql = `
//     CREATE TABLE IF NOT EXISTS tarefas
//     (
//         ID serial primary key,
//         name varchar(200) not null,
//         done boolean
//     )
// `;

// pool.query(sql, function(error, result) {
//     if(error) 
//         throw error
    
//     console.log('Tabela criada com sucesso!');
// })


// INSERT
const sql_insert = `
        INSERT INTO tarefas (name, done) 
            VALUES ('Assistir La Casa de Papel', true)
`;

pool.query(sql_insert, function(error, result) {
    if(error)
        throw error;

    console.log(result.rowCount);
})

// SELECT

// const sql_select = `SELECT * FROM tarefas`;

// pool.query(sql_select, function(error, result) { 
//     if(error)
//         throw error;

//     console.log(result.rows);
// })