# Kobalt

Minimalistic & Precise Low Code Frontend Framework to build Scalable Web Apps

```javascript
import Kobalt from "./kobalt.js"

var App = new Kobalt({
	title: "Tic Tac Toe",
	state: {
		player: 1,
		winner: 0,
		cells: {A1:0, A2:0, A3:0, B1:0, B2:0, B3:0, C1:0, C2:0, C3:0}
	},
	methods: {
		checkWinner: () => {
			// Todo: calculate winner. If winner:
			this.$setState("winner", this.$state.player)
		}
	},
	elements: {
		Board
	},
	class: "boardgame",
	children: [
		{
			element: "p",
			content: () => {
				return "Player: " + this.$state.player
			}
		},{
			element: "p",
			content: () => {
				return "Winner: " + this.$state.winner + ". Click to restart."
			},
			show: () => {
				return this.$state.winner > 0
			},
			click: () => {
				this.$resetState("winner")
				this.$resetState("cells")
			}
		},{
			element: "Board"
		}
	]
})

let Board = {
	title: "Board",
	element: "div",
	class: "row",
	repeat: ['A', 'B', 'C'],
	children: [
		{
			element: "div",
			class: "col",
			repeat: ['1', '2', '3'],
			class: () => {
				return "player-" + this.$state.cells[this.$parent.$repeat.key + this.$repeat.key]
			},
			click: () => {
				this.$setState("cells." + this.$parent.$repeat.key + this.$repeat.key, this.$state.player)
				this.checkWinner()
				this.$setState("player", (this.$state.player) % 2 + 1)
			}
		}
	]
}
```

## Documentation

## API

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright 2018-present
