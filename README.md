# Kobalt

Minimalistic & Precise Low Code Frontend Framework to build Scalable Web Apps

```javascript
import Kobalt from "./kobalt.js"

var App = new Kobalt({
	title: "Tic Tac Toe",
	state: {
		winner: 0,
    board: {A1:0,A2:0,A3:0,B1:0,B2:0,B3:0,C1:0,C2:0,C3:0}
	},
	methods: {
		play: (player, cell) => {
      this.$setState("board."+ cell, player)
    },
	},
	class: "boardgame",
	children: [
	{
		element: "div",
		class: "row",
    repeat: [1, 2, 3],
		children: [
		{
			element: "img",
			class: "col",
      repeat: [1, 2, 3]
		},
	}
})
```


## Documentation

## API
