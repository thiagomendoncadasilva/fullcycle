const express = require('express')
const app = express()
const port = 3000
const config = {
    host:'db',
    user:'root',
    password:'root',
    database:'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

insertNames = function(){
      connection.query(
          "insert into people (name) values ('thiago')", 
  )}

getNames = function(){
    return new Promise(function(resolve, reject){
      connection.query(
          "SELECT name FROM people", 
          function(err, rows){                                                
              if(rows === undefined){
                  reject(new Error("Error rows is undefined"));
              }else{
                  resolve(rows);
              }
          }
      )}
  )}


app.get('/', (req,res)=>{
    insertNames()
    getNames().then(function(results){
        html = "<h1>Full Cycle Rocks!!</h1>"
          html += "<ul>"
          for (var i in results) {
            count = parseInt(i)+parseInt(1)
            html += "<li>" + count +" - "+ results[i].name + "</li>";
        }
          html += "</ul>"
          res.end(html);
    }).catch(function(err){
        console.log("Promise rejection error: "+err);
    })
})

app.listen(port, ()=>{
    console.log('Rodando na porta '+port)
})