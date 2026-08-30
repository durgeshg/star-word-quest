// Star Word Quest — Trivia Climb question module
// Single source of truth for quiz content, used by games/quiz.html and
// review/word-list.html. Questions are grouped into three difficulty pools
// (EASY, MEDIUM, HARD) spanning History, Geography, Science, Math, General
// Knowledge, USA, and Games. A ladder climb draws from these pools in
// escalating order — see games/quiz.html for how grade maps to ladder length.
//
// To add more later: append {q, options, answer, cat} objects to the pool
// you want to grow. answer is the index (0-3) of the correct option.

window.QUIZ_POOLS = {
  EASY: [
    {q:"Who was the first President of the United States?", options:["George Washington","Abraham Lincoln","Thomas Jefferson","John Adams"], answer:0, cat:"History"},
    {q:"What do we call people who study the past?", options:["Historians","Scientists","Artists","Doctors"], answer:0, cat:"History"},
    {q:"Which country built the Great Wall to protect its land?", options:["China","Japan","India","Egypt"], answer:0, cat:"History"},
    {q:"Which ancient Egyptian structures were built as tombs for pharaohs?", options:["Pyramids","Castles","Temples","Towers"], answer:0, cat:"History"},
    {q:"On which day do Americans celebrate their country's independence?", options:["July 4th","January 1st","October 31st","December 25th"], answer:0, cat:"History"},

    {q:"What is the largest continent on Earth?", options:["Asia","Africa","Europe","Australia"], answer:0, cat:"Geography"},
    {q:"What do we call a large area of land completely surrounded by water?", options:["Island","Peninsula","Mountain","Valley"], answer:0, cat:"Geography"},
    {q:"What is the name of the frozen continent at the bottom of the world?", options:["Antarctica","Arctic","Greenland","Siberia"], answer:0, cat:"Geography"},
    {q:"Which ocean is the largest in the world?", options:["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"], answer:0, cat:"Geography"},
    {q:"What do you call the imaginary line around the middle of the Earth?", options:["Equator","Axis","Border","Meridian"], answer:0, cat:"Geography"},

    {q:"What do plants need, along with water and sunlight, to grow?", options:["Air","Sugar","Salt","Metal"], answer:0, cat:"Science"},
    {q:"How many legs does a spider have?", options:["8","6","4","10"], answer:0, cat:"Science"},
    {q:"What is the closest planet to the Sun?", options:["Mercury","Venus","Earth","Mars"], answer:0, cat:"Science"},
    {q:"What gas do humans breathe in to stay alive?", options:["Oxygen","Carbon dioxide","Nitrogen","Helium"], answer:0, cat:"Science"},
    {q:"What do caterpillars turn into?", options:["Butterflies","Bees","Beetles","Grasshoppers"], answer:0, cat:"Science"},

    {q:"What is 5 + 7?", options:["12","10","15","11"], answer:0, cat:"Math"},
    {q:"How many sides does a triangle have?", options:["3","4","5","6"], answer:0, cat:"Math"},
    {q:"What is 10 - 4?", options:["6","7","5","8"], answer:0, cat:"Math"},
    {q:"How many minutes are in one hour?", options:["60","30","100","12"], answer:0, cat:"Math"},
    {q:"What is 3 x 3?", options:["9","6","12","3"], answer:0, cat:"Math"},

    {q:"What do bees make that people like to eat?", options:["Honey","Milk","Sugar","Jam"], answer:0, cat:"General Knowledge"},
    {q:"What is the name for a baby dog?", options:["Puppy","Kitten","Cub","Foal"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a doctor for animals?", options:["Veterinarian","Dentist","Surgeon","Pediatrician"], answer:0, cat:"General Knowledge"},
    {q:"What color do you get when you mix blue and yellow?", options:["Green","Purple","Orange","Brown"], answer:0, cat:"General Knowledge"},
    {q:"What is the tallest animal in the world?", options:["Giraffe","Elephant","Horse","Lion"], answer:0, cat:"General Knowledge"},

    {q:"What is the capital city of the United States?", options:["Washington, D.C.","New York City","Los Angeles","Chicago"], answer:0, cat:"USA"},
    {q:"How many stars are on the American flag?", options:["50","13","48","52"], answer:0, cat:"USA"},
    {q:"How many stripes are on the American flag?", options:["13","50","10","24"], answer:0, cat:"USA"},
    {q:"What is the name of the famous statue that stands in New York Harbor?", options:["Statue of Liberty","Golden Gate Bridge","Mount Rushmore","Liberty Bell"], answer:0, cat:"USA"},
    {q:"Which U.S. state is known as the Sunshine State?", options:["Florida","California","Texas","Hawaii"], answer:0, cat:"USA"},

    {q:"In chess, which piece can only move diagonally?", options:["Bishop","Rook","Knight","Pawn"], answer:0, cat:"Games"},
    {q:"In a standard deck of cards, how many suits are there?", options:["4","3","5","2"], answer:0, cat:"Games"},
    {q:"What shape is a soccer ball?", options:["Sphere","Cube","Cylinder","Cone"], answer:0, cat:"Games"},
    {q:"How many players are on a basketball team on the court at once?", options:["5","6","7","4"], answer:0, cat:"Games"},
    {q:"In the game of tic-tac-toe, how many squares are in the grid?", options:["9","6","12","4"], answer:0, cat:"Games"}
  ],

  MEDIUM: [
    {q:"Which ship carried the Pilgrims to America in 1620?", options:["The Mayflower","The Santa Maria","The Titanic","The Nina"], answer:0, cat:"History"},
    {q:"Who is known for inventing the light bulb?", options:["Thomas Edison","Albert Einstein","Isaac Newton","Benjamin Franklin"], answer:0, cat:"History"},
    {q:"Which ancient civilization built the pyramids of Giza?", options:["Egyptians","Romans","Greeks","Mayans"], answer:0, cat:"History"},
    {q:"In what year did the United States declare independence?", options:["1776","1492","1620","1865"], answer:0, cat:"History"},
    {q:"Who is known for the 'I Have a Dream' speech?", options:["Martin Luther King Jr.","Abraham Lincoln","George Washington","Rosa Parks"], answer:0, cat:"History"},

    {q:"What is the longest river in the world?", options:["The Nile","The Amazon","The Mississippi","The Yangtze"], answer:0, cat:"Geography"},
    {q:"Which mountain is the tallest in the world?", options:["Mount Everest","K2","Denali","Kilimanjaro"], answer:0, cat:"Geography"},
    {q:"What is the smallest country in the world?", options:["Vatican City","Monaco","San Marino","Liechtenstein"], answer:0, cat:"Geography"},
    {q:"Which desert is the largest hot desert in the world?", options:["Sahara Desert","Gobi Desert","Kalahari Desert","Mojave Desert"], answer:0, cat:"Geography"},
    {q:"Which country is shaped like a boot?", options:["Italy","Spain","Greece","Portugal"], answer:0, cat:"Geography"},

    {q:"What part of a plant absorbs water from the soil?", options:["Roots","Leaves","Petals","Stem"], answer:0, cat:"Science"},
    {q:"What is the hardest natural substance on Earth?", options:["Diamond","Gold","Iron","Granite"], answer:0, cat:"Science"},
    {q:"Which planet is known as the Red Planet?", options:["Mars","Venus","Jupiter","Saturn"], answer:0, cat:"Science"},
    {q:"What is the powerhouse of the cell called?", options:["Mitochondria","Nucleus","Ribosome","Chloroplast"], answer:0, cat:"Science"},
    {q:"What force keeps us on the ground instead of floating away?", options:["Gravity","Magnetism","Friction","Energy"], answer:0, cat:"Science"},

    {q:"What is 12 x 8?", options:["96","88","108","84"], answer:0, cat:"Math"},
    {q:"What fraction is equal to 50%?", options:["1/2","1/4","1/3","2/3"], answer:0, cat:"Math"},
    {q:"How many degrees are in a right angle?", options:["90","180","360","45"], answer:0, cat:"Math"},
    {q:"What is the square root of 64?", options:["8","6","9","7"], answer:0, cat:"Math"},
    {q:"What do you call a shape with five sides?", options:["Pentagon","Hexagon","Octagon","Square"], answer:0, cat:"Math"},

    {q:"What is the largest mammal in the world?", options:["Blue whale","Elephant","Giraffe","Polar bear"], answer:0, cat:"General Knowledge"},
    {q:"What is the name for a group of lions?", options:["Pride","Pack","Herd","Flock"], answer:0, cat:"General Knowledge"},
    {q:"What is the main language spoken in Brazil?", options:["Portuguese","Spanish","French","Italian"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a word that means the same as another word?", options:["Synonym","Antonym","Homophone","Pronoun"], answer:0, cat:"General Knowledge"},
    {q:"Which musical instrument has 88 keys?", options:["Piano","Guitar","Violin","Trumpet"], answer:0, cat:"General Knowledge"},

    {q:"Which U.S. president is featured on the one-dollar bill?", options:["George Washington","Abraham Lincoln","Thomas Jefferson","Benjamin Franklin"], answer:0, cat:"USA"},
    {q:"How many states are there in the United States?", options:["50","48","52","45"], answer:0, cat:"USA"},
    {q:"What are the two parts of the U.S. Congress called?", options:["Senate and House of Representatives","Senate and Cabinet","Court and Congress","House and Assembly"], answer:0, cat:"USA"},
    {q:"Which river flows through the Grand Canyon?", options:["Colorado River","Mississippi River","Rio Grande","Missouri River"], answer:0, cat:"USA"},
    {q:"What is the nickname for the U.S. flag?", options:["Old Glory","Star Spangled","Freedom Flag","Liberty Flag"], answer:0, cat:"USA"},

    {q:"In Monopoly, how much money do you collect when you pass GO?", options:["$200","$100","$500","$50"], answer:0, cat:"Games"},
    {q:"How many squares are on a chessboard?", options:["64","100","81","49"], answer:0, cat:"Games"},
    {q:"In video games, what does 'NPC' usually stand for?", options:["Non-Player Character","New Player Class","Network Player Control","National Player Committee"], answer:0, cat:"Games"},
    {q:"In bowling, what is it called when you knock down all ten pins on your first roll?", options:["A strike","A spare","A turkey","A split"], answer:0, cat:"Games"},
    {q:"In a game of checkers, how many pieces does each player start with?", options:["12","8","16","10"], answer:0, cat:"Games"}
  ],

  HARD: [
    {q:"Which empire was ruled by Julius Caesar?", options:["The Roman Empire","The Greek Empire","The Persian Empire","The Ottoman Empire"], answer:0, cat:"History"},
    {q:"What wall divided a European city from 1961 to 1989?", options:["The Berlin Wall","The Great Wall","Hadrian's Wall","The Wailing Wall"], answer:0, cat:"History"},
    {q:"Who was the first person to walk on the Moon?", options:["Neil Armstrong","Buzz Aldrin","John Glenn","Yuri Gagarin"], answer:0, cat:"History"},
    {q:"Which U.S. founding document begins with the words 'We the People'?", options:["The Constitution","The Declaration of Independence","The Bill of Rights","The Magna Carta"], answer:0, cat:"History"},
    {q:"Which explorer is credited with reaching the Americas in 1492?", options:["Christopher Columbus","Ferdinand Magellan","Marco Polo","Vasco da Gama"], answer:0, cat:"History"},

    {q:"What is the longest mountain range in the world?", options:["The Andes","The Rockies","The Himalayas","The Alps"], answer:0, cat:"Geography"},
    {q:"Which African country contains the largest portion of the Sahara Desert?", options:["Algeria","Egypt","Libya","Morocco"], answer:0, cat:"Geography"},
    {q:"What is the capital of Australia?", options:["Canberra","Sydney","Melbourne","Perth"], answer:0, cat:"Geography"},
    {q:"Which strait separates Asia and North America?", options:["Bering Strait","Strait of Gibraltar","Strait of Malacca","Cook Strait"], answer:0, cat:"Geography"},
    {q:"What is considered the driest desert in the world?", options:["Atacama Desert","Sahara Desert","Gobi Desert","Mojave Desert"], answer:0, cat:"Geography"},

    {q:"What is the chemical symbol for gold?", options:["Au","Ag","Go","Gd"], answer:0, cat:"Science"},
    {q:"About how many bones are in the adult human body?", options:["206","201","212","198"], answer:0, cat:"Science"},
    {q:"What is the process by which plants make their own food using sunlight called?", options:["Photosynthesis","Respiration","Digestion","Fermentation"], answer:0, cat:"Science"},
    {q:"What type of energy is stored in food?", options:["Chemical energy","Kinetic energy","Thermal energy","Nuclear energy"], answer:0, cat:"Science"},
    {q:"Which blood type is known as the 'universal donor'?", options:["O negative","AB positive","A positive","B negative"], answer:0, cat:"Science"},

    {q:"What is 15% of 200?", options:["30","20","25","35"], answer:0, cat:"Math"},
    {q:"What is the value of Pi rounded to two decimal places?", options:["3.14","3.41","3.12","3.16"], answer:0, cat:"Math"},
    {q:"What do you call a number that can only be divided evenly by 1 and itself?", options:["Prime number","Even number","Composite number","Odd number"], answer:0, cat:"Math"},
    {q:"What is the sum of the interior angles in a triangle?", options:["180 degrees","360 degrees","90 degrees","270 degrees"], answer:0, cat:"Math"},
    {q:"What is 7 squared?", options:["49","56","42","63"], answer:0, cat:"Math"},

    {q:"What is the currency used in Japan?", options:["Yen","Won","Yuan","Ringgit"], answer:0, cat:"General Knowledge"},
    {q:"Which artist painted the Mona Lisa?", options:["Leonardo da Vinci","Pablo Picasso","Vincent van Gogh","Michelangelo"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a word that is spelled the same forwards and backwards?", options:["Palindrome","Acronym","Anagram","Synonym"], answer:0, cat:"General Knowledge"},
    {q:"What is the world's most widely spoken native language?", options:["Mandarin Chinese","English","Spanish","Hindi"], answer:0, cat:"General Knowledge"},
    {q:"How many continents are there on Earth?", options:["7","5","6","8"], answer:0, cat:"General Knowledge"},

    {q:"How many amendments are in the U.S. Bill of Rights?", options:["10","12","8","15"], answer:0, cat:"USA"},
    {q:"Which U.S. state was the first to join the Union?", options:["Delaware","Virginia","Massachusetts","Pennsylvania"], answer:0, cat:"USA"},
    {q:"In what year did the U.S. Civil War end?", options:["1865","1861","1776","1900"], answer:0, cat:"USA"},
    {q:"Which branch of the U.S. government includes the President?", options:["Executive","Legislative","Judicial","Congressional"], answer:0, cat:"USA"},
    {q:"What is the name of the official residence of the U.S. President?", options:["The White House","Capitol Building","Camp David","The Pentagon"], answer:0, cat:"USA"},

    {q:"In chess, what is it called when the king is under direct attack but can still escape?", options:["Check","Checkmate","Castling","Stalemate"], answer:0, cat:"Games"},
    {q:"In chess, what is it called when the king cannot escape capture, ending the game?", options:["Checkmate","Check","Stalemate","Castling"], answer:0, cat:"Games"},
    {q:"How many pieces does each player have at the start of a chess game?", options:["16","12","20","8"], answer:0, cat:"Games"},
    {q:"In the card game Uno, which card lets you choose the next color?", options:["Wild card","Skip card","Reverse card","Draw Two card"], answer:0, cat:"Games"},
    {q:"In chess, which piece is the only one that can jump over other pieces?", options:["The Knight","The Bishop","The Rook","The Queen"], answer:0, cat:"Games"}
  ]
};
