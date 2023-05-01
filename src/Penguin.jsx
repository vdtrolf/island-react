import React, {useState,useEffect} from "react";
import peng_m from "./images/peng-m-0.png";
import peng_f from "./images/peng-f-0.png";
import peng_m_ice from "./images/peng-m-0-ice.png";
import peng_f_ice from "./images/peng-f-0-ice.png";
import peng_y from "./images/peng-y-0.png";
import peng_f_eating from "./images/peng-f-eating.gif";
import peng_m_eating from "./images/peng-m-eating.gif";
import peng_y_eating from "./images/peng-y-eating.gif";
import peng_loving from "./images/peng-loving.gif";

import balloon_food from "./images/balloon-food.png";
import balloon_stable from "./images/balloon-stable.png";
import balloon_warmth from "./images/balloon-warmth.png";
import balloon_love from "./images/balloon-love.png";
import balloon_ice from "./images/balloon-ice.png";

import peng_f_1_fishing from "./images/peng-f-1-fishing.png";
import peng_f_2_fishing from "./images/peng-f-2-fishing.png";
import peng_f_3_fishing from "./images/peng-f-3-fishing.png";
import peng_f_4_fishing from "./images/peng-f-4-fishing.png";

import peng_m_1_fishing from "./images/peng-m-1-fishing.png";
import peng_m_2_fishing from "./images/peng-m-2-fishing.png";
import peng_m_3_fishing from "./images/peng-m-3-fishing.png";
import peng_m_4_fishing from "./images/peng-m-4-fishing.png";

import peng_y_1_fishing from "./images/peng-y-1-fishing.png";
import peng_y_2_fishing from "./images/peng-y-2-fishing.png";
import peng_y_3_fishing from "./images/peng-y-3-fishing.png";
import peng_y_4_fishing from "./images/peng-y-4-fishing.png";

import peng_m_1_filling from "./images/peng-m-1-filling.gif";
import peng_m_2_filling from "./images/peng-m-2-filling.gif";
import peng_m_3_filling from "./images/peng-m-3-filling.gif";
import peng_m_4_filling from "./images/peng-m-4-filling.gif";

import peng_f_1_filling from "./images/peng-m-1-filling.gif";
import peng_f_2_filling from "./images/peng-m-2-filling.gif";
import peng_f_3_filling from "./images/peng-m-3-filling.gif";
import peng_f_4_filling from "./images/peng-m-4-filling.gif";

import peng_f_1_diging from "./images/peng-f-1-diging.gif";
import peng_f_2_diging from "./images/peng-f-2-diging.gif";
import peng_f_3_diging from "./images/peng-f-3-diging.gif";
import peng_f_4_diging from "./images/peng-f-4-diging.gif";

import peng_m_1_diging from "./images/peng-m-1-diging.gif";
import peng_m_2_diging from "./images/peng-m-2-diging.gif";
import peng_m_3_diging from "./images/peng-m-3-diging.gif";
import peng_m_4_diging from "./images/peng-m-4-diging.gif";

import peng_f_1_moving from "./images/peng-f-move-1.gif";
import peng_f_2_moving from "./images/peng-f-move-2.gif";
import peng_f_3_moving from "./images/peng-f-move-3.gif";
import peng_f_4_moving from "./images/peng-f-move-4.gif";

import peng_m_1_moving from "./images/peng-m-move-1.gif";
import peng_m_2_moving from "./images/peng-m-move-2.gif";
import peng_m_3_moving from "./images/peng-m-move-3.gif";
import peng_m_4_moving from "./images/peng-m-move-4.gif";

import peng_y_1_moving from "./images/peng-y-move-1.gif";
import peng_y_2_moving from "./images/peng-y-move-2.gif";
import peng_y_3_moving from "./images/peng-y-move-3.gif";
import peng_y_4_moving from "./images/peng-y-move-4.gif";

import peng_f_1_movice from "./images/peng-f-move-1-ice.gif";
import peng_f_2_movice from "./images/peng-f-move-2-ice.gif";
import peng_f_3_movice from "./images/peng-f-move-3-ice.gif";
import peng_f_4_movice from "./images/peng-f-move-4-ice.gif";

import peng_m_1_movice from "./images/peng-m-move-1-ice.gif";
import peng_m_2_movice from "./images/peng-m-move-2-ice.gif";
import peng_m_3_movice from "./images/peng-m-move-3-ice.gif";
import peng_m_4_movice from "./images/peng-m-move-4-ice.gif";

export default function Penguin(props) {

  const [penguin,setPenguin] = useState({});  
  const {penguinObj, illuminatedId } = props;

  useEffect(() => {

    const fishing_f = [peng_f_4_fishing,peng_f_1_fishing,peng_f_2_fishing,peng_f_3_fishing,peng_f_4_fishing]
    const fishing_m = [peng_m_4_fishing,peng_m_1_fishing,peng_m_2_fishing,peng_m_3_fishing,peng_m_4_fishing]
    const fishing_y = [peng_y_4_fishing,peng_y_1_fishing,peng_y_2_fishing,peng_y_3_fishing,peng_y_4_fishing]
  
    const diging_f = [peng_f_4_diging,peng_f_1_diging,peng_f_2_diging,peng_f_3_diging,peng_f_4_diging]
    const diging_m = [peng_m_4_diging,peng_m_1_diging,peng_m_2_diging,peng_m_3_diging,peng_m_4_diging]
  
    const filling_f = [peng_f_4_filling,peng_f_1_filling,peng_f_2_filling,peng_f_3_filling,peng_f_4_filling]
    const filling_m = [peng_m_4_filling,peng_m_1_filling,peng_m_2_filling,peng_m_3_filling,peng_m_4_filling]
  
    const moving_f = [peng_f,peng_f_1_moving,peng_f_2_moving,peng_f_3_moving,peng_f_4_moving]
    const moving_m = [peng_m,peng_m_1_moving,peng_m_2_moving,peng_m_3_moving,peng_m_4_moving]
    const moving_y = [peng_y,peng_y_1_moving,peng_y_2_moving,peng_y_3_moving,peng_y_4_moving]
    
    const movice_f = [peng_f_ice,peng_f_1_movice,peng_f_2_movice,peng_f_3_movice,peng_f_4_movice]
    const movice_m = [peng_m_ice,peng_m_1_movice,peng_m_2_movice,peng_m_3_movice,peng_m_4_movice]

    var hasballoon = false;
    if (props.showBalloons ) {
      var balloon = ""
      if (penguinObj.strategyShort.endsWith("stability")) {
        balloon = balloon_stable;
        hasballoon = true;
      } else if (penguinObj.strategyShort.endsWith("warmth")) {
        balloon = balloon_warmth;
        hasballoon = true;
      } if (penguinObj.strategyShort.endsWith("food")) {
        balloon = balloon_food;
        hasballoon = true;
      } if (penguinObj.strategyShort.endsWith("love")) {
        balloon = balloon_love;
        hasballoon = true;  
      } if (penguinObj.strategyShort.endsWith("ice")) {
        balloon = balloon_ice;
        hasballoon = true;  
      }
    }    

    var image = peng_loving;
    if (penguinObj.activity === 0) {
      
      if (penguinObj.moveDirection) {
        if (penguinObj.hasIce) {
          image = penguinObj.gender ==="m"? movice_m[penguinObj.moveDirection]: movice_f[penguinObj.moveDirection];
        } else {
          image = penguinObj.gender ==="m"? moving_m[penguinObj.moveDirection]: moving_f[penguinObj.moveDirection];
        }
        if (penguinObj.gender ==="y") image = moving_y[penguinObj.moveDirection];
      } else {
        if (penguinObj.hasIce) {
          image = penguinObj.gender ==="m"? peng_m_ice: peng_f_ice;
        } else {
          image = penguinObj.gender ==="m"? peng_m : peng_f;
        }
        if (penguinObj.gender ==="y") image =  peng_y;
      }
    } else if (penguinObj.activity === 1) {
      image = penguinObj.gender ==="m"? peng_m_eating: peng_f_eating;
      if (penguinObj.gender ==="y") image = peng_y_eating;
    } else if (penguinObj.activity === 2) {
      image = penguinObj.gender ==="m"? fishing_m[penguinObj.fishDirection]: fishing_f[penguinObj.fishDirection];
      if (penguinObj.gender ==="y") image = fishing_y[penguinObj.fishDirection];
    } else if (penguinObj.activity === 4) {
      image = penguinObj.gender ==="f"? diging_f[penguinObj.digDirection]: diging_m[penguinObj.digDirection];
    } else if (penguinObj.activity === 5) {
      image = penguinObj.gender ==="f"? filling_f[penguinObj.fillDirection]: filling_m[penguinObj.fillDirection];
    }
    var style = {width: '48px', height:'48px', backgroundColor:'', borderRadius: '0px', boxShadow: ''}
    if (penguinObj.key === illuminatedId) {
      style = {width: '48px', height:'48px', backgroundColor:'rgba(255, 195, 0, 0.5)', borderRadius:'25px', boxShadow: '0 0 20px #FFC300'}
    }

    setPenguin({img:image,left:penguinObj.lpos*48,top:penguinObj.hpos*48,alive:penguinObj.alive, style:style, balloon:balloon, hasballoon:hasballoon});
  },[penguinObj,illuminatedId,props.showBalloons])    
  
  if (penguin.alive) {
    return ( 
      <>
        {penguin.hasballoon && (<div className="Penguin" style={{left: (penguin.left + 24) + 'px', top: (penguin.top - 36) + 'px', opacity:'0.8', transition:'1s'}} >
          <img src={penguin.balloon} style={{width: '36px', height: '36px' }} alt =""/>
        </div>)}
        <div className="Penguin" style={{left: penguin.left + 'px', top: penguin.top + 'px', transition:'2s'}} >
          <img src={penguin.img} style={penguin.style} alt= "" /> 
        </div>
      </>
    )
  } 

}