{
	name: "mybutton",
	element: "button",
	props: {
		icon: String
		title: String
	},
	state: {
		active: false
	},
	children: [
		{
			element: "i",
			class() => {'fa fa-' + this.props.icon}
		},
		{
			element: "span",
			content() => {this.props.title}
		}
	],
	methods: {
		toggle() => {this.setState("active", !this.state.active)}
	}
}
