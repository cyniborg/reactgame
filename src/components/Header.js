import React, { Component } from 'react';

function GameplayHeader(){
    return(
        <div className="header">
            <div className="logo"> This will be an image</div>
            <div className="dashboard game-dash">
                <div className="level">Level</div>
                <div className="score">Score</div>
                <div className="hint">Hint</div>
            </div>
        </div>
    );
}

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            landingPage: true,

        }
    }

    render(){
        return(
            <div className="header">
            <div className="logo"> This will be an image</div>
            <div className="dashboard game-dash">
                {this.state.landingPage ? <h1>Welcome To The Game</h1> : GameplayHeader}
            </div>
        </div>
        )
    }
}

export default Header;