module.exports = app => {

    const turnocontroller = require("../controllers/TurnoController")
    const classecontroller = require("../controllers/ClasseController")
    const disciplinacontroller = require("../controllers/DisciplinaController")
    
    var router = require("../../node_modules/express/lib/express").Router();
    
    /* ROTA CLASSE */
    router.post("/classe_create", classecontroller.create);
    router.get("/classe_listAll", classecontroller.listAll);
    router.delete("/classe_delete", classecontroller.delete);

    /* ROTA TURNO */
    router.post("/turno_create", turnocontroller.create);
    router.get("/turno_listAll", turnocontroller.listAll);

    /* ROTA DISCIPLINA */
    router.post("/disciplina_create", disciplinacontroller.create);
    router.get("/disciplina_listAll", disciplinacontroller.listAll);
    router.delete("/disciplina_delete", disciplinacontroller.delete);


     app.use('/api',router);
  };