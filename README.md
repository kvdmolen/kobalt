# Kobalt

Minimalistic & Precise Low Code Frontend Framework to build Scalable Web Apps

```javascript
import Kobalt from "./kobalt.js"

let App = new Kobalt({
	title: "Tic Tac Toe",
	class: "boardgame",
	store: {
		gameid: {
			type: Number,
			default() => Math.random()
		},
		player: {
			type: Number,
			default: 1
		},
		cells: {
			type: Array,
			methods: {
				load() {
					this.$http.get("/gameid/" + this.$state.game + "/cells").then(response => {
						this.$stateCommit("cells", response.data) // {A1: 0, A2: 1, A3: 0, ... }
					})
				},
				setmove(cell) {
					this.$http.post("/gameid/" + this.$state.game + "/cells/" cell, {player: this.$state.player}).then(response => {
						this.$stateCommit("cells", response.data) // {A1: 0, A2: 1, A3: 0, ... }
						if(this.isWinner()){
							this.$setState("winner", this.$props.player)
						}else{
							this.$setState("player", (this.$props.player) % 2 + 1)
						}
						
					})
				}
			},
			events: {
				newmove() {
					this.load()
				}
			}
		}
	},
	state: {
		winner: 0
	},
	elements: {
		Board
	},
	methods: {
		isWinner() {
			// Todo: calculate winner. If winner: return true
			return false
		}
	},
	content: [
		{
			element: "p",
			content() => "Player: " + this.$state.player
		},{
			element: "p",
			content() => "Winner: " + this.$state.winner + ". Click to restart.",
			show() => this.$state.winner > 0,
			click() {
				this.$stateReset("winner")
				this.$storeReset("gameid")
				this.$store.cells.load()
			}
		},{
			element: "div",
			class: "board",
			content: {
				element: "Board",
				props: {
					winner() => this.$state.winner
				}
			}
		}
	]
})

let Board = {
	title: "Board",
	props: {
		winner: Number
	},
	content: {
		element: "div",
		class: "row",
		repeat: ["A", "B", "C"],
		content: {
			element: "div",
			class: "col cell",
			content: "",
			repeat: ["1", "2", "3"],
			class() => "player-" + this.$state.cells[this.$parent.$repeat.key + this.$repeat.key],
			click() {
				this.$store.setmove(this.$parent.$repeat.key + this.$repeat.key)			
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
