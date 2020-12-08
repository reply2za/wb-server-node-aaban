// grabs data from the local json
let questions = require("./questions.json")
// grabs data from the model from mongoose
const questionModel = require("../models/questions/questionModel")

const findAllQuestions =  () => questionModel.findAllQuestions()

const findQuestionsForQuiz = (qid) =>
    questionModel.findQuestionForQuiz(qid)
    // questions.filter(q => q.quizId === qid)

module.exports = {
  findAllQuestions, findQuestionsForQuiz
}
