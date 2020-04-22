/* Array for character creation 
		blank arrays used as placeholders so that indexes match ids */
		
		var mainArr = [["ZED"],
		["Trey Jones", "Rachel Nicole Shelton", "Caroline Bower"],
		["TARDIS"],
		["TARDIS"],
		["TARDIS"],
		["Extra Small", "Small", "Medium", "Large", "Extra Large"],
		["Male", "Female"], 
		["Dragonborn","Dwarf","Elf","Gnome","Half-Elf","Halfling","Half-Orc","Human","Tiefling"],
		["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"],
		["Straight", "Gay", "Bisexual", "Pansexual", "Asexual"],
		["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]];
	
		var preSet = [[8, 10, 12, 13, 14, 15],[8, 8, 8, 15, 15, 15]];
	
		var message = document.querySelector('#sonic');
	/* message.innerHTML = "Player Generation Complete"; */	
	function generatePlayer() {
				
		var stat;
		var statDef;
		//var formArr = document.body.querySelector("input#"+i+", select");
		//console.log(formArr);
		for (var i = 1; i < 11; i++)
		{
		// getting the inside of each form input
		
			stat = document.getElementById(i);
			if (i < 5)
			{
				statDef = stat.defaultValue;
				stat = stat.value;
			}
			else
			{
				statDef = stat[0].value;
				stat = stat.options[stat.selectedIndex].value;
			}
			
			//test 
			console.log(mainArr);
			console.log(i);
			console.log(stat);
			console.log(statDef);
			
			// check for value inputted different the original
			if (stat === statDef && mainArr[i].length > 1)
			{
				var index = randoNum(mainArr[i].length);
				stat = mainArr[i][index];			
			}
			else if (mainArr[i].length === 1 && mainArr[i][1] === "TARDIS")
			{
				stat = randoNum(500);
			}
			
			// create list node, fill it with the new stat and add it to the ul
			var node = document.createElement("li");
			node.innerHTML = statDef + ": " + stat;
			message.appendChild(node);
		}
		
		var statStack = distribution();
		shuffle(statStack);
		
		// add in stats distribution
		for (var k = 20; k < 26; k++)
		{
			node = document.createElement("li");
			if (document.getElementById(k).value === document.getElementById(k).name)
			{
				node.innerHTML = document.getElementById(k).name + ": " + statStack.pop();
			}
			else
			{
				node.innerHTML = document.getElementById(k).name + ": " + document.getElementById(k).value;
			}
		}
	}
	
// backup event listener	
	function createEventListener() {
		var submitButton = document.getElementById("submit");
		if (submitButton.addEventListener) {
			submitButton.addEventListener("click", generatePlayer,
				false);
		}
		else if (submitButton.attachEvent) {
			submitButton.attachEvent("onclick", generatePlayer);
		}
	}
	
	if (window.EventListener) {
		window.addEventListener("load", createEventListener, false);
	}
	else if (window.attachEvent) {
		window.attachEvent("onload", createEventListener);
	}
	
// distribution of con and such stats
	function distribution() {
		var statRange;
		var norm = document.getElementsByTagName("input")[4];
		var pro = document.getElementsByTagName("input")[5];
		
		if (pro.checked)
		{
			statRange = preSet[pro.value];
		}
		else
		{
			statRange = preSet[norm.value];
		}
		
		return statRange;
	}
	
	// random number generator;
	function randoNum(end) {
		var result = Math.floor((Math.random() * end) + 1);
		console.log(result);
		return result;
	}
	
	// another helper function to shuffle statsStack
	function shuffle(arr) {
		for (var i = 0; i < arr.length; ++i)
		{
			var j = Math.floor(Math.random() * i);
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
    

/* Get input from Player form and create backstory */


function generateBackstory() {
		var name, age, height, weight, sizeIndex, size, genderIndex, gender, raceIndex, race, clazzIndex, clazz, sexOrIndex, sexOr, alignIndex, align, typeIndex, type, lifestyleIndex, lifestyle, pronoun, belongPro, selfPro, backstory, country, landfeat;
// console test
console.log(backstory);

	// Get values from form
		name = document.getElementById("1").value;
		age = document.getElementById("2").value;
		height = document.getElementById("3").value;
		weight = document.getElementById("4").value;
    
		sizeIndex = document.getElementById("5");
        size = sizeIndex.options[sizeIndex.selectedIndex].value;
		genderIndex = document.getElementById("6");
        gender = genderIndex.options[genderIndex.selectedIndex].value;
		raceIndex = document.getElementById("7");
        race = raceIndex.options[raceIndex.selectedIndex].value;
    
		clazzIndex = document.getElementById("8");
        clazz = clazzIndex.options[clazzIndex.selectedIndex].value;
		sexOrIndex = document.getElementById("9");
        sexOr = sexOrIndex.options[sexOrIndex.selectedIndex].value;
		alignIndex = document.getElementById("10");
        align = alignIndex.options[alignIndex.selectedIndex].value;
	
    
        country = document.getElementById("country").value;
        landfeat = document.getElementById("landfeat").value;
    
        lifestyleIndex = document.querySelector("#lifestyle");
        lifestyle = lifestyleIndex.options[lifestyleIndex.selectedIndex].value;
        typeIndex = document.querySelector("#type");
        type = typeIndex.options[typeIndex.selectedIndex].value;
      
    // set pronouns
    if (gender === "Male") {
        pronoun = "he";
        belongPro = "his";
        selfPro = "himself";
    } else if (gender === "Female") {
        pronoun = "she";
        belongPro = "her";
        selfPro = "herself";
    } else {
        pronoun = "they";
        belongPro = "their";
        selfPro = "themself";
    }
    

	backstory = name;
	// pick random values for lifestyle
	if (lifestyle === lifestyleIndex[0].value)
	{
		lifestyle = lifestyleIndex.options[randoNum(4)].value;
	}
	
	// pick random values for type
	if (type === typeIndex[0].value)
	{
		type = typeIndex.options[randoNum(4)].value;
	}
	
    // build backstory
    if(type === "tragic" && lifestyle === "criminal") {
           backstory =+ " grew up as an orphan, living on the streets in the capital of " + country + ".  From a young age " + pronoun + " was forced to steal food and pickpocket citizens and visitors to survive.  " + name + " became extremely skilled at " + pronoun + " trade and began to make a name for " + selfPro + " in the criminal world.  One day, " + pronoun + " decided to take on " + belongPro + " largest job yet.  Robbing the house of a noble. " + name + " successfully found and took a large purse of gold coins, only to be discovered on " + belongPro + " way out. " + name + " was forced to flee for " + belongPro + "life from the city and go into hiding.";
       } else if (type === "tragic" && lifestyle === "soldier") {
           backstory =+ " was raised in a small settlement/city in the " + landfeat + " of the land of " + country + ".  When " + pronoun + " was but a young child, " + name + "’s settlement/city was attacked.  All that survived was young " + name + ". " + name + " grew up to become a " + lifestyle + " and made it " + belongPro + " quest to grow in strength and experience so that " + pronoun + " could have vengeance.";
       } else if (type === "tragic" && lifestyle === "noble") {
           backstory += "";
               
       } else if (type === "heroic" && lifestyle === "noble") {
           backstory += " was a child of nobility in the land of " + country + ". " + pronoun + " was brought up with the expectation of eventually taking over for " + pronoun + " parents, however, " + pronoun + " only wanted to focus on learning more about being a " + clazz + ".  One day, the kingdom was attacked by a band of monsters that breached the castle walls. " + name + " fought them back, armed with the tools of a " + clazz + pronoun + " had met long ago, and struck them down single handedly. " + name + "was hailed a hero and from that day forward chose to hunt down monsters and protect innocent people from harm.";         
       } else if (type === "heroic" && lifestyle === "soldier"){
           backstory += " was the child of knights of " + country + ".  Great expectations were held for " + belongPro + " as " + name + "’s parents were both well-known knights of the land. " + name + "’s training was long and rigorous, testing " + belongPro + " strength, endurance, and skill.  Finally, it was time for " + name + " to prove " + selfPro + " and so " + pronoun + " set off on a quest....";
       } else if (type === "heroic" && lifestyle === "criminal") {
           backstory += "";
           
       } else if (type === "comedic" && lifestyle === "criminal") {
           backstory += "";
       
       } else if (type === "comedic" && lifestyle === "noble") {
           backstory += "";
               
       } else if (type === "comedic" && lifestyle === "soldier") {
           backstory += "";
               
       } 
    console.log(backstory);
	console.log(type);
	console.log(lifestyle);
	
    // print backstory
    document.querySelector("#genBackstory").innerHTML = backstory;
}
    

           
           
           
           
           
           
           
           
           
           