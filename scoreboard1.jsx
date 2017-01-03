// make a componenet called Application
// componnets are uppercase
// componenets return a virtual dom elemnt

function Application(props){
	// Components return a virtual DOM elemnt
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>{props.title}</h1>
			</div>
			<div className="teams">
				{ /*  className is exclusively for styling in React. Ie you'd never grab an element by class. */}
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application />,
	document.getElementById('container')

)