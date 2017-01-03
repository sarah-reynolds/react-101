function Application(props){
	// Capital letters in React means component.
	// Components return a signle virtual DOM element
	return(
		<div className="application">
			<h1>{props.title}</h1>
			{props.message}
		</div>
	)
}

ReactDOM.render( // takes 2 parameters
	<Application message="Hello, Class" title="React Day!" />, // take this componenent
	document.getElementById('container') // and put it here
)