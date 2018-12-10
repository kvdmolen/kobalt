{
	name: "game",
	element: "div",
	class() => {"game " + this.state.winner ? "game-have-winner" : ""},
	state: {
		winner: 0,
		player() => {Math.round(Math.random()) + 1}
	},
	children: [
	{
		element: "h1",
		class: "game-title",
		content: "Tic Tac Toe"
	},
	{
		element: "div",
		class: "game-player",
		content() => {"Current player: " + this.state.player}
	},
	{
		element: "board"
	},
	{
		element: "div",
		class: "game-winner",
		content() => {"And the winner is: " + this.state.winner}
	},
	{
		element: "mybutton",
		class: "newgame",
		if() => {return this.state.winner > 0},
		props: {
			title: "New game",
			icon: "fa fa-plus"
		},
		click(){
			this.setState("player", this.state.winner)
			this.setState("winner", 0)
		}
	}]
}
