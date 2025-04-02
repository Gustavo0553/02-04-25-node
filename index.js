import mysql from 'mysql2';
 
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'sakila',
}).promise();

const result = await pool.query("update `sakila`.`actor` set `last_name`= 'CYPHER' where `actor_id`= 83;");
console.log(result);
