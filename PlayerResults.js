/* Get input from Player form and create backstory */


function generateBackstory() {
		var name, age, height, weight, size, gender, race, clazz, sexOr, align, type, lifestyle, pronoun, belongPro, selfPro, backstory, country, landfeat;

	// Get values from form
		name = document.getElementById("1").value;
		age = document.getElementById("2").value;
		height = document.getElementById("3").value;
		weight = document.getElementById("4").value;
		size = document.getElementById("5").value;
		gender = document.getElementById("6").value;
		race = document.getElementById("7").value;
		clazz = document.getElementById("8").value;
		sexOr = document.getElementById("9").value;
		align = document.getElementById("10").value;
	
    
        country = document.getElementById("country").value;
        landfeat = document.getElementById("landfeat").value;
        lifestyle = document.getElementById("lifestyle").value;
        type = document.getElementById("type").value;
      
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
    

    // build backstory
    if(type === "tragic" && lifestyle === "criminal") {
           backstory = name + " grew up as an orphan, living on the streets in the capital of " + country + ".  From a young age " + pronoun + " was forced to steal food and pickpocket citizens and visitors to survive.  " + name + " became extremely skilled at " + pronoun + " trade and began to make a name for " + selfPro + " in the criminal world.  One day, " + pronoun + " decided to take on " + belongPro + " largest job yet.  Robbing the house of a noble. " + name + " successfully found and took a large purse of gold coins, only to be discovered on " + belongPro + " way out. " + name + " was forced to flee for " + belongPro + "life from the city and go into hiding.";
       } else if (type === "tragic" && lifestyle === "soldier") {
           backstory = name + " was raised in a small settlement/city in the " + landfeat + " of the land of " + country + ".  When " + pronoun + " was but a young child, " + name + "’s settlement/city was attacked.  All that survived was young " + name + ". " + name + " grew up to become a " + lifestyle + " and made it " + belongPro + " quest to grow in strength and experience so that " + pronoun + " could have vengeance.";
       } else if (type === "tragic" && lifestyle === "noble") {
           backstory = "";
               
       } else if (type === "heroic" && lifestyle === "noble") {
           backstory = name + " was a child of nobility in the land of " + country + ". " + pronoun + " was brought up with the expectation of eventually taking over for " + pronoun + " parents, however, " + pronoun + " only wanted to focus on learning more about being a " + clazz + ".  One day, the kingdom was attacked by a band of monsters that breached the castle walls. " + name + " fought them back, armed with the tools of a " + clazz + pronoun + " had met long ago, and struck them down single handedly. " + name + "was hailed a hero and from that day forward chose to hunt down monsters and protect innocent people from harm.";         
       } else if (type === "heroic" && lifestyle === "soldier"){
           backstory = name + " was the child of knights of " + country + ".  Great expectations were held for " + belongPro + " as " + name + "’s parents were both well-known knights of the land. " + name + "’s training was long and rigorous, testing " + belongPro + " strength, endurance, and skill.  Finally, it was time for " + name + " to prove " + selfPro + " and so " + pronoun + " set off on a quest....";
       } else if (type === "heroic" && lifestyle === "criminal") {
           backstory = "";
           
       } else if (type === "comedic" && lifestyle === "criminal") {
           backstory = "";
       
       } else if (type === "comedic" && lifestyle === "noble") {
           backstory = "";
               
       } else if (type === "comedic" && lifestyle === "soldier") {
           backstory = "";
               
       } 
    
    // print backstory
    document.getElementById("genBackstory").innerHTML = backstory;
}
    

           
           
           
           
           
           
           
           
           
           