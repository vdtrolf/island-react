import React, {useState,useEffect} from "react";

import peng_m from "./images/peng-m-0.png";

import dir_from from "./images/dir-from.png";
import dir_1 from "./images/dir-1.png";
import dir_2 from "./images/dir-2.png";
import dir_3 from "./images/dir-3.png";
import dir_4 from "./images/dir-4.png";
import dir_to from "./images/dir-to.png";

import health_0 from "./images/health-0.png";
import health_1 from "./images/health-1.png";
import health_2 from "./images/health-2.png";
import health_3 from "./images/health-3.png";
import health_4 from "./images/health-4.png";
import health_5 from "./images/health-5.png";
import hunger_0 from "./images/hunger-0.png";
import hunger_1 from "./images/hunger-1.png";
import hunger_2 from "./images/hunger-2.png";
import hunger_3 from "./images/hunger-3.png";
import hunger_4 from "./images/hunger-4.png";
import hunger_5 from "./images/hunger-5.png";

import food_s from "./images/PF-food.png";
import swim_s from "./images/swim-s.png";
import ice_s from "./images/ice-s.png";

import type_0_s from "./images/PF-0-s.png";
import type_1_s from "./images/PF-1-s.png";
import type_2_s from "./images/PF-2-s.png";
import type_3_s from "./images/PF-3-s.png";
import type_4_s from "./images/PF-4-s.png";
import type_5_s from "./images/PF-5-s.png";
import type_6_s from "./images/PF-6-s.png";
import type_7_s from "./images/PF-7-s.png";

import type_1_w from "./images/PF-1-w.png";
import type_2_w from "./images/PF-2-w.png";
import type_3_w from "./images/PF-3-w.png";
import type_4_w from "./images/PF-4-w.png";
import type_5_w from "./images/PF-5-w.png";
import type_6_w from "./images/PF-6-w.png";
import type_7_w from "./images/PF-7-w.png";

export default function Details(props) {

  const {onDetailsCloseButton, penguin } = props;
  
  const [cellList,setCellList] = useState([]);
  const [pathWay,setPathWay] = useState("");

  // console.dir(penguin)

 
  const hunger = [hunger_0,hunger_1,hunger_2,hunger_3,hunger_4,hunger_5]
  const health = [health_0,health_1,health_2,health_3,health_4,health_5]
  const shapes = ["","fat","fit","slim","lean"]
  let genderTxt = penguin.gender === "m" ? "male":"female"
  if (penguin.gender === "y") genderTxt = "child"

  let hungerImg = hunger[Math.floor(penguin.hungry/20)]
  let healthImg = health[Math.floor(penguin.wealth/20)]
  

  useEffect(() => {

    let cellartifacts = [type_0_s,type_1_s,food_s,swim_s,ice_s];
    let cellsoils = [type_0_s,type_1_s,type_2_s,type_3_s,type_4_s,type_5_s,type_6_s,type_7_s,type_0_s]
    let cellwarm = [type_0_s,type_1_w,type_2_w,type_3_w,type_4_w,type_5_w,type_6_w,type_7_w,type_1_w]
    const dirArrows = [dir_1,dir_2,dir_3,dir_4]
    const movesL= [0,-1,1,0,0]
    const movesH= [0,0,0,-1,1]

    const grid = []

    let aWay = "-> ";

    if (penguin.knownWorld) {

      for(let i = 0-penguin.vision;i <= penguin.vision; i++) {
        let line = [];
        for(let j = 0-penguin.vision;j <= penguin.vision; j++) {
          line.push({cellOver:<div />})
        }
        grid.push(line)
      }

      // console.dir(grid)

      penguin.knownWorld.forEach(cell => {
        let cellimg = (<img src={cell.art > 0?
            cell.art === 1 && cell.warm > 0? cellwarm[1]: cellartifacts[cell.art]:
            cell.warm > 0 ? cellwarm[cell.soil] : cellsoils[cell.soil]} width="20px" height="20px" alt="" />)
        let h = cell.line - 1;
        let l = cell.col - 1;

      
        grid[h][l].cellImg = cellimg;
      }); 

      
      grid[penguin.vision][penguin.vision].cellOver =  <img src={dir_from} width="20px" height="20px" alt="" />
      
      if (penguin.targetLPos > 0) {
        let h = penguin.targetHPos - penguin.hpos + penguin.vision;
        let l = penguin.targetLPos - penguin.lpos + penguin.vision;
        grid[h][l].cellOver =  <img src={dir_to} width="20px" height="20px" alt="" />
      }

      penguin.path.forEach(step => {
        let h = step.posH - penguin.hpos + penguin.vision + movesH[step.dir];
        let l = step.posL - penguin.lpos + penguin.vision + movesL[step.dir];
        grid[h][l].cellOver =  <img src={dirArrows[step.dir -1]} width="20px" height="20px" alt="" />
        aWay = aWay + step.posH + "/" + step.posL + " ";
      })

      setPathWay(aWay);

      const aList = []
      grid.forEach(line => line.forEach(cell => aList.push(cell)));
      setCellList(aList);

      // console.dir(cellList)

    }
  },[penguin]);

    return (
      <div id="myDetails" className="Details" > 
        <div>
          <div className="detailsHead" ><img src={peng_m} width="64px" height="64px" alt="" /><div className="detailsName">{penguin.name} ({genderTxt}, {shapes[penguin.shape]} - {Math.floor(penguin.age)} years old)</div></div>
          <div className="detailsList" >
            <div className="detailsBar"><div>Hunger: {penguin.hungry} </div><img src={hungerImg} width="100px" height="20px" alt="" /></div>
            <div className="detailsBar"><div>Warmth: {100 - penguin.wealth} </div><img src={healthImg} width="100px" height="20px" alt=""/></div>
            <div className="detailsBar"><div>Has Ice: {penguin.hasIce?"yes":"no"}</div></div>
            <div className="detailsBar"><div>Strategy: {penguin.strategyShort}</div></div>
            <div className="detailsBar"><div>Position: {penguin.hpos}/{penguin.lpos} to {penguin.targetHPos}/{penguin.targetLPos}</div><div>{pathWay}</div></div>

            <div className="detailsBar"><div>&nbsp;</div></div>
            <div className="detailsBar">
                <div />
                <button className="inputButton" type="submit" onClick={onDetailsCloseButton} value="Submit">Close</button><div />
            </div>
          </div>
        </div>
        <div className="detailsGridBack" >
          {penguin.knownWorld?
            (<div className={penguin.knownWorld.length>25?"detailsGridLarge":"detailsGridSmall"} >
              {cellList.map(cell=> cell.cellImg)}
          </div>)
            :(<div className="detailsGridLarge" />)
          }
          {penguin.knownWorld? 
            (<div className={penguin.knownWorld.length>25?"dirGridLarge":"dirGridSmall"} >
              {cellList.map(cell=> cell.cellOver)}
          </div>)
            :(<div className="dirGridLarge" />)
          
          
          /* {penguin.knownWorld?
            (<div className={penguin.knownWorld.length>25?"dirGridLarge":"dirGridSmall"}  >
              {penguin.knownWorld.map(cell => <img src={dir_to} width="20px" height="20px" alt="" />)}
          </div>)
            :(<div className="detailsGridLarge" />)
          } */ 
          }
        </div>
      </div>

    )
 

}