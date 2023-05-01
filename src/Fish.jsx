import React, {useState,useEffect} from "react";
import fish_staying from "./images/fish-1-still.gif";
import fish_onhook from "./images/fish_kept.gif";

import fish_1_moving from "./images/fish-1-moving.gif";
import fish_2_moving from "./images/fish-2-moving.gif";
import fish_3_moving from "./images/fish-3-moving.gif";
import fish_4_moving from "./images/fish-4-moving.gif";

export default function Fish(props) {

    const [fish,setFish] = useState({});  
    const {fishObj} = props;

    useEffect(() => {
  
        const moving = [fish_staying,fish_1_moving,fish_2_moving,fish_3_moving,fish_4_moving]
    
        var image = fish_staying;
        if (fishObj.direction) {
        image = moving[fishObj.direction];
        } else if (fishObj.onHook) {
        image = fish_onhook
        } else {
        image = fish_staying
        } 
 
        const style = {width: '48px', height:'48px', backgroundColor:'', borderRadius: '0px', boxShadow: ''}
        setFish({img:image,left:fishObj.lpos*48,top:fishObj.hpos*48, style:style});

    },[fishObj])    
  
    return ( 
        <>
        <div className="Fish" style={{left: fish.left + 'px', top: fish.top + 'px', transition:'2s'}} >
            <img src={fish.img} style={fish.style} alt= "" /> 
        </div>
        </>
    )

}