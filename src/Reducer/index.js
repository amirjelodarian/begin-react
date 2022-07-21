import { combineReducers } from "redux";
export const songReducer = () => {
    return [
        { title: 'tarik', duration: '4:05' },
        { title: 'ruzi', duration: '2:30' },
        { title: 'gom', duration: '3:50' },
        { title: 'sard', duration: '4:00' },
    ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
    if( action.type === 'SONG_SELECTED' ){
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSongs: selectedSongReducer
});