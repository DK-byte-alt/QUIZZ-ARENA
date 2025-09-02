const techHistoryQuestions = [
  // --- Beginner (QUS_1 to QUS_10) ---
  {
    question: "QUS_1: Who is known as the father of personal computing?",
    options: [
      { text: "Charles Babbage", correct: false },
      { text: "Bill Gates", correct: true },
      { text: "Steve Jobs", correct: false },
      { text: "Alan Turing", correct: false }
    ]
  },
  {
    question: "QUS_2: Who co-founded Apple Inc. with Steve Jobs?",
    options: [
      { text: "Larry Page", correct: false },
      { text: "Tim Berners-Lee", correct: false },
      { text: "Elon Musk", correct: false },
      { text: "Steve Wozniak", correct: true }
    ]
  },
  {
    question: "QUS_3: Who developed Linux?",
    options: [
      { text: "Dennis Ritchie", correct: false },
      { text: "Ken Thompson", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Linus Torvalds", correct: true }
    ]
  },
  {
    question: "QUS_4: Who is considered the father of the computer?",
    options: [
      { text: "Tim Berners-Lee", correct: false },
      { text: "Larry Page", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "QUS_5: Who invented the World Wide Web?",
    options: [
      { text: "Tim Berners-Lee", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Larry Page", correct: false }
    ]
  },
  {
    question: "QUS_6: Who founded Microsoft?",
    options: [
      { text: "Steve Jobs", correct: false },
      { text: "Bill Gates", correct: true },
      { text: "Linus Torvalds", correct: false },
      { text: "Mark Zuckerberg", correct: false }
    ]
  },
  {
    question: "QUS_7: Who is the founder of Facebook?",
    options: [
      { text: "Larry Page", correct: false },
      { text: "Tim Cook", correct: false },
      { text: "Mark Zuckerberg", correct: true },
      { text: "Elon Musk", correct: false }
    ]
  },
  {
    question: "QUS_8: Who co-founded Google with Sergey Brin?",
    options: [
      { text: "Tim Cook", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Larry Page", correct: true }
    ]
  },
  {
    question: "QUS_9: Who is known as the father of artificial intelligence?",
    options: [
      { text: "Alan Turing", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "John McCarthy", correct: true },
      { text: "Elon Musk", correct: false }
    ]
  },
  {
    question: "QUS_10: Who created the programming language C?",
    options: [
      { text: "Dennis Ritchie", correct: true },
      { text: "Ken Thompson", correct: false },
      { text: "Bjarne Stroustrup", correct: false },
      { text: "James Gosling", correct: false }
    ]
  },

  // --- Intermediate (QUS_11 to QUS_20) ---
  {
    question: "QUS_11: Who developed Java programming language?",
    options: [
      { text: "Linus Torvalds", correct: false },
      { text: "Dennis Ritchie", correct: true },
      { text: "James Gosling", correct: false },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "QUS_12: Who is known as the creator of Python?",
    options: [
      { text: "Ken Thompson", correct: false },
      { text: "Linus Torvalds", correct: false },
      { text: "Guido van Rossum", correct: true },
      { text: "Dennis Ritchie", correct: false }
    ]
  },
  {
    question: "QUS_13: Who invented email?",
    options: [
      { text: "Ray Tomlinson", correct: true },
      { text: "Tim Berners-Lee", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "QUS_14: Who is the CEO of Tesla and SpaceX?",
    options: [
      { text: "Mark Zuckerberg", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Larry Page", correct: false },
      { text: "Elon Musk", correct: true }
    ]
  },
  {
    question: "QUS_15: Who founded Amazon?",
    options: [
      { text: "Jeff Bezos", correct: false },
      { text: "Mark Zuckerberg", correct: true },
      { text: "Steve Jobs", correct: false },
      { text: "Larry Page", correct: false }
    ]
  },
  {
    question: "QUS_16: Who invented the telephone?",
    options: [
      { text: "Alexander Graham Bell", correct: false },
      { text: "Nikola Tesla", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "James Watt", correct: false }
    ]
  },
  {
    question: "QUS_17: Who is known as the father of the internet?",
    options: [
      { text: "Vint Cerf", correct: true },
      { text: "Tim Berners-Lee", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Alan Turing", correct: false }
    ]
  },
  {
    question: "QUS_18: Who co-founded Intel?",
    options: [
      { text: "Steve Jobs", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Jeff Bezos", correct: false },
      { text: "Gordon Moore", correct: true }
    ]
  },
  {
    question: "QUS_19: Who is called the father of computer science?",
    options: [
      { text: "Alan Turing", correct: false },
      { text: "John von Neumann", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Tim Berners-Lee", correct: false }
    ]
  },
  {
    question: "QUS_20: Who is the founder of Tesla?",
    options: [
      { text: "Elon Musk", correct: true },
      { text: "Larry Page", correct: false },
      { text: "Jeff Bezos", correct: false },
      { text: "Bill Gates", correct: false }
    ]
  },

  // --- Advanced (QUS_21 to QUS_30) ---
  {
    question: "QUS_21: Who invented the transistor?",
    options: [
      { text: "John Bardeen, William Shockley, Walter Brattain", correct: true },
      { text: "Alan Turing", correct: false },
      { text: "Tim Cook", correct: false },
      { text: "Nikola Tesla", correct: false }
    ]
  },
  {
    question: "QUS_22: Who is known as the father of algorithms?",
    options: [
      { text: "Charles Babbage", correct: false },
      { text: "Bill Gates", correct: false },
      { text: "Al-Khwarizmi", correct: true },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "QUS_23: Who developed the first successful microprocessor?",
    options: [
      { text: "Bill Gates", correct: false },
      { text: "Linus Torvalds", correct: false },
      { text: "Marc Andreessen", correct: false },
      { text: "Intel (4004 chip)", correct: true }
    ]
  },
  {
    question: "QUS_24: Who created the first web browser?",
    options: [
      { text: "Tim Cook", correct: false },
      { text: "Elon Musk", correct: false },
      { text: "Tim Berners-Lee", correct: true },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "QUS_25: Who founded Oracle Corporation?",
    options: [
      { text: "Steve Jobs", correct: false },
      { text: "Larry Ellison", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Jeff Bezos", correct: false }
    ]
  },
  {
    question: "QUS_26: Who invented the modern computer mouse?",
    options: [
      { text: "Alan Turing", correct: false },
      { text: "Douglas Engelbart", correct: true },
      { text: "Charles Babbage", correct: false },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    question: "QUS_27: Who invented the first mechanical computer?",
    options: [
      { text: "Bill Gates", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "John von Neumann", correct: false },
      { text: "Alan Turing", correct: false }
    ]
  },
  {
    question: "QUS_28: Who is the co-founder of Twitter?",
    options: [
      { text: "Mark Zuckerberg", correct: false },
      { text: "Jack Dorsey", correct: true },
      { text: "Elon Musk", correct: false },
      { text: "Bill Gates", correct: false }
    ]
  },
  {
    question: "QUS_29: Who is the CEO of Google (Alphabet Inc.) as of 2025?",
    options: [
      { text: "Satya Nadella", correct: false },
      { text: "Sundar Pichai", correct: false },
      { text: "Larry Page", correct: false },
      { text: "Sundar Pichai", correct: true }
    ]
  },
  {
    question: "QUS_30: Who is the current CEO of Microsoft (2025)?",
    options: [
      { text: "Satya Nadella", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Ballmer", correct: false },
      { text: "Larry Page", correct: false }
    ]
  }
];
