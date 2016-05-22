
var gameSet = [
	[
		{id: 1, name: "joe"},
		[
			{id: 1, name: "yeah"},
			{id: 50, name: "no"},
			{id: 24, name: "yo"}
		]
	],
	[
		{id: 2, name: "fred"},
		[
			{id: 35, name: "maybe"},
			{id: 44, name: "definitely"},
			{id: 32, name: "Don't Know"}
		]
	]
];


var x = gameSet[1][0];
var y = gameSet[1][1][2];

console.log(x, y);
