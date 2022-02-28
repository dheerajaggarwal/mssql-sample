const sql = require('mssql');
const obj = require('./config');


async function getDBConnection(){
  try {
    const sqlConfig = {
      user: obj.username,
      password: obj.password,
      database: obj.database,
      server: obj.hostname,
      port: obj.port,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
    }
    await sql.connect(sqlConfig);
    console.log("connection successful...");
  } catch(error){
    console.log("Connection Failure!!!");
    console.error(error);
  }
}

async function executeQuery(query){
  const result = await sql.query(query);
  console.log(result);
}

async function mainFunction(){
  await getDBConnection();
  await executeQuery(query);
}

mainFunction();