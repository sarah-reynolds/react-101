// const image1 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
// const image2 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'

var Application = React.createClass({
	getInitialState: function(){
		return{
			number: '1'
		}
	},
	rollDie: function(){
		
		var checkState = this.state.number
		var randNum = Math.floor((Math.random() * 20) + 1)
		this.setState({
			number: randNum
		})
	},
	render: function(){
		return(
			<div className="application">
				<button onClick={this.rollDie}>Click to roll</button>
				<div>{this.state.number}</div>
			</div>
		)
	}
});

ReactDOM.render(
	<Application />,
	document.getElementById('container')

);