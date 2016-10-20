// JavaScript Document
var playerHp, compHp, playerAttack, playerBaseAttack, compAttack;
var characters = [{
	name: "Luke Skywalker",
	hp: 100,
	atk: 25,
	counter: 30,
	special: "25% chance to crit for 200% damage",
	picture: "Assets/Luke.png"
}, {
	name: "Obi Wan Kenobi",
	hp: 120,
	atk: 20,
	counter: 45,
	special: "increased attack on repetition",
	picture: "Assets/obi-wan.jpg"

}, {
	name: "Darth Sidious",
	hp: 95,
	atk: 30,
	counter: 40,
	special: "every 3rd attack, add 25 damage as force lightning",
	picture: "Assets/palpatine.jpeg"
}, {
	name: "Darth Maul",
	hp: 180,
	atk: 45,
	counter: 50,
	special: "50% increased damage on counter",
	picture: "Assets/Maul.jpg"
}];
for (var i = 0; i < characters.length; i++) {
	var selectionTiles = new $("<button>");

	var charPic = $("<img>");
	charPic.attr("src", characters[i].picture);
	charPic.attr("class", "charImg");
	charPic.appendTo(selectionTiles);
	selectionTiles.data("picture", characters[i].picture);

	selectionTiles.attr("id", "char" + i);
	selectionTiles.addClass("tiles");


	//selectionTiles.attr("class", "characterPicture");
	//selectionTiles.append($("<img>",{class:"characterImg" ,src:characters[i].picture}));

	console.log(characters[i].name);
	selectionTiles.data("name", characters[i].name);
	selectionTiles.append(selectionTiles.data("name"));

	selectionTiles.data("hp", characters[i].hp);
	selectionTiles.append("<br>" + selectionTiles.data("hp"));
	console.log(selectionTiles.data("hp"));

	selectionTiles.data("atk", characters[i].atk);
	selectionTiles.append("<br>" + selectionTiles.data("atk"));
	console.log(selectionTiles.data("atk"));

	selectionTiles.data("special", characters[i].special);
	console.log(selectionTiles.data("special"));


	$("#characterSelect").append(selectionTiles);
}


$(".tiles").on("click", function () {
	if ($("#playerName").text().length === 0) {
		console.log("You're becoming the hero");

		$("#playerName").html(jQuery.data(this, "name"));

		playerHp = jQuery.data(this, "hp");
		console.log(playerHp);
		$("#playerHP").text(playerHp);

		var playerPic = $("<img>");
		playerPic.attr("src", jQuery.data(this, "picture"));
		playerPic.attr("class", "battleImg");
		playerPic.appendTo($("#playerSide"));

		playerBaseAttack = jQuery.data(this, "atk");
		playerAttack = playerBaseAttack;
		console.log("You have an attack power of " + playerAttack);

	} else if ($("#playerName").text().length > 0) {
		if ($("#compName").text().length === 0) {
			console.log("You're the baddie");

			$("#compName").text(jQuery.data(this, "name"));

			var compPic = $("<img>");
			compPic.attr("src", jQuery.data(this, "picture"));
			compPic.attr("class", "battleImg");
			compPic.appendTo($("#compSide"));

			compHp = jQuery.data(this, "hp");
			console.log(compHp);
			$("#compHP").text(compHp);

			compAttack = jQuery.data(this, "atk");
			console.log("Attacking this enemy will deal this damage to yourself:" + compAttack);

		} else if ($("#compName").text().length > 0) {
			console.log("Too many players on the field");
		}
	}
});


$("#attackButton").on("click", function () {
	if (($("#playerName").text().length > 0) && ($("#compName").text().length > 0)) {
		console.log("You have chosen to attack.");
		playerHp -= compAttack;
		($("#playerHP")).text(playerHp);
		console.log("player HP is " + playerHp);
		compHp -= playerAttack;
		console.log("comp HP is " + compHp);
		playerAttack += playerBaseAttack;
		console.log("player attack is now: " + playerAttack);
		
		if ($("#playerHP") <= 0) {
			console.log("You have lost.");
		}
		if ($("#compHP") <= 0) {
			console.log("You have defeated " + $("#compName"));
		}

		
	} else {
		console.log("The battlefield isn't full yet");
	}
});