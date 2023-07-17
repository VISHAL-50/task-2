const quizData = [
    {
      "question": "What is the capital of France?",
      "options": [
        "London",
        "Paris",
        "Berlin",
        "Rome"
      ],
      "answer": "Paris"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": [
        "Mars",
        "Jupiter",
        "Saturn",
        "Earth"
      ],
      "answer": "Jupiter"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo"
      ],
      "answer": "Leonardo da Vinci"
    },
    {
      "question": "What is the chemical symbol for the element Iron?",
      "options": [
        "Fe",
        "Ir",
        "In",
        "Io"
      ],
      "answer": "Fe"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": [
        "Mercury",
        "Venus",
        "Mars",
        "Neptune"
      ],
      "answer": "Mars"
    },
    {
      "question": "Who is the author of the Harry Potter book series?",
      "options": [
        "J.K. Rowling",
        "Stephen King",
        "George R.R. Martin",
        "C.S. Lewis"
      ],
      "answer": "J.K. Rowling"
    },
    {
      "question": "What is the tallest mountain in the world?",
      "options": [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley"
      ],
      "answer": "Mount Everest"
    },
    {
      "question": "Which country is known as the 'Land Down Under'?",
      "options": [
        "United States",
        "Canada",
        "Australia",
        "New Zealand"
      ],
      "answer": "Australia"
    },
    {
      "question": "Who is credited with discovering electricity?",
      "options": [
        "Isaac Newton",
        "Nikola Tesla",
        "Thomas Edison",
        "Benjamin Franklin"
      ],
      "answer": "Benjamin Franklin"
    },
    {
      "question": "What is the chemical symbol for the element Gold?",
      "options": [
        "Go",
        "Au",
        "Gl",
        "Gd"
      ],
      "answer": "Au"
    },
    {
      "question": "Who wrote the play 'Romeo and Juliet'?",
      "options": [
        "William Shakespeare",
        "Oscar Wilde",
        "Arthur Miller",
        "Anton Chekhov"
      ],
      "answer": "William Shakespeare"
    },
    {
      "question": "What is the largest ocean on Earth?",
      "options": [
        "Indian Ocean",
        "Atlantic Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
      ],
      "answer": "Pacific Ocean"
    },
    {
      "question": "Who is the founder of Microsoft?",
      "options": [
        "Bill Gates",
        "Steve Jobs",
        "Mark Zuckerberg",
        "Jeff Bezos"
      ],
      "answer": "Bill Gates"
    },
    {
      "question": "Which country is famous for its tulips?",
      "options": [
        "Netherlands",
        "France",
        "Germany",
        "Italy"
      ],
      "answer": "Netherlands"
    },
    {
      "question": "What is the largest land animal?",
      "options": [
        "Elephant",
        "Giraffe",
        "Hippopotamus",
        "Rhinoceros"
      ],
      "answer": "Elephant"
    },
    {
      "question": "Who painted the ceiling of the Sistine Chapel?",
      "options": [
        "Leonardo da Vinci",
        "Michelangelo",
        "Raphael",
        "Vincent van Gogh"
      ],
      "answer": "Michelangelo"
    },
    {
      "question": "What is the chemical symbol for the element Sodium?",
      "options": [
        "S",
        "Na",
        "So",
        "Sa"
      ],
      "answer": "Na"
    },
    {
      "question": "Which planet is known as the 'Blue Planet'?",
      "options": [
        "Mercury",
        "Venus",
        "Earth",
        "Uranus"
      ],
      "answer": "Earth"
    },
    {
      "question": "Who wrote the novel 'Pride and Prejudice'?",
      "options": [
        "Emily Bronte",
        "Charlotte Bronte",
        "Jane Austen",
        "Virginia Woolf"
      ],
      "answer": "Jane Austen"
    },
    {
      "question": "What is the tallest tree species on Earth?",
      "options": [
        "Sequoia",
        "Oak",
        "Pine",
        "Birch"
      ],
      "answer": "Sequoia"
    },
    {
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": [
        "China",
        "Japan",
        "Thailand",
        "India"
      ],
      "answer": "Japan"
    },
    {
      "question": "Who invented the telephone?",
      "options": [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Albert Einstein",
        "Galileo Galilei"
      ],
      "answer": "Alexander Graham Bell"
    },
    {
      "question": "What is the chemical symbol for the element Calcium?",
      "options": [
        "Ca",
        "Ce",
        "Cm",
        "Co"
      ],
      "answer": "Ca"
    },
    {
      "question": "Who is the author of the novel 'To Kill a Mockingbird'?",
      "options": [
        "Harper Lee",
        "John Steinbeck",
        "Ernest Hemingway",
        "F. Scott Fitzgerald"
      ],
      "answer": "Harper Lee"
    },
    {
      "question": "What is the largest bird in the world?",
      "options": [
        "Eagle",
        "Ostrich",
        "Penguin",
        "Albatross"
      ],
      "answer": "Ostrich"
    },
    {
      "question": "Who is the artist behind the painting 'The Starry Night'?",
      "options": [
        "Pablo Picasso",
        "Salvador Dali",
        "Vincent van Gogh",
        "Claude Monet"
      ],
      "answer": "Vincent van Gogh"
    },
    {
      "question": "What is the chemical symbol for the element Oxygen?",
      "options": [
        "Ox",
        "Oy",
        "Og",
        "O"
      ],
      "answer": "O"
    },
    {
      "question": "Which country is known for the Great Wall?",
      "options": [
        "China",
        "Russia",
        "India",
        "United States"
      ],
      "answer": "China"
    },
    {
      "question": "Who wrote the play 'Hamlet'?",
      "options": [
        "William Shakespeare",
        "Tennessee Williams",
        "George Bernard Shaw",
        "Samuel Beckett"
      ],
      "answer": "William Shakespeare"
    },
    {
      "question": "What is the largest animal in the world?",
      "options": [
        "Blue whale",
        "Giraffe",
        "Elephant",
        "Hippopotamus"
      ],
      "answer": "Blue whale"
    },
    {
      "question": "Who is the artist behind the painting 'The Last Supper'?",
      "options": [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
        "Vincent van Gogh"
      ],
      "answer": "Leonardo da Vinci"
    },
    {
      "question": "What is the chemical symbol for the element Potassium?",
      "options": [
        "Pt",
        "Po",
        "P",
        "K"
      ],
      "answer": "K"
    },
    {
      "question": "Which country is known for the Taj Mahal?",
      "options": [
        "India",
        "Egypt",
        "Brazil",
        "Italy"
      ],
      "answer": "India"
    },
    {
      "question": "Who is the author of the novel '1984'?",
      "options": [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "F. Scott Fitzgerald"
      ],
      "answer": "George Orwell"
    },
    {
      "question": "What is the fastest land animal?",
      "options": [
        "Cheetah",
        "Lion",
        "Gazelle",
        "Leopard"
      ],
      "answer": "Cheetah"
    },
    {
      "question": "Who is the artist behind the sculpture 'David'?",
      "options": [
        "Michelangelo",
        "Auguste Rodin",
        "Pablo Picasso",
        "Donatello"
      ],
      "answer": "Michelangelo"
    },
    {
      "question": "What is the chemical symbol for the element Carbon?",
      "options": [
        "Ca",
        "C",
        "Co",
        "Cr"
      ],
      "answer": "C"
    },
    {
      "question": "Which country is known as the 'Land of the Midnight Sun'?",
      "options": [
        "Norway",
        "Canada",
        "Sweden",
        "Finland"
      ],
      "answer": "Norway"
    },
    {
      "question": "Who wrote the novel 'The Catcher in the Rye'?",
      "options": [
        "J.D. Salinger",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "Mark Twain"
      ],
      "answer": "J.D. Salinger"
    },
    {
      "question": "What is the largest reptile in the world?",
      "options": [
        "Crocodile",
        "Lizard",
        "Tortoise",
        "Snake"
      ],
      "answer": "Crocodile"
    },
    {
      "question": "Who is the artist behind the painting 'The Persistence of Memory'?",
      "options": [
        "Salvador Dali",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Claude Monet"
      ],
      "answer": "Salvador Dali"
    },
    {
      "question": "What is the chemical symbol for the element Nitrogen?",
      "options": [
        "N",
        "Ni",
        "Ne",
        "Na"
      ],
      "answer": "N"
    },
    {
      "question": "Which country is known as the 'Land of Fire and Ice'?",
      "options": [
        "Iceland",
        "Greenland",
        "Canada",
        "Russia"
      ],
      "answer": "Iceland"
    },
    {
      "question": "Who is the author of the novel 'Moby-Dick'?",
      "options": [
        "Herman Melville",
        "Mark Twain",
        "Charles Dickens",
        "Jules Verne"
      ],
      "answer": "Herman Melville"
    },
    {
      "question": "What is the largest fish species in the world?",
      "options": [
        "Tuna",
        "Shark",
        "Whale shark",
        "Dolphin"
      ],
      "answer": "Whale shark"
    },
    {
      "question": "Who is the artist behind the painting 'The Birth of Venus'?",
      "options": [
        "Leonardo da Vinci",
        "Michelangelo",
        "Sandro Botticelli",
        "Raphael"
      ],
      "answer": "Sandro Botticelli"
    },
    {
      "question": "What is the chemical symbol for the element Silver?",
      "options": [
        "Si",
        "Ag",
        "Au",
        "Sv"
      ],
      "answer": "Ag"
    },
    {
      "question": "Which country is known for the Pyramids of Giza?",
      "options": [
        "Greece",
        "Egypt",
        "Turkey",
        "Mexico"
      ],
      "answer": "Egypt"
    },
    {
      "question": "Who wrote the novel 'The Great Gatsby'?",
      "options": [
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "John Steinbeck",
        "Virginia Woolf"
      ],
      "answer": "F. Scott Fitzgerald"
    },
    {
      "question": "What is the largest land carnivore?",
      "options": [
        "Polar bear",
        "Lion",
        "Tiger",
        "Grizzly bear"
      ],
      "answer": "Polar bear"
    },
    {
      "question": "Who is the artist behind the painting 'Guernica'?",
      "options": [
        "Salvador Dali",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Claude Monet"
      ],
      "answer": "Pablo Picasso"
    },
    {
      "question": "What is the chemical symbol for the element Hydrogen?",
      "options": [
        "Hg",
        "Hd",
        "Hy",
        "H"
      ],
      "answer": "H"
    },
    {
      "question": "Which country is known for the Colosseum?",
      "options": [
        "Italy",
        "France",
        "Spain",
        "Greece"
      ],
      "answer": "Italy"
    }
  ];
  
  
  const question = document.querySelector('.question');
  const option1 = document.querySelector('#opt1');
  const option2= document.querySelector('#opt2');
  const option3 = document.querySelector('#opt3');
  const option4 = document.querySelector('#opt4');
  
  const submit = document.querySelector('#submit');
  const answers = document.querySelectorAll('.answer');
  const showScore = document.querySelector('#showScore');

  const randomNumber = Math.floor(Math.random() * 40); 

    console.log(randomNumber); 

  let qc = randomNumber;
  let lq = qc+10;
  let score = 0;
  
  const loadQuestion = () => {
  
      const questionList =  quizData[qc]
      question.innerHTML = questionList.question
      option1.innerText = questionList.options[0]
      option2.innerText = questionList.options[1]
      option3.innerText = questionList.options[2]
      option4.innerText = questionList.options[3]
  
  
  }
  
  loadQuestion();

  const getcheckans=()=>{
    let answer;
    answers.forEach((ces)=>{
      if (ces.checked) {
        answer = ces.id;
   
        }
        
        
    });
    let label = document.querySelector(`label[for="${answer}"]`);
    let labelText = label.textContent;
    return labelText;

  }
  const deselectall=()=>{
    answers.forEach((ces)=>ces.checked=false);
  }

  submit.addEventListener('click',()=>{

    const checkans = getcheckans();
    if (checkans === quizData[qc].answer) {
      score++;
     
    }
    
    qc++;
    
    if (qc < lq) {
      loadQuestion();
      deselectall();
    } else {
      let scoreText = '';
      if (score <= 3) {
        
        scoreText = 'try again - status:Fail';

      } else if (score >= 4 && score <= 6) {
        scoreText = 'Good - status:pass';
      } else if (score === 10) {
        scoreText = 'Excellent - status:pass';
      } else {
        scoreText = 'Pass';
      }
    
      showScore.innerHTML = `
        <h3>You scored ${score}/10   &#128077;</h3>
        <h4>${scoreText}</h4>
        <button class="btn" onclick="location.reload()">Play Again</button>
      `;
      showScore.classList.remove('scoreA');
    }
    


  });
  
  