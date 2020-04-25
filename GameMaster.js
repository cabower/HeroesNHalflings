/* GameMaster.js */

/* event location */
var eventLocation = ["Arctic", "Coastal", "Desert", "Forest", "Grassland", "Hill", "Mountain", "Swamp", 
"Underdark", "Underwater", "Urban", "Inside a Building", " Ruins", "Cliff Face", "Feywild", "Shadowfell", 
"Several Connected Mesas", "Glacier", "Back of a Gargantuan Creature"];

/* encounter arrays */
var encounterType = [ "Festival", "Arrival of an Important NPC", "Consecration of a temple", "Procession of ghosts", "Planar conjunction", "Arena Event", "Trial", "Start of a War", "Start of a skirmish", "Combat", "Dungeon"];
var possibleLoot = ["Gold", "Potion", "Poison", "Gem", "Art Object", "Trinket", "Armor", "Weapon"]; 
var lootState = ["Magic ", "Cursed", " "];


/* government types */
var government = ["Autocracy", "Bureaucracy", "Confederacy", "Democracy", "Dictatorship", "Feudalism","Gerontocracy", "Hierarchy", "Magocracy", "Matriarchy", "Militocracy", "Monarchy", "Oligarchy", "Patriarchy", "Meritocracy", "Plutocracy", "Republic", "Satrapy", "Kleptocracy", "Theocracy"];

/*settlement types */
var settlement = [["Village",[1000, 1, 0, "Small", 2]], ["Town",[6000, 2, 1000, "Medium", 20]], ["City",[25000, 25, 5000, "Large", 500]]];

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
var monsterRank = [["Flumph","Nothic","Chuul","Mind Flayer","Aboleth"],
["Black Bear","Polar Bear","Elephant","Swarm of Cranium Rats","T-Rex"],
["Pegasus","Unicorn","Deva","Ki-rin","Empyrean"],
["Flying Sword","Animated Armor","Helmed Horror","Shield Guardian","Iron Golem"],
["Psuedodragon","Faerie Dragon","Young White Dragon","Young Red Shadow Dragon","Dragon Turtle"],
["Ice Mephit","Azer","Salamander","Invisible Stalker","Efreeti"],
["Pixie","Meenlock","Yeth Hound","Bhuer Hag","Korred"],
["Dretch","Succubus","Tanarukk","Chain Devil","Rakshasa"],
["Half-Ogre","Ettin","Oni","Frost Giant","Storm Giant"],
["Goblin", "Lizalfos", "Vampyre", "Merfolk", "Orc"],
["Worg","Mimic","Gorgon","Hydra","Kraken"],
["Gray Ooze","Gelatinous Cube","Ochre Jelly","Slithering Tracker","Black Pudding"],
["Gas Spore","Awakened Tree","Shambling Mound","Wood Woad","Treant"],
["Skeleton","Warhorse Skeleton","Wight","Wraith","Vampire"]];

/* NPC fields */
var NPCgender = ["male", "female", "agender", "non-binary", "genderfluid"];

var NPCsize = ["tiny", "small", "average", "large", "gigantic"];

var NPCrace = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];

var NPCclass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

var NPCjob = ["Commoner", "Noble", "Criminal", "Bartender", "Guard", "Merchant", "Herbalist", "Fisherman", "Innkeeper"];

var NPCsexOr = ["straight", "gay", "asexual", "bisexual", "pansexual"];

var NPCalignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];


/* helper function to create a random number */
function randoNum(end) {
	return Math.floor(Math.random() * end);
}

/* Monster Generator */
function generateMonster() {
	var rando = randoNum(monsterType.length);
	var message = monsterType[rando] + ": ";
	var rank = monsterRank[rando][randoNum(5)];
    message += rank + "<br>";
    
	document.querySelector("#monster").innerHTML = message;
    
}


/* Event generator */
function generateEvent() {
	var loot, encounter, noncombat, omen, merchant, eventNum, allEvents;
    
    noncombat = "Non-combat: ";
    omen = "Omen: ";
    merchant = "Merchant: ";
    eventNum = randoNum(10);
    
    if(eventNum === 0) {
        noncombat += "The players encounter a group of more experienced adventurers heading in the other direction. If the players are polite, they are given some healing potions.";
        omen += "A roll of thunder is heard in the distance.";
        merchant += "Only useful item for sale is a potion of vitality, 25gp.";
    } else if (eventNum === 1) {
        noncombat += "A naked gnome runs across the path, gasps at the party, then runs back. Cannot be pursued.";
        omen += "A lone yellow flower is growing in the middle of the path.";
        merchant += "Studded leather armour and basic weapons are for sale.";
    } else if (eventNum === 2) {
        noncombat += "The players find an encampment of well armed, friendly humans. They may stay the night here and avoid a random encounter for the night.";
        omen += "A pool of blood shines darkly on the side of the path.";
        merchant += "You encounter a Gem & Jewelery merchant (500gp worth of loot)";
    } else if (eventNum === 3) {
        noncombat += "A song of battle. The next combat encounter grants double xp reward.";
        omen += "The earth shakes briefly.";
        merchant += "Five healing potions, 30gp each are for sale.";
    } else if (eventNum === 4) {
        noncombat += "A stranger on the road tells each PC to repent of their sins. He knows details.";
        omen += "A beautiful white horse dashes past the party and disappears.";
        merchant += "Fisherman selling his most recent catch";
    } else if (eventNum === 5) {
        noncombat += "A goblin falls out of the sky and splatters in front of the party. No logical source of the goblin can be seen.";
        omen += "The sun bursts through an overclouded sky.";
        merchant += "Bug catcher. A DC15 Nature check reveals a cartomoth, that will show them a shortcut if released. 10gp.";
    } else if (eventNum === 6) {
        noncombat += "There is an unusually vocal chorus of birdsong. Druids, Hunters, Clerics gain inspiration.";
        omen += "A shadow drifts over the party.";
        merchant += "Hunters bounty. Fresh meat, some herbs.";
    } else if (eventNum === 7) {
        noncombat += "A local ranger gives the party directions to their next destination, but he’s an a****** that sends them the wrong way. Increase the journey length.";
        omen += "A flower girl skips down the path towards the party, but disappears before she reaches them.";
        merchant += "Herbalist (can give directions).";
    } else if (eventNum === 8) {
        noncombat += "Abandoned, unidentifiable Shrine - If the party doesn’t make an offering, they trigger a combat encounter. ";
        omen += "A man is trapped under a log. If the party helps him, he disappears - it was an illusion.";
        merchant += "Basic adventuring equipment.";
    } else if (eventNum === 9) {
        noncombat += "A stranger asks for directions from the party to the last town they left. If they help him, he gives them 1D6x10 gold when they next appear in town, if ever. ";
        omen += "An arrow strikes a nearby tree, with a note attached to it. The note reads “You are a fool for looking!” No source of the arrow can be found.";
        merchant += "Advanced weapons for sale...for a high price.";
    } else {
        noncombat += "Error 404";
        omen += "Error 404";
        merchant += "Error 404";
    }
    
    encounter = "Encounter: " + encounterType[randoNum(11)];
    
    loot = "Possible Loot: " + lootState[randoNum(3)] + " " + possibleLoot[randoNum(8)];
    
    allEvents = noncombat + "<br><br>" + omen + "<br><br>" + merchant + "<br><br>" + encounter + "<br><br>" + loot;
    
    document.querySelector("#event").innerHTML = allEvents;
}

/* NPC Generator */
function generateNPC() {
	var age, gender, size, race, clazz, job, sexOr, align, NPC;
    age = randoNum(100);
    gender = NPCgender[randoNum(5)];
    size = NPCsize[randoNum(5)];
    race = NPCrace[randoNum(9)];
    clazz = NPCclass[randoNum(12)];
    sexOr = NPCsexOr[randoNum(5)];
    align = NPCalignment[randoNum(9)];
    job = NPCjob[randoNum(9)];
    
    NPC = "Your NPC is a " + age + " year old " + " " + sexOr + " " + gender + " " + race + " who is considered " + size + " for their race. They are a " + align + " " + clazz + " / " + job +"."
    
    document.querySelector("#NPC").innerHTML = NPC;
}

/* World Generator */
function generateWorld() {
	
}

/* Diety Generator */
function generateDeity() {
	var message = "";
	var rando = randoNum(religion.length);
	
	message += "Religion: " + religion[rando] + "<br>";
	rando = randoNum(aRow.length);
	message += "Alignment: " + aRow[rando];
	rando = randoNum(aCol.length);
	message += aCol[rando] + "<br>";
	rando = randoNum(divineRank.length);
	message += "Divine Rank: " + divineRank[rando];
	
	document.getElementById("deity").innerHTML = message;
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

