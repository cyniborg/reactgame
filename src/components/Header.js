import React, { Component } from 'react';

function GameplayHeader(props){
    const style = {backgroundColor: props.genre.colour};
    return(
        <React.Fragment>
            <div className="level" style = {style}>Level<br /><span>{props.genre.name}</span></div>
            <div className="score" style = {style}>Score<br /><span>{props.score}</span></div>
            <div className="Hhint" style = {style}>Hint</div>
        </React.Fragment>
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
                {!this.props.landingPage && this.props.genre!==null ?  <GameplayHeader score = {this.props.score} genre = {this.props.genre} />:<h1>Welcome To The Game</h1> }
            </div>
        </div>
        )
    }
}

export default Header;