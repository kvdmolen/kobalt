# Kobalt

Minimalistic & Precise Low Code Frontend Framework to build Scalable Web Apps

```javascript
import Kobalt from "./kobalt.js"

var App = new Kobalt({
	title: "Tic Tac Toe",
	state: {
		player: 1,
		winner: 0,
		board: {A1:0,A2:0,A3:0,B1:0,B2:0,B3:0,C1:0,C2:0,C3:0}
	},
	class: "boardgame",
	children: [
		{
			element: "p",
			content: () => {return "Player: " + this.$state.player}
		},{
			element: "p",
			content: () => {return "Winner: " + this.$state.winner},
			show: () => {return this.$state.winner > 0}
		},{
			element: "div",
			class: "row",
			repeat: ['A', 'B', 'C'],
			children: [
				{
					element: "div",
					class: "col",
					repeat: ['1', '2', '3'],
					click: () => {
						this.$setState("board."+ this.$parent.$index, this.$state.player)
						this.$setState("player", (this.$state.player + 1) % 2)
					}
				}
			]
		}
	]
})
```

## Documentation

## API
