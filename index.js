const sql = require('mssql/msnodesqlv8');
const obj = require('./config');


async function getDBConnection(){
  const sqlConfig = {
    database: obj.database,
    server: obj.hostname,
    driver: "msnodesqlv8",
    port: obj.port,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      trustedConnection: true,
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }
  await sql.connect(sqlConfig);
  console.log("connection successful...");
}

async function executeQuery(query){
  const result = await sql.query(query);
  console.log(result);
}

async function mainFunction(){
  try {
    await getDBConnection();
    await executeQuery(obj.query);
  } catch(err){
    console.error(err);
  }
}

mainFunction();