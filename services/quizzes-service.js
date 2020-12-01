// This service does not deal with request, response,
// that's the controller's job

let quizzes = require("./quizzes.json")

const findAllQuizzes = () => quizzes
const findQuizById = (qid) => quizzes.find(q => q._id === qid)

const deleteQuiz = (qid) => {
  quizzes = quizzes.filter(quiz => quiz._id !== qid)
  return 1;
}

const createQuiz = () => {
  const newQuiz = {_id: (new Date()).getTime() + "", title: "New Quiz"}
  quizzes.push(newQuiz)
  return newQuiz
}

const updateQuiz = (qid, newQuiz) => {
  quizzes = quizzes.map(quiz => quiz._id === qid ? newQuiz : quiz)
  return 1;
}


module.exports = {
  findAllQuizzes: findAllQuizzes,
  findQuizById: findQuizById,
  deleteQuiz,
  createQuiz,
  updateQuiz
}

