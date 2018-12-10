{
	"name": "board",
	"element": "div",
	"state": {
		"width": 3,
		"height": 3
	},
	"children": [
		{
			"element": "div",
			"class": "row",
			"repeat": {
				"array": function(){return this.state.height},
			},
			"children": [
				{
					"element": "square",
					"repeat": this.state.width,
					"args": {
						"x": function(){return this.repeat.index},
						"y": function(){return this.parent.repeat.index}
					}
				}
			]
		}
	]
}
