/* GameMaster.js */

/* government types */
var government = ["Autocracy", "Bureaucracy", "Confederacy", "Democracy", "Dictatorship", "Feudalism","Gerontocracy", "Hierarchy", "Magocracy", "Matriarchy", "Militocracy", "Monarchy", "Oligarchy", "Patriarchy", "Meritocracy", "Plutocracy", "Republic", "Satrapy", "Kleptocracy", "Theocracy"];

/*settlement types */
var settlement = [["Village",[1000, 1, 0, "small", 2]], ["Town",[6000, 2, 1000, "medium", 20]], ["City",[25000, 25, 5000, "large", 500]]];

/* compass direction */
var compass = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];

/* deity generator helper arrays */
var religion = ["Monotheism", "Dualism", "Animism"];
var aRow = ["Lawful ", "Neutral ", "Chaotic "];
var aCol = ["Good", "Neutral", "Evil"];
var divineRank = ["Greater", "Lesser", "Quasi", "Vestige"];

/* monster types */
var monsterType = ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Humanoids", "Monstrosities", "Oozes", "Plants", "Undead"];

/* low to high CR */
var monsterRank = [["Flumph","Nothic","Chuul","Mind Flayer","Aboleth"],["Black Bear","Polar Bear","Elephant","Swarm of Cranium Rats","T-Rex"],["Pegasus","Unicorn","Deva","Ki-rin","Empyrean"],
["Flying Sword","Animated Armor","Helmed Horror","Shield Guardian","Iron Golem"],
["Psuedodragon","Faerie Dragon","Young White Dragon","Young Red Shadow Dragon","Dragon Turtle"],
["Ice Mephit","Azer","Salamander","Invisible Stalker","Efreeti"],["Pixie","Meenlock","Yeth Hound","Bhuer Hag","Korred"],["Dretch","Succubus","Tanarukk","Chain Devil","Rakshasa"],
["Half-Ogre","Ettin","Oni","Frost Giant","Storm Giant"],
[],
["Worg","Mimic","Gorgon","Hydra","Kraken"],
["Gray Ooze","Gelatinous Cube","Ochre Jelly","Slithering Tracker","Black Pudding"],
["Gas Spore","Awakened Tree","Shambling Mound","Wood Woad","Treant"],["Skeleton","Warhorse Skeleton","Wight","Wraith","Vampire"]];

/* helper function to create a random number */
function randoNum(end) {
	return Math.floor(Math.random() * end);
}

/* Monster Generator */
function generateMonster() {
	var rando = randoNum(monsterType.length);
	var message = monsterType[rando] + ": ";
	var rank = monsterRank[rando][randoNum(5)];
    message += rank + "\n";

	document.querySelector("#monster").innerHTML = message;
    
}


/* Event generator */
function generateEvent() {
	
}

/* NPC Generator */
function generateNPC() {
	
}

/* World Generator */
function generateWorld() {
	
}

/* Diety Generator */
function generateDiety() {
	var message = "";
	var rando = randoNum(religion.length);
	
	message += "Religion: " + religion[rando] + "<br>";
	rando = randoNum(aRow.length);
	message += "Alignment: " + aRow[rando];
	rando = randoNum(aCol.length);
	message += aCol[rando] + "<br>";
	rando = randoNum(divineRank.length);
	message += "Divine Rank: " + divineRank[rando];
	
	document.getElementById("diety").innerHTML = message;
}


/* Riddle Generator */
function pickRiddle(){
    return randoNum(10);
}

function generateRiddle () {
    var riddleNum = pickRiddle();
    var riddle;
    
    if (riddleNum === 0) {
        riddle = "What is it- <br> What we love more than life, <br> Fear more than death,  <br> The rich want it, <br> The poor have it, <br> The miser spends it, <br> And the spend-rift saves it?";
    } else if (riddleNum === 1) {
        riddle = "What runs around a city but never moves?";
    } else if (riddleNum === 2) {
        riddle = "Iron roof, glass walls, <br> Burns and burns  <br> And never falls. <br> What am I?";
    } else if (riddleNum === 3) {
        riddle = "I have rivers without water, <br> Forests without trees,  <br> Mountains without rocks, <br> Towns without houses.";
    } else if (riddleNum === 4) {
        riddle = "I weaken all men for hours each day. <br> I show you strange visions while you are away. <br> I take you by night, by day take you back, <br> None suffer to have me, but do from my lack.";
    } else if (riddleNum === 5) {
        riddle = "It wears a leather coat, <br> to keep its skins in working order. <br> Escorts you to other realms, <br> without a magic portal. ";
    } else if (riddleNum === 6) {
        riddle = "Two friends stand and travel together, <br> one nearly useless without the other";
    } else if (riddleNum === 7) {
        riddle = "Two men drink poisoned Iced Tea. <br> One man drinks his fast and lives. <br> The other man drinks his slow and dies. <br> How is this possible?";
    } else if (riddleNum === 8) {
        riddle = "Two bodies in one, <br> the longer I stand, <br> the faster I run.";
    }  else if (riddleNum === 9) {
        riddle = "Today he is there to make you merry <br> And he will torture you tomorrow. <br> Yet he is also there to ease the pain, <br> When you are lost in grief and sorrow.";
    } else {
        riddle = "Error 404";
    }
    
    document.querySelector("#riddle").innerHTML = riddle;
    
    // Paired answer to riddle
    function generateAnswer() {
    var answer;
    if (riddleNum === 0) {
        answer = "Nothing";
    } else if (riddleNum === 1) {
        answer = "A wall";
    } else if (riddleNum === 2) {
        answer = "A lantern";
    } else if (riddleNum === 3) {
        answer = "A map";
    } else if (riddleNum === 4) {
        answer = "Sleep";
    } else if (riddleNum === 5) {
        answer = "A book";
    } else if (riddleNum === 6) {
        answer = "Shoes";
    } else if (riddleNum === 7) {
        answer = "The poison is in the ice";
    }  else if (riddleNum === 8) {
        answer = "An hourglass";
    } else if (riddleNum === 9) {
        answer = "Alcohol";
    } else {
        answer = "Error 404";
    }
    
    document.querySelector("#answer").innerHTML = answer;
    
    }
    
    var getAnswer = generateAnswer();
}

// Hides and reveals answer to riddle
  function toggleAnswer() {

    var answer = document.getElementById('answer');
    var displaySetting = answer.style.display;
    var answerButton = document.getElementById('answerButton');


    if (displaySetting == 'block') {
      answer.style.display = 'none';
      answerButton.value = 'Show Answer';
    }
    else {
      answer.style.display = 'block';
      answerButton.value = 'Hide Answer';
    }
  }

