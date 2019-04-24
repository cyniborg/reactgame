import React, { Component } from 'react';
import LandingPageBody from './LandingPageBody';
import GameplayBody from './Gameplay';

class BodyContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            landingPage: true,
            gameOver: false,
            genreId: null
        }
    }

    handleChange = (landingPage = false, gameOver = false, genreId)=>{
      this.setState({
        landingPage,
        gameOver,
        genreId
      });
    }

    render(){
        return(
            <React.Fragment>
                { this.state.landingPage === true && this.state.gameOver === false && this.state.genreId === null ? <LandingPageBody handleChange = {this.handleChange} /> : <GameplayBody genreId = {this.state.genreId} handleChange = {this.handleChange} />}
            </React.Fragment>
        )
    }
}

export default BodyContent;