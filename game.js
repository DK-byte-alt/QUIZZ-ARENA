const gamingQuestions = [
    {
      question: "QUS_1: Which company developed the game 'Minecraft'?",
      options: [
        { text: "Epic Games", correct: false },
        { text: "Mojang", correct: true },
        { text: "Valve", correct: false },
        { text: "Ubisoft", correct: false }
      ]
    },
    {
      question: "QUS_2: In 'PUBG', what does the acronym stand for?",
      options: [
        { text: "Players Unknown Battle Group", correct: false },
        { text: "Public User Battle Game", correct: false },
        { text: "Play Ultimate Battle Grounds", correct: false },
        { text: "PlayerUnknown's Battlegrounds", correct: true }
      ]
    },
    {
      question: "QUS_3: Who is the main character in the 'Legend of Zelda' series?",
      options: [
        { text: "Zelda", correct: false },
        { text: "Ganon", correct: false },
        { text: "Mario", correct: false },
        { text: "Link", correct: true }
      ]
    },
    {
      question: "QUS_4: 'Counter-Strike' originally started as a mod for which game?",
      options: [
        { text: "Quake", correct: false },
        { text: "Call of Duty", correct: false },
        { text: "Half-Life", correct: true },
        { text: "Medal of Honor", correct: false }
      ]
    },
    {
      question: "QUS_5: Which year was the first 'Call of Duty' released?",
      options: [
        { text: "2003", correct: true },
        { text: "2006", correct: false },
        { text: "2001", correct: false },
        { text: "2005", correct: false }
      ]
    },
    {
      question: "QUS_6: Which game is known as the first Battle Royale to gain global popularity?",
      options: [
        { text: "Fortnite", correct: false },
        { text: "Apex Legends", correct: false },
        { text: "PUBG", correct: true },
        { text: "Free Fire", correct: false }
      ]
    },
    {
      question: "QUS_7: In which game do you collect rings as Sonic?",
      options: [
        { text: "Sonic the Hedgehog", correct: true },
        { text: "Crash Bandicoot", correct: false },
        { text: "Pac-Man", correct: false },
        { text: "Rayman", correct: false }
      ]
    },
    {
      question: "QUS_8: Who is the creator of the 'Metal Gear' series?",
      options: [
        { text: "Shigeru Miyamoto", correct: false },
        { text: "Ken Levine", correct: false },
        { text: "Gabe Newell", correct: false },
        { text: "Hideo Kojima", correct: true },
      ]
    },
    {
      question: "QUS_9: 'Among Us' became viral in which year?",
      options: [
        { text: "2017", correct: false },
        { text: "2019", correct: false },
        { text: "2020", correct: true },
        { text: "2018", correct: false }
      ]
    },
    {
      question: "QUS_10: Which company owns the 'PlayStation' brand?",
      options: [
        { text: "Microsoft", correct: false },
        { text: "Sony", correct: true },
        { text: "Nintendo", correct: false },
        { text: "Sega", correct: false }
      ]
    },
    {
      question: "QUS_11: What is the highest-selling video game of all time?",
      options: [
        { text: "Tetris", correct: false },
        { text: "Minecraft", correct: true },
        { text: "GTA V", correct: false },
        { text: "PUBG", correct: false }
      ]
    },
    {
      question: "QUS_12: In 'Fortnite', what material is NOT collectible?",
      options: [
        { text: "Glass", correct: true },
        { text: "Wood", correct: false },
        { text: "Metal", correct: false },
        { text: "Stone", correct: false }
      ]
    },
    {
      question: "QUS_13: Which video game character says 'It's-a me!'?",
      options: [
        { text: "Luigi", correct: false },
        { text: "Donkey Kong", correct: false },
        { text: "Bowser", correct: false },
        { text: "Mario", correct: true },
      ]
    },
    {
      question: "QUS_14: Which company developed 'League of Legends'?",
      options: [
        { text: "Valve", correct: false },
        { text: "Epic Games", correct: false },
        { text: "Riot Games", correct: true },
        { text: "Blizzard", correct: false }
      ]
    },
    {
      question: "QUS_15: What year was PlayStation 5 released?",
      options: [
        { text: "2020", correct: true },
        { text: "2019", correct: false },
        { text: "2021", correct: false },
        { text: "2022", correct: false }
      ]
    },
    {
      question: "QUS_16: What is the in-game currency of 'Free Fire'?",
      options: [
        { text: "V-Bucks", correct: false },
        { text: "Diamonds", correct: true },
        { text: "Gold", correct: false },
        { text: "Coins", correct: false }
      ]
    },
    {
      question: "QUS_17: Which is the main villain in the 'God of War' (2018)?",
      options: [
        { text: "Thor", correct: false },
        { text: "Odin", correct: false },
        { text: "Baldur", correct: true },
        { text: "Zeus", correct: false }
      ]
    },
    {
      question: "QUS_18: In which game do you ride a horse named 'Roach'?",
      options: [
        { text: "Skyrim", correct: false },
        { text: "Red Dead Redemption 2", correct: false },
        { text: "Assassin's Creed Valhalla", correct: false },
        { text: "The Witcher 3", correct: true },
      ]
    },
    {
      question: "QUS_19: Which console is developed by Microsoft?",
      options: [
        { text: "PlayStation", correct: false },
        { text: "Switch", correct: false },
        { text: "Dreamcast", correct: false },
        { text: "Xbox", correct: true },
      ]
    },
    {
      question: "QUS_20: Who is the developer of 'Clash of Clans'?",
      options: [
        { text: "Supercell", correct: true },
        { text: "King", correct: false },
        { text: "Niantic", correct: false },
        { text: "Gameloft", correct: false }
      ]
    },
    {
        question: "QUS_21: In 'GTA V', who are the three main playable characters?",
        options: [
          { text: "Carl, Tommy, Niko", correct: false },
          { text: "Michael, Trevor, Franklin", correct: true },
          { text: "CJ, Ryder, Big Smoke", correct: false },
          { text: "Roman, Johnny, Luis", correct: false }
        ]
      },
      {
        question: "QUS_22: Which game introduced the character 'Pikachu'?",
        options: [
          { text: "Pokémon Go", correct: false },
          { text: "Pokémon Sword", correct: false },
          { text: "Pokémon Red/Blue", correct: true },
          { text: "Pokémon Sun", correct: false }
        ]
      },
      {
        question: "QUS_23: 'Kratos' belongs to which game franchise?",
        options: [
          { text: "God of War", correct: true },
          { text: "Dark Souls", correct: false },
          { text: "The Elder Scrolls", correct: false },
          { text: "Diablo", correct: false }
        ]
      },
      {
        question: "QUS_24: Which is the most famous map in 'PUBG'?",
        options: [
          { text: "Miramar", correct: false },
          { text: "Sanhok", correct: false },
          { text: "Vikendi", correct: false },
          { text: "Erangel", correct: true }
        ]
      },
      {
        question: "QUS_25: In which year was 'Super Mario Bros.' first released?",
        options: [
          { text: "1987", correct: false },
          { text: "1985", correct: true },
          { text: "1989", correct: false },
          { text: "1983", correct: false }
        ]
      },
      {
        question: "QUS_26: Which company developed 'Overwatch'?",
        options: [
          { text: "Valve", correct: false },
          { text: "Ubisoft", correct: false },
          { text: "Blizzard Entertainment", correct: true },
          { text: "EA", correct: false }
        ]
      },
      {
        question: "QUS_27: What is the main profession of Geralt in 'The Witcher'?",
        options: [
          { text: "Blacksmith", correct: false },
          { text: "Monster Hunter", correct: true },
          { text: "Knight", correct: false },
          { text: "Wizard", correct: false }
        ]
      },
      {
        question: "QUS_28: Which game series features 'Master Chief'?",
        options: [
          { text: "Gears of War", correct: false },
          { text: "Halo", correct: true },
          { text: "Mass Effect", correct: false },
          { text: "Destiny", correct: false }
        ]
      },
      {
        question: "QUS_29: 'Lara Croft' is the protagonist of which game series?",
        options: [
          { text: "Uncharted", correct: false },
          { text: "Resident Evil", correct: false },
          { text: "Far Cry", correct: false },
          { text: "Tomb Raider", correct: true },
        ]
      },
      {
        question: "QUS_30: Which game popularized the phrase 'Finish Him!'?",
        options: [
          { text: "Mortal Kombat", correct: true },
          { text: "Tekken", correct: false },
          { text: "Street Fighter", correct: false },
          { text: "Killer Instinct", correct: false }
        ]
      },
      {
        question: "QUS_31: What is the full form of 'DOTA'?",
        options: [
          { text: "Defense of the Ancients", correct: true },
          { text: "Duel of the Arena", correct: false },
          { text: "Domain of the Alliance", correct: false },
          { text: "Dragons of the Age", correct: false }
        ]
      },
      {
        question: "QUS_32: In 'Minecraft', what item do you need to activate a Nether Portal?",
        options: [
          { text: "Torch", correct: false },
          { text: "Fire Charge", correct: false },
          { text: "Flint and Steel", correct: true },
          { text: "Lava Bucket", correct: false }
        ]
      },
      {
        question: "QUS_33: 'Pac-Man' was created in which country?",
        options: [
          { text: "USA", correct: false },
          { text: "Korea", correct: false },
          { text: "China", correct: false },
          { text: "Japan", correct: true },
        ]
      },
      {
        question: "QUS_34: In 'Valorant', what is the name of the healer agent?",
        options: [
          { text: "Phoenix", correct: false },
          { text: "Jett", correct: false },
          { text: "Sage", correct: true },
          { text: "Brimstone", correct: false }
        ]
      },
      {
        question: "QUS_35: 'CJ' is the protagonist of which GTA game?",
        options: [
          { text: "GTA III", correct: false },
          { text: "GTA: San Andreas", correct: true },
          { text: "GTA IV", correct: false },
          { text: "GTA V", correct: false }
        ]
      },
      {
        question: "QUS_36: What is the highest rank in 'Valorant'?",
        options: [
          { text: "Radiant", correct: true },
          { text: "Diamond", correct: false },
          { text: "Immortal", correct: false },
          { text: "Platinum", correct: false }
        ]
      },
      {
        question: "QUS_37: Which gaming console uses 'Joy-Con' controllers?",
        options: [
          { text: "PlayStation 4", correct: false },
          { text: "Xbox One", correct: false },
          { text: "Wii U", correct: false },
          { text: "Nintendo Switch", correct: true },
        ]
      },
      {
        question: "QUS_38: What color is the default suit of 'Sub-Zero' in Mortal Kombat?",
        options: [
          { text: "Red", correct: false },
          { text: "Blue", correct: true },
          { text: "Green", correct: false },
          { text: "Black", correct: false }
        ]
      },
      {
        question: "QUS_39: 'Ezio Auditore' is a main character from which series?",
        options: [
          { text: "Prince of Persia", correct: false },
          { text: "Assassin's Creed", correct: true },
          { text: "The Witcher", correct: false },
          { text: "Dark Souls", correct: false }
        ]
      },
      {
        question: "QUS_40: Which game features the 'Nuke' map?",
        options: [
          { text: "Valorant", correct: false },
          { text: "Rainbow Six Siege", correct: false },
          { text: "CS:GO", correct: true },
          { text: "Overwatch", correct: false }
        ]
      },
      {
        question: "QUS_41: Which racing game series is developed by 'Polyphony Digital'?",
        options: [
          { text: "Need for Speed", correct: false },
          { text: "Gran Turismo", correct: true },
          { text: "Forza Horizon", correct: false },
          { text: "Burnout", correct: false }
        ]
      },
      {
        question: "QUS_42: 'Agent 47' is the protagonist of which game series?",
        options: [
          { text: "Max Payne", correct: false },
          { text: "Mafia", correct: false },
          { text: "Dishonored", correct: false },
          { text: "Hitman", correct: true }
        ]
      },
      {
        question: "QUS_43: What is the main weapon used in 'DOOM'?",
        options: [
          { text: "BFG 9000", correct: true },
          { text: "Lightsaber", correct: false },
          { text: "Gravity Gun", correct: false },
          { text: "Pulse Rifle", correct: false }
        ]
      },
      {
        question: "QUS_44: 'Red Dead Redemption 2' is set in which time period?",
        options: [
          { text: "Early 1700s", correct: false },
          { text: "Modern Day", correct: false },
          { text: "Late 1800s", correct: true },
          { text: "Future", correct: false }
        ]
      },
      {
        question: "QUS_45: In 'PUBG', what is the maximum number of players in a classic match(Erangel)?",
        options: [
          { text: "50", correct: false },
          { text: "100", correct: true },
          { text: "150", correct: false },
          { text: "75", correct: false }
        ]
      },
      {
        question: "QUS_46: Which horror game features the character 'Leon S. Kennedy'?",
        options: [
          { text: "Silent Hill", correct: false },
          { text: "Resident Evil", correct: true },
          { text: "Outlast", correct: false },
          { text: "Dead Space", correct: false }
        ]
      },
      {
        question: "QUS_47: Which mobile game became famous for 'Battle Pass' system?",
        options: [
          { text: "Clash Royale", correct: false },
          { text: "COD Mobile", correct: false },
          { text: "Fortnite", correct: true },
          { text: "Free Fire", correct: false }
        ]
      },
      {
        question: "QUS_48: Which was the first video game ever created?",
        options: [
          { text: "Pong", correct: false },
          { text: "Space Invaders", correct: false },
          { text: "Asteroids", correct: false },
          { text: "Tennis for Two", correct: true }
        ]
      },
      {
        question: "QUS_49: Which game features the 'Creeper' as an enemy?",
        options: [
          { text: "Roblox", correct: false },
          { text: "Fortnite", correct: false },
          { text: "Terraria", correct: false },
          { text: "Minecraft", correct: true }
        ]
      },
      {
        question: "QUS_50: Which eSports game is famous for 'The International' tournament?",
        options: [
          { text: "DOTA 2", correct: true },
          { text: "CS:GO", correct: false },
          { text: "League of Legends", correct: false },
          { text: "Overwatch", correct: false }
        ]
      }  
  ];
  