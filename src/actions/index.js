export const REQUEST_LEADERBOARD_DATA = 'REQUEST_LEADERBOARD_DATA';
export const SET_LEADERBOARD_DATA = 'SET_LEADERBOARD_DATA';

export const requestLeaderboardData = () => ({ type: REQUEST_LEADERBOARD_DATA });
export const setLeaderboardData = item => ({ type: SET_LEADERBOARD_DATA, item });
