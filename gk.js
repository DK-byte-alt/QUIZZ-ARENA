const gkQuestions = [
  { question: "QUS_1: Which is the largest planet in our solar system?", options: [
    { text: "Earth", correct: false },
    { text: "Mars", correct: false },
    { text: "Jupiter", correct: true },
    { text: "Venus", correct: false }
  ]},
  { question: "QUS_2: Who is the father of the nation (India)?", options: [
    { text: "Mahatma Gandhi", correct: true },
    { text: "Jawaharlal Nehru", correct: false },
    { text: "Subhash Chandra Bose", correct: false },
    { text: "Dr. B.R. Ambedkar", correct: false }
  ]},
  { question: "QUS_3: Which is the national animal of India?", options: [
    { text: "Lion", correct: false },
    { text: "Elephant", correct: false },
    { text: "Leopard", correct: false },
    { text: "Tiger", correct: true }
  ]},
  { question: "QUS_4: Which is the smallest continent?", options: [
    { text: "Europe", correct: false },
    { text: "Antarctica", correct: false },
    { text: "Australia", correct: true },
    { text: "South America", correct: false }
  ]},
  { question: "QUS_5: Who was the first Prime Minister of India?", options: [
    { text: "Jawaharlal Nehru", correct: true },
    { text: "Mahatma Gandhi", correct: false },
    { text: "Sardar Patel", correct: false },
    { text: "Rajendra Prasad", correct: false }
  ]},
  { question: "QUS_6: Which planet is known as the Red Planet?", options: [
    { text: "Venus", correct: false },
    { text: "Mars", correct: true },
    { text: "Mercury", correct: false },
    { text: "Saturn", correct: false }
  ]},
  { question: "QUS_7: Who invented the telephone?", options: [
    { text: "Thomas Edison", correct: false },
    { text: "Nikola Tesla", correct: false },
    { text: "Alexander Graham Bell", correct: true },
    { text: "Albert Einstein", correct: false }
  ]},
  { question: "QUS_8: Which is the longest river in the world?", options: [
    { text: "Amazon", correct: false },
    { text: "Ganga", correct: false },
    { text: "Yangtze", correct: false },
    { text: "Nile", correct: true }
  ]},
  { question: "QUS_9: What is the capital of Australia?", options: [
    { text: "Sydney", correct: false },
    { text: "Melbourne", correct: false },
    { text: "Brisbane", correct: false },
    { text: "Canberra", correct: true }
  ]},
  { question: "QUS_10: Which is the national fruit of India?", options: [
    { text: "Mango", correct: true },
    { text: "Banana", correct: false },
    { text: "Apple", correct: false },
    { text: "Guava", correct: false }
  ]},


  { question: "QUS_11: Who discovered gravity?", options: [
    { text: "Albert Einstein", correct: false },
    { text: "Galileo", correct: false },
    { text: "Isaac Newton", correct: true },
    { text: "Copernicus", correct: false }
  ]},
  { question: "QUS_12: Which gas do plants absorb during photosynthesis?", options: [
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: true },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false }
  ]},
  { question: "QUS_13: Which country is known as the Land of the Rising Sun?", options: [
    { text: "China", correct: false },
    { text: "Korea", correct: false },
    { text: "Thailand", correct: false },
    { text: "Japan", correct: true }
  ]},
  { question: "QUS_14: Which is the largest ocean in the world?", options: [
    { text: "Atlantic Ocean", correct: false },
    { text: "Pacific Ocean", correct: true },
    { text: "Indian Ocean", correct: false },
    { text: "Arctic Ocean", correct: false }
  ]},
  { question: "QUS_15: Who was the first man to step on the moon?", options: [
    { text: "Neil Armstrong", correct: true },
    { text: "Yuri Gagarin", correct: false },
    { text: "Buzz Aldrin", correct: false },
    { text: "Michael Collins", correct: false }
  ]},
  { question: "QUS_16: Which is the national bird of India?", options: [
    { text: "Peacock", correct: true },
    { text: "Sparrow", correct: false },
    { text: "Parrot", correct: false },
    { text: "Crow", correct: false }
  ]},
  { question: "QUS_17: What is the currency of Japan?", options: [
    { text: "Won", correct: false },
    { text: "Dollar", correct: false },
    { text: "Yen", correct: true },
    { text: "Peso", correct: false }
  ]},
  { question: "QUS_18: Which organ purifies our blood?", options: [
    { text: "Heart", correct: false },
    { text: "Liver", correct: false },
    { text: "Lungs", correct: false },
    { text: "Kidney", correct: true }
  ]},
  { question: "QUS_19: Which is the fastest land animal?", options: [
    { text: "Horse", correct: false },
    { text: "Tiger", correct: false },
    { text: "Cheetah", correct: true },
    { text: "Leopard", correct: false }
  ]},
  { question: "QUS_20: Which metal is liquid at room temperature?", options: [
    { text: "Iron", correct: false },
    { text: "Mercury", correct: true },
    { text: "Gold", correct: false },
    { text: "Silver", correct: false }
  ]},


  { question: "QUS_21: What is the capital of Canada?", options: [
    { text: "Toronto", correct: false },
    { text: "Vancouver", correct: false },
    { text: "Ottawa", correct: true },
    { text: "Montreal", correct: false }
  ]},
  { question: "QUS_22: Who invented the light bulb?", options: [
    { text: "Tesla", correct: false },
    { text: "Newton", correct: false },
    { text: "Einstein", correct: false },
    { text: "Edison", correct: true }
  ]},
  { question: "QUS_23: Which is the national game of India?", options: [
    { text: "Hockey", correct: true },
    { text: "Cricket", correct: false },
    { text: "Kabaddi", correct: false },
    { text: "Football", correct: false }
  ]},
  { question: "QUS_24: Which gas do humans exhale?", options: [
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: true },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false }
  ]},
  { question: "QUS_25: Which is the hardest natural substance?", options: [
    { text: "Gold", correct: false },
    { text: "Diamond", correct: true },
    { text: "Iron", correct: false },
    { text: "Platinum", correct: false }
  ]},
  { question: "QUS_26: Which planet is closest to the sun?", options: [
    { text: "Venus", correct: false },
    { text: "Earth", correct: false },
    { text: "Mercury", correct: true },
    { text: "Mars", correct: false }
  ]},
  { question: "QUS_27: Who wrote the National Anthem of India?", options: [
    { text: "Rabindranath Tagore", correct: true },
    { text: "Bankim Chandra Chatterjee", correct: false },
    { text: "Mahatma Gandhi", correct: false },
    { text: "Subhash Chandra Bose", correct: false }
  ]},
  { question: "QUS_28: Which blood group is known as universal donor?", options: [
    { text: "O+", correct: false },
    { text: "AB+", correct: false },
    { text: "A+", correct: false },
    { text: "O-", correct: true }
  ]},
  { question: "QUS_29: Which planet is known for its rings?", options: [
    { text: "Mars", correct: false },
    { text: "Uranus", correct: false },
    { text: "Neptune", correct: false },
    { text: "Saturn", correct: true }
  ]},
  { question: "QUS_30: Which is the world's oldest university?", options: [
    { text: "Nalanda University", correct: true },
    { text: "Oxford University", correct: false },
    { text: "Cambridge University", correct: false },
    { text: "AI-Qarawiyyin University", correct: false }
  ]}
];
