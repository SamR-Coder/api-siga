const req = require("express/lib/request")
const res = require("express/lib/response")
const sql = require("./db.js")

const Disciplina = function(disciplina){
  this.nome_disciplina = disciplina.nome_disciplina 
  this.id_disciplina = disciplina.id_disciplina 
}

/* CRIAR */
Disciplina.create = (newdisciplina , resultado_control)=>{
  

    sql.query("INSERT INTO tb_disciplina set ?",newdisciplina,(err, res)=>{
      /* sql.release(); */

      if(err){
        console.log("erro", err);
        resultado_control(err,null)
        return
      }
      /* console.log("created user: ", { id: res.insertId, ...newUser }); */
      console.log("created disciplina: ", { id: res.insertId, ...newdisciplina }); 
      resultado_control(null,{id: res.insertId, ...newdisciplina})

    }
    )
}

/* LISTAR */
Disciplina.listAll = (resultado_control)=>{
  sql.query("SELECT * FROM tb_disciplina",(err, resultado)=>{
    if(err){
      resultado_control(null,err)
      return
    }
    console.log("Disciplina: ", resultado)
    resultado_control(null,resultado)
  })

}

/* LISTAR UM */

Disciplina.listOne = (id,resultado_control)=>{
  sql.query("SELECT * FROM tb_disciplina WHERE id_disciplina = ?",id,(err, resultado)=>{
    if(err){
      resultado_control(null,err)
      return
    }
    console.log("Disciplina: ", resultado)
    resultado_control(null,resultado)
  })

}

/* REMOVER */
Disciplina.delete = (id,resultado_control)=>{
  sql.query("DELETE FROM tb_disciplina WHERE id_disciplina = ?",id,(err, resultado)=>{
    if(err){
      resultado_control(null,err)
      return
    }
    console.log("Disciplina: ", resultado)
    resultado_control(null,resultado)
  })

}


module.exports = Disciplina;