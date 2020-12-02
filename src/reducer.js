export const initialState = {
  user: null,
  playlists: [],
  // discover_weekly: [],
  playing: false,
  item: null,
  token: null,
};

// BQAd5y6G3gU8PBQe0lwyDwK-YCHBQJIUorPHbtJdWvcZ-qqpL1-2FPMtWDXDc-m3X_qLTSTE2fuYC7ecAZ0j69XqokOnjXUEMJyn7UsbeVjDJy06i6clCel3aHh1y0PRWqyzgEew5fA-6svb6Bx-1Ap5p4Q1krQixMoCbQqU143kzqEo

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
