import React from "react";
import { connect } from "react-redux";
import { selectedSong } from '../Actions/index';

const SongsList = (props) => {   
    console.log(props); 
    return(
        <div className="ui middle aligned devided list">
            {renderList(props)}
        </div>
    );
};

const renderList = (props) => {
   return props.songs.map((song) => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button onClick={() => props.selectedSong(song)} className="ui button primary">Select</button>
                </div>
                <div className="content">
                    {song.title}                    
                </div>
            </div>
        );
   }); 
};

// this func want combine state to props

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    };
};
// action work in props
// this mean all action convert to props ;D

// connect function do dispatch

export default connect(mapStateToProps, {
    // every actions must add to here ;D
     selectedSong 
    })(SongsList);