
const rest = require('express/lib/response')
const sql = require('./db.js');


    const Pessoa = function(pessoa) {
      const {nome} = pessoa
      this.nome = nome
      const {apelido} = pessoa
      this.apelido = apelido
      const {n_documento} = pessoa
      this.n_documento = n_documento
      const {foto} = pessoa
      this.foto = foto
      const {telefone1} = pessoa
      this.telefone1 = telefone1
      const {data_nascimento} = pessoa
      this.data_nascimento = data_nascimento
      const {carregar_ficheiro} = pessoa
      this.carregar_ficheiro = carregar_ficheiro
      const {local_de_nascimento} = pessoa
      this.local_de_nascimento = local_de_nascimento
      const {email} = pessoa
      this.email = email
      const {telefone2} = pessoa
      this.telefone2 = telefone2
    };


   Pessoa.create = (pedido, result) => {

      
      
       sql.query("insert into tb_pessoa set ?", pedido, (err, res) => {
        if(err) {
            console.log("erro", err);
            result(err, null);
            return;
        }
        console.log("created user: ", { id: res.id_pessoa, ...pedido });
    result(null, { id: res.id_pessoa, ...pedido });
    
       });
      
   };


Pessoa.findAll = (result) => {

    sql.query("select * from tb_pessoa join tb_funcionario on id_pessoa = tb_pessoa_id_pessoa limit 10000", (erro, resposta) => {

        if(erro){
            console.log(erro)
            result(erro, null)
            return
        }
        result(null, resposta)

    })

}

Pessoa.findOne = (id, result) => {
    sql.query("select * from tb_pessoa join tb_funcionario on id_pessoa = tb_pessoa_id_pessoa and id_pessoa = ?",id, (erro, resposta) => {
        if(erro)
            return
        result(null, resposta)
    })
}

Pessoa.delete = (id, result) => {
    sql.query("delete from tb_pessoa where id_pessoa = ?",id, (erro, aceite) => {

        if(erro){
            result(erro, null)
            return
        }
        result(null, aceite)

            
    })
}


module.exports = Pessoa