import Arrow from "./arrow";
function LeaderboardTable (props) {
	const {data, tableData, leftBorder } = props;

	const col = (c, p) => {
		return <span>
			{c}<Arrow position={p} />
		</span>
	}
	return (
		<div className='col-6'>
			<table className="table table-borderless text-white text-center">
				<thead style={{backgroundColor: '#0c1d39'}}>
					<tr>
						<th scope="col">RANK</th>
						<th scope="col">TEAM</th>
						<th scope="col">DAY CHANGE</th>
						<th scope="col">TOTAL PTS</th>
					</tr>
				</thead>
				<tbody>
					{
						data && tableData.map((d) => {
							return (
								<tr>
									{leftBorder ? <th style={{color: 'orange', borderLeft: '5px solid orange'}}>{d.rank}</th> : <th style={{color: 'orange'}}>{d.rank}</th>}
									<td className='pt-0'>
										<div className='row'>
											<div className='col-2'><img src="team-logo.png" class="img-rounded" alt="Cinque Terre" height='50px'/></div>
											<div className='col-10 pt-3'>{d.team}</div>
										</div>
									</td>
									<td>{d.dayChange === 0 ? null : col(d.dayChange, d.postionUpDown) } </td>
									<td>{d.totalPoint}</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
}

export default LeaderboardTable;