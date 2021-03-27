function Header (props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<span>LEADERBOARD</span>
			{ props.showOrHide && <button className="btn btn-outline-success my-2 ml-5 my-sm-0" type="submit" onClick={props.fetchData}>Show Leaderboard</button> }
			{ !props.showOrHide && <button className="btn btn-outline-success my-2 ml-5 my-sm-0" type="submit" onClick={()=> props.setShowOrHide(true)}>Hide Leaderboard</button> }
		</nav>
	);
}

export default Header;