const moviesQuestions = [
    {
      question: "QUS_1: Which movie features the song 'My Heart Will Go On'?",
      options: [
        { text: "Avatar", correct: false },
        { text: "The Notebook", correct: false }, 
        { text: "Titanic", correct: true },
        { text: "Frozen", correct: false }
      ]
    },
    {
      question: "QUS_2: Who played Iron Man in the Marvel movies?",
      options: [
        { text: "Robert Downey Jr.", correct: true },
        { text: "Chris Evans", correct: false },
        { text: "Tom Holland", correct: false },
        { text: "Mark Ruffalo", correct: false }
      ]
    },
    {
      question: "QUS_3: Which Bollywood movie is known for the dialogue 'Mogambo khush hua'?",
      options: [
        { text: "Sholay", correct: false },
        { text: "Don", correct: false },
        { text: "Deewar", correct: false },
        { text: "Mr. India", correct: true }
      ]
    },
    {
      question: "QUS_4: Which animated movie has characters Elsa and Anna?",
      options: [
        { text: "Moana", correct: false },
        { text: "Brave", correct: false },
        { text: "Frozen", correct: true },
        { text: "Tangled", correct: false }
      ]
    },
    {
      question: "QUS_5: In 'The Dark Knight', who played the role of Joker?",
      options: [
        { text: "Jared Leto", correct: false },
        { text: "Heath Ledger", correct: true },
        { text: "Jack Nicholson", correct: false },
        { text: "Jim Carrey", correct: false }
      ]
    },
    {
      question: "QUS_6: Which Bollywood movie is based on the life of M.S. Dhoni?",
      options: [
        { text: "M.S. Dhoni: The Untold Story", correct: true },
        { text: "83", correct: false },
        { text: "Lagaan", correct: false },
        { text: "Chak De! India", correct: false }
      ]
    },
    {
      question: "QUS_7: Which movie series features the wizarding school Hogwarts?",
      options: [
        { text: "Lord of the Rings", correct: false },
        { text: "The Witcher", correct: false },
        { text: "Harry Potter", correct: true },
        { text: "Twilight", correct: false }
      ]
    },
    {
      question: "QUS_8: Who directed the Bollywood film '3 Idiots'?",
      options: [
        { text: "Karan Johar", correct: false },
        { text: "Sanjay Leela Bhansali", correct: false },
        { text: "Farhan Akhtar", correct: false }, 
        { text: "Rajkumar Hirani", correct: true }
      ]
    },
    {
      question: "QUS_9: Which movie won the Oscar for Best Picture in 2020?",
      options: [
        { text: "1917", correct: false },
        { text: "Parasite", correct: true },
        { text: "Joker", correct: false },
        { text: "Ford v Ferrari", correct: false }
      ]
    },
    {
      question: "QUS_10: Which Bollywood movie has the song 'Tujh Mein Rab Dikhta Hai'?",
      options: [
        { text: "Dilwale Dulhania Le Jayenge", correct: false },
        { text: "Mohabbatein", correct: false },
        { text: "Kal Ho Naa Ho", correct: false },
        { text: "Rab Ne Bana Di Jodi", correct: true }
      ]
    },
    {
      question: "QUS_11: Which actor is known as the 'Khiladi' of Bollywood?",
      options: [
        { text: "Salman Khan", correct: false }, 
        { text: "Akshay Kumar", correct: true },
        { text: "Ajay Devgn", correct: false },
        { text: "Aamir Khan", correct: false }
      ]
    },
    {
      question: "QUS_12: Which superhero movie introduced Black Panther?",
      options: [
        { text: "Captain America: Civil War", correct: true },
        { text: "Black Panther", correct: false },
        { text: "Avengers: Infinity War", correct: false },
        { text: "Avengers: Endgame", correct: false }
      ]
    },
    {
      question: "QUS_13: Which Bollywood movie features the cricket match against the British?",
      options: [
        { text: "Chak De! India", correct: false },
        { text: "83", correct: false },
        { text: "Gold", correct: false },
        { text: "Lagaan", correct: true },
      ]
    },
    {
      question: "QUS_14: Who played Jack in the movie 'Titanic'?",
      options: [
        { text: "Brad Pitt", correct: false },
        { text: "Johnny Depp", correct: false },
        { text: "Leonardo DiCaprio", correct: true },
        { text: "Matt Damon", correct: false }
      ]
    },
    {
      question: "QUS_15: Which Bollywood actor is known as 'King Khan'?",
      options: [
        { text: "Shah Rukh Khan", correct: true },
        { text: "Salman Khan", correct: false },
        { text: "Saif Ali Khan", correct: false },
        { text: "Irrfan Khan", correct: false }
      ]
    },
    {
      question: "QUS_16: Which movie series has the character 'Optimus Prime'?",
      options: [
        { text: "Pacific Rim", correct: false },
        { text: "Transformers", correct: true },
        { text: "Power Rangers", correct: false },
        { text: "Avengers", correct: false }
      ]
    },
    {
      question: "QUS_17: In Bollywood, 'Sholay' was released in which year?",
      options: [
        { text: "1980", correct: false },
        { text: "1970", correct: false },
        { text: "1975", correct: true },
        { text: "1985", correct: false }
      ]
    },
    {
      question: "QUS_18: Which movie features the line 'I am inevitable'?",
      options: [
        { text: "Avengers: Endgame", correct: true },
        { text: "Avengers: Infinity War", correct: false },
        { text: "Thor: Ragnarok", correct: false },
        { text: "Doctor Strange", correct: false }
      ]
    },
    {
      question: "QUS_19: Which Bollywood movie is based on the life of Milkha Singh?",
      options: [
        { text: "Mary Kom", correct: false },
        { text: "Gold", correct: false },
        { text: "Sultan", correct: false },
        { text: "Bhaag Milkha Bhaag", correct: true },
      ]
    },
    {
      question: "QUS_20: Which movie franchise features 'The Minions'?",
      options: [
        { text: "Shrek", correct: false },
        { text: "Despicable Me", correct: true },
        { text: "Kung Fu Panda", correct: false },
        { text: "Inside Out", correct: false }
      ]
    },
    {
      question: "QUS_21: Who directed the Bollywood movie 'Dilwale Dulhania Le Jayenge'?",
      options: [
        { text: "Karan Johar", correct: false },
        { text: "Rohit Shetty", correct: false },
        { text: "Yash Chopra", correct: false },
        { text: "Aditya Chopra", correct: true }
      ]
    },
    {
      question: "QUS_22: In which movie does the character 'Woody' appear?",
      options: [
        { text: "Frozen", correct: false },
        { text: "Zootopia", correct: false },
        { text: "Toy Story", correct: true },
        { text: "The Incredibles", correct: false }
      ]
    },
    {
      question: "QUS_23: Which Bollywood movie is set in a college and features Rancho?",
      options: [
        { text: "Student of the Year", correct: false },
        { text: "Munna Bhai MBBS", correct: false },
        { text: "Chhichhore", correct: false },
        { text: "3 Idiots", correct: true }
      ]
    },
    {
      question: "QUS_24: Which film features the superhero 'Wonder Woman'?",
      options: [
        { text: "Batman v Superman", correct: true },
        { text: "Justice League", correct: false },
        { text: "Suicide Squad", correct: false },
        { text: "Aquaman", correct: false }
      ]
    },
    {
      question: "QUS_25: Which Bollywood film's song is 'Jai Ho'?",
      options: [
        { text: "Dangal", correct: false },
        { text: "Slumdog Millionaire", correct: true },
        { text: "Swades", correct: false },
        { text: "Ra.One", correct: false }
      ]
    },
    {
      question: "QUS_26: In which movie do we hear the line 'Why so serious?'",
      options: [
        { text: "Inception", correct: false },
        { text: "Joker", correct: false },
        { text: "The Dark Knight", correct: true },
        { text: "Suicide Squad", correct: false }
      ]
    },
    {
      question: "QUS_27: Which Bollywood movie features the sport of wrestling?",
      options: [
        { text: "Sultan", correct: false },
        { text: "Dangal", correct: true },
        { text: "Brothers", correct: false },
        { text: "Gold", correct: false }
      ]
    },
    {
      question: "QUS_28: Who directed the Hollywood movie 'Inception'?",
      options: [
        { text: "Steven Spielberg", correct: false },
        { text: "James Cameron", correct: false },
        { text: "Martin Scorsese", correct: false },
        { text: "Christopher Nolan", correct: true }
      ]
    },
    {
      question: "QUS_29: Which Bollywood actor starred in 'PK'?",
      options: [
        { text: "Aamir Khan", correct: true },
        { text: "Salman Khan", correct: false },
        { text: "Shah Rukh Khan", correct: false },
        { text: "Ranbir Kapoor", correct: false }
      ]
    },
    {
      question: "QUS_30: Which movie features the character 'Spider-Man'?",
      options: [
        { text: "Spider-Man", correct: true },
        { text: "Superman Returns", correct: false },
        { text: "Iron Man", correct: false },
        { text: "Doctor Strange", correct: false }
      ]
    }
  ];
  