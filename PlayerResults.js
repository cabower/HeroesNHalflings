/* Get input from Player form and create backstory */
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
	
		var message = document.querySelector('#sonic');

        
        landArr = ["forest", "mountains", "fields", "desert", "marshes", "swamp", "valley"];

        countryArr = ["Gondor", "Mordor", "Genosha", "Arendelle", "Atlantis", "Wakanda", "Florin", "Guilder", "Britannia", "Luftnarp", "Sokovia", "Themyscira", "Attilan", "England", "Italy", "America", "Japan", "South Korea", "China", "Egypt", "Romania", "Night Vale", "Desert Bluffs", "Mexico", "Canada", "Argentina", "Uganda"];



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
			if (stat === statDef)
			{
				var duck = mainArr[i];
				shuffle(duck);
				stat = duck[0];	
				if (stat === "TARDIS")
				{
                    if (statDef === "Age") {
					   stat = randoNum(500);
                    } else if (statDef === "Height"){
                        stat = (randoNum(12) + 1)+ "ft. " + randoNum(11) + "in.";
                    } else if (statDef === "Weight"){
                        stat = randoNum(300) + " lbs.";
                    } else {
                        stat = "Error 404";
                    }
				}
			}
			
			
			
			// create list node, fill it with the new stat and add it to the ul
			var node = document.createElement("li");
			node.innerHTML = statDef + ": " + stat;
			message.appendChild(node);
		}
		
		node.appendChild(document.createElement("br"));
		var next = document.createElement("h4");
		next.innerHTML = "** Player Stats **";
		node.appendChild(next);
		
		next = document.createElement("ul");
		node.appendChild(next);
		
		var statStack = distribution();
		shuffle(statStack);
		
		// add in stats distribution
		for (var k = 20; k < 26; k++)
		{
			node = document.createElement("li");
			stat = document.getElementById(k).value;
			statDef = document.getElementById(k).name;
			if (stat === "")
			{
				node.innerHTML = statDef + ": " + statStack.pop();
			}
			else
			{
				node.innerHTML = statDef + ": " + stat;
			}
			
			next.appendChild(node);
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
        var preSet = [[8, 10, 12, 13, 14, 15],[8, 8, 8, 15, 15, 15]]; 
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
		return result;
	}
	
	// another helper function to shuffle statsStack
	function shuffle(arr) {
		for (var i = 0; i < arr.length; i++)
		{
			var j = Math.floor(Math.random() * i);
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}


function generateBackstory() {
		var name, genderIndex, gender, clazzIndex, clazz, typeIndex, type, lifestyleIndex, lifestyle, pronoun, belongPro, otherPro, selfPro, backstory, country, landfeat;

	// Get values from form
		name = document.getElementById("1").value;
    

		genderIndex = document.getElementById("6");
        gender = genderIndex.options[genderIndex.selectedIndex].value;

		clazzIndex = document.getElementById("8");
        clazz = clazzIndex.options[clazzIndex.selectedIndex].value;
	
    
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
        otherPro = "him";
        selfPro = "himself";
    } else if (gender === "Female") {
        pronoun = "she";
        belongPro = "her";
        otherPro = "her";
        selfPro = "herself";
    } else {
        pronoun = "they";
        belongPro = "their";
        otherPro = "them";
        selfPro = "themself";
    }
    
    // pick random value for name
    if (name === "Name"){
        name = mainArr[1][randoNum(3) - 1];
    }
    
    // pick random value for size
    if (clazz === clazzIndex[0].value)
	{
		clazz = clazzIndex.options[randoNum(12)].value;
	}
    
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
	
    // Random values for land feature
    if (landfeat === "Land Feature (Forest)"){
        landfeat = landArr[randoNum(7) - 1];
    }
    
    // random value for country
    if (country === "Country Name"){
        country = countryArr[randoNum(27) - 1];
    }
    
    backstory = name;
    
    // build backstory
    if(type === "tragic" && lifestyle === "criminal") {
           backstory += " grew up as an orphan, living on the streets in the capital of " + country + ".  From a young age " + pronoun + " was forced to steal food and pickpocket citizens and visitors to survive.  " + name + " became extremely skilled at " + belongPro + " trade and began to make a name for " + selfPro + " in the criminal world. <br><br> One day, " + pronoun + " decided to take on " + belongPro + " largest job yet.  Robbing the house of a noble. " + name + " successfully found and took a large purse of gold coins, only to be discovered on " + belongPro + " way out. " + name + " was forced to flee for " + belongPro + " life from the city and go into hiding.";
       } else if (type === "tragic" && lifestyle === "soldier") {
           backstory += " was raised in a small city in the " + landfeat + " of the land of " + country + ".  When " + pronoun + " was but a young child, " + name + "’s city was attacked.  All that survived was young " + name + ". " + name + " grew up to become a " + clazz + " and made it " + belongPro + " quest to grow in strength and experience so that " + pronoun + " could have vengeance.";
       } else if (type === "tragic" && lifestyle === "noble") {
           backstory += " was lovingly raised by " + pronoun + " parents and servants in the land of " + country + ". " + belongPro + " parents were nobility, but kind and just to all in their domain. One day a band of strangers sought an audience with " + name + "'s parents, only to slaughter them and their guards and plunder anything of value they could find. ";               
       } else if (type === "heroic" && lifestyle === "noble") {
           backstory += " was a child of nobility in the land of " + country + ". " + name + " was brought up with the expectation of eventually taking over for " + belongPro + " parents, however, " + pronoun + " only wanted to focus on learning more about being a " + clazz + ". <br><br> One day, the kingdom was attacked by a band of monsters that breached the castle walls. " + name + " fought them back, armed with the tools of a " + clazz + " " + pronoun + " had met long ago, and struck them down single handedly. " + name + " was hailed a hero and from that day forward chose to hunt down monsters and protect innocent people from harm.";         
       } else if (type === "heroic" && lifestyle === "soldier"){
           backstory += " was the child of knights of " + country + ".  Great expectations were held for " + otherPro + " as " + name + "’s parents were both well-known knights of the land. " + name + "’s training was long and rigorous, testing " + belongPro + " strength, endurance, and skill.  Finally, it was time for " + name + " to prove " + selfPro + " and so " + pronoun + " set off on a quest....";
       } else if (type === "heroic" && lifestyle === "criminal") {
           backstory += " had many dreams and ambitions, but saving a group of children from slavery hadn't been on " + belongPro + " list.  Even so, when " + pronoun + " stumbled across a cage full of dirty, piteous children in a corrupt merchant's cellar, " + pronoun + " did not hesitate picking the lock. <br><br> " + name + " managed to spirit them away to safety in the " + landfeat + "s of " + country + ". From that day, " + name + " vowed to thwart the plans and business of all whom " + pronoun + " deemed corrupt. ";
       } else if (type === "comedic" && lifestyle === "criminal") {
           backstory += " was raised by a band of criminals in a traveling carnival. One day, they were found stealing and had to pack up and leave quickly and quietly in the night. They unknowingly left " + name + " behind. <br><br> The next day " + pronoun + " went looking for " + belongPro + " troop but instead stumbled across a party of travelers.  Mistaking " + name + " for a well-known warrior of the same name, the travelers insisted " + pronoun + " join them on their quest. " + name + " quickly complied upon seeing " + belongPro + " troop's latest victim posting hastily made wanted posters throughout the town.";       
       } else if (type === "comedic" && lifestyle === "noble") {
           backstory += " was a naive noble who had only known pleasure and riches all " + belongPro + " life. One fateful day, " + pronoun + " got terribly lost while riding in the " + landfeat + " of " + country + ". After several days, " + name + " came across a group of travelers who did not know the way back to " + name + "'s home, heartily invited " + belongPro + " to join them. ";
       } else if (type === "comedic" && lifestyle === "soldier") {
           backstory += " was raised to be a formidable soldier, but when the time came to actually begin using " + belongPro + " training " + pronoun + " found that by some happenstance, " + pronoun + " barely had to fight at all. Almost every foe that " + name + " faced befell some misfortune during the battle. <br><br> There was the Ogre that spontaeously died of a heart attack, the Black Bear that was crushed by a falling tree, and the time " + name + " was suffering from allergies and had eaten copious amounts of garlic bread, causing " + otherPro + " to kill a Vampire by sneezing on it.  Intent on proving " + belongPro + " worth, " + name + " decided to go on a quest, to kill a foe...non-accidently.";
       } 
	
    // print backstory
    document.querySelector("#genBackstory").innerHTML = backstory;
}
    

           
           
           
           
           
           
           
           
           
           