
import mysql from 'mysql2/promise';
//import { create } from 'node:domain';

const db =mysql.createPool({

host:"localhost",
user:"root",
password:"root123",         
database:"node_db",
waitForConnections:true,
connectionLimit:10,
queueLimit:0,

})

//database test connection
export function testDbConnection():void {

db.getConnection()
.then((connection)=>{
console.log("Database connected successfully");
connection.release();
})
.catch((error)=>{
console.error("Database connection failed:",error); 

});
}