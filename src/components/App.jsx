import React from 'react';
import { selectedSong } from '../Actions';
import SongDetail from './SongDetail';
import SongsList from './SongsList';

export default () => {
    
    return (
        <div className="ui container grid" style={{ marginTop: '20px' }}>
            <div className="ui row">
                <div className="column right wide">
                    <SongsList />
                </div>
                <div className="column right wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};