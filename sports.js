const sportsQuestions = [

  // Cricket
  {
    question: "QUS_1: Who is known as the 'God of Cricket'?",
    options: [
      { text: "Virat Kohli", correct: false },
      { text: "Sachin Tendulkar", correct: true },
      { text: "Ricky Ponting", correct: false },
      { text: "Brian Lara", correct: false }
    ]
  },
  {
    question: "QUS_2: Which country won the ICC World Cup 2019?",
    options: [
      { text: "India", correct: false },
      { text: "Australia", correct: false },
      { text: "New Zealand", correct: false },
      { text: "England", correct: true }
    ]
  },
  {
    question: "QUS_3: Who was the captain of India when they won the 2007 T20 World Cup?",
    options: [
      { text: "Sourav Ganguly", correct: false },
      { text: "Virender Sehwag", correct: false },
      { text: "Rahul Dravid", correct: false },
      { text: "MS Dhoni", correct: true }
    ]
  },
  {
    question: "QUS_4: Which bowler has the most wickets in Test cricket?",
    options: [
      { text: "Shane Warne", correct: false },
      { text: "James Anderson", correct: false },
      { text: "Muttiah Muralitharan", correct: true },
      { text: "Anil Kumble", correct: false }
    ]
  },
  {
    question: "QUS_5: In which year did India win its first Cricket World Cup?",
    options: [
      { text: "1983", correct: true },
      { text: "1987", correct: false },
      { text: "1996", correct: false },
      { text: "2011", correct: false }
    ]
  },
  {
    question: "QUS_6: Which Indian player is called 'The Wall'?",
    options: [
      { text: "VVS Laxman", correct: false },
      { text: "Virat Kohli", correct: false },
      { text: "Rahul Dravid", correct: true },
      { text: "Kapil Dev", correct: false }
      
    ]
  },
  {
    question: "QUS_7: Which cricketer is known as 'Mr. 360'?",
    options: [
      { text: "AB de Villiers", correct: true },
      { text: "Glenn Maxwell", correct: false },
      { text: "Chris Gayle", correct: false },
      { text: "Kieron Pollard", correct: false }
    ]
  },
  {
    question: "QUS_8: Which country hosted the 2015 Cricket World Cup?",
    options: [
      { text: "India", correct: false },
      { text: "South Africa", correct: false },
      { text: "England", correct: false },
      { text: "Australia & New Zealand", correct: true }
    ]
  },
  {
    question: "QUS_9: Who was the first batsman to score a double century in ODI cricket?",
    options: [
      { text: "Rohit Sharma", correct: false },
      { text: "Virender Sehwag", correct: false },
      { text: "Sachin Tendulkar", correct: true },
      { text: "Martin Guptill", correct: false }
    ]
  },
  {
    question: "QUS_10: How many players are there in a cricket team (on field)?",
    options: [
      { text: "10", correct: false },
      { text: "11", correct: true },
      { text: "12", correct: false },
      { text: "9", correct: false }
    ]
  },



  // Kabaddi
  {
    question: "QUS_11: Which country is the origin of Kabaddi?",
    options: [
      { text: "Nepal", correct: false },
      { text: "India", correct: true },
      { text: "Bangladesh", correct: false },
      { text: "Pakistan", correct: false }
    ]
  },
  {
    question: "QUS_12: How many players are allowed in a Kabaddi team on the court?",
    options: [
      { text: "7", correct: true },
      { text: "5", correct: false },
      { text: "8", correct: false },
      { text: "6", correct: false }
    ]
  },
  {
    question: "QUS_13: Which league is associated with Kabaddi in India?",
    options: [
      { text: "Kabaddi Premier League", correct: false },
      { text: "Indian Kabaddi Cup", correct: false },
      { text: "Super Kabaddi League", correct: false },
      { text: "Pro Kabaddi League", correct: true }
    ]
  },
  {
    question: "QUS_14: In Kabaddi, what is 'Super Raid'?",
    options: [
      { text: "A raid scoring 2 points", correct: false },
      { text: "A raid without touching anyone", correct: false },
      { text: "A raid scoring 3 or more points", correct: true },
      { text: "A raid that lasts 30 seconds", correct: false }
    ]
  },
  {
    question: "QUS_15: Who is known as the 'Poster Boy of Kabaddi'?",
    options: [
      { text: "Rahul Chaudhari", correct: true },
      { text: "Anup Kumar", correct: false },
      { text: "Pardeep Narwal", correct: false },
      { text: "Ajay Thakur", correct: false }
    ]
  },



  // Wrestling/WWE
  {
    question: "QUS_16: Who is known as 'The Undertaker'?",
    options: [
      { text: "John Cena", correct: false },
      { text: "Mark Calaway", correct: true },
      { text: "Triple H", correct: false },
      { text: "Shawn Michaels", correct: false }
    ]
  },
  {
    question: "QUS_17: Which wrestler is called 'The Rock'?",
    options: [
      { text: "Stone Cold", correct: false },
      { text: "Roman Reigns", correct: false },
      { text: "Dwayne Johnson", correct: true },
      { text: "Brock Lesnar", correct: false }
    ]
  },
  {
    question: "QUS_18: Who has the most WrestleMania wins?",
    options: [
      { text: "Triple H", correct: false },
      { text: "John Cena", correct: false },
      { text: "Hulk Hogan", correct: false },
      { text: "The Undertaker", correct: true }
    ]
  },
  {
    question: "QUS_19: Which title did Brock Lesnar win at UFC?",
    options: [
      { text: "Lightweight Championship", correct: false },
      { text: "Featherweight Championship", correct: false },
      { text: "Middleweight Championship", correct: false },
      { text: "Heavyweight Championship", correct: true }
    ]
  },
  {
    question: "QUS_20: Who is known as 'The Big Dog' in WWE?",
    options: [
      { text: "Roman Reigns", correct: true },
      { text: "John Cena", correct: false },
      { text: "The Miz", correct: false },
      { text: "Edge", correct: false }
    ]
  },



  // Football
  {
    question: "QUS_21: Who won the FIFA World Cup 2022?",
    options: [
      { text: "France", correct: false },
      { text: "Argentina", correct: true },
      { text: "Brazil", correct: false },
      { text: "Germany", correct: false }
    ]
  },
  {
    question: "QUS_22: Which player has won the most Ballon d'Or awards?",
    options: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Ronaldinho", correct: false },
      { text: "Lionel Messi", correct: true },
      { text: "Zidane", correct: false }
    ]
  },
  {
    question: "QUS_23: Which country hosted the FIFA World Cup in 2018?",
    options: [
      { text: "Russia", correct: true },
      { text: "Qatar", correct: false },
      { text: "Brazil", correct: false },
      { text: "Germany", correct: false }
    ]
  },
  {
    question: "QUS_24: How many players are on the field for one football team?",
    options: [
      { text: "10", correct: false },
      { text: "12", correct: false },
      { text: "9", correct: false },
      { text: "11", correct: true }
    ]
  },
  {
    question: "QUS_25: Who is known as 'El Fenomeno'?",
    options: [
      { text: "Ronaldinho", correct: false },
      { text: "Ronaldo Nazário", correct: true },
      { text: "Kaka", correct: false },
      { text: "Neymar", correct: false }
    ]
  },


  
  // Mixed/Other Sports
  {
    question: "QUS_26: Who is known as the fastest man alive (100m sprint)?",
    options: [
      { text: "Tyson Gay", correct: false },
      { text: "Yohan Blake", correct: false },
      { text: "Usain Bolt", correct: true },
      { text: "Carl Lewis", correct: false }
    ]
  },
  {
    question: "QUS_27: In Tennis, what is 'deuce'?",
    options: [
      { text: "Game point", correct: false },
      { text: "40-40 score", correct: true },
      { text: "Set point", correct: false },
      { text: "Match point", correct: false }
    ]
  },
  {
    question: "QUS_28: Which country has won the most Olympic gold medals?",
    options: [
      { text: "China", correct: false },
      { text: "USA", correct: true },
      { text: "Russia", correct: false },
      { text: "Germany", correct: false }
    ]
  },
  {
    question: "QUS_29: Michael Jordan is associated with which sport?",
    options: [
      { text: "Baseball", correct: false },
      { text: "Tennis", correct: false },
      { text: "Athletics", correct: false },
      { text: "Basketball", correct: true }
    ]
  },
  {
    question: "QUS_30: What is the national sport of Japan?",
    options: [
      { text: "Sumo Wrestling", correct: true },
      { text: "Karate", correct: false },
      { text: "Judo", correct: false },
      { text: "Kendo", correct: false }
    ]
  }
];
