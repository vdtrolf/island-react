import React from "react";
import Button from "./Button.jsx";
import logo from "./images/TTP-Logo.png";

export default function Navbar(props) {

  const { running, className, onStartButton, onStopButton, onPlusButton, onCloneButton, onStepsButton, onAdminButton,  ...attribs } = props;

  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <div className="NavbarInfo" ></div>
      <div className="ButtonArea">
        <Button className={running?"ButtonStop":"ButtonStart"} onClickHandler={running?onStopButton:onStartButton}>&nbsp;</Button>
        <Button className="ButtonPlus" onClickHandler={onPlusButton}>&nbsp;</Button>
        <Button className="ButtonClone" onClickHandler={onCloneButton}>&nbsp;</Button>
        <Button className="ButtonSteps" onClickHandler={onStepsButton}>&nbsp;</Button>
        <Button className="ButtonAdmin" onClickHandler={onAdminButton}>&nbsp;</Button>
      </div>
    </div>
  );
}
