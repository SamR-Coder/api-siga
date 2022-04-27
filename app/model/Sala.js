
const res = require('express/lib/response');
const sql = require('./db.js');


    const Sala = function(sala) {
        this.numero_sala= sala.numero_sala;
        
    };


   Sala.create = (newSala, result) => {
       sql.query("insert into tb_sala set ?", newSala, (err, res) => {
        if(err) {
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("created sala: ", { id: res.id_sala, ...newSala });
    result(null, { id: res.id_sala, ...newSala });
    
       });
      
   };

   Sala.getAll = (name, result) => {
    let query = "SELECT * FROM tb_sala";
    if (name) {
      query += ` WHERE name LIKE '%${this.name}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("usuarios: ", res);
      result(null, res);
    });
  };


   Sala.findById = (idusuario, result) => {
       sql.query(`select * from tb_sala where id_sala = ${idusuario}`, (err, res) => {
           if(err) {
               console.log("error:", err);
               result(err, null);
           }
           if(res.length){
               console.log("found sala:", res[0]);
               result(null, res[0]);
               return;
           }
           result({kind: "Not found"}, null);
       });
   };

Sala.update = (idusuario,sala, result) => {
    sql.query("update tb_sala set numero_sala = ? where id_sala =?",
    [sala.numero_sala, idusuario],
    (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }

        if(res.affectedRows == 0){
            // not found sala with the id
            result({kind: "not_found"}, null);
            return;
        }
        console.log("update usuario: ", {idusuario: idusuario, ...sala});
        result(null, {idusuario: idusuario, sala});
    });
};


Sala.remove = (id, result) => {
 
    sql.query(`DELETE FROM tb_sala WHERE id_sala = ?`,[id],
     (err, res) => {
      if (err) { 
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found sala with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted usuario with id: ", id);
      result(null, res);
    });
  };

  module.exports = Sala