# Kobalt

Minimalistic & Precise Low Code Frontend Framework to build Scalable Web Apps

```javascript
import Kobalt from "./kobalt.js"

let App = new Kobalt({
	title: "Tic Tac Toe",
	class: "boardgame",
	state: {
		player: 1,
		winner: 0,
		gameid() => Math.random()
		cells: {A1:0, A2:0, A3:0, B1:0, B2:0, B3:0, C1:0, C2:0, C3:0}
	},
	captureStateGet(obj, path) {
		if(!obj){
			this.$http.get("/game/" + this.$state.gameid).then(response => {
				this.$stateCommit("cells", response.data)
				return this.$state.cells
			})
		}else{
			return this.$state.cells
		}	
	},
	captureStateSet(objname, path, newvalue) {
		this.$http.post("/game/" + this.$state.gameid + "/cell/" + objname, {value: newvalue}).then(response => {
			this.$stateCommit("cells." + objname, response.data)
		})		
		this.$stateCommit(path, newvalue)
	},
	elements: {
		Board
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
				this.$stateReset("cells")
			}
		},{
			element: "div",
			class: "board",
			content: {
				element: "Board",
				props: {
					player() => this.$state.player
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
	methods: {
		isWinner() {
			// Todo: calculate winner. If winner: return true
			return false
		}
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
				this.$setState("cells." + this.$parent.$repeat.key + this.$repeat.key, this.$state.player)
				
				if(this.isWinner()){
					this.$setState("winner", this.$props.player)
				}else{
					this.$setState("player", (this.$props.player) % 2 + 1)
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
