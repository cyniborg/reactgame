import React, { Component } from 'react';
import Header from './components/Header';
import BodyContent from './components/BodyContent/BodyContent';
import Footer from './components/Footer';
import {getQuestions, getGenre} from './axios/getData';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
      landingPage: true,
      gameOver: false,
      data: null,
      genre: [],
      gameplayData:null,
      genreData: null
    }
    this.initialState = {
      score:0,
      landingPage: true,
      gameOver: false,
    }
  }
  componentDidMount(){
    if(this.state.data===null){

      getQuestions()
      .then((data)=>{
          this.setState({
              data
          })
      })
      .catch((err)=>{console.log(err)})
    }

    if(this.state.genre.length<1){
      getGenre()
      .then((genre)=>{
          this.setState({
              genre
          });
      })
      .catch(err=>console.log(err));
  }
  }

  resetGame = ()=>{
    this.setState({...this.initialState})
  }

  changeScore = (score=0, landingPage = true)=>{
    this.setState((prev, next)=>(
      {
        score: score>0?parseInt(prev.score + score):prev.score,
        landingPage: landingPage===false?false:true
      }
    ))
  }

  handleChange = (landingPage = this.state.landingPage, gameOver = this.state.gameOver, genreData = this.state.genreData)=>{
    
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
        <Header score = {this.state.score} landingPage = {this.state.landingPage} genre = {this.state.genreData!==null?this.state.genreData:null} gameOver = {this.state.gameOver} />
        {this.state.genre.length>1 && <BodyContent genre = {this.state.genre} changeScore = {this.changeScore} data = {this.state} handleChange = {this.handleChange} resetGame = {this.resetGame} />}
        <Footer />
      </div>
    );
  }
}

export default App;
