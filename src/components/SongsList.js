import React from "react";
import { connect } from "react-redux";

const SongsList = () => {    
    return(
        <div>
            {props}
            SongsList
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps)(SongsList);