# Kobalt

Minimalistic & Precise Low Code Frontend Framework to build Scalable Web Apps

```javascript
import Kobalt from "./kobalt.js"

var App = new Kobalt({
	title: "Tic Tac Toe",
	bodyclass: "boardgame",
	state: {
		player: 1,
		winner: 0
	},
	elements: {
		Board
	},
	capture: {
		Board1winner: (newvalue) => {
			if(newvalue > 0){
				this.$setState("winner", newvalue)
			}
		}
	},
	content: [
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
				this.$elements.Board1.$resetState("cells")
			}
		},{
			element: "div",
			class: "board",
			content: {
				element: "Board",
				id: "Board1",
				props: {
					player: () => {return this.$state.player}
				}
			}
		}
	]
})

let Board = {
	title: "Board",
	props: {
		player: Number
	},
	state: {
		cells: {A1:0, A2:0, A3:0, B1:0, B2:0, B3:0, C1:0, C2:0, C3:0}
	},
	methods: {
		isWinner: () => {
			// Todo: calculate winner. If winner: return true
			return false
		}
	},
	content: {
		element: "div",
		class: "row",
		repeat: ['A', 'B', 'C'],
		content: {
			element: "div",
			class: "col",
			repeat: ['1', '2', '3'],
			class: () => {
				return "player-" + this.$state.cells[this.$parent.$repeat.key + this.$repeat.key]
			},
			click: () => {
				this.$setState("cells." + this.$parent.$repeat.key + this.$repeat.key, this.$state.player)
				if(this.isWinner()){
					this.$root.$setState("winner", this.$props.player)
				}else{
					this.$root.$setState("player", (this.$props.player) % 2 + 1)
				}
			}
		}
	}
}
```

## Documentation

## API

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright 2018-present
