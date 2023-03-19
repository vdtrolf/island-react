import React from "react";
import Button from "./Button.jsx";
import logo from "./images/TTP-Logo.png";
import stile from "./images/tile-s.png";
import sfish from "./images/fish-s.png";

export default function Navbar(props) {

  // const NOT_STARTED = 0;
  const RUNNING = 1;
  const PAUSED = 2;
  // const ENDED = 3;

  const { runningState, island, admin, baseURL, pulser, onStartButton, onOnceButton, onStopButton, onPlusButton, onCloneButton, onStepsButton, onAdminButton } = props;

  var tilesLine =[];
  var fishesLine =[];

  if (island) {
    for (let i=0;i <island.tilesCount && i < 9 ;i++) tilesLine.push(<img key={i} src={stile} width="24px" height ="24px" alt="" transition= "0.5s" />)
    for (let i=0;i <island.fishesCount && i < 9 ;i++) fishesLine.push(<img key={i+1000} src={sfish} width="24px" height ="24px" alt="" transition= "0.5s" />)
  }
 
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <div className="NavbarInfo" >
        <div className="NavbarInfoLine" >{tilesLine}</div>
        <div className="NavbarInfoLine" >{fishesLine}</div>
      </div>
      <div className="ButtonArea">
        {runningState !== PAUSED && <div>&nbsp;</div>}
        <Button className={runningState===RUNNING?"ButtonStop":"ButtonStart"} onClickHandler={runningState===RUNNING?onStopButton:onStartButton}>&nbsp;</Button>
        {runningState === PAUSED && <Button className="ButtonOnce" onClickHandler={onOnceButton}>&nbsp;</Button>}
        <Button className="ButtonPlus" onClickHandler={onPlusButton}>&nbsp;</Button>
        <Button className="ButtonClone" onClickHandler={onCloneButton}>&nbsp;</Button>
        {(admin && baseURL.name!=="local")&&<Button className={pulser?"ButtonStepsRunnning":"ButtonSteps"} onClickHandler={onStepsButton}>&nbsp;</Button>}
        <Button className={admin?"ButtonAdminOn":"ButtonAdmin"} onClickHandler={onAdminButton}>&nbsp;</Button>
      </div>
    </div>
  );
}
