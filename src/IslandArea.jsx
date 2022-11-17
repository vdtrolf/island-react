import React from "react";
import WeatherArea from "./WeatherArea.jsx";
import StateArea from "./StateArea.jsx";
import Tile from "./Tile.jsx";
import Artifact from "./Artifact.jsx";
import Penguin from "./Penguin.jsx";
import waves from "./images/waves-back.png";


export default function IslandArea(props) {

  const {runningState, island, onTileClick, illuminatedId, showBalloons} = props;
  const weather = island.weather;

  const NOT_STARTED = 0;
  // const RUNNING = 1;
  const PAUSED = 2;
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
          <div className="WaveArea" ><img src={waves} alt="" /></div>
          <div className="GridArea" style={{zIndex:'20'}} >
            {island.tiles && island.tiles.map(tile =><Tile key={tile.key} tileType={tile.type} tileNum={tile.num} tileVar={tile.var} tileLine={tile.line} tileCol={tile.col} onTileClick={onTileClick} />)} 
          </div>
          <div className="GridArea" style={{zIndex:'30', pointerEvents:'none'}}>
            {island.artifacts && island.artifacts.map(artifact =><Artifact key={artifact.key} type={artifact.type} age={artifact.age} />)} 
          </div>
          <div className="FreeArea" style={{zIndex:'40', pointerEvents:'none'}} >
            {island.penguins && island.penguins.map(penguin =><Penguin key={penguin.key} showBalloons={showBalloons} penguinObj={penguin}  
          illuminatedId={illuminatedId}/>)} 
          </div>
          <div className="NameArea" style={{zIndex:'50', pointerEvents:'none'}}>
            <div id="islandName">{island.name}</div>
            <div id="score">{island.points}</div>
          </div>
          <WeatherArea weather={weather} runningState={runningState}/>
          {(runningState===PAUSED || runningState===ENDED) && <StateArea runningState={runningState} />}
        </div>
      </>
    )
  } else {
    return <div className="IslandArea">{props.children}</div>;
  }
}
