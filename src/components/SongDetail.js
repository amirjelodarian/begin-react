import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (! song) return <div>Please select song !</div>;
    return (
        <div>
            <h1>Detail For:</h1>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSongs };
};

export default connect(mapStateToProps)(SongDetail);