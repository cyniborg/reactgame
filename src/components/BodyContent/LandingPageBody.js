import React, {Component} from 'react';
import getGenre from '../../axios/getData';
import colours from '../../resources/colours'

const LandingPageSection = (props)=>(
    <div className={`section-${props.count} ${props.colour}`} onClick = {()=>{props.handleChange(false, false, props.id)}}>
        <div className="landing-text">
        {props.name}
        </div>
        <div className="landing-box-img">
        <img className="img-responsive" src="img/market-analyse-landing.png" alt="People discussing market analyses" />
        </div>
    </div>
);

class LandingPageBody extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            genre: [],
        }
    }
    componentDidMount(){
       getGenre()
       .then((genre)=>{
           this.setState({
               genre
           });
       })
       .catch(err=>console.log(err));
    }

    render(){
        return(
            <div className="body-landing">
                {this.state.genre.length>0 && this.state.genre.map((e,i)=>{
                    const col = colours.base.length;
                    let colour;
                    if(i<col){
                        colour = colours.base[i];
                    } else if(i>col){
                        colour = colours.base[i%col];
                    }
                    return <LandingPageSection key = {e.id} count={i} name = {e.name} colour = {colour} id = {e.id} handleChange = {this.props.handleChange} />;
                    })}
            </div>
        )
    }
}

export default LandingPageBody;