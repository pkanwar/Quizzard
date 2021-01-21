const readLineSync = require('readline-sync');
let quizModule = require('./questions')

function playQuiz()
{

  console.log("Welcome to Quizzard !!")

  let play = readLineSync.question("Want to Play ? Please press y to continue , any other key to exit : ")

   while(play === 'y')
      {
        let score = 0
        console.log("we have 3 topics for the quiz : Sports, General Knowledge, Science . Please choose the topic of which you want to play the quiz . \n")
        console.log("1. Sports")
        console.log("2. Science")
        console.log("3. General Knowledge\n")
        let topic = readLineSync.question("Please press 1 for Sports, 2 for Science, 3 for General Knowledge , any other key to quit : ")

        if(topic==="1" || topic==="2" || topic==="3"){

          let quiz
          if(topic==="1"){
            quiz = quizModule.getSportsQuestions()
          }else if(topic==="2"){
            quiz = quizModule.getScienceQuestions()
          }else{
            quiz = quizModule.getGKQuestions()
          }

          let numberOfQuestions = quiz.length
          console.log(`you have to answer ${numberOfQuestions} questions. You will get 0 for incorrect reponse , 10 for correct response. Lets start :) \n `)
          let index = 1;
          for(ele of quiz){
            console.log(index +") "+ ele.question)
            let optionlength = ele.options.length
            for(let i = 0;i < optionlength; i++){
                console.log("\t" + (i+1) + ". " + ele.options[i])
            }
            console.log()
            let ansIndex = readLineSync.question("please enter your option : ")
            console.log()
            while(ansIndex!=="1" && ansIndex!=="2" && ansIndex!=="3" && ansIndex!="4"){
              ansIndex = readLineSync.question("Invalid option!! please enter your option : ")
            }

            console.log()
            let ans = parseInt(ansIndex) 
            if(ele.answer === ans){
                console.log("Your answer is correct")
                score += 10

            }else{
              console.log("Your answer is incorrect")
            }

            console.log("Your response : " + ele.options[ansIndex - 1])
            console.log("Correct answer : " + ele.options[ele.answer-1])

            if(index <= (numberOfQuestions-1)){
              let press = readLineSync.question("\npress enter to continue : ")
            }
            console.log()
            console.log()
            index += 1
          }

        }else{
          break
        }

        console.log("Thanks for playing . Your score is : " + score)

        play = readLineSync.question("Want to play again ? Please press y to continue , any other key to exit : ")

      }

    console.log("\nThanks for your participation. I hope you had a great time :) ")

}

module.exports.playQuiz = playQuiz