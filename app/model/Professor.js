const sql = require('./db.js');

const tabela_selecionada = "tb_professor"

const Professor = function(prof) {

  const {nivel_academico} = prof
  this.nivel_academico = nivel_academico
  
  const {cordenacao} = prof
  this.cordenacao = cordenacao
  
  
  const {tb_funcionario_idfuncionario} = prof
  this.tb_funcionario_idfuncionario = tb_funcionario_idfuncionario  
  
  
  
};





    Professor.create = (pedido, result) => {

        sql.query("insert into "+tabela_selecionada+" set ?", pedido, (err, res) => {
        if(err) {
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id: res.idprofessor, ...pedido });
    result(null, { id: res.idprofessor, ...pedido });
    
        });
      
    }


Professor.findAll = (result) => {

    sql.query("select * from tb_professor join tb_funcionario on idfuncionario = tb_funcionario_idfuncionario limit 1000", (erro, resposta) => {

        if(erro){
            console.log(erro)
            result(erro, null)
            return
        }
        result(null, resposta)

    })

}

Professor.findOne = (id, result) => {
    sql.query("select * from tb_professor join tb_funcionario on idfuncionario = tb_funcionario_idfuncionario and idprofessor = ?",id, (erro, resposta) => {
        if(erro)
            return
        result(null, resposta)
    })
}

Professor.delete = (id, result) => {
    sql.query("delete from "+tabela_selecionada+" where idprofessor = ?",id, (erro, aceite) => {

        if(erro){
            result(erro, null)
            return
        }
        result(null, aceite)

            
    })
}
module.exports = Professor