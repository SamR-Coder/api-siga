const req = require("express/lib/request")
const res = require("express/lib/response")
const sql = require("./db.js")

const Classe = function(classe){
  this.nome_classe = classe.nome_classe 
  this.id_classe = classe.id_classe 
}

/* CRIAR */
Classe.create = (newclasse , resultado_control)=>{
    sql.query("INSERT INTO tb_classe set ?",newclasse,(err, res)=>{
      /* sql.release(); */

      if(err){
        console.log("erro", err);
        resultado_control(err,null)
        return
      }
      /* console.log("created user: ", { id: res.insertId, ...newUser }); */
      console.log("created classe: ", { id: res.insertId, ...newclasse }); 
      resultado_control(null,{id: res.insertId, ...newclasse})

    }
    )
}

/* LISTAR */
Classe.list = (resultado_control)=>{
  sql.query("SELECT * FROM tb_classe",(err, resultado)=>{
    if(err){
      resultado_control(null,err)
      return
    }
    console.log("classe: ", resultado)
    resultado_control(null,resultado)
  })

}

/* REMOVER */
Classe.remove = (id,resultado_control)=>{
  sql.query("DELETE FROM tb_classe WHERE id_classe = ?",id,(err, resultado)=>{
    if(err){
      resultado_control(null,err)
      return
    }
    console.log("Classe Deletada ", id)
    resultado_control(null,resultado)
  })

}


module.exports = Classe;