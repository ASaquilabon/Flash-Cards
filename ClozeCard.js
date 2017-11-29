var BasicCard = require("./BasicCard.js");
var ClozeCard = function(text, cloze) {
	if (this instanceof ClozeCard) {
		this.fullText = text;
		this.cloze = cloze;
		this.partial = function() {
			if (this.fullText.includes(this.cloze)) {
				return this.fullText.replace(this.cloze, '...');
			} else {
				var brokenClozeMessage = "Oops! The full text: '" + this.fullText + "' doesn't contain the cloze: '" + this.cloze + "'.";
				return brokenClozeMessage;
			}
		};
	} else {
		return new ClozeCard(text, cloze);
	}
};
var kobeBryant = new BasicCard("Kobe was drafted right out of high school in 1996 by what NBA team?", "Charlotte Hornets");
console.log(kobeBryant.front);
console.log(kobeBryant.back);

var kobeBryantCloze = new ClozeCard("Kobe set a record by hitting how many three-pointers in one game in 2003?", "12");
console.log(kobeBryantCloze.fullText);
console.log(kobeBryantCloze.cloze);
console.log(kobeBryantCloze.partial());

var typoKobeBryantCloze = new ClozeCard("What was Kobe Bryant's average ppg in the 2000-2001 season?", "28.5");
console.log(typoKobeBryantCloze.fullText);
console.log(typoKobeBryantCloze.cloze);
console.log(typoKobeBryantCloze.partial());

var missingNewCloze = ClozeCard("Shortly after the 1996 draft Kobe was traded to the Los Angeles Lakers for what player?", "Vlade Divac");
console.log(missingNewCloze.fullText);
console.log(missingNewCloze.cloze);
console.log(missingNewCloze.partial());

module.exports = ClozeCard;