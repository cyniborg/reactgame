import React, { Component } from 'react';
import LandingPageBody from './LandingPageBody';
import GameplayBody from './Gameplay';
import {getQuestions} from '../../axios/getData';

class BodyContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            landingPage: true,
            gameOver: false,
            data: null,
            gameplayData:null,
            genreData: null
        }
    }

    componentDidMount(){
        getQuestions()
        .then((data)=>{
            this.setState({
                data
            })
            console.log(this.state.data);
        })
    }

    handleChange = (landingPage = false, gameOver = false, genreData = null)=>{
        if(genreData != null){
          const gameplayData = this.state.data.filter(e=>e.genreId["0"]===genreData.id);
            
          this.setState({
            landingPage,
            gameOver,
            gameplayData,
            genreData
          });
        } else {
            this.setState({
                landingPage,
                gameOver
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.state.landingPage && this.state.data!==null ? <LandingPageBody handleChange = {this.handleChange} />: null}
                {this.state.gameplayData!==null && !this.state.landingPage ? <GameplayBody data = {this.state.gameplayData} genreData = {this.state.genreData} handleChange = {this.handleChange} />: null}
            </React.Fragment>
        )
    }
}

export default BodyContent;