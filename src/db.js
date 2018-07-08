var Database = require('arangojs').Database;

const DBNAME = "legoto",
  DBUSER = "legoto",
  DBPASS = ""

const COLLECTIONS = {
  users:"users",
  products:"products",
  reviews:"reviews"
}

var db = new Database();
db.useDatabase(DBNAME);
db.useBasicAuth(DBUSER,DBPASS);

const query = async (q) => {
  return  db.query(q).then(
    cursor => cursor.all()
  ).then(
    result => result,
    err => {
      return {
        "statusCode":"500",
        "message":"Internal Server Error"
      }
    }).catch(err => {
      return {
        "statusCode":"500",
        "message":"Internal Server Error"
      }
  });
}

export default query;
