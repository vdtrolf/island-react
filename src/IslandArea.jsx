import React from "react";
import WeatherArea from "./WeatherArea.jsx";
import StateArea from "./StateArea.jsx";
import Tile from "./Tile.jsx";
import Artifact from "./Artifact.jsx";
import Penguin from "./Penguin.jsx";
import Fish from "./Fish.jsx";
import Garbage from "./Garbage.jsx";
import waves from "./images/waves-back.png";


export default function IslandArea(props) {

  const {runningState, island, onTileClick, illuminatedId, showBalloons} = props;
  const weather = island.weather;

  const NOT_STARTED = 0;
  // const RUNNING = 1;
  // const PAUSED = 2;
  const ENDED = 3;

  const debug = false;
  
  if (debug) {
    console.log("=== Islandarea ==============================");
    console.dir(island);
    console.log("=============================================");
  }

  if (runningState !== NOT_STARTED) {
    return (
      <>
        <div>
          <div className="WaveArea" key="div1" ><img src={waves} alt="" /></div>
          <div className="GridArea" key="div2" style={{zIndex:'20'}} >
            {island.tiles && island.tiles.map(tile =><Tile key={tile.key} tileType={tile.type} tileNum={tile.num} tileAngle={tile.ta} tileLine={tile.line} tileCol={tile.col} onTileClick={onTileClick} />)} 
          </div>
          <div className="GridArea" key="div3" style={{zIndex:'30', pointerEvents:'none'}}>
            {island.artifacts && island.artifacts.map(artifact =><Artifact key={artifact.key} type={artifact.type} age={artifact.age} />)} 
          </div>
          <div className="FreeArea" key="div4" style={{zIndex:'40', pointerEvents:'none'}} >
            {island.penguins && island.penguins.map(penguin =><Penguin key={penguin.key} showBalloons={showBalloons} penguinObj={penguin}  
          illuminatedId={illuminatedId}/>)} 
          </div>
          <div className="FishArea" key="div5" style={{zIndex:'43', pointerEvents:'none'}} >
            {island.fishes && island.fishes.map(fish =><Fish key={fish.key} fishObj={fish} />)} 
          </div>
          <div className="GarbageArea" key="div6" style={{zIndex:'45', pointerEvents:'none'}} >
            {island.garbages && island.garbages.map(garbage =><Garbage key={garbage.key} garbageObj={garbage} />)} 
          </div>
          <div className="NameArea" key="div7" style={{zIndex:'99', pointerEvents:'none'}}>
            <div id="islandName">{island.name} - {island.points} pts</div>
            <div id="score">{Math.round(island.year)}</div>
          </div>
          <WeatherArea weather={weather} runningState={runningState}/>
          {(runningState===ENDED) && <StateArea runningState={runningState} />}
        </div>
      </>
    )
  } else {
    return <div className="IslandArea">{props.children}</div>;
  }
}
