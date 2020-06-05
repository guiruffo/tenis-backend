// yarn add pg

const Pool = require('pg').Pool;

// 1 - Abrir a conexão
// 2 - Executar o comando SQL (query, insert) 30ms (índice)
// 3 - Fechar a conexão

const pool = new Pool({
    user: 'fvpmjbfbkkohok',
    password: '18cf974044dcc2d0eba982628b7c0894865430916d4b7c05e0f918e66715230d',
    host: 'ec2-54-161-208-31.compute-1.amazonaws.com',
    database: 'd2pub2rn6eak0j',
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
