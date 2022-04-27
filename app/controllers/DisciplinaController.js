
const Disciplina = require("../model/Disciplina.js")

exports.create = (req,res)=>{
    if(!req.body.nome_disciplina){
        res.status(400).send({
            message: "Campo precisa ser preenchido!"
        })
        return
    }

    const disciplina = new  Disciplina({
        nome_disciplina:req.body.nome_disciplina
    
    })
    
    Disciplina.create(disciplina,(err,data)=>{
        if(err){
        
           res.status(500).send({
                message: err.message || "ERRO AO CRIAR!"
            })
            
        }else res.send(data)
    })
}

exports.listAll = (req,res)=>{
    Disciplina.listAll((err,dados)=>{
        if(err){
            res.status(500).send({
                
                    message: err.message || "ERRO AO CRIAR!"
               
            })
        }else res.send(dados)
    })
}

exports.delete = (req,res)=>{
    const id_disciplina = new Disciplina({
        id_disciplina:req.body.id_disciplina
    })

    Disciplina.delete(id_disciplina.id_disciplina,(err,dados)=>{
        if(err){
            res.status(500).send({
                message: err.message || "ERRO AO CRIAR!"
            })
        }else {
            
            res.send("Deletada com sucesso")
        }
    })
}