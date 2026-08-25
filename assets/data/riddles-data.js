// Star Word Quest — Riddles content module
// This is the single source of truth for riddle content, used by both
// games/riddles.html (the game) and review/word-list.html (the audit page).
//
// To add more riddles later: append objects to the right tier array below.
// Each riddle needs: q (the riddle text), options (array of 4 choices),
// answer (index of the correct option, 0-3), cat (short category label).
//
// Tiers ramp in difficulty from R1 (simplest) to R7 (most advanced).
// See GRADE_TIER_MAP in riddles.html for how tiers map to grades 1-5.

window.RIDDLE_TIERS = {
  R1: [
    {q:"I have four legs and a tail. I bark and love to fetch balls. What am I?", options:["Dog","Cat","Bird","Fish"], answer:0, cat:"Animals"},
    {q:"I am yellow and bright. I come out in the morning and go down at night. What am I?", options:["Moon","Star","Sun","Cloud"], answer:2, cat:"Nature"},
    {q:"I am cold and white, and I fall from the sky in winter. What am I?", options:["Rain","Snow","Sand","Fog"], answer:1, cat:"Weather"},
    {q:"I have pages and pictures or words. You open me to read a story. What am I?", options:["Phone","Book","Chair","Plate"], answer:1, cat:"School"},
    {q:"I hop, I am green, and I live near ponds. I say ribbit. What am I?", options:["Frog","Duck","Fish","Bee"], answer:0, cat:"Animals"},
    {q:"I am round and I bounce. You can kick me or throw me in a game. What am I?", options:["Box","Ball","Rock","Shoe"], answer:1, cat:"Games"},
    {q:"I have wool, I say baa, and farmers keep me for my fluffy coat. What am I?", options:["Sheep","Cow","Pig","Goat"], answer:0, cat:"Animals"},
    {q:"I fly in the sky, I lay eggs, and I can sing or tweet. What am I?", options:["Fish","Bird","Snake","Ant"], answer:1, cat:"Animals"},
    {q:"I am wet and I fall from clouds. Plants need me to grow. What am I?", options:["Snow","Rain","Wind","Sun"], answer:1, cat:"Weather"},
    {q:"I am a fruit that monkeys love, and I am yellow and curved. What am I?", options:["Apple","Banana","Grape","Orange"], answer:1, cat:"Food"}
  ],
  R2: [
    {q:"I have branches, leaves, and roots. Birds build nests in me. What am I?", options:["Tree","Flower","Bush","Grass"], answer:0, cat:"Nature"},
    {q:"I am a color made by mixing yellow and blue. What am I?", options:["Purple","Green","Orange","Pink"], answer:1, cat:"Colors"},
    {q:"I am a sweet, crunchy fruit that can be red or green. What am I?", options:["Banana","Apple","Grape","Pear"], answer:1, cat:"Food"},
    {q:"I have one or two humps and I live in the desert. What am I?", options:["Horse","Camel","Cow","Goat"], answer:1, cat:"Animals"},
    {q:"I am cold and you put me in a drink to keep it chilly. What am I?", options:["Sugar","Ice","Salt","Sand"], answer:1, cat:"Science"},
    {q:"I shine in the night sky and there are billions of me. What am I?", options:["Moon","Cloud","Star","Sun"], answer:2, cat:"Space"},
    {q:"I have a long neck and I eat leaves from tall trees. What am I?", options:["Zebra","Giraffe","Horse","Deer"], answer:1, cat:"Animals"},
    {q:"I am orange, long, and rabbits love to eat me. What am I?", options:["Potato","Carrot","Onion","Pea"], answer:1, cat:"Food"},
    {q:"I have four wheels, an engine, and people drive me on roads. What am I?", options:["Bicycle","Car","Boat","Train"], answer:1, cat:"Transportation"},
    {q:"I am worn on your feet to protect them when you walk. What am I?", options:["Hat","Shoes","Gloves","Scarf"], answer:1, cat:"Clothing"}
  ],
  R3: [
    {q:"I have wings but I am not a bird. I visit flowers and make honey. What am I?", options:["Butterfly","Bee","Bat","Fly"], answer:1, cat:"Animals"},
    {q:"I am a large gray animal with a long trunk and big ears. What am I?", options:["Elephant","Rhino","Hippo","Giraffe"], answer:0, cat:"Animals"},
    {q:"I am a building with towers where kings and queens once lived. What am I?", options:["House","Castle","School","Barn"], answer:1, cat:"Places"},
    {q:"You use me to write or draw, and I have an eraser on top. What am I?", options:["Crayon","Pencil","Marker","Chalk"], answer:1, cat:"School"},
    {q:"I have many colors and I appear in the sky after it rains. What am I?", options:["Sunset","Rainbow","Cloud","Storm"], answer:1, cat:"Nature"},
    {q:"I am a piece of land completely surrounded by water. What am I?", options:["Mountain","Island","Valley","Desert"], answer:1, cat:"Geography"},
    {q:"I am a young dog, playful and small. What am I?", options:["Kitten","Puppy","Cub","Chick"], answer:1, cat:"Animals"},
    {q:"I am a building where children go to learn. What am I?", options:["Hospital","School","Store","Library"], answer:1, cat:"Places"},
    {q:"I am a season that comes after winter, when flowers start to bloom. What am I?", options:["Summer","Spring","Fall","Winter"], answer:1, cat:"Seasons"},
    {q:"I am a large body of salty water that covers most of the Earth. What am I?", options:["Lake","Ocean","River","Pond"], answer:1, cat:"Geography"}
  ],
  R4: [
    {q:"I blast off into space with fire and smoke. What am I?", options:["Airplane","Rocket","Balloon","Kite"], answer:1, cat:"Space"},
    {q:"I am a planet in our solar system known for my beautiful rings. What am I?", options:["Earth","Saturn","Mars","Mercury"], answer:1, cat:"Space"},
    {q:"I am a game made of many pieces that fit together to make a picture. What am I?", options:["Puzzle","Dice","Cards","Blocks"], answer:0, cat:"Games"},
    {q:"I live in the ocean, I'm very smart, and I talk in clicks and whistles. What am I?", options:["Shark","Dolphin","Octopus","Whale"], answer:1, cat:"Animals"},
    {q:"I am the tallest kind of landform, higher than a hill. What am I?", options:["Valley","Mountain","Plain","Canyon"], answer:1, cat:"Geography"},
    {q:"I am a journey full of excitement and surprises. What am I?", options:["Chore","Adventure","Nap","Meeting"], answer:1, cat:"Ideas"},
    {q:"I am the force that pulls objects down toward the Earth. What am I?", options:["Magnetism","Gravity","Friction","Energy"], answer:1, cat:"Science"},
    {q:"I am a group of stars that forms a picture in the night sky. What am I?", options:["Galaxy","Constellation","Comet","Nebula"], answer:1, cat:"Space"},
    {q:"I am the process plants use to make their own food using sunlight. What am I?", options:["Digestion","Photosynthesis","Respiration","Pollination"], answer:1, cat:"Science"},
    {q:"I am a story that is made up, not true, from someone's imagination. What am I?", options:["Biography","Fiction","History","Newspaper"], answer:1, cat:"Language"}
  ],
  R5: [
    {q:"I describe wanting to learn or find out more about something. What am I?", options:["Curious","Careless","Tired","Bored"], answer:0, cat:"Feelings"},
    {q:"I mean to work out an answer using numbers. What am I?", options:["Imagine","Calculate","Celebrate","Discover"], answer:1, cat:"Math"},
    {q:"I mean all the words a person knows and uses. What am I?", options:["Grammar","Vocabulary","Alphabet","Sentence"], answer:1, cat:"Language"},
    {q:"I mean moving your body to stay strong and healthy. What am I?", options:["Exercise","Relax","Sleep","Eat"], answer:0, cat:"Health"},
    {q:"I mean to find something for the very first time. What am I?", options:["Discover","Forget","Imagine","Repeat"], answer:0, cat:"Ideas"},
    {q:"I mean to picture something in your mind that isn't really there. What am I?", options:["Remember","Imagine","Copy","Explain"], answer:1, cat:"Ideas"},
    {q:"I mean to make something clear or easy to understand. What am I?", options:["Confuse","Explain","Hide","Forget"], answer:1, cat:"Ideas"},
    {q:"I mean to guess an outcome based on facts you already know. What am I?", options:["Predict","Imagine","Remember","Argue"], answer:0, cat:"Ideas"},
    {q:"I mean the main idea or lesson of a story. What am I?", options:["Setting","Theme","Character","Plot"], answer:1, cat:"Language"},
    {q:"I mean a plan of action to reach a goal. What am I?", options:["Strategy","Accident","Mistake","Excuse"], answer:0, cat:"Ideas"}
  ],
  R6: [
    {q:"I mean amazing or wonderful — another way to say great. What am I?", options:["Fantastic","Ordinary","Boring","Simple"], answer:0, cat:"Descriptive"},
    {q:"I mean hard to explain or figure out. What am I?", options:["Mysterious","Obvious","Clear","Easy"], answer:0, cat:"Descriptive"},
    {q:"I mean everything in nature around us — air, water, land, and living things. What am I?", options:["Weather","Environment","Geography","Season"], answer:1, cat:"Science"},
    {q:"I mean to do something special to mark a happy day. What am I?", options:["Celebrate","Complain","Cancel","Ignore"], answer:0, cat:"Ideas"},
    {q:"I mean able to do things on your own, without help. What am I?", options:["Dependent","Independent","Nervous","Curious"], answer:1, cat:"Ideas"},
    {q:"I mean to keep trying even when something is difficult. What am I?", options:["Persevere","Surrender","Panic","Forget"], answer:0, cat:"Ideas"},
    {q:"I mean to look at something very closely and carefully. What am I?", options:["Examine","Ignore","Skip","Guess"], answer:0, cat:"Ideas"},
    {q:"I mean something that happens by chance, without being planned. What am I?", options:["Deliberate","Accidental","Scheduled","Organized"], answer:1, cat:"Descriptive"},
    {q:"I mean a group of people who share the same culture, language, or history. What am I?", options:["Family","Society","Team","Class"], answer:1, cat:"Social Studies"},
    {q:"I mean to change something to make it better. What am I?", options:["Improve","Damage","Ignore","Copy"], answer:0, cat:"Ideas"}
  ],
  R7: [
    {q:"I am the art and science of designing buildings. What am I?", options:["Engineering","Architecture","Construction","Carpentry"], answer:1, cat:"Careers"},
    {q:"I mean full of excitement and energy about something. What am I?", options:["Enthusiastic","Exhausted","Nervous","Confused"], answer:0, cat:"Feelings"},
    {q:"I am a large, organized society with cities, laws, and culture. What am I?", options:["Village","Civilization","Community","Kingdom"], answer:1, cat:"Social Studies"},
    {q:"I am a measurement of how hot or cold something is. What am I?", options:["Weight","Temperature","Distance","Volume"], answer:1, cat:"Science"},
    {q:"I am the study of the stars, planets, and space. What am I?", options:["Geography","Astronomy","Biology","History"], answer:1, cat:"Science"},
    {q:"I mean to think carefully about something before deciding. What am I?", options:["Consider","Ignore","Forget","Assume"], answer:0, cat:"Ideas"},
    {q:"I am a government run by the people, who vote for their leaders. What am I?", options:["Monarchy","Democracy","Dictatorship","Empire"], answer:1, cat:"Social Studies"},
    {q:"I mean the ability to bounce back quickly after something difficult. What am I?", options:["Resilience","Weakness","Anxiety","Laziness"], answer:0, cat:"Feelings"},
    {q:"I am the study of living things — plants, animals, and people. What am I?", options:["Chemistry","Biology","Physics","Geology"], answer:1, cat:"Science"},
    {q:"I mean to work together with others toward a shared goal. What am I?", options:["Collaborate","Compete","Isolate","Argue"], answer:0, cat:"Ideas"}
  ]
};
