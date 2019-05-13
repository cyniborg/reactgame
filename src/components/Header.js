import React, { Component } from 'react';

function GameplayHeader(props){
    const style = {backgroundColor: props.genre.colour};
    return(
        <React.Fragment>
            <div className="level" style = {style}><h4>Level<br /><span>{props.genre.name}</span></h4></div>
            <div className="score" style = {style}><h4>Score<br /><span>{props.score}</span></h4></div>
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
            <div className="logo">
                <img className= "img-responsive" src="./img/shedidit-logo.png" alt="SheDidIt Logo"/>
            </div>
            <div className="dashboard game-dash">
                {!this.props.landingPage && this.props.genre!==null ?  <GameplayHeader score = {this.props.score} genre = {this.props.genre} />: <h1>Welcome To The Game</h1> }
            </div>
        </div>
        )
    }
}

export default Header;