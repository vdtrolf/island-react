import React from "react";
import Button from "./Button.jsx";
import logo from "./images/TTP-Logo.png";
import stile from "./images/tile-s.png";
import sfood from "./images/food-s.png";
import therm from "./images/thermometer.png";
import otherm from "./images/ocean-thermometer.png";

export default function Navbar(props) {

  const NOT_STARTED = 0;
  const RUNNING = 1;
  const PAUSED = 2;
  // const ENDED = 3;

  const { runningState, island, admin, baseURL, pulser, onStartButton, onOnceButton, onStopButton, onPlusButton, onCloneButton, onStepsButton, onAdminButton } = props;

  var tilesLine =[];
  var foodLine =[];
  let temp = island.temperature ? Math.round(island.temperature * 10) / 10 + " °C":"0.4 °C"
  let oceanTemp = island.oceanTemperature ? Math.round(island.oceanTemperature * 10) / 10 + " °C":"20.3 °C"

  if (island) {
    for (let i=0;i <island.tilesCount && i < 6 ;i++) tilesLine.push(<img key={i} src={stile} width="24px" height ="24px" alt="" transition= "0.5s" />)
    for (let i=0;i <island.foodCount && i < 6 ;i++) foodLine.push(<img key={i+1000} src={sfood} width="24px" height ="24px" alt="" transition= "0.5s" />)
  }
 
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <div className="NavbarInfo" >
        <div className="NavbarInfoLine" >{tilesLine}</div>
        <div className="NavbarInfoLine" >{foodLine}</div>
      </div>
      {runningState!== NOT_STARTED && <div className="NavbarTemp" >
        <div className="NavbarTempLine" ><img key="99999998" src={therm} width="20px" height ="20px" alt="" transition= "0.5s" />{temp}</div>
        <div className="NavbarTempLine" ><img key="99999999" src={otherm} width="20px" height ="20px" alt="" transition= "0.5s" />{oceanTemp}</div>
      </div>}
      {runningState===NOT_STARTED && <div>&nbsp;</div> }
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
