import React, { Component } from 'react';
import LandingPageBody from './LandingPageBody';
import GameplayBody from './Gameplay';

class BodyContent extends Component{


    render(){
        return(
            <React.Fragment>
                {
                    this.props.data.landingPage && this.props.data.data!==null ? <LandingPageBody changeScore = {this.props.changeScore} handleChange = {this.props.handleChange} genre = {this.props.genre} /> : null
                }

                {
                    this.props.data.gameplayData!==null && !this.props.data.landingPage ? <GameplayBody data = {this.props.data.gameplayData} genreData = {this.props.data.genreData} handleChange = {this.props.handleChange} changeScore = {this.props.changeScore} gameOver = {this.props.data.gameOver} resetGame = {this.props.resetGame} /> : null
                }
                
            </React.Fragment>
        )
    }
}

export default BodyContent;