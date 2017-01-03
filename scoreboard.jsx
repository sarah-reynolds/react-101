// make a componenet called Application
// componnets are uppercase
// componenets return a virtual dom elemnt
// added prop parameter so render can send stuff to the component

// Props are immutable (they do not change)
// State is a piece of data that does change
// State also has an initial value that changes when x happens
// In the case of the national championship, it starts at 0
// SOme kind of mutation or change occurs.
// In order to use state, we have to make our functions react classes


var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}

]

function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			<Counter score={props.score}/>

		</div>
	)
}

// React.createClass is a React component class that takes an object
// The only required property is a render method
var Counter = React.createClass({
	// we also need ot add a getinitialstate property hat is part of React
	getInitialState: function(){
		// this function sets the initatial state of a variable.
		// it usually returns a sinfle Object
		return {score: 0}

	},
	losePoint: function(){
		console.log("You clicked on the minus ")
		this.setState({
			score: (this.state.score - 1)
			})
	},
	gainPoint: function(){
		console.log("You clicked on the plus ")
		this.setState({
			score: (this.state.score + 1)
			})
	},
	render: function(){
		return(
	<div className="counter">
			<button onClick={this.losePoint} className="counter-change minus">-</button>

			<div className="team-score"> {this.state.score} </div>
			<button onClick={this.gainPoint} className="counter-change plus">+</button>
	</div>
		)
	}
});

function Header(props){
	return(
		<div className="header">
				<h1>{props.title}</h1>
		</div>
	)
}

function Application(props){
	// Components return a virtual DOM elemnt
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				{ /*  className is exclusively for styling in React. Ie you'd never grab an element by class. */}
				{ /*  <Team name="Alabama" score="0" /> */}
				{ /*  <Team name="Clemson" score="0" /> */}
				{props.teams.map(function(team, index){
					console.log(team, index);
					return <Team key={index} name={team.name} score={team.score} />
				})}
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')

)