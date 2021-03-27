const reducers = (state = {}, action) => {
    switch (action.type) {
			case 'SET_LEADERBOARD_DATA':
				return { ...state, data: action.item.data };
			default:
				return state;
		}
};
export default reducers;