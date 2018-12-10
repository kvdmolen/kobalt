{
	name: "square",
	element: "div",
	props: {
		x: Number,
		y: Number
	},
	state: {
		entry: 0
	},
	click(){
		this.setState("entry", this.parent.state.currentPlayer)
	}
}
