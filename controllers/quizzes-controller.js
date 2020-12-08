// controller talks to the service, which talks to the DB
const quizzesService = require("../services/quizzes-service")

module.exports = (app) => {

  const findAllQuizzes = (req, res) => {
    quizzesService.findAllQuizzes()
    .then(quizzes => res.send(quizzes))
  }

  const findQuizById = (req, res) => {
    quizzesService.findQuizById(req.params.qid)
    .then(quiz => res.send(quiz))
  }

  const deleteQuiz = (req, res) => {
    const qid = req.params.qid
    quizzesService.deleteQuiz(qid)
    .then(status => res.send(status))
  }

  const createQuiz = (req, res) =>
      quizzesService.createQuiz()
  .then(quiz => res.send(quiz))

  const updateQuiz = (req, res) => {
    const qid = req.params.qid;
    const newQuiz = req.body;
    console.log(newQuiz)
    quizzesService.updateQuiz(qid, newQuiz)
    .then(status => res.send(status))
  }


  app.get("/api/quizzes", findAllQuizzes)
  app.get("/api/quizzes/:qid", findQuizById)
  app.post("/api/quizzes", createQuiz)
  app.delete("/api/quizzes/:qid", deleteQuiz)
  app.put("/api/quizzes/:qid", updateQuiz)
}


// // Non-shortened way of defining everything
// module.exports = function quizzesService(app) {
//   let quizzes = [
//     {
//       _id: "123",
//       title: "Q1"
//     },
//     {
//       _id: "234",
//       title: "Q2"
//     },
//     {
//       _id: "345",
//       title: "Q3"
//     }
//   ]
//
//   app.get("/api/quizzes", (req, res) =>
//       res.send(quizzes))
//
//   app.get("/api/quizzes/:qid", (req, res) =>
//       res.send(quizzes.find(q => q._id === req.params['qid'])))
// }

