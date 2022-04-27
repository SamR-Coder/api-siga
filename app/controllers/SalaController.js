const Sala = require('../model/Sala.js');


// Criar e salvar uma nova Sala 
exports.create = (req, res) => {
    // Validar solicitação
    if (!req.body.numero_sala) {
      res.staxtus(400).send({
        message: req.body.numero_sala
      });
    }

    // Criar uma Sala
    const sala = new Sala({
      numero_sala: req.body.numero_sala
      
       
    });
  
    // Salvar sala na  base de dados
    Sala.create(sala, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao criar a sala."
        });
      else res.send(data);
    });
  };

  // Recupere todos os usuários do banco de dados (com condição).
exports.findAll = (req, res) => {
    const numero_sala = req.query.numero_sala;
    Sala.getAll(numero_sala, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao recuperar os dados."
        });
      else res.send(data);
    });
  };


  exports.findOnde = (req, res) => {
      Sala.findById(req.params.id,(err, data) => {
          if(err) {
              if(err.kind === "not_found"){
                  res.status(404).send({
                      message: `Sala não encontrada com id ${req.params.id}.`
                  });
              }else {
                  res.status(500).send({
                      message: "Erro ao recuperar sala com id" + req.params.id
                  });
              }
          } else res.send(data)
      });
  };
  

  // atualizar um usuário identificado pelo id na solicitação

  exports.update = (req, res) => {
    // Validar solicitação
    if (!req.body) {
      res.status(400).send({
        message: "O conteúdo não pode ficar vazio!"
      });
    }
  
    console.log(req.body);
  
    Sala.update(
      req.params.id,
      new Sala(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Sala não encontrado com id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Erro ao atualizar sala com id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };


  // Eliminar dados duma sala identificado pelo  id na solicitação 
  exports.delete = (req, res) => {
    Sala.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Sala não encontrada com id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Ocorreu  algum Erro ao eliminar dados da sala com id " + req.params.id
          });
        }
      } else res.send({ message: `Dados da sala eliminadas com sucesso!` });
    });
  };