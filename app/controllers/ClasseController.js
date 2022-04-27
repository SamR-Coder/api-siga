const Classe = require("../model/Classe.js")

/* CRIAR */
exports.create = (req,res)=>{
    if(!req.body.nome_classe){
        res.status(400).send({
            message: "Campo precisa ser preenchido!"
        })
        return
    }
    const classe = new  Classe({
        nome_classe:req.body.nome_classe
    })

    Classe.create(classe,(err,data)=>{
        if(err){
        
           res.status(500).send({
                message: err.message || "ERRO AO CRIAR!"
            })
            
        }else res.send(data)
    })
}

/* LISTAR */
exports.listAll = (req,res)=>{
    Classe.list((err,dados)=>{
        if(err){
            res.status(500).send({
                
                    message: erro.message || "ERRO AO CRIAR!"
               
            })
        }else res.send(dados)
    })
}

/* DELETE */
exports.delete = (req,res)=>{
    const id_classe = new  Classe({
        id_classe:req.body.id_classe
    })
    Classe.remove(id_classe.id_classe, (err,dados)=>{
        if(err){
            res.status(500).send({
                
                    message: erro.message || "ERRO AO CRIAR!"
               
            })
        }else res.send({message: "Deletada com sucesso"})
    })



    
}


