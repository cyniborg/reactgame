import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BodyContent from './components/BodyContent/BodyContent';
import Footer from './components/Footer';
import {getQuestions} from './axios/getData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
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
        console.log(this.state);
    })
  }
  changeScore = (score=0, landingPage = true)=>{
    this.setState((prev, next)=>(
      {
        score: score>0?prev.score + score:prev.score,
        landingPage: landingPage===false?false:true
      }
    ))
  }

  handleChange = (landingPage = this.state.landingPage, gameOver = this.state.gameOver, genreData = this.state.genreData)=>{
    console.log("handle change called");
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
  render() {
    return (
      <div className="container">
        <Header score = {this.state.score} landingPage = {this.state.landingPage} genre = {this.state.genreData!==null?this.state.genreData:null} />
        <BodyContent changeScore = {this.changeScore} data = {this.state} handleChange = {this.handleChange} />
        <Footer />
      </div>
    );
  }
}

export default App;
