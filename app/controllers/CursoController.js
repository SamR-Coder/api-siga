const Curso = require('../model/Curso.js');


// Criar e salvar um novo Curso 
exports.create = (req, res) => {
    // Validar solicitação
    if (!req.body.nome_curso) {
      res.staxtus(400).send({
        message: req.body.nome_curso
      });
    }

    // Criar um Curso
    const curso = new Curso({
      nome_curso: req.body.nome_curso
      
       
    });
  
    // Salvar dados de um curso na  base de dados
    Curso.create(curso, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao criar curso."
        });
      else res.send(data);
    });
  };

  // Recupere dados de todos os cursos do banco de dados (com condição).
exports.findAll = (req, res) => {
    const nome_curso = req.query.nome_curso;
    Curso.getAll(nome_curso, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao recuperar os dados."
        });
      else res.send(data);
    });
  };


  exports.findOnde = (req, res) => {
      Curso.findById(req.params.id,(err, data) => {
          if(err) {
              if(err.kind === "not_found"){
                  res.status(404).send({
                      message: `Curso não encontrado com id ${req.params.id}.`
                  });
              }else {
                  res.status(500).send({
                      message: "Erro ao recuperar curso com id" + req.params.id
                  });
              }
          } else res.send(data)
      });
  };
  

  // atualizar dados de um Curso identificado pelo id na solicitação

  exports.update = (req, res) => {
    // Validar solicitação
    if (!req.body) {
      res.status(400).send({
        message: "O conteúdo não pode ficar vazio!"
      });
    }
  
    console.log(req.body);
  
    Curso.update(
      req.params.id,
      new Curso(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Curso não encontrado com id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Erro ao atualizar dados do Curso com id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };


  // Eliminar dados de algum Curso identificado pelo  id na solicitação
  exports.delete = (req, res) => {
    Curso.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Curso não encontrado com id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Ocorreu  algum Erro ao eliminar dados do Curso com id " + req.params.id
          });
        }
      } else res.send({ message: `Dados do curso eliminado com sucesso!` });
    });
  };