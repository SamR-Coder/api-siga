const Pessoa = require('../models/Pessoa.js');



exports.create = (req, mostra) => {
  if(!req.body)
    return mostra.send({message: "Campos não podem ser vazios!!"})
  pessoa = new Pessoa(req.body)
  Pessoa.create(pessoa, (erro, res) => {
    mostra.send(res)
  })
}





exports.findAll = (req, mostra) => {

  Pessoa.findAll((erro, aceite) => {
    if(erro)
      return
    mostra.send(aceite)
  })
  
}

exports.findOne = ({params}, mostra) => {
  const {id} = params
  
  Pessoa.findOne(id, (erro, aceite) => {
    if(erro)
      return
    mostra.send(aceite)
  })
}


exports.delete = ({params}, mostra) =>{

  const {id} = params
  Pessoa.delete(id, (erro, aceite) => {
    if(erro){
      return mostra.send("Deu bug do tipo "+erro);
    }
    mostra.send(aceite)

  })
}

