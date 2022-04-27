  const sql = require('./db.js');

  const tabela_selecionada = "tb_funcionario"

  const Funcionario = function(funcionario) {

    const {funcao_funcionario} = funcionario
    this.funcao_funcionario = funcao_funcionario
    
    const {cargo_funcionario} = funcionario
    this.cargo_funcionario = cargo_funcionario
    
    
    const {departamento_do_funcionario} = funcionario
    this.departamento_do_funcionario = departamento_do_funcionario  
    
    const {tb_pessoa_id_pessoa} = funcionario 
    this.tb_pessoa_id_pessoa = tb_pessoa_id_pessoa
    
  };





      Funcionario.create = (pedido, result) => {

          sql.query("insert into "+tabela_selecionada+" set ?", pedido, (err, res) => {
          if(err) {
              console.log("erro", err);
              result(err, null);
              return;
          }
          console.log("created user: ", { id: res.idfuncionario, ...pedido });
      result(null, { id: res.idfuncionario, ...pedido });
      
          });
        
      }


  Funcionario.findAll = (result) => {

      sql.query("select * from tb_funcionario join tb_pessoa on id_pessoa = tb_pessoa_id_pessoa limit 1000000", (erro, resposta) => {

          if(erro){
              console.log(erro)
              result(erro, null)
              return
          }
          result(null, resposta)

      })

  }

  Funcionario.findOne = (id, result) => {
      sql.query("select * from tb_funcionario join tb_pessoa on id_pessoa = tb_pessoa_id_pessoa and idfuncionario = ?",id, (erro, resposta) => {
          if(erro)
              return
          result(null, resposta)
      })
  }

  Funcionario.delete = (id, result) => {
      sql.query("delete from "+tabela_selecionada+" where idfuncionario = ?",id, (erro, aceite) => {

          if(erro){
              result(erro, null)
              return
          }
          result(null, aceite)

              
      })
  }
module.exports = Funcionario