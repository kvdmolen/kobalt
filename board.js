{
	name: "board",
	element: "div",
	state: {
		"width": 3,
		"height": 3
	},
	children: [
		{
			element: "div",
			class: "row",
			repeat(){return this.state.height},
			children: [
				{
					element: "square",
					repeat: this.state.width,
					args: {
						x(){return this.repeat.index},
						y(){return this.parent.repeat.index}
					}
				}
			]
		}
	]
}
