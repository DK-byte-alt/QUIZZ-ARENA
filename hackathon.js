let css1 = document.createElement("link");
css1.rel = "stylesheet";
css1.href = "style1.css";
document.head.appendChild(css1);


const hackathonQuestions = [
  // --- Beginner C---
  {
    question: "QUS_1: Who is the father of C language?",
    options: [
      { text: "James Gosling", correct: false },
      { text: "Dennis Ritchie", correct: true },
      { text: "Bjarne Stroustrup", correct: false },
      { text: "Guido van Rossum", correct: false }
    ]
  },
  {
    question: "QUS_2: In which year was C developed?",
    options: [
      { text: "1980", correct: false },
      { text: "1969", correct: false },
      { text: "1991", correct: false },
      { text: "1972", correct: true }
    ]
  },
  {
    question: "QUS_3: What is the extension of a C program file?",
    options: [
      { text: ".c", correct: true },
      { text: ".cpp", correct: false },
      { text: ".java", correct: false },
      { text: ".py", correct: false }
    ]
  },
  {
    question: "QUS_4: C is a ___ language.",
    options: [
      { text: "Object-Oriented", correct: false },
      { text: "Functional", correct: false },
      { text: "Procedural", correct: true },
      { text: "Machine", correct: false }
    ]
  },
  {
    question: "QUS_5: printf() function belongs to which header file?",
    options: [
      { text: "math.h", correct: false },
      { text: "stdio.h", correct: true },
      { text: "conio.h", correct: false },
      { text: "stdlib.h", correct: false }
    ]
  },
  {
    question: "QUS_6: What is the return type of main() in C?",
    options: [
      { text: "void", correct: false },
      { text: "char", correct: false },
      { text: "int", correct: true },
      { text: "float", correct: false }
    ]
  },
  {
    question: "QUS_7: What does & symbol mean in scanf?",
    options: [
      { text: "Address of variable", correct: true },
      { text: "Value of variable", correct: false },
      { text: "Pointer creation", correct: false },
      { text: "Nothing", correct: false }
    ]
  },
  {
    question: "QUS_8: Size of char (most systems)?",
    options: [
      { text: "2 Bytes", correct: false },
      { text: "4 Bytes", correct: false },
      { text: "8 Bytes", correct: false },
      { text: "1 Byte", correct: true }
    ]
  },
  {
    question: "QUS_9: Which is the correct comment style in C?",
    options: [
      { text: "# Comment", correct: false },
      { text: "-- Comment", correct: false },
      { text: "// Comment", correct: true },
      { text: "%% Comment", correct: false }
    ]
  },
  {
    question: "QUS_10: #include <stdio.h> is a?",
    options: [
      { text: "Function", correct: false }, 
      { text: "Preprocessor directive", correct: true },
      { text: "Keyword", correct: false },
      { text: "Variable", correct: false }
    ]
  },
  {
    question: "QUS_11: If loop condition is false, what happens?",
    options: [
      { text: "Loop skipped", correct: true },
      { text: "Loop executes anyway", correct: false },
      { text: "Error occurs", correct: false },
      { text: "System crash", correct: false }
    ]
  },
  {
    question: "QUS_12: Array indexing in C starts from?",
    options: [
      { text: "1", correct: false },
      { text: "-1", correct: false },
      { text: "User defined", correct: false },
      { text: "0", correct: true },
    ]
  },
  {
    question: "QUS_13: int a = 5/2; Result?",
    options: [
      { text: "2.5", correct: false },
      { text: "5", correct: false },
      { text: "Error", correct: false },
      { text: "2", correct: true }
    ]
  },
  {
    question: "QUS_14: const keyword means?",
    options: [
      { text: "Variable can change", correct: false },
      { text: "Error", correct: false },
      { text: "Variable fixed", correct: true },
      { text: "None", correct: false }
    ]
  },
  {
    question: "QUS_15: sizeof(int) in 32-bit compiler?",
    options: [
      { text: "2", correct: false }, 
      { text: "4", correct: true },
      { text: "8", correct: false },
      { text: "1", correct: false }
    ]
  },



  // --- Intermediate C---
  {
    question: "QUS_16: Pointer symbol?",
    options: [
      { text: "&", correct: false },
      { text: "#", correct: false },
      { text: "%", correct: false },
      { text: "*", correct: true },
    ]
  },
  {
    question: "QUS_17: int *p; means?",
    options: [
      { text: "p is an int variable", correct: false },
      { text: "p is a function", correct: false },
      { text: "p is a pointer to int", correct: true },
      { text: "None", correct: false }
    ]
  },
  {
    question: "QUS_18: int arr[5] = {1,2,3}; Remaining values?",
    options: [
      { text: "2 zeros", correct: true },
      { text: "3 zeros", correct: false },
      { text: "5 zeros", correct: false },
      { text: "None", correct: false }
    ]
  },
  {
    question: "QUS_19: Strings in C are stored as?",
    options: [
      { text: "Character arrays", correct: true },
      { text: "Integer arrays", correct: false },
      { text: "Pointer variables", correct: false },
      { text: "Keywords", correct: false }
    ]
  },
  {
    question: "QUS_20: strlen(\"Hello\") returns?",
    options: [
      { text: "6", correct: false }, 
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "Error", correct: false }
    ]
  },
  {
    question: "QUS_21: malloc() is used for?",
    options: [
      { text: "Dynamic memory allocation", correct: true },
      { text: "Free memory", correct: false },
      { text: "Size calculation", correct: false },
      { text: "Loop control", correct: false }
    ]
  },
  {
    question: "QUS_22: free() function does?",
    options: [
      { text: "Allocates memory", correct: false },
      { text: "Declares variable", correct: false },
      { text: "Deallocates memory", correct: true },
      { text: "None", correct: false }
    ]
  },
  {
    question: "QUS_23: Recursion means?",
    options: [
      { text: "Function calls another function", correct: false },
      { text: "Infinite loop", correct: false },
      { text: "None", correct: false }, 
      { text: "Function calls itself", correct: true }
    ]
  },
  {
    question: "QUS_24: Operator to access structure members?",
    options: [
      { text: "->", correct: false },
      { text: "&", correct: false },
      { text: ".", correct: true },
      { text: "*", correct: false }
    ]
  },
  {
    question: "QUS_25: Pointer to structure uses?",
    options: [
      { text: ".", correct: false },
      { text: "->", correct: true },
      { text: "*", correct: false },
      { text: "&", correct: false }
    ]
  },



    // --- Hard C---
  {
    question: "QUS_26: Dangling pointer is?",
    options: [
      { text: "NULL pointer", correct: false },
      { text: "Pointer to freed memory", correct: true },
      { text: "Wild pointer", correct: false },
      { text: "None", correct: false }
    ]
  },
  {
    question: "QUS_27: Segmentation fault occurs due to?",
    options: [
      { text: "Invalid memory access", correct: true },
      { text: "Syntax error", correct: false },
      { text: "Low RAM", correct: false },
      { text: "Wrong header", correct: false }
    ]
  },
  {
    question: "QUS_28: volatile keyword is used to?",
    options: [
      { text: "Make variable constant", correct: false },
      { text: "Allocate memory", correct: false },
      { text: "None", correct: false },
      { text: "Prevent compiler optimization", correct: true }
    ]
  },
  {
    question: "QUS_29: extern keyword means?",
    options: [
      { text: "Static variable", correct: false },
      { text: "Dynamic memory allocation", correct: false },
      { text: "Variable is global", correct: true },
      { text: "None", correct: false }
    ]
  },
  {
    question: "QUS_30: Correct function pointer declaration?",
    options: [
      { text: "int (*fp)(int, int);", correct: true },
      { text: "int *fp(int,int);", correct: false },
      { text: "(*fp)int;", correct: false },
      { text: "fp(int,int);", correct: false }
    ]
  },





  // --- Computer Basics ---
{
  question: "QUS_31: What does CPU stand for?",
  options: [
    { text: "Central Program Unit", correct: false },
    { text: "Computer Processing Utility", correct: false },
    { text: "Central Processing Unit", correct: true },
    { text: "Control Program Unit", correct: false }
  ]
},
{
  question: "QUS_32: Which company developed Windows OS?",
  options: [
    { text: "Microsoft", correct: true },
    { text: "Apple", correct: false },
    { text: "IBM", correct: false },
    { text: "Google", correct: false }
  ]
},
{
  question: "QUS_33: Which is the smallest unit of data in computer?",
  options: [
    { text: "Byte", correct: false },
    { text: "Nibble", correct: false },
    { text: "Word", correct: false },
    { text: "Bit", correct: true }
  ]
},



  // --- Hacking / Security ---
{
  question: "QUS_34: Which protocol is more secure for websites?",
  options: [
    { text: "HTTP", correct: false },
    { text: "FTP", correct: false },
    { text: "HTTPS", correct: true },
    { text: "SMTP", correct: false }
  ]
},
{
  question: "QUS_35: SQL Injection is related to?",
  options: [
    { text: "Network Hacking", correct: false }, 
    { text: "Database Security", correct: true },
    { text: "Hardware Issue", correct: false },
    { text: "Cloud Storage", correct: false }
  ]
},



    // --- HTML ---
{
  question: "QUS_36: Which HTML tag is used to create a hyperlink?",
  options: [
    { text: "<link>", correct: false },
    { text: "<a>", correct: true },
    { text: "<href>", correct: false },
    { text: "<url>", correct: false }
  ]
},
{
  question: "QUS_37: Which attribute is used for image source in HTML?",
  options: [
    { text: "src", correct: true },
    { text: "alt", correct: false },
    { text: "href", correct: false },
    { text: "link", correct: false }
  ]
},
{
  question: "QUS_38: HTML stands for?",
  options: [
    { text: "High Transfer Markup Language", correct: false },
    { text: "Hyperlinks and Text Marking Language", correct: false },
    { text: "Home Tool Markup Language", correct: false },
    { text: "Hyper Text Markup Language", correct: true }
  ]
},



  // --- CSS ---
{
  question: "QUS_39: Which property is used to change text color in CSS?",
  options: [
    { text: "text-color", correct: false },
    { text: "font-color", correct: false }, 
    { text: "color", correct: true },
    { text: "background", correct: false }
  ]
},
{
  question: "QUS_40: Which CSS property controls the text size?",
  options: [
    { text: "font-size", correct: true },
    { text: "text-size", correct: false },
    { text: "font-style", correct: false },
    { text: "text-style", correct: false }
  ]
},
{
  question: "QUS_41: Which symbol is used for IDs in CSS?",
  options: [
    { text: ".", correct: false },
    { text: "#", correct: true },
    { text: "*", correct: false },
    { text: "&", correct: false }
  ]
},
{
  question: "QUS_42: Which CSS property is used to set background image?",
  options: [
    { text: "bg-img", correct: false },
    { text: "image", correct: false }, 
    { text: "background-image", correct: true },
    { text: "background-src", correct: false }
  ]
},



  // --- JavaScript ---
{
  question: "QUS_43: JavaScript is a ______ language?",
  options: [
    { text: "Markup", correct: false },
    { text: "Styling", correct: false },
    { text: "Database", correct: false }, 
    { text: "Programming", correct: true },
  ]
},
{
  question: "QUS_44: Which keyword is used to declare a variable in JS?",
  options: [
    { text: "int", correct: false },
    { text: "string", correct: false },
    { text: "define", correct: false },
    { text: "var", correct: true },
  ]
},
{
  question: "QUS_45: Which symbol is used for single-line comments in JS?",
  options: [
    { text: "//", correct: true },
    { text: "/* */", correct: false },
    { text: "<!-- -->", correct: false },
    { text: "#", correct: false }
  ]
},
{
  question: "QUS_46: What is the output of 2 + '2' in JS?",
  options: [
    { text: "'22'", correct: true },
    { text: "4", correct: false },
    { text: "undefined", correct: false },
    { text: "error", correct: false }
  ]
},



  // --- Mix (Random Tech) ---
{
  question: "QUS_47: Who is known as the father of the World Wide Web?",
  options: [
    { text: "Bill Gates", correct: false },
    { text: "Mark Zuckerberg", correct: false },
    { text: "Tim Berners-Lee", correct: true },
    { text: "Steve Jobs", correct: false }
  ]
},
{
  question: "QUS_48: Which device connects multiple computers in a LAN?",
  options: [
    { text: "Modem", correct: false },
    { text: "Switch", correct: true },
    { text: "Firewall", correct: false },
    { text: "Router", correct: false }
  ]
},
{
  question: "QUS_49: Git is mainly used for?",
  options: [
    { text: "File Transfer", correct: false },
    { text: "Database Management", correct: false },
    { text: "Cloud Hosting", correct: false },
    { text: "Version Control", correct: true }
  ]
},
{
  question: "QUS_50: Which company created JavaScript?",
  options: [
    { text: "Microsoft", correct: false },
    { text: "Netscape", correct: true },
    { text: "Sun Microsystems", correct: false },
    { text: "Apple", correct: false }
  ]
}
];
