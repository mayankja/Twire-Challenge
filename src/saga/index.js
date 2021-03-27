import { put, takeEvery, all } from 'redux-saga/effects';
import { REQUEST_LEADERBOARD_DATA, setLeaderboardData} from '../actions'

const data = [
	{
		rank: 1,
		team: 'Digital Athletics',
		dayChange: 1,
		totalPoint: 141,
		postionUpDown: 1
	},
	{
		rank: 2,
		team: 'Tornado Energy',
		dayChange: 2,
		totalPoint: 131,
		postionUpDown: 1
	},
	{
		rank: 3,
		team: 'Northern Lights',
		dayChange: 2,
		totalPoint: 131,
		postionUpDown: -1
	},
	{
		rank: 4,
		team: 'Team Liquid',
		dayChange: 1,
		totalPoint: 125,
		postionUpDown: -1
	},
	{
		rank: 5,
		team: 'shiftw',
		dayChange: 0,
		totalPoint: 97,
		postionUpDown: 0
	},
	{
		rank: 6,
		team: 'Ence',
		dayChange: 4,
		totalPoint: 95,
		postionUpDown: 1
	},
	{
		rank: 7,
		team: 'Natus Vincere',
		dayChange: 0,
		totalPoint: 88,
		postionUpDown: 0
	},
	{
		rank: 8,
		team: 'Omaken Sports',
		dayChange: 1,
		totalPoint: 86,
		postionUpDown: 1
	},
	{
		rank: 9,
		team: 'Tsm',
		dayChange: 3,
		totalPoint: 85,
		postionUpDown: -1
	},
	{
		rank: 10,
		team: 'Faze clan',
		dayChange: 3,
		totalPoint: 83,
		postionUpDown: 1
	},
	{
		rank: 11,
		team: 'Redline',
		dayChange: 1,
		totalPoint: 80,
		postionUpDown: 1
	},
	{
		rank: 12,
		team: 'Etiget',
		dayChange: 4,
		totalPoint: 74,
		postionUpDown: 1
	},
	{
		rank: 13,
		team: 'Saunabois',
		dayChange: 5,
		totalPoint: 73,
		postionUpDown: -1
	},
	{
		rank: 14,
		team: 'Pinkpony',
		dayChange: 3,
		totalPoint: 64,
		postionUpDown: -1
	},
	{
		rank: 15,
		team: 'Bystanders',
		dayChange: 1,
		totalPoint: 57,
		postionUpDown: -1
	},
	{
		rank: 16,
		team: 'Winstreak',
		dayChange: 1,
		totalPoint: 47,
		postionUpDown: -1
	},
]

function* watchLeaderbordData () {
	yield takeEvery(REQUEST_LEADERBOARD_DATA, function* () {
		try {
			yield put(setLeaderboardData({ data }));
		} catch (err) {
			console.error(err);
		}
	});
}

export default function* rootSaga() {
	yield all([
		watchLeaderbordData(),
	]);
 }