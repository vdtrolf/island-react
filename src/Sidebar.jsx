import React, {useState,useEffect} from "react";
import Button from "./Button.jsx";

export default function Sidebar(props) {

  const {admin, sidebar, onCloseButton, onIslandSelect, onIslandDelete, islandsList } = props;
    
  const [checkedState, setCheckedState] = useState();
  const [selected,setSelected] = useState(false);

  const handleIslandClick = (id) => {
    onIslandSelect(id);
  }

  const handleGarbClick = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    var hasSelected = false;
    updatedCheckedState.forEach(state => hasSelected = hasSelected || state);

    setSelected(hasSelected);
  }

  const handleDelete = () => {
    var islandsToDelete = [];
    checkedState.forEach((state,index) => {
      if (state) islandsToDelete.push(islandsList[index].id)
    })

    console.dir(islandsToDelete);

    onIslandDelete(islandsToDelete);
    setCheckedState(new Array(islandsList.length).fill(false))
  }

  useEffect(() =>{
    setCheckedState(new Array(islandsList.length).fill(false))
  },[islandsList.length])

  if (islandsList) {

    const listIslands = islandsList.map((island, index) => {  
      return (
        <div key={island.id} className={island.running?"island":"deadisland"}>
          {admin?<input type="checkbox" checked={checkedState[index]} onChange={() => handleGarbClick(index)} />:<div/>}
          <div onClick={() => handleIslandClick(island.id)}>{island.name}</div>
          <div>{island.points}</div>
          <div>{island.running?"":"over"}</div>
        </div>
      )
    });
 
    return (
      <div id="mySidebar" className="sidebar" style={{width:sidebar?'250px':'0px',border:sidebar?'4px solid rgb(103, 133, 168)':'0px solid rgb(103, 133, 168)'}}>
        <div className="sideNavbar">
          <div>&nbsp;</div>
          <div>Islands</div>
          <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
        </div>
        <div id="islands">
          <div className="IslandsList">{listIslands}</div>
        </div>
        <div className="sidebarButtonsBar">
            <div />
            {selected?<button className="inputButton" type="submit" onClick={handleDelete} value="Submit">Delete selected</button>:<div />}
        </div>
      </div>
    );
  } else {
    return (
      <div id="mySidebar" className="sidebar" style={{width:sidebar?'250px':'0px',border:sidebar?'4px solid rgb(103, 133, 168)':'0px solid rgb(103, 133, 168)'}}>
        <div className="sideNavbar">
          <div>Islands</div>
          <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
        </div>
      </div>
    )
  } 

}