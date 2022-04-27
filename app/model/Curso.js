
const res = require('express/lib/response');
const sql = require('./db.js');


    const Curso = function(curso) {
        this.nome_curso= curso.nome_curso;
        
    };


   Curso.create = (newCurso, result) => {
       sql.query("insert into tb_curso set ?", newCurso, (err, res) => {
        if(err) {
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("created curso: ", { id: res.idcurso, ...newCurso });
    result(null, { id: res.idcurso, ...newCurso });
    
       });
      
   };

   Curso.getAll = (name, result) => {
    let query = "SELECT * FROM tb_curso";
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


   Curso.findById = (idusuario, result) => {
       sql.query(`select * from tb_curso where idcurso = ${idusuario}`, (err, res) => {
           if(err) {
               console.log("error:", err);
               result(err, null);
           }
           if(res.length){
               console.log("found curso:", res[0]);
               result(null, res[0]);
               return;
           }
           result({kind: "Not found"}, null);
       });
   };

Curso.update = (idusuario,curso, result) => {
    sql.query("update tb_curso set nome_curso = ? where idcurso =?",
    [curso.nome_curso, idusuario],
    (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }

        if(res.affectedRows == 0){
            // not found Curso with the id
            result({kind: "not_found"}, null);
            return;
        }
        console.log("update usuario: ", {idusuario: idusuario, ...curso});
        result(null, {idusuario: idusuario, curso});
    });
};


Curso.remove = (id, result) => {
 
    sql.query(`DELETE FROM tb_curso WHERE idcurso = ?`,[id],
     (err, res) => {
      if (err) { 
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found curso with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted usuario with id: ", id);
      result(null, res);
    });
  };

  module.exports = Curso