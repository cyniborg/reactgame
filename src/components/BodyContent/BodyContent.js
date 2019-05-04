import React, { Component } from 'react';
import LandingPageBody from './LandingPageBody';
import GameplayBody from './Gameplay';
import GameOver from './../GameOver';
//import {getQuestions} from '../../axios/getData';

class BodyContent extends Component{


    render(){
        return(
            <React.Fragment>
                {this.props.data.landingPage && this.props.data.data!==null ? <LandingPageBody changeScore = {this.props.changeScore} handleChange = {this.props.handleChange} />: null}
                {this.props.data.gameplayData!==null && !this.props.data.landingPage && !this.props.data.gameOver ? <GameplayBody data = {this.props.data.gameplayData} genreData = {this.props.data.genreData} handleChange = {this.props.handleChange} changeScore = {this.props.changeScore} />: null}
                {this.props.data.gameOver && <GameOver gameOver = {this.props.data.gameOver} />}
            </React.Fragment>
        )
    }
}

export default BodyContent;