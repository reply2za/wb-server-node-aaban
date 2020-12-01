
const quizzesService = require("../services/quizzes-service")

module.exports = (app) => {

  const findAllQuizzes = (req, res) =>
      res.send(quizzesService.findAllQuizzes())

  const findQuizById = (req, res) =>
      res.send(quizzesService.findQuizById(req.params['qid']))

  const deleteQuiz = (req, res) => {
    const qid = req.params.qid
    res.send(quizzesService.deleteQuiz(qid))
  }

  const createQuiz = (req, res) =>
      res.send(quizzesService.createQuiz())

  const updateQuiz = (req, res) => {
    const qid = req.params.qid;
    const newQuiz = req.body;
    res.send(quizzesService.updateQuiz(qid, newQuiz))
  }


  app.get("/api/quizzes", findAllQuizzes)
  app.get("/api/quizzes/:qid", findQuizById)
  app.delete("/api/quizzes/:qid", deleteQuiz)
  app.post("/api/quizzes", createQuiz)
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

