import './App.css';
import SpotifyMisc from './components/spotify/SpotifyMisc';
import React from "react";
import axios from "axios";
import qs from 'qs';
import ReactLogo from './images/logo.png';


export default class App extends React.Component {
    state = {
        user: null,
        error: null,
        spotify: [],
        //authenticated:null
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ReactLogo} alt="React Logo" />
                </header>
                <div>
                    <SpotifyMisc />

                </div>
            </div>
        );
    }
}



