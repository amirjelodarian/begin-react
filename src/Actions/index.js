export const selectedSong = (song) => {
    return{
        type: 'SELECTED_SONG', // Required
        payload: song,         // Optional
    };
};