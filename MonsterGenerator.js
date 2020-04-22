// Random number generator
function randoNum(end) {
			return Math.floor(Math.random() * end);
		}

// Monster type array
var monsterType = ["Aberrations","Beasts","Celestials","Constructs","Dragons","Elementals","Fey", "Fiends", "Giants","Humanoids", "Monstrosities", "Oozes", "Plants", "Undead"];

/* low to high CR array*/
	var monsterRank = [["Flumph","Nothic","Chuul","Mind Flayer","Aboleth"],
["Black Bear","Polar Bear","Elephant","Swarm of Cranium Rats","T-Rex"],
["Pegasus","Unicorn","Deva","Ki-rin","Empyrean"],
["Flying Sword","Animated Armor","Helmed Horror","Shield Guardian","Iron Golem"],
["Psuedodragon","Faerie Dragon","Young White Dragon","Young Red Shadow Dragon","Dragon Turtle"],
["Ice Mephit","Azer","Salamander","Invisible Stalker","Efreeti"],
["Pixie","Meenlock","Yeth Hound","Bhuer Hag","Korred"],
["Dretch","Succubus","Tanarukk","Chain Devil","Rakshasa"],
["Half-Ogre","Ettin","Oni","Frost Giant","Storm Giant"],
["Worg","Mimic","Gorgon","Hydra","Kraken"],
["Gray Ooze","Gelatinous Cube","Ochre Jelly","Slithering Tracker","Black Pudding"],
["Gas Spore","Awakened Tree","Shambling Mound","Wood Woad","Treant"],
["Skeleton","Warhorse Skeleton","Wight","Wraith","Vampire"]];

function randomMonster (){
    var rando, message, i, rank;
    rando = randoNum(monsterType.length);
    message = monsterType[rando] + " - ";
    rank = monsterRank[rando][randoNum(5)];
    
    message += rank + "\n";
    // alert(message);
    document.querySelector("#monster").innerHTML = message;
}

