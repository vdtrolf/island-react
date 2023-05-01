import React, {useState,useEffect} from "react";
import garbage_staying from "./images/garbage-1.png";

export default function Garbage(props) {

    const [garbage,setGarbage] = useState({});  
    const {garbageObj} = props;

    useEffect(() => {
    
        var image = garbage_staying;
 
        const style = {width: '48px', height:'48px', backgroundColor:'', borderRadius: '0px', boxShadow: ''}
        setGarbage({img:image,left:garbageObj.lpos*48,top:garbageObj.hpos*48, style:style});

    },[garbageObj])    
  
    return ( 
        <>
        <div className="Garbage" style={{left: garbage.left + 'px', top: garbage.top + 'px', transition:'1s'}} >
            <img src={garbage.img} style={garbage.style} alt= "" /> 
        </div>
        </>
    )

}