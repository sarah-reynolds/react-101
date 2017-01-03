const image1 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
const image2 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'

var Application = React.createClass({
	getInitialState: function(){
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}
	},
	flipCoin: function(){
		var checkState = this.state.image
		var randNum = Math.round(Math.random())
		if(randNum == 0){
			checkState = image1
			console.log("tails")
		}else{
			checkState = image2
			console.log("heads")
		}
		this.setState({
			image: checkState
		})
	},
	render: function(){
		return(
			<div className="application">
				<button onClick={this.flipCoin}>Click to flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
	}
});

ReactDOM.render(
	<Application />,
	document.getElementById('container')

);