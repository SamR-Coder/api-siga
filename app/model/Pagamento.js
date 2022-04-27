
const res = require('express/lib/response');
const sql = require('./db.js');


    const Pagamento = function(pagamento) {
        this.data_pagamento= pagamento.data_pagamento;
        this.tipo_pagamento= pagamento.tipo_pagamento;
    };


   Pagamento.create = (newPagamento, result) => {
       sql.query("insert into tb_Pagamento set ?", newPagamento, (err, res) => {
        if(err) {
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("created pagamento: ", { id: res.id_pagamento, ...newPagamento });
    result(null, { id: res.id_Pagamento, ...newPagamento });
    
       });
      
   };

   Pagamento.getAll = (name, result) => {
    let query = "SELECT * FROM tb_pagamento";
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


   Pagamento.findById = (idusuario, result) => {
       sql.query(`select * from tb_pagamento where id_pagamento = ${idusuario}`, (err, res) => {
           if(err) {
               console.log("error:", err);
               result(err, null);
           }
           if(res.length){
               console.log("found pagamento:", res[0]);
               result(null, res[0]);
               return;
           }
           result({kind: "Not found"}, null);
       });
   };

Pagamento.update = (idusuario,pagamento, result) => {
    sql.query("update tb_pagamento set data_pagamento = ?, tipo_pagamento = ? where id_pagamento =?",
    [pagamento.data_pagamento,pagamento.tipo_pagamento, idusuario],
    (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }

        if(res.affectedRows == 0){
            // not found pagamento with the id
            result({kind: "not_found"}, null);
            return;
        }
        console.log("update usuario: ", {idusuario: idusuario, ...pagamento});
        result(null, {idusuario: idusuario, pagamento});
    });
};


Pagamento.remove = (id, result) => {
 
    sql.query(`DELETE FROM tb_pagamento WHERE id_pagamento = ?`,[id],
     (err, res) => {
      if (err) { 
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found pagamento with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted usuario with id: ", id);
      result(null, res);
    });
  };

  module.exports = Pagamento