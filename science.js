const scienceQuestions = [

    // Physics (10)
    {
      question: "QUS_1: What is the speed of light in vacuum?",
      options: [
        { text: "3 × 10^6 m/s", correct: false },
        { text: "3 × 10^8 m/s", correct: true },
        { text: "3 × 10^5 km/s", correct: false },
        { text: "1.5 × 10^8 m/s", correct: false }
      ]
    },
    {
      question: "QUS_2: Who proposed the law of gravitation?",
      options: [
        { text: "Albert Einstein", correct: false },
        { text: "Galileo Galilei", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "James Clerk Maxwell", correct: false }
      ]
    },
    {
      question: "QUS_3: SI unit of force is?",
      options: [
        { text: "Newton", correct: true },
        { text: "Watt", correct: false },
        { text: "Pascal", correct: false },
        { text: "Joule", correct: false }
      ]
    },
    {
      question: "QUS_4: What type of lens is used in magnifying glass?",
      options: [
        { text: "Concave lens", correct: false },
        { text: "Plano-concave lens", correct: false },
        { text: "Cylindrical lens", correct: false },
        { text: "Convex lens", correct: true }
      ]
    },
    {
      question: "QUS_5: What is the unit of electric resistance?",
      options: [
        { text: "Ampere", correct: false },
        { text: "Ohm", correct: true },
        { text: "Volt", correct: false },
        { text: "Farad", correct: false }
      ]
    },
    {
      question: "QUS_6: What is the frequency of AC current in India?",
      options: [
        { text: "60 Hz", correct: false },
        { text: "100 Hz", correct: false },
        { text: "50 Hz", correct: true },
        { text: "30 Hz", correct: false }
      ]
    },
    {
      question: "QUS_7: Which law states that current is directly proportional to voltage?",
      options: [
        { text: "Faraday’s Law", correct: false },
        { text: "Ohm’s Law", correct: true },
        { text: "Newton’s Law", correct: false },
        { text: "Hooke’s Law", correct: false }
      ]
    },
    {
      question: "QUS_8: Which device converts AC to DC?",
      options: [
        { text: "Transformer", correct: false },
        { text: "Rectifier", correct: true },
        { text: "Generator", correct: false },
        { text: "Capacitor", correct: false }
      ]
    },
    {
      question: "QUS_9: Which physical quantity is measured in Joule?",
      options: [
        { text: "Power", correct: false },
        { text: "Force", correct: false },
        { text: "Pressure", correct: false },
        { text: "Energy", correct: true }
      ]
    },
    {
      question: "QUS_10: What is the escape velocity from Earth?",
      options: [
        { text: "11.2 km/s", correct: true },
        { text: "7.9 km/s", correct: false },
        { text: "9.8 km/s", correct: false },
        { text: "13 km/s", correct: false }
      ]
    },
  

    // Chemistry (10)
    {
      question: "QUS_11: What is the chemical formula of water?",
      options: [
        { text: "H2O", correct: true },
        { text: "O2", correct: false },
        { text: "CO2", correct: false },
        { text: "HO2", correct: false }
      ]
    },
    {
      question: "QUS_12: Who is known as the father of modern chemistry?",
      options: [
        { text: "Dalton", correct: false },
        { text: "Mendeleev", correct: false },
        { text: "Boyle", correct: false },
        { text: "Lavoisier", correct: true }
      ]
    },
    {
      question: "QUS_13: Which gas is used in fire extinguishers?",
      options: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Hydrogen", correct: false }
      ]
    },
    {
      question: "QUS_14: Atomic number of Oxygen is?",
      options: [
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "7", correct: false },
        { text: "9", correct: false }
      ]
    },
    {
      question: "QUS_15: Which acid is found in lemon?",
      options: [
        { text: "Acetic acid", correct: false },
        { text: "Formic acid", correct: false },
        { text: "Lactic acid", correct: false },
        { text: "Citric acid", correct: true }
      ]
    },
    {
      question: "QUS_16: pH value less than 7 indicates?",
      options: [
        { text: "Acidic solution", correct: true },
        { text: "Neutral solution", correct: false },
        { text: "Basic solution", correct: false },
        { text: "Salty solution", correct: false }
      ]
    },
    {
      question: "QUS_17: Chemical symbol of Sodium is?",
      options: [
        { text: "So", correct: false },
        { text: "Na", correct: true },
        { text: "Sn", correct: false },
        { text: "S", correct: false }
      ]
    },
    {
      question: "QUS_18: The metal used in galvanization is?",
      options: [
        { text: "Copper", correct: false },
        { text: "Tin", correct: false },
        { text: "Lead", correct: false },
        { text: "Zinc", correct: true }
      ]
    },
    {
      question: "QUS_19: Which gas is called laughing gas?",
      options: [
        { text: "CO", correct: false },
        { text: "O3", correct: false },
        { text: "N2O", correct: true },
        { text: "NH3", correct: false }
      ]
    },
    {
      question: "QUS_20: Who created the periodic table?",
      options: [
        { text: "Bohr", correct: false },
        { text: "Mendeleev", correct: true },
        { text: "Rutherford", correct: false },
        { text: "Avogadro", correct: false }
      ]
    },
  


    // Mathematics (5)
    {
      question: "QUS_21: Value of π (pi) up to two decimal places is?",
      options: [
        { text: "3.14195", correct: false },
        { text: "3.14159", correct: true },
        { text: "3.14915", correct: false },
        { text: "3.15149", correct: false }
      ]
    },
    {
      question: "QUS_22: Derivative of sin(x) is?",
      options: [
        { text: "cos(x)", correct: true },
        { text: "-cos(x)", correct: false },
        { text: "-sin(x)", correct: false },
        { text: "tan(x)", correct: false }
      ]
    },
    {
      question: "QUS_23: Square root of 144 is?",
      options: [
        { text: "14", correct: false },
        { text: "16", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true }
      ]
    },
    {
      question: "QUS_24: Logarithm of 1 to any base is?",
      options: [
        { text: "1", correct: false },
        { text: "Base", correct: false },
        { text: "0", correct: true },
        { text: "Infinity", correct: false }
      ]
    },
    {
      question: "QUS_25: Formula of area of circle?",
      options: [
        { text: "πr²", correct: true },
        { text: "2πr", correct: false },
        { text: "πd", correct: false },
        { text: "r²", correct: false }
      ]
    },
  


    // Biology (5)
    {
      question: "QUS_26: Powerhouse of the cell is?",
      options: [
        { text: "Nucleus", correct: false },
        { text: "Mitochondria", correct: true },
        { text: "Ribosome", correct: false },
        { text: "Chloroplast", correct: false }
      ]
    },
    {
      question: "QUS_27: Study of fossils is called?",
      options: [
        { text: "Ecology", correct: false },
        { text: "Taxonomy", correct: false },
        { text: "Paleontology", correct: true },
        { text: "Anatomy", correct: false }
      ]
    },
    {
      question: "QUS_28: Which vitamin is produced in skin by sunlight?",
      options: [
        { text: "Vitamin D", correct: true },
        { text: "Vitamin A", correct: false },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin K", correct: false }
      ]
    },
    {
      question: "QUS_29: Blood group universal donor is?",
      options: [
        { text: "O+", correct: false },
        { text: "AB+", correct: false },
        { text: "A+", correct: false },
        { text: "O-", correct: true }
      ]
    },
    {
      question: "QUS_30: Which organ purifies blood in human body?",
      options: [
        { text: "Liver", correct: false },
        { text: "Kidney", correct: true },
        { text: "Heart", correct: false },
        { text: "Lungs", correct: false }
      ]
    }
  ];
  