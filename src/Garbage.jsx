import React, {useState,useEffect} from "react";
import garbage_1 from "./images/garbage-1.png";
import garbage_2 from "./images/garbage-2.png";
import garbage_3 from "./images/garbage-3.png";
import garbage_4 from "./images/garbage-4.png";
import garbage_5 from "./images/garbage-5.png";

export default function Garbage(props) {

    const [garbage,setGarbage] = useState({});  
    const {garbageObj} = props;

    useEffect(() => {
    
        const garbage_img = [garbage_1,garbage_1,garbage_2,garbage_3,garbage_4,garbage_5]
        var image = garbage_img[garbageObj.type];
 
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