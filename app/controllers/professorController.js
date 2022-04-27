const Professor = require('../models/Professor.js');



exports.create = (req, mostra) => {
  if(!req.body)
    return mostra.send({message: "Campos não podem ser vazios!!"})
  professor = new Professor(req.body)
  
  Professor.create(professor, (erro, res) => {
    if(erro)
    {
      mostra.send(erro)
    }
    mostra.send(res)
  })
}





exports.findAll = (req, mostra) => {

  Professor.findAll((erro, aceite) => {
    if(erro)
      return
    mostra.send(aceite)
  })
  
}

exports.findOne = ({params}, mostra) => {
  const {id} = params
  
  Professor.findOne(id, (erro, aceite) => {
    if(erro)
      return
    mostra.send(aceite)
  })
}


exports.delete = ({params}, mostra) =>{

  const {id} = params
  Professor.delete(id, (erro, aceite) => {
    if(erro){
      return mostra.send("Deu bug do tipo "+erro);
    }
    mostra.send(aceite)

  })
}

