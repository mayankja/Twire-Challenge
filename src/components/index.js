import React, {useState} from 'react';
import Header from './header';
import LeaderboardTable from './leaderbordTable';
import MidSection from './midSection';

function Leaderbord (props) {
	const [showOrHide, setShowOrHide] =  useState(true);
	const data = props.data;
  console.log(data);
	let firstData = [], secondData = [];
	data && data.map((d, index) =>{
		if(index < 8) return firstData.push(d);
		else return secondData.push(d);
	})
	const fetchData = () =>{
		props.requestLeaderboardData();
		setShowOrHide(false);
	}

  return (
    <div>
			<Header showOrHide={showOrHide} fetchData={fetchData} setShowOrHide={setShowOrHide}/>
			<div className=' row ml-4 mr-4'>
				<div className='col-1' />
				<div className='col-10'>
					<MidSection />
					{ !showOrHide && <div className='row ml-3'>
						<LeaderboardTable data={data} tableData={firstData} leftBorder/>
						<LeaderboardTable data={data} tableData={secondData}/>
					</div>
					}
				</div>
				<div className='col-1' />
			</div>
    </div>
  );
}

export default Leaderbord;
