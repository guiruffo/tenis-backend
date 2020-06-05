// yarn add pg

const Pool = require('pg').Pool;

// 1 - Abrir a conexão
// 2 - Executar o comando SQL (query, insert) 30ms (índice)
// 3 - Fechar a conexão

const pool = new Pool({
    user: 'ipkklwrcgkvlkz',
    password: '718d173f083e9afb325a3a0191ba92764920b6466f1f560a20a6365a52a8f860',
    host: 'ec2-54-86-170-8.compute-1.amazonaws.com',
    database: 'df3etrr8i5j2sn',
    port: 5432,
    ssl:  { rejectUnauthorized: false }
});

// const sql = `
//     CREATE TABLE IF NOT EXISTS modelos
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
        INSERT INTO modelos (name, done) 
            VALUES ('Nike', true)
`;

pool.query(sql_insert, function(error, result) {
    if(error)
        throw error;

    console.log(result.rowCount);
})
// SELECT

// const sql_select = `SELECT * FROM modelos`;

// pool.query(sql_select, function(error, result) { 
//     if(error)
//         throw error;

//     console.log(result.rows);
// })
