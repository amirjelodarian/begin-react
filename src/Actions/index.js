// Creator

export const selectedSong = (song) => {
    return{
        type: 'SONG_SELECTED', // Required
        payload: song,         // Optional
    };
};