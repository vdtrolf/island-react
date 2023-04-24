import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Details from "./Details.jsx";
import Adminbar from "./Adminbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";
import convert from "./Fetchserver.js"
import {useState,useEffect} from "react";

// const urls = [{name:"aws",url:"https://lub3kygki2.execute-api.us-east-1.amazonaws.com/Prod/"},
//               {name:"digital ocean", url:"https://lub3kygki2.execute-api.us-east-1.amazonaws.com/Prod/"},
//               {name:"local", url:"http://localhost:3001/"}

// test 2


const NOT_STARTED = 0;
const RUNNING = 1;
const PAUSED = 2;
const ENDED = 3;

export default function App() {

  const urls= [{name:"aws",url:"https://lub3kygki2.execute-api.us-east-1.amazonaws.com/Prod/"},
  {name:"digital ocean", url:"https://lub3kygki2.execute-api.us-east-1.amazonaws.com/Prod/"},
  {name:"local", url:"http://localhost:3001/"}];

  const [sidebar,setSidebar] = useState(false);
  const [adminbar,setAdminbar] = useState(false);
  const [runningState, setRunningState] = useState(NOT_STARTED);
  const [admin,setAdmin] = useState(false);
  const [pulser,setPulser] = useState(false);
  const [showBalloons,setShowBalloons] = useState(false);
  const [island,setIsland] = useState({});
  const [baseURL,setBaseURL] = useState({name:"local", url:"http://localhost:3001/"});
  const [illuminatedId,setIlluminatedId] = useState(0);
  const [selectedId,setSelectedId] = useState(0);
  const [followId, setFollowId] = useState(0);
  const [islandsList,setIslandsList] = useState([]);

  useEffect(() => {
    document.title = 'TAP TAP Penguin (' + baseURL.name + ")";
  },[baseURL]);

  useEffect(() => {
    var intervalId = 0;
    if (runningState === RUNNING || runningState === PAUSED ) {
      if(!island.id) {
        getNewIsland(baseURL.url)
        .then((newIsland ) => setIsland(newIsland));
      }
      intervalId = setInterval( () => {
        refreshIsland(baseURL.url, island.id, followId)
        .then((updatedIsland) => setIsland(updatedIsland));

        setFollowId(0);

        island.penguins.forEach(penguin => {
          if (penguin.key === selectedId && ! penguin.alive) setSelectedId(0);
        });

        // if (sidebar) {
          refreshIslandsList(baseURL.url)
          .then((updatedIslandsList) => setIslandsList(updatedIslandsList));
        // }

      },2000)
      
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    }

  },[runningState,island,baseURL,followId,selectedId]);

  useEffect(() => {
    refreshIslandsList(baseURL.url)
    .then((updatedIslandsList) => setIslandsList(updatedIslandsList));
  },[baseURL]);

  useEffect(() => {
    var pulserIntervalId = 0;
    if (pulser) {
      pulserIntervalId = setInterval( () => {
        console.log("in pulser interval " + pulserIntervalId );
        sendState(baseURL.url);
      },2000)
      
    } else {
      clearInterval(pulserIntervalId );
    }
    return () => {
      clearInterval(pulserIntervalId);
    }
  },[pulser,baseURL]);

  useEffect(() => {
    const currentState = runningState;
    if (island.weather === "endgame") {
      setRunningState(ENDED) 
    } else {
      setRunningState(currentState) 
    }
  },[island.weather,runningState])
  
  const handleStartButton = () => {
    if (runningState === ENDED) {
      setIsland({})
    } 

    setRunningState(RUNNING)
    setRunning(baseURL.url, island.id, true)
    // console.log("BUTTON START PRESSED");
  } 

  const handleOnceButton = () => {
    if (runningState === PAUSED && island && island.id > 0 ) {
      runOnce(baseURL.url,island.id)
    }
  } 

  const handleStopButton = () => {
    if(runningState === RUNNING) {
      setRunningState(PAUSED)
      setRunning(baseURL.url, island.id, false)
    }

    // console.log("BUTTON START PRESSED");
  } 

  const handlePlusButton = () => {
    setRunningState(RUNNING);
    setIsland({});
    // console.log("BUTTON PLUS PRESSED");
  } 

  const handleCloneButton = () => {
    setSidebar( !sidebar);
    // console.log("BUTTON CLONE PRESSED");
  } 

  const handleStepsButton = () => {
    setPulser(!pulser);
    // console.log("BUTTON STEPS PRESSED");
  } 

  const handleAdminButton = () => {
    if (sidebar) {
      setSidebar(false);
    } 
    setAdminbar(!adminbar);
    // console.log("BUTTON ADMIN PRESSED");
  } 

  const handleCloseButton = () => {
    setSidebar(false);
    setAdminbar(false);
    // console.log("BUTTON CLOSE PRESSED");
  } 

  const handleLogoutButton = () => {
    setSidebar(false);
    setAdminbar(false);
    setAdmin(false);
    console.log("LOGOUT CLOSE PRESSED");
  } 

  const handleDetailsCloseButton = () => {
    setSelectedId(0);
    setIlluminatedId(0);
    setFollowId(0);
  }

  const handleTileClick = (x,y) => {
    // console.log("TILE CLICKED AT " + x + "/" + y);

    const apenguin = island.penguins.find(penguin => penguin.hpos === x && penguin.lpos === y);
    if (apenguin && apenguin.alive) {
      if (apenguin.key === selectedId) {
        setSelectedId(0);
        setIlluminatedId(0);
        setFollowId(0);
      } else {
        // console.log("FOUND PENGUIN " + apenguin.name + " " + apenguin.key + " AT " + x + "/" + y);
        setSelectedId(apenguin.key);
        setIlluminatedId(apenguin.key);
        setFollowId(apenguin.key);
      }
    } else {
      setTile(baseURL.url,island.id,x,y)
      .then((updatedIsland) => setIsland(updatedIsland));
    }
  } 

  const handlePenguinEnter = (id) => {
    setIlluminatedId(id);
  }

  const handlePenguinLeave = () => {
    if (illuminatedId > 0) {
      setIlluminatedId(0);
    }
  }

  const handleIslandSelect = (id) => {
    setSidebar(false);
    setAdminbar(false);
    setRunningState(RUNNING);
    refreshIsland(baseURL.url, id)
    .then((updatedIsland) => setIsland(updatedIsland));
  }

  const handleIslandDelete = (idList) => {
    idList.forEach(islandId => {
      console.log("doing delete " + islandId)
      refreshIslandsList(baseURL.url,islandId)
      .then((updatedIslandsList) => setIslandsList(updatedIslandsList));

      if (islandId === island.id) {
        setRunningState(NOT_STARTED);
        setIsland({});
      }

    })
  }

  const handleURLSelect = (url) => {

    console.log("URL SELECTED " + url)
    setBaseURL(url);
    setIsland({});
    setRunningState(NOT_STARTED);
    setSidebar(false);
    setAdminbar(false);
  }

  const handlUserInput = (user,pwd) => {
    setAdmin(user === "admin" && pwd==="admin")
    setSidebar(false);
    setAdminbar(false);
  }

  const handleSetBalloons = (checkBalloons) => {
    console.log("BALLOOMS " + checkBalloons);
    setShowBalloons(checkBalloons);
  }

  return (
    <div className="App">
      <Sidebar admin={admin} baseURL={baseURL} onCloseButton={handleCloseButton} onIslandSelect={handleIslandSelect} onIslandDelete={handleIslandDelete} islandId={island.id} islandsList={islandsList} sidebar={sidebar}/>
      <Adminbar showBalloons={showBalloons} admin={admin} baseURL={baseURL} onCloseButton={handleCloseButton} onLogoutButton={handleLogoutButton} onSetBalloons={handleSetBalloons} adminbar={adminbar} urls={urls} onURLSelect={handleURLSelect} onUserInput={handlUserInput}/>
      <Navbar runningState={runningState} island={island} baseURL={baseURL} admin={admin} pulser={pulser} onStartButton={handleStartButton} onOnceButton={handleOnceButton} onStopButton={handleStopButton} onPlusButton={handlePlusButton} onCloneButton={handleCloneButton} onStepsButton={handleStepsButton} onAdminButton={handleAdminButton} />
      <div className="WorkArea">
        <IslandArea showBalloons={showBalloons} runningState={runningState} island={island} onTileClick={handleTileClick} illuminatedId={illuminatedId}/>
        <div></div>
        {selectedId === 0 && (<Footer penguins={island.penguins} onPenguinEnter={handlePenguinEnter} onPenguinLeave={handlePenguinLeave} illuminatedId={illuminatedId}/>)}
        {selectedId > 0 && (<Details penguin={island.penguins.find(penguin => penguin.key === selectedId)} onDetailsCloseButton={handleDetailsCloseButton} /> )}
        </div>
    </div>
  );
}

const setTile = async (baseURL,islandId,x,y) => {
  const islandData = await convert(baseURL + "setTile?islandId=" + islandId + "&hpos=" + x + "&lpos=" + y)
  return extractIslandData(islandData);
}

const getNewIsland = async (baseURL) => {
  const islandData = await convert(baseURL + "island")
  return extractIslandData(islandData);
}

const refreshIsland = async (baseURL,islandId,followId) => {
  var followString = "";
  if (followId > 0) {
    followString =  "&followId=" + followId;
    
  } 
  const islandData = await convert(baseURL + "islandmoves?islandId=" + islandId + followString);
  return extractIslandData(islandData);
}

const refreshIslandsList = async (baseURL,islandToDelete=0)  => {
  if (islandToDelete > 0) {
    const islandsListData = await convert(baseURL + "deleteIsland?islandId=" + islandToDelete );
    return islandsListData.islands;
  } else {
    const islandsListData = await convert(baseURL + "islands" );
    return islandsListData.islands;
  }
}

const sendState = async (baseURL) => {
  const data = await convert(baseURL + "state");
  return data;
}

const setRunning = async (baseURL, islandId, isrunning) => {
  if (islandId > 0) {
    await convert(baseURL + "setrunning?islandId=" + islandId + "&runningstate=" + isrunning);
  } 
}

const runOnce = async (baseURL, islandId) => {
  const data = await convert(baseURL + "runonce?islandId=" + islandId);
  return data;
}

const extractIslandData = (islandData) => {

  console.dir(islandData)

  const tiles = [];
  const artifacts = [];
  const penguins = [];
  const fishes = [];

  if (islandData && islandData.island) {

    islandData.island.forEach(tile => {
      tiles.push({key: tile.li *10 + tile.col, type: tile.type, num: tile.num, var: tile.var, line: tile.li, col:tile.col})
      artifacts.push({key: (10000 + tile.li *10 + tile.col), type: tile.art, age: tile.age, line: tile.li, col:tile.col})
    }); 

    islandData.penguins.forEach(penguin => {
      var gender = penguin.gender==="male"?"m":"f";
      if (penguin.age < 6 ) gender = "y";
      var activity = 0;
      if (penguin.eating > 0) {
        activity = 1;
      } else if (penguin.fishTime > 0) {
        activity = 2;
      } else if (penguin.loving > 0) {
        activity = 3;
      } else if (penguin.digTime > 0) {
        activity = 4;
      } else if (penguin.fillTime > 0) {
        activity = 5;
      }

      
      penguins.push({key: penguin.id, 
                    alive:penguin.alive, 
                    name:penguin.name, 
                    lpos:penguin.lpos, 
                    hpos:penguin.hpos, 
                    hasIce:penguin.hasIce, 
                    gender: gender, 
                    activity: activity, 
                    hungry:penguin.hungry, 
                    wealth:penguin.wealth, 
                    shape:penguin.fat, 
                    age:penguin.age, 
                    genderName:penguin.gender, 
                    fishDirection:penguin.fishDirection, 
                    digDirection:penguin.digDirection, 
                    fillDirection:penguin.fillDirection, 
                    strategyShort:penguin.strategyShort, 
                    moveDirection:penguin.moveDirection, 
                    knownWorld: penguin.knownWorld,
                    vision: penguin.vision,
                    targetDirections: penguin.targetDirections,
                    targetLPos: penguin.targetLPos,
                    targetHPos: penguin.targetHPos,
                    path:penguin.path,
                    illuminated:false})
    }); 

    if (islandData.fishes) { 
      islandData.fishes.forEach(fish => {
        fishes.push({key: fish.id, 
                    lpos:fish.lpos, 
                    hpos:fish.hpos, 
                    onHook:fish.onHook, 
                    staying:fish.staying,
                    direction:fish.fishDirection})
      }); 
    }

    return {id: islandData.islandId,
            name: islandData.islandName,
            size: islandData.islandSize,
            points: islandData.points,
            weather: islandData.weather,
            tilesCount: islandData.tiles,
            foodCount: islandData.food,
            counter: islandData.counter,
            running: islandData.running,
            runonce: islandData.runonce,
            tiles: tiles,
            artifacts: artifacts,
            penguins: penguins,
            fishes: fishes}
  } else {
    return {}
  }
}
