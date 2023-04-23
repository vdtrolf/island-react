import React, {useState,useEffect} from "react";
import tile_0_A from "./images/PF-1-0-a.png";
import tile_0_B from "./images/PF-1-0-b.png";
import tile_1_A from "./images/PF-1-1-a.png";
import tile_1_B from "./images/PF-1-1-b.png";
import tile_2_A from "./images/PF-1-2-a.png";
import tile_2_B from "./images/PF-1-2-b.png";
import tile_3_A from "./images/PF-1-3-a.png";
import tile_3_B from "./images/PF-1-3-b.png";
import tile_4_A from "./images/PF-1-4-a.png";
import tile_4_B from "./images/PF-1-4-b.png";
import tile_5_A from "./images/PF-1-5-a.png";
import tile_5_B from "./images/PF-1-5-b.png";
import tile_6_A from "./images/PF-1-6-a.png";
import tile_6_B from "./images/PF-1-6-b.png";
import tile_7_A from "./images/PF-1-7-a.png";
import tile_7_B from "./images/PF-1-7-b.png";
import tile_8_A from "./images/PF-1-8-a.png";
import tile_8_B from "./images/PF-1-8-b.png";
import tile_9_A from "./images/PF-1-9-a.png";
import tile_9_B from "./images/PF-1-9-b.png";
import tile_10_A from "./images/PF-1-10-a.png";
import tile_10_B from "./images/PF-1-10-b.png";
import tile_11_A from "./images/PF-1-11-a.png";
import tile_11_B from "./images/PF-1-11-b.png";
import tile_12_A from "./images/PF-1-12-a.png";
import tile_12_B from "./images/PF-1-12-b.png";
import tile_13_A from "./images/PF-1-13-a.png";
import tile_13_B from "./images/PF-1-13-b.png";
import tile_14_A from "./images/PF-1-14-a.png";
import tile_14_B from "./images/PF-1-14-b.png";
import tile_15_A from "./images/PF-1-15-a.png";
import tile_15_B from "./images/PF-1-15-b.png";
import earth from "./images/PF-2-0.png";
import empty from "./images/empty.png";


export default function Tile(props) {

  const [tile,setTile] = useState({});  
  const {tileType,tileNum, tileVar, tileLine, tileCol, onTileClick } = props;
  
  useEffect(() => {

    const tiles = [tile_0_A,tile_0_B,
      tile_1_A,tile_1_B,
      tile_2_A,tile_2_B,
      tile_3_A,tile_3_B,
      tile_4_A,tile_4_B,
      tile_5_A,tile_5_B,
      tile_6_A,tile_6_B,
      tile_7_A,tile_7_B,
      tile_8_A,tile_8_B,
      tile_9_A,tile_9_B,
      tile_10_A,tile_10_B,
      tile_11_A,tile_11_B,
      tile_12_A,tile_12_B,
      tile_13_A,tile_13_B,
      tile_14_A,tile_14_B,
      tile_15_A,tile_15_B];


        var tileImg = empty;
        if (tileType === 1) {
            tileImg = tiles[tileVar==="a"?tileNum*2:tileNum*2 +1];
        } else if (tileType > 1) {
            tileImg = earth;
        }
        
        setTile({num:tileNum,var:tileVar,line:tileLine,col:tileCol,img:tileImg});
   },[tileType,tileNum,tileCol,tileLine,tileVar])              

   const handleClick = () => {
      onTileClick(tile.line,tile.col);
   }
 
  if (tile.img) {
    return <div><img src={tile.img} style={{width: '48px', height:'48px', transition:'0.5s'}} onClick={handleClick} alt={tile.line + "-" + tile.col} /></div>
  } 
}