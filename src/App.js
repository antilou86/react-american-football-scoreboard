//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);
  const [downValue, setDownValue] = useState(0);
  const [quarterValue, setQuarterValue] = useState(0);
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow downValue={downValue} quarterValue={quarterValue}/>
      </section>
      <Buttons downValue={downValue} quarterValue={quarterValue} homeScore = {homeScore} awayScore={awayScore} setAwayScore = {setAwayScore} setDownValue = {setDownValue} setHomeScore = {setHomeScore} setQuarterValue={setQuarterValue} />
    </div>
  );
}

export default App;
