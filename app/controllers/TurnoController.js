
const Turno = require("../model/Turno.js")

exports.create = (req,res)=>{
    if(!req.body.nome_disciplina){
        res.status(400).send({
            message: "Campo precisa ser preenchido!"
        })
        return
    }

    const turno = new  Turno({
        nome_turno:req.body.nome_turno
    })

    Turno.create(turno,(err,data)=>{
        if(err){
        
           res.status(500).send({
                message: err.message || "ERRO AO CRIAR!"
            })
            
        }else res.send(data)
    })
}

exports.listAll = (req,res)=>{
    Turno.list((err,dados)=>{
        if(err){
            res.status(500).send({
                
                    message: erro.message || "ERRO AO CRIAR!"
               
            })
        }else res.send(dados)
    })
}

