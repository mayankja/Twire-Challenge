
function MidSection (props) {
	return (
		<div className='row ml-3 border-bottom border-warning'>
			<div className='col-4 text-warning mt-4' style={{fontSize: '56px'}}>STANDINGS</div>
			<div class='col-1'></div>
			<div className='col-3 mt-4 border-right border-warning'>
				<div className='text-warning text-right'><h3>PCS3 EUROPE</h3></div>
				<div className='text-info text-right'><h3>DAY4</h3></div>
			</div>
			<div className='col-4'>
				<img src="600px-PUBG_CS.png" class="img-rounded" alt="Cinque Terre" height='100px'/>
			</div>
		</div>
	);
}

export default MidSection;