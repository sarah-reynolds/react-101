var badges = ['badge1', 'badge2', 'badge3'];
var author = {
	avatarUrl: 'http://files.vividscreen.info/soft/02c52b456ea60c25750c732e708b1c12/Funny-Dog-Wearing-Glasses-128x128.jpg',
	name: 'Grumpy Crumbles'
};
var text = "Words words words. Blah blah blah.";
var date = new Date();
var commentHeading = "I have an opinion.";

function formatDate(protoDate){
	var day = protoDate.getDate();
	var month = protoDate.getMonth();
	var year = protoDate.getFullYear();
	return(
		<div className="Comment-date">{"Month: " + month} {"Day: " + day} {"Year: " + year}</div>
	)
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
				<img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
				<div className="UserInfo-name">
				{props.author.name}
				</div>
		</div>
	)
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo author={author}/>
			<div className="Comment-body">
				<h1>{props.commentHeading}</h1>
				<div className="Comment-text">{props.text}</div>
				<div className="Comment-date">
					{formatDate(props.date)}
				</div>
			</div>
				<div className="UserBadges">
				<div className="badge">{props.userBadge[0]}</div>
				<div className="badge">{props.userBadge[1]}</div>
				<div className="badge">{props.userBadge[2]}</div>
			</div>
		</div>
	);
}


ReactDOM.render(
	<Comment userBadge={badges} text={text} date={date} commentHeading={commentHeading}/>,
	document.getElementById('container')
)