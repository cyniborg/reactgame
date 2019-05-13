import React from 'react'

export default (props)=> (
   props.gameOver &&
   <div className="success slideInRight">
        <div className="confetti">
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
        </div>
        <div className="success-msg">
            <h2>Congratulations</h2>
            <div className="details">
                <h4>You have successfully completed this round.</h4>
                <p>Set up Gravity forms here for submitting the form. Create in WP backend a new post type with school name and school secret code in it. Then before submitting, check the school secret code. </p>
            </div>
            <button onClick = {()=>{ props.resetGame()} }>Restart Game</button>
        </div>
   </div>
)