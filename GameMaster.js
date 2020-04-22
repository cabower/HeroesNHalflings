/* GameMaster.js */

/* government types */
var government = ["Autocracy", "Bureaucracy", "Confederacy", "Democracy", "Dictatorship", "Feudalism",
"Gerontocracy", "Hierarchy", "Magocracy", "Matriarchy", "Militocracy", "Monarchy", "Oligarchy",
"Patriarchy", "Meritocracy", "Plutocracy", "Republic", "Satrapy", "Kleptocracy", "Theocracy"]

/*settlement types */
var settlement = [["Village",[1000, 1, 0, "small", 2]], ["Town",[6000, 2, 1000, "medium", 20]], 
["City",[25000, 25, 5000, "large", 500]]];

/* compass direction */
var compass = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];

/* deity generator helper arrays */
var religion = ["Monotheism", "Dualism", "Animism"];
var aRow = ["Lawful ", "Neutral ", "Chaotic "];
var aCol = ["Good", "Neutral", "Evil"];
var divineRank = ["Greater", "Lesser", "Quasi", "Vestige"];

/* monster types */
var monsterType = ["Aberrations","Beasts","Celestials","Constructs","Dragons","Elementals","Fey",
"Fiends", "Giants","Humanoids", "Monstrosities", "Oozes", "Plants", "Undead"];

/* low to high CR */
var monsterRank = [["Flumph","Nothic","Chuul","Mind Flayer","Aboleth"],
["Black Bear","Polar Bear","Elephant","Swarm of Cranium Rats","T-Rex"],
["Pegasus","Unicorn","Deva","Ki-rin","Empyrean"],
["Flying Sword","Animated Armor","Helmed Horror","Shield Guardian","Iron Golem"],
["Psuedodragon","Faerie Dragon","Young White Dragon","Young Red Shadow Dragon","Dragon Turtle"],
["ice Mephit","Azer","Salamander","Invisible Stalker","Efreeti"],
["Pixie","Meenlock","Yeth Hound","Bhuer Hag","Korred"],
["Dretch","Succubus","Tanarukk","Chain Devil","Rakshasa"],
["Half-Ogre","Ettin","Oni","Frost Giant","Storm Giant"],
["Worg","Mimic","Gorgon","Hydra","Kraken"],
["Gray Ooze","Gelatinous Cube","Ochre Jelly","Slithering Tracker","Black Pudding"],
["Gas Spore","Awakened Tree","Shambling Mound","Wood Woad","Treant"],
["Skeleton","Warhorse Skeleton","Wight","Wraith","Vampire"]];

/* helper function to create a random number */
function randoNum(end) {
	return (Math.floor(Math.random() * 1000)) % end;
}

/* Monster Generator */
function generateMonster() {
	var rando = randoNum(monsterType.length);
	var message = monsterType[rando] + ": \n";
	
	for (var i = 0; i < monsterRank[rando].length; i++)
	{
		message += monsterRank[rando][i] + ",\n";
	}

	document.getElementById("monster").innerHTML = message;
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
	
	message += "Religion: " + religion[rando] + "\n";
	rando = randoNum(aRow.length);
	message += "Alignment: " + aRow[rando];
	rando = randoNum(aCol.length);
	message += aCol[rando] + "\n";
	rando = randoNum(divineRank.length);
	message += "Divine Rank: " + divineRank[rando];
	
	document.getElementById("diety").innerHTML = message;
}

