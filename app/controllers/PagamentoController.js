const Pagamento = require('../model/Pagamento.js');


// Criar e salvar dados de um novo Pagamento 
exports.create = (req, res) => {
    // Validar solicitação
    if (!req.body.data_pagamento)  {
      res.staxtus(400).send({
        message: req.body.data_pagamento
      });
    }
    if (!req.body.tipo_pagamento)  {
      res.staxtus(400).send({
        message: req.body.tipo_pagamento
      });
    }

    // Criar dados de um Pagamento
    const pagamento = new Pagamento({
      data_pagamento: req.body.data_pagamento,
      tipo_pagamento: req.body.tipo_pagamento
       
    });
  
    // Salvar dados de Pagamento na  base de dados
    Pagamento.create(pagamento, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao criar um pagamento."
        });
      else res.send(data);
    });
  };

  // Recupere todos os dados de pagamentos do banco de dados (com condição).
exports.findAll = (req, res) => {
    const data_pagamento = req.query.data_pagamento;
    Pagamento.getAll(data_pagamento, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao recuperar os dados."
        });
      else res.send(data);
    });
  };


  exports.findOnde = (req, res) => {
      Pagamento.findById(req.params.id,(err, data) => {
          if(err) {
              if(err.kind === "not_found"){
                  res.status(404).send({
                      message: `Dados de Pagamento não encontrado com id ${req.params.id}.`
                  });
              }else {
                  res.status(500).send({
                      message: "Erro ao recuperar dados de pagamento com id" + req.params.id
                  });
              }
          } else res.send(data)
      });
  };
  

  // atualizar dados de algum pagamento identificado pelo id na solicitação

  exports.update = (req, res) => {
    // Validar solicitação
    if (!req.body) {
      res.status(400).send({
        message: "O conteúdo não pode ficar vazio!"
      });
    }
  
    console.log(req.body);
  
    Pagamento.update(
      req.params.id,
      new Pagamento(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Dados de Pagamento não encontrado com id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Ocorreu algum Erro ao atualizar dados de pagamento com id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };


  //  Eliminar dados de algum pagamento identificado pelo  id na solicitação  
  exports.delete = (req, res) => {
    Pagamento.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Dados de Pagamento não encontrado com id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Ocorreu  algum Erro ao eliminar dados de pagamento com id " + req.params.id
          });
        }
      } else res.send({ message: `Dados de pagamento eliminado com sucesso!` });
    });
  };