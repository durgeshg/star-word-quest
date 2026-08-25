// Star Word Quest — Hangman word list module
// This is the single source of truth for Hangman word content, used by both
// games/hangman.html (the game) and review/word-list.html (the audit page).
//
// To add more words later: append objects to the right tier array below.
// Each word needs: w (the word, ALL CAPS), clue (kid-friendly description),
// cat (short category label).
//
// Tiers ramp in difficulty from T1 (simplest) to T7 (most advanced).
// See GRADE_TIER_MAP in hangman.html for how tiers map to grades 1-5.

window.HANGMAN_TIERS = {
  T1: [
    {w:'CAT', clue:'A furry pet that says meow', cat:'Animals'},
    {w:'SUN', clue:'It shines in the sky all day', cat:'Nature'},
    {w:'DOG', clue:'A pet that barks and wags its tail', cat:'Animals'},
    {w:'FISH', clue:'It swims and breathes underwater', cat:'Animals'},
    {w:'FROG', clue:'A green animal that hops and croaks', cat:'Animals'},
    {w:'BOOK', clue:'You read this for a story', cat:'School'},
    {w:'PIG', clue:'A pink farm animal that says oink', cat:'Animals'},
    {w:'HAT', clue:'You wear this on your head', cat:'Clothing'},
    {w:'BUS', clue:'A big vehicle that takes kids to school', cat:'Transportation'},
    {w:'CUP', clue:'You drink water or juice from this', cat:'Objects'}
  ],
  T2: [
    {w:'TREE', clue:'It has leaves, branches, and roots', cat:'Nature'},
    {w:'JUMP', clue:'What you do on a trampoline', cat:'Action'},
    {w:'MILK', clue:'A white drink from a cow', cat:'Food'},
    {w:'HAPPY', clue:'How you feel on your birthday', cat:'Feelings'},
    {w:'PLAY', clue:'What you do with toys or friends', cat:'Action'},
    {w:'STAR', clue:'It twinkles in the night sky', cat:'Nature'},
    {w:'BIRD', clue:'An animal with feathers and wings that can fly', cat:'Animals'},
    {w:'CAKE', clue:'A sweet treat you eat on your birthday', cat:'Food'},
    {w:'RIVER', clue:'A long flowing body of water', cat:'Nature'},
    {w:'CLOCK', clue:'It tells you what time it is', cat:'Objects'}
  ],
  T3: [
    {w:'APPLE', clue:'A crunchy fruit, red or green', cat:'Food'},
    {w:'GARDEN', clue:'A place where flowers and veggies grow', cat:'Places'},
    {w:'PURPLE', clue:'A color made by mixing red and blue', cat:'Colors'},
    {w:'MONKEY', clue:'An animal that loves to climb trees', cat:'Animals'},
    {w:'CASTLE', clue:'A big stone home for a king or queen', cat:'Places'},
    {w:'PENCIL', clue:'You write with this in school', cat:'School'},
    {w:'TURTLE', clue:'A slow animal with a hard shell on its back', cat:'Animals'},
    {w:'KITCHEN', clue:'The room in a house where you cook food', cat:'Places'},
    {w:'NOTEBOOK', clue:'You write notes and homework in this', cat:'School'},
    {w:'ORANGE', clue:'A citrus fruit that is also a color', cat:'Food'}
  ],
  T4: [
    {w:'ROCKET', clue:'It blasts off into outer space', cat:'Space'},
    {w:'PLANET', clue:'Earth is one of these in space', cat:'Space'},
    {w:'DOLPHIN', clue:'A smart, friendly animal that lives in the ocean', cat:'Animals'},
    {w:'RAINBOW', clue:'Colorful arc you see after rain', cat:'Nature'},
    {w:'ISLAND', clue:'Land surrounded by water on all sides', cat:'Places'},
    {w:'PUZZLE', clue:'A game with pieces that fit together', cat:'Games'},
    {w:'VOLCANO', clue:'A mountain that can erupt with hot lava', cat:'Geography'},
    {w:'PENGUIN', clue:"A black and white bird that can't fly but swims well", cat:'Animals'},
    {w:'LIBRARY', clue:'A quiet place full of books you can borrow', cat:'Places'},
    {w:'COMPASS', clue:'A tool that shows you which direction is north', cat:'Tools'}
  ],
  T5: [
    {w:'MOUNTAIN', clue:'A very tall, rocky landform', cat:'Geography'},
    {w:'ADVENTURE', clue:'An exciting and unusual journey', cat:'Ideas'},
    {w:'CALCULATE', clue:'To work out a math answer', cat:'Math'},
    {w:'VOCABULARY', clue:'All the words you know and use', cat:'Language'},
    {w:'EXERCISE', clue:'Moving your body to stay healthy', cat:'Health'},
    {w:'CURIOUS', clue:'Wanting to learn or know more', cat:'Feelings'},
    {w:'TELESCOPE', clue:'A tool used to see faraway stars and planets', cat:'Science'},
    {w:'CONTINENT', clue:'One of the seven huge landmasses on Earth', cat:'Geography'},
    {w:'TRIANGLE', clue:'A shape with exactly three sides', cat:'Math'},
    {w:'HARVEST', clue:'The time when farmers gather their crops', cat:'Agriculture'}
  ],
  T6: [
    {w:'IMAGINE', clue:'To picture something in your mind', cat:'Ideas'},
    {w:'DISCOVER', clue:'To find something for the first time', cat:'Ideas'},
    {w:'FANTASTIC', clue:'Another word for amazing or wonderful', cat:'Descriptive'},
    {w:'MYSTERIOUS', clue:'Hard to explain or understand', cat:'Descriptive'},
    {w:'ENVIRONMENT', clue:'The natural world around us', cat:'Science'},
    {w:'CELEBRATE', clue:'To do something fun to mark a special day', cat:'Ideas'},
    {w:'GENEROUS', clue:'Willing to give and share freely with others', cat:'Descriptive'},
    {w:'ANCIENT', clue:'Very, very old, from a long time ago', cat:'Descriptive'},
    {w:'NUTRITION', clue:'The science of food and how it helps your body', cat:'Health'},
    {w:'COURAGEOUS', clue:'Brave, not afraid to face something hard', cat:'Descriptive'}
  ],
  T7: [
    {w:'ARCHITECTURE', clue:'The art and science of designing buildings', cat:'Careers'},
    {w:'PERSEVERE', clue:'To keep trying even when something is hard', cat:'Ideas'},
    {w:'ENTHUSIASTIC', clue:'Full of excitement and energy about something', cat:'Feelings'},
    {w:'INDEPENDENT', clue:'Able to do things on your own', cat:'Ideas'},
    {w:'CIVILIZATION', clue:'A large, organized society with cities and culture', cat:'Social Studies'},
    {w:'TEMPERATURE', clue:'A measurement of how hot or cold something is', cat:'Science'},
    {w:'RESILIENT', clue:'Able to recover quickly after something hard', cat:'Descriptive'},
    {w:'PHOTOSYNTHESIS', clue:'The process plants use to turn sunlight into food', cat:'Science'},
    {w:'DEMOCRACY', clue:'A government where people vote for their leaders', cat:'Social Studies'},
    {w:'ECOSYSTEM', clue:'A community of living things and their environment', cat:'Science'}
  ]
};
