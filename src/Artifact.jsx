import React, {useState,useEffect} from "react";
import empty from "./images/empty.png";
import food from "./images/food.png";
import cross from "./images/cross.png";
import wreath from "./images/wreath.png";
import target from "./images/target.png"

import ice from "./images/ice-block-6.png";

import fill_1 from "./images/PF-1-1-a.png";
import fill_2 from "./images/PF-1-4-a.png";
import fill_3 from "./images/PF-1-7-a.png";
import fill_4 from "./images/PF-1-10-a.png";
import fill_5 from "./images/PF-1-13-a.png";
import fill_6 from "./images/PF-1-15-a.png";

import ice_1 from "./images/ice-block-1.png";
import ice_2 from "./images/ice-block-2.png";
import ice_3 from "./images/ice-block-3.png";
import ice_4 from "./images/ice-block-4.png";
import ice_5 from "./images/ice-block-5.png";
import ice_6 from "./images/ice-block-6.png";
import kept from "./images/fish_kept.gif";

export default function Artifact(props) {

  const [artifact,setArtifact] = useState({});  
  const {type,age} = props;
  
  
  useEffect(() => {

    const artifacts = [empty, wreath, cross, food, empty, ice, kept, target]
  
    const digImg = [ice_6,ice_1,ice_2,ice_3,ice_4,ice_5,ice_6];
    const fillImg = [target,fill_1,fill_2,fill_3,fill_4,fill_5,fill_6];


    if (type === 7 ) {
      setArtifact({type:type, img: fillImg[age]});
    } else if (type === 5 ) {
      setArtifact({type:type, img: digImg[age]});
    } else if (type !== 7 && type !== 5 ) {
      setArtifact({type:type, img: artifacts[type]});
    }
  },[type,age])              

  if (artifact.img) {
    return <img src={artifact.img} style={{width: '48px', height:'48px', transition:'0.5s'}} alt="" />
  } 

}