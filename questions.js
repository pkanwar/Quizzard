
function getSportsQuestions(){

  return [
    {
      question :  "who won the ballon d'or 2018 ?",
      options : ["lionel messi","luka modric","cristiano ronaldo","robert lewandowski"],
      answer : "luka modric"

    },
    {
      question :  "who was highest run scorer in ICC cricket world cup 2019 ?",
      options : ["Steve Smith","Virat Kohli","Kane Williamson","Rohit Sharma"],
      answer : "Rohit Sharma"
    },
    {
      question :  "which team won la liga  2020?",
      options : ["Real Madrid","Barcelona","Real Sociedad","Atletico Madrid"],
      answer : "Real Madrid"
    },
    {
      question :  "which team won English Premier League 2020?",
      options : ["Aston Villa","Arsenal","Chelsea","Liverpool"],
      answer : "Liverpool"

    },
    {
      question :  "which team won the IPL 2020?",
      options : ["Mumbai Indians","Delhi Capitals","Sunrisers Hyderabadh","Chennai Super Kings"],
      answer : "Mumbai Indians"

    },

  ]

}

function getGKQuestions(){

  return [
    {
      question :  "With which of the following was satyajit Ray associated : ",
      options : ["Commercial art","Classical Music","Classical Dance","Direction of films"],
      answer : "Direction of films"

    },
    {
      question :  "Who is the author of the book 'Freedom Behind Bars' ?",
      options : ["Kiran Bedi","Jawaharlal Nehru","Nelson Mandela","Sheikh Abdullah"],
      answer : "Kiran Bedi"
    },
    {
      question :  "Who was known as the 'Father of Lok sabha' ? ",
      options : ["Anantasayanam","Bashyam","Mavlankar","Zkir Hussain"],
      answer : "Mavlankar"
    },
    {
      question :  "Which places is said to be the cathedral city of india?",
      options : ["Benaras","Kancheepuram","Madurai","Bhubaneswar"],
      answer : "Bhubaneswar"
    },
     {
      question :  "The famous Rock Garden is located in which city?",
      options : ["Jaipur"," Shimla","Lucknow","Chandigarh"],
      answer : "Chandigarh"
    }
  ]

}

function getScienceQuestions(){

  return [
    {
      question :  "________ is a chemical reaction between substances, usually including oxygen and usually accompanied by the generation of heat and light in the form of flame",
      options : ["combustion","condenstation","titration","none of the above"],
      answer : "combustion"

    },
    {
      question :  "Honey bees are often seen sitting on flowers. Why do they do so?",
      options : ["They like flowers","They lay eggs on flowers","They suck nectar from flowers","All of the Above"],
      answer : "All of the Above"
    },
    {
      question :  "Animals and plants have certain features which make them to survive in a particular habitat. This is called : ",
      options : ["adaptation","speciation","specialisation","evolution"],
      answer : "adaptation"
    },
    {
      question :  "Which is a biotic component of environment?",
      options : ["Plants","Animals","Micro-organisms","All of these"],
      answer : "All of these"
    },
     {
      question :  "Major part of the air is constituted by : ",
      options : ["nitrogen","oxgen","Helium","Carbon Dioxide"],
      answer : "nitrogen"
    }
  ]

}

module.exports.getSportsQuestions = getSportsQuestions
module.exports.getScienceQuestions = getScienceQuestions
module.exports.getGKQuestions = getGKQuestions