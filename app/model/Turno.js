const req = require("express/lib/request")
const res = require("express/lib/response")
const sql = require("./db.js")

const Turno = function(turno){
  this.nome_turno= turno.nome_turno
}

Turno.create = (turnoNew, resultado_control)=>{
    sql.query("INSERT INTO tb_turno set ?",turnoNew,(err, res)=>{
      /* sql.release(); */
      if(err){
        console.log("erro", err);
        resultado_control(err,null)
        return
      }
      /* console.log("created user: ", { id: res.insertId, ...newUser }); */
      console.log("created user: ", { id: res.insertId, ...turnoNew }); 
      resultado_control(null,{id: res.insertId, ...turnoNew})

    }
    )
}

Turno.list = (resultado_control)=>{
  sql.query("SELECT * FROM tb_turno",(err, resultado)=>{
    if(err){
      resultado_control(null,err)
      return
    }
    console.log("turnos: ", resultado)
    resultado_control(null,resultado)
  })

}

module.exports = Turno;