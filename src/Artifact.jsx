import React, {useState,useEffect} from "react";
import empty from "./images/empty.png";
import fish from "./images/fish-t.png";
import swim from "./images/fish.png";
import cross from "./images/cross.png";
import wreath from "./images/wreath.png";
import ice from "./images/ice.png";
import ice_1 from "./images/ice-1.png";
import ice_2 from "./images/ice-2.png";
import ice_3 from "./images/ice-3.png";
import ice_4 from "./images/ice-4.png";
import ice_5 from "./images/ice-5.png";
import ice_6 from "./images/ice-6.png";
import kept from "./images/fish_kept.gif";

export default function Artifact(props) {

  const [artifact,setArtifact] = useState({});  
  const {className,type,age, ...attribs } = props;
  
  const artifacts = [empty, wreath, cross, fish, swim, ice, kept]
  
  const digImg = [empty,ice_1,ice_2,ice_3,ice_4,ice_5,ice_6];

  useEffect(() => {

    if (type === 5 && age > 0 ) {
      setArtifact({type:type, img: digImg[age]});
    } else {
      setArtifact({type:type, img: artifacts[type]});
    }
  },[type,age])              

  if (artifact.img) {
    return <img src={artifact.img} style={{width: '48px', height:'48px', transition:'0.5s'}}  />
  } 

}