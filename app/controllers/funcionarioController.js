const Funcionario = require('../models/Funcionario.js');



exports.create = (req, mostra) => {
  if(!req.body)
    return mostra.send({message: "Campos não podem ser vazios!!"})
  funcionario = new Funcionario(req.body)
  
  Funcionario.create(funcionario, (erro, res) => {
    if(erro)
    {
      mostra.send(erro)
    }
    mostra.send(res)
  })
}





exports.findAll = (req, mostra) => {

  Funcionario.findAll((erro, aceite) => {
    if(erro)
      return
    mostra.send(aceite)
  })
  
}

exports.findOne = ({params}, mostra) => {
  const {id} = params
  
  Funcionario.findOne(id, (erro, aceite) => {
    if(erro)
      return
    mostra.send(aceite)
  })
}


exports.delete = ({params}, mostra) =>{

  const {id} = params
  Funcionario.delete(id, (erro, aceite) => {
    if(erro){
      return mostra.send("Deu bug do tipo "+erro);
    }
    mostra.send(aceite)

  })
}

