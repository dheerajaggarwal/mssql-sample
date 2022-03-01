//TODO: define these parameters as per your database configuration.
module.exports = {
  "query": `select * from mytable where id = db_id`,
  "server": "SERVER\\NAME",
  "port": 1433,
  "database": "db_name"
}