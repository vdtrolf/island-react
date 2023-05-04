import React, {useState,useEffect} from "react";
import empty from "./images/empty.png";
import food from "./images/food.png";
import swim from "./images/fish-1-still.gif";
import cross from "./images/cross.png";
import wreath from "./images/wreath.png";
import target from "./images/target.png"
//import ice from "./images/ice.png";

import ice from "./images/ice-block-6.png";

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

    const artifacts = [empty, wreath, cross, food, swim, ice, kept, target]
  
    const digImg = [empty,ice_1,ice_2,ice_3,ice_4,ice_5,ice_6];

    if (type === 5 && age > 0 ) {
      setArtifact({type:type, img: digImg[age]});
    } else if (type !== 4) {
      setArtifact({type:type, img: artifacts[type]});
    }
  },[type,age])              

  if (artifact.img) {
    return <img src={artifact.img} style={{width: '48px', height:'48px', transition:'0.5s'}} alt="" />
  } 

}