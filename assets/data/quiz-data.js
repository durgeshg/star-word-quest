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
    {q:"In the game of tic-tac-toe, how many squares are in the grid?", options:["9","6","12","4"], answer:0, cat:"Games"},

    {q:"What do bees collect from flowers to help make honey?", options:["Nectar","Pollen","Water","Sap"], answer:0, cat:"Nature"},
    {q:"In which season do most trees lose their leaves?", options:["Fall","Spring","Summer","Winter"], answer:0, cat:"Nature"},
    {q:"What do we call a baby frog before it grows legs?", options:["Tadpole","Cub","Kit","Joey"], answer:0, cat:"Nature"},
    {q:"What do green plants release into the air that people need to breathe?", options:["Oxygen","Carbon dioxide","Nitrogen","Smoke"], answer:0, cat:"Nature"},
    {q:"What is the name for the colorful part of a flower that attracts insects?", options:["Petal","Stem","Root","Leaf"], answer:0, cat:"Nature"},

    {q:"What do you call a group of wolves?", options:["Pack","Herd","Flock","School"], answer:0, cat:"Animals"},
    {q:"Which animal is known as man's best friend?", options:["Dog","Cat","Horse","Rabbit"], answer:0, cat:"Animals"},
    {q:"What is a baby kangaroo called?", options:["Joey","Cub","Calf","Kit"], answer:0, cat:"Animals"},
    {q:"Which animal is the largest living land animal?", options:["Elephant","Giraffe","Rhino","Hippo"], answer:0, cat:"Animals"},
    {q:"What do you call a group of fish swimming together?", options:["School","Pack","Herd","Flock"], answer:0, cat:"Animals"},

    {q:"Which country is home to the ancient city of Rome?", options:["Italy","Greece","Spain","France"], answer:0, cat:"History"},
    {q:"What do we call old objects from the past that teach us about history?", options:["Artifacts","Fossils","Minerals","Treasures"], answer:0, cat:"History"},
    {q:"Which ancient civilization is known for building the Colosseum?", options:["Romans","Greeks","Egyptians","Mayans"], answer:0, cat:"History"},
    {q:"What is the name for a king's or queen's home?", options:["Palace","Cottage","Cabin","Barn"], answer:0, cat:"History"},
    {q:"Long ago, what did people use before money existed to trade goods?", options:["Bartering","Banking","Taxing","Shopping"], answer:0, cat:"History"},

    {q:"What do we call a very tall landform with steep sides?", options:["Mountain","Valley","Plain","Desert"], answer:0, cat:"Geography"},
    {q:"What is the name for a large area of trees growing closely together?", options:["Forest","Desert","Ocean","Prairie"], answer:0, cat:"Geography"},
    {q:"Which of these is a hot, dry, sandy place with very little rain?", options:["Desert","Forest","Swamp","Tundra"], answer:0, cat:"Geography"},
    {q:"What do we call the place where a river begins?", options:["Source","Mouth","Delta","Bank"], answer:0, cat:"Geography"},
    {q:"What is the largest country in the world by land area?", options:["Russia","China","USA","Canada"], answer:0, cat:"Geography"},

    {q:"What part of your body do you use to see?", options:["Eyes","Ears","Nose","Skin"], answer:0, cat:"Science"},
    {q:"What do we call water that has frozen solid?", options:["Ice","Steam","Rain","Fog"], answer:0, cat:"Science"},
    {q:"How many planets are in our solar system?", options:["8","9","7","10"], answer:0, cat:"Science"},
    {q:"What do we call the natural object that orbits the Earth and lights up the night sky?", options:["The Moon","The Sun","A comet","A star"], answer:0, cat:"Science"},
    {q:"What do we call the star that Earth orbits?", options:["The Sun","The Moon","Mars","Venus"], answer:0, cat:"Science"},

    {q:"What is 8 + 6?", options:["14","13","15","12"], answer:0, cat:"Math"},
    {q:"How many sides does a square have?", options:["4","3","5","6"], answer:0, cat:"Math"},
    {q:"What is 20 - 5?", options:["15","14","16","13"], answer:0, cat:"Math"},
    {q:"How many days are in one week?", options:["7","5","10","6"], answer:0, cat:"Math"},
    {q:"What is 4 x 5?", options:["20","16","24","18"], answer:0, cat:"Math"},

    {q:"What do you call a person who flies an airplane?", options:["Pilot","Driver","Captain","Sailor"], answer:0, cat:"General Knowledge"},
    {q:"What is the name of the world's largest bird that cannot fly?", options:["Ostrich","Eagle","Penguin","Peacock"], answer:0, cat:"General Knowledge"},
    {q:"What is the first meal of the day usually called?", options:["Breakfast","Lunch","Dinner","Brunch"], answer:0, cat:"General Knowledge"},
    {q:"What do you use an umbrella for?", options:["Staying dry in the rain","Cutting food","Writing","Cooking"], answer:0, cat:"General Knowledge"},
    {q:"What season comes right after winter?", options:["Spring","Summer","Fall","Another winter"], answer:0, cat:"General Knowledge"},

    {q:"What ocean is on the east coast of the United States?", options:["Atlantic Ocean","Pacific Ocean","Indian Ocean","Arctic Ocean"], answer:0, cat:"USA"},
    {q:"What is the name of the U.S. national bird?", options:["Bald Eagle","Robin","Hawk","Owl"], answer:0, cat:"USA"},
    {q:"Which U.S. city is known for the Liberty Bell?", options:["Philadelphia","Boston","New York","Chicago"], answer:0, cat:"USA"},
    {q:"What is the title of the U.S. national anthem?", options:["The Star-Spangled Banner","America the Beautiful","God Bless America","My Country 'Tis of Thee"], answer:0, cat:"USA"},
    {q:"What is the largest U.S. state by land area?", options:["Alaska","Texas","California","Montana"], answer:0, cat:"USA"},

    {q:"In hide and seek, what does the seeker do while others hide?", options:["Counts","Reads","Sleeps","Sings"], answer:0, cat:"Games"},
    {q:"How many players are usually on a soccer team on the field?", options:["11","9","7","13"], answer:0, cat:"Games"},
    {q:"In the game Simon Says, what happens if you move without hearing 'Simon Says'?", options:["You're out","You win","You get a point","Nothing"], answer:0, cat:"Games"},
    {q:"What shape are the pieces in the game Connect Four?", options:["Circles","Squares","Triangles","Stars"], answer:0, cat:"Games"},
    {q:"In a race, what do you call the person who finishes first?", options:["Winner","Loser","Referee","Coach"], answer:0, cat:"Games"}
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
    {q:"In a game of checkers, how many pieces does each player start with?", options:["12","8","16","10"], answer:0, cat:"Games"},

    {q:"What is the process called when water turns into vapor and rises into the sky?", options:["Evaporation","Condensation","Precipitation","Filtration"], answer:0, cat:"Nature"},
    {q:"Which part of a plant makes seeds?", options:["Flower","Root","Stem","Leaf"], answer:0, cat:"Nature"},
    {q:"What do you call animals that are active mainly at night?", options:["Nocturnal","Diurnal","Hibernating","Migratory"], answer:0, cat:"Nature"},
    {q:"What is the top layer of soil called, where most plants grow?", options:["Topsoil","Bedrock","Subsoil","Clay"], answer:0, cat:"Nature"},
    {q:"Which gas do plants absorb from the air to make their food?", options:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"], answer:0, cat:"Nature"},

    {q:"Which animal can change the color of its skin to hide from predators?", options:["Chameleon","Elephant","Lion","Zebra"], answer:0, cat:"Animals"},
    {q:"What do you call an animal that only eats meat?", options:["Carnivore","Herbivore","Omnivore","Scavenger"], answer:0, cat:"Animals"},
    {q:"Which bird cannot fly but is the fastest runner among birds?", options:["Ostrich","Eagle","Penguin","Sparrow"], answer:0, cat:"Animals"},
    {q:"Which sea creature has eight arms and three hearts?", options:["Octopus","Squid","Jellyfish","Starfish"], answer:0, cat:"Animals"},
    {q:"What is the fastest land animal in the world?", options:["Cheetah","Lion","Horse","Gazelle"], answer:0, cat:"Animals"},

    {q:"Which ancient Egyptian ruler was often buried with treasure inside a pyramid?", options:["Pharaoh","King","Emperor","Sultan"], answer:0, cat:"History"},
    {q:"What was the name of the ship that famously sank in 1912 after hitting an iceberg?", options:["Titanic","Mayflower","Santa Maria","Nina"], answer:0, cat:"History"},
    {q:"Who wrote the Declaration of Independence?", options:["Thomas Jefferson","George Washington","Benjamin Franklin","John Adams"], answer:0, cat:"History"},
    {q:"In which century did the American Revolution take place?", options:["18th century","17th century","19th century","16th century"], answer:0, cat:"History"},
    {q:"What was the name of the period in history known for knights, castles, and kings in Europe?", options:["The Middle Ages","The Renaissance","The Stone Age","The Bronze Age"], answer:0, cat:"History"},

    {q:"What is the name of the imaginary line that divides the Earth into the Eastern and Western Hemispheres?", options:["Prime Meridian","Equator","Tropic of Cancer","International Date Line"], answer:0, cat:"Geography"},
    {q:"Which continent is Egypt located on?", options:["Africa","Asia","Europe","South America"], answer:0, cat:"Geography"},
    {q:"What do you call a large area of flat grassland with few trees?", options:["Plain","Mountain","Valley","Canyon"], answer:0, cat:"Geography"},
    {q:"Which sea is located between Europe and Africa, famous for ancient trade routes?", options:["Mediterranean Sea","Red Sea","Black Sea","Caspian Sea"], answer:0, cat:"Geography"},
    {q:"What is the capital city of France?", options:["Paris","London","Berlin","Madrid"], answer:0, cat:"Geography"},

    {q:"What is the largest organ in the human body?", options:["Skin","Liver","Heart","Brain"], answer:0, cat:"Science"},
    {q:"Which blood vessel carries blood away from the heart?", options:["Artery","Vein","Capillary","Nerve"], answer:0, cat:"Science"},
    {q:"Which sense organ helps you smell things?", options:["Nose","Eyes","Ears","Tongue"], answer:0, cat:"Science"},
    {q:"What is the study of weather called?", options:["Meteorology","Geology","Biology","Astronomy"], answer:0, cat:"Science"},
    {q:"What do we call the layer of gases that surrounds the Earth?", options:["Atmosphere","Stratosphere","Ozone","Ionosphere"], answer:0, cat:"Science"},

    {q:"What is 9 x 7?", options:["63","56","72","54"], answer:0, cat:"Math"},
    {q:"What is 100 divided by 4?", options:["25","20","30","15"], answer:0, cat:"Math"},
    {q:"How many degrees are in a full circle?", options:["360","180","90","270"], answer:0, cat:"Math"},
    {q:"What is 15 + 27?", options:["42","41","43","40"], answer:0, cat:"Math"},
    {q:"How many millimeters are in one centimeter?", options:["10","100","1000","1"], answer:0, cat:"Math"},

    {q:"What is the name for a word that sounds the same as another word but has a different meaning?", options:["Homophone","Synonym","Antonym","Homograph"], answer:0, cat:"General Knowledge"},
    {q:"What is the capital of Japan?", options:["Tokyo","Beijing","Seoul","Bangkok"], answer:0, cat:"General Knowledge"},
    {q:"How many colors are in a rainbow?", options:["7","5","6","8"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a doctor who takes care of teeth?", options:["Dentist","Surgeon","Pediatrician","Optometrist"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a story with talking animals that teaches a lesson?", options:["Fable","Biography","Textbook","Newspaper"], answer:0, cat:"General Knowledge"},

    {q:"Which U.S. monument features the faces of four presidents carved into a mountain?", options:["Mount Rushmore","Statue of Liberty","Washington Monument","Lincoln Memorial"], answer:0, cat:"USA"},
    {q:"What is the name of the U.S. government's meeting place in Washington, D.C., topped with a dome?", options:["The Capitol","The White House","The Pentagon","City Hall"], answer:0, cat:"USA"},
    {q:"How many branches does the U.S. government have?", options:["3","2","4","5"], answer:0, cat:"USA"},
    {q:"How many years is the term for a U.S. President?", options:["4","6","8","2"], answer:0, cat:"USA"},
    {q:"Which U.S. city is known as 'The Big Apple'?", options:["New York City","Los Angeles","Chicago","Miami"], answer:0, cat:"USA"},

    {q:"In a deck of cards, which card is considered the highest in most games?", options:["Ace","King","Queen","Jack"], answer:0, cat:"Games"},
    {q:"What is the name of the game where players guess a secret word using drawings?", options:["Pictionary","Charades","Scrabble","Trivia"], answer:0, cat:"Games"},
    {q:"How many holes are typically played in a full round of golf?", options:["18","9","12","15"], answer:0, cat:"Games"},
    {q:"In video games, what does 'HP' usually stand for?", options:["Health Points","High Power","Hit Percentage","Hero Points"], answer:0, cat:"Games"},
    {q:"In the game of Jenga, what happens when the tower falls?", options:["The player who knocked it down loses","The game restarts automatically","Everyone wins","Nothing happens"], answer:0, cat:"Games"}
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
    {q:"In chess, which piece is the only one that can jump over other pieces?", options:["The Knight","The Bishop","The Rook","The Queen"], answer:0, cat:"Games"},

    {q:"What is the term for a plant that only lives for one growing season before dying?", options:["Annual","Perennial","Biennial","Deciduous"], answer:0, cat:"Nature"},
    {q:"What do you call a tree that keeps its leaves all year round?", options:["Evergreen","Deciduous","Annual","Perennial"], answer:0, cat:"Nature"},
    {q:"What is the tissue inside a tree trunk that carries water from roots to leaves?", options:["Xylem","Phloem","Cambium","Bark"], answer:0, cat:"Nature"},
    {q:"What do we call the natural process where a forest slowly changes over time after a disturbance like a fire?", options:["Succession","Rotation","Erosion","Migration"], answer:0, cat:"Nature"},
    {q:"What do we call plants that trap and digest insects for nutrients?", options:["Carnivorous plants","Parasitic plants","Succulents","Ferns"], answer:0, cat:"Nature"},

    {q:"What is the term for animals that are most active at dawn and dusk?", options:["Crepuscular","Nocturnal","Diurnal","Hibernating"], answer:0, cat:"Animals"},
    {q:"Which big cat is known for having the loudest roar, audible up to 5 miles away?", options:["Lion","Tiger","Jaguar","Leopard"], answer:0, cat:"Animals"},
    {q:"What is a baby platypus called?", options:["Puggle","Joey","Cub","Pup"], answer:0, cat:"Animals"},
    {q:"Which animal has one of the longest lifespans of any land mammal, sometimes living over 60 years?", options:["Elephant","Giraffe","Rhino","Hippo"], answer:0, cat:"Animals"},
    {q:"What do you call an animal's ability to regrow a lost body part, like a lizard's tail?", options:["Regeneration","Metamorphosis","Adaptation","Camouflage"], answer:0, cat:"Animals"},

    {q:"Which war was fought between the North and South regions of the United States?", options:["The Civil War","The Revolutionary War","World War I","World War II"], answer:0, cat:"History"},
    {q:"Who was the ancient Greek philosopher who taught Alexander the Great?", options:["Aristotle","Socrates","Plato","Homer"], answer:0, cat:"History"},
    {q:"What was the name of the period of rebirth in art and learning in Europe after the Middle Ages?", options:["The Renaissance","The Enlightenment","The Reformation","The Industrial Revolution"], answer:0, cat:"History"},
    {q:"Which ancient empire was ruled by pharaohs and built along the Nile River?", options:["Ancient Egypt","Ancient Rome","Ancient Greece","Ancient Persia"], answer:0, cat:"History"},
    {q:"What was the name of the ship on which Charles Darwin sailed while developing his theory of evolution?", options:["HMS Beagle","The Mayflower","The Santa Maria","The Endeavour"], answer:0, cat:"History"},

    {q:"Which river is the longest in Asia, flowing through China?", options:["Yangtze River","Nile River","Amazon River","Mississippi River"], answer:0, cat:"Geography"},
    {q:"What is the name of the underwater mountain range that runs through the middle of the Atlantic Ocean?", options:["Mid-Atlantic Ridge","Andes","Himalayas","Great Barrier Reef"], answer:0, cat:"Geography"},
    {q:"Which country has the most active volcanoes in the world?", options:["Indonesia","Japan","United States","Mexico"], answer:0, cat:"Geography"},
    {q:"What do you call a large area of flat land covered in grass, found in Africa?", options:["Savanna","Tundra","Steppe","Prairie"], answer:0, cat:"Geography"},
    {q:"Which sea is so salty that people float easily in it, with almost no waves?", options:["The Dead Sea","The Red Sea","The Black Sea","The Caspian Sea"], answer:0, cat:"Geography"},

    {q:"What is the chemical formula for water?", options:["H2O","CO2","O2","NaCl"], answer:0, cat:"Science"},
    {q:"Which planet has the most extreme temperature swings, from very hot to very cold, since it has almost no atmosphere?", options:["Mercury","Venus","Mars","Neptune"], answer:0, cat:"Science"},
    {q:"What do you call the boundary where two of Earth's tectonic plates meet?", options:["Fault line","Ridge","Trench","Basin"], answer:0, cat:"Science"},
    {q:"What is the name of the process where a solid changes directly into a gas without becoming liquid first?", options:["Sublimation","Evaporation","Condensation","Melting"], answer:0, cat:"Science"},
    {q:"Which part of the brain controls balance and coordination?", options:["Cerebellum","Cerebrum","Brain stem","Medulla"], answer:0, cat:"Science"},

    {q:"What is 9 cubed (9 to the power of 3)?", options:["729","81","243","648"], answer:0, cat:"Math"},
    {q:"What do you call the longest side of a right triangle?", options:["Hypotenuse","Leg","Base","Adjacent"], answer:0, cat:"Math"},
    {q:"What is 144 divided by 12?", options:["12","14","10","16"], answer:0, cat:"Math"},
    {q:"In a set of numbers, what do you call the value in the middle when they're arranged in order?", options:["Median","Mean","Mode","Range"], answer:0, cat:"Math"},
    {q:"What is 6 factorial (6!) — the product of all whole numbers from 1 to 6?", options:["720","120","360","600"], answer:0, cat:"Math"},

    {q:"What is the name of the long-distance race that covers 26.2 miles?", options:["Marathon","Triathlon","Decathlon","Pentathlon"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a story passed down orally through generations before being written down?", options:["Legend","Biography","Textbook","Encyclopedia"], answer:0, cat:"General Knowledge"},
    {q:"What do you call money paid regularly to a worker for their job?", options:["Salary","Tax","Loan","Debt"], answer:0, cat:"General Knowledge"},
    {q:"Which of these is NOT one of the five traditional senses?", options:["Intuition","Sight","Smell","Touch"], answer:0, cat:"General Knowledge"},
    {q:"What do you call a word that has more than one meaning?", options:["Multiple-meaning word","Synonym","Antonym","Homophone"], answer:0, cat:"General Knowledge"},

    {q:"How many justices currently serve on the U.S. Supreme Court?", options:["9","7","11","13"], answer:0, cat:"USA"},
    {q:"Which U.S. president served four terms in office, more than anyone else?", options:["Franklin D. Roosevelt","Abraham Lincoln","Theodore Roosevelt","Woodrow Wilson"], answer:0, cat:"USA"},
    {q:"What is the minimum age required to become President of the United States?", options:["35","30","40","25"], answer:0, cat:"USA"},
    {q:"Which document, signed in 1776, announced the American colonies' break from Britain?", options:["The Declaration of Independence","The Constitution","The Bill of Rights","The Magna Carta"], answer:0, cat:"USA"},
    {q:"How many years is a term for a U.S. Senator?", options:["6","4","2","8"], answer:0, cat:"USA"},

    {q:"In chess, what is the special move where the king and rook move at the same time?", options:["Castling","En passant","Promotion","Check"], answer:0, cat:"Games"},
    {q:"In the card game Uno, how many cards does each player start with?", options:["7","5","10","8"], answer:0, cat:"Games"},
    {q:"What is the maximum possible score in a single game of ten-pin bowling?", options:["300","200","250","180"], answer:0, cat:"Games"},
    {q:"In Scrabble, which letter tile is worth the most points?", options:["Q","E","A","T"], answer:0, cat:"Games"},
    {q:"What is it called in chess when a player has no legal moves but their king is NOT in check, ending in a tie?", options:["Stalemate","Checkmate","Castling","Check"], answer:0, cat:"Games"}
  ]
};
