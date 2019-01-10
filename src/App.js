import React,{useState,useEffect}from 'react';
import { Provider,Button,Box} from "reakit";
import theme from "reakit-theme-default";
import Ball from './Components/Ball'
import Board from './Components/Board';
//import styled from 'styled-components';
import Paddle from  './Components/Paddle'
import { KeyDown } from 'react-event-components'
import { useInterval } from "react-powerhooks";
//NOTE  随机获取ball的初始Y坐标值
const getRandom=()=>(parseInt(Math.random()*100))
const App = () =>{
  const [ballxa,setXa]=useState(120); //ball的x坐标state,
  const [ballya,setYa]=useState(getRandom()); //ball的y坐标state
  const [pl,setPL]=useState(150);  //左边球拍的位置
  const [pr,setPR]=useState(150);  //右边球拍的位置
  const [xdirection,setxDirection]=useState(1); //ball的x轴上的运动方向
  const [ydirection,setyDirection]=useState(1); //ball的y轴上的运动方向
  const [leftScore,setleftScore]=useState(0)   //左边球拍的得分
  const [rightScore,setrightScore]=useState(0) //右边球拍的得分

  useEffect(()=>{ 
   //FIXME   这个地方的逻辑判断也不对
    if(ballxa>280||ballxa<0){
      //setxDirection(-(xdirection));
      
   }

   if(ballya>350||ballya<0){
       //setyDirection(-(ydirection));
       
 }

      
   //FIXME   这个地方逻辑还不对，后面的逻辑或判断和前面的判断优先级不对
   if(ballxa>60&&ballxa<70){
        if(ballya>pl&&ballya<pl+100){
          setxDirection(-(xdirection));
          setyDirection(-(ydirection));
          setleftScore(leftScore+1);
        }
      }
   
      
  
 //FIXME   这个地方逻辑还不对，后面的逻辑或判断和前面的判断优先级不对。同上
   if(ballxa>240&&ballxa<250){
        if(ballya>pr&&ballya<pr+100){
          setxDirection(-(xdirection));
          setyDirection(-(ydirection));
          setrightScore(rightScore+1);
        }
    }

},[ballxa],[ballya]);
  //const [time, setTime] = useState(null);
  const { start, stop } = useInterval({
    duration: 30,
    startImmediate: false,
    callback: () => {
      //console.log("ballxa",ballxa);
      //console.log("ballya",ballya);
      setXa(ballxa+(xdirection)*5)
      setYa(ballya+(ydirection)*5)
    }
  });
  //const  [count,setCount]=useState(0)
//   const Board=styled.div`
//    width:300px;
//    height:300px;
//    background-color: palevioletred;
//    position:relative;
//    margin:'10px auto';
// `

console.log("ballxa:",ballxa);
console.log("ballya:",ballya);
  return(
  
  <React.Fragment>
   <Provider theme={theme}>
         
          
     <Board>
        {/* <Block absolute backgroundColor="rgba(58, 70, 93, 1.000)" width={18} height={18} borderRadius={9} left={ballxa} top={ballya}/> */}
          <Ball left={ballxa} top={ballya}/>
          <Paddle key="left" left={50} top={pl}/>
          <Paddle key="right" left={250} top={pr}/>
          <KeyDown when="w" do={()=>setPL(pl-5) } />
          <KeyDown when="s" do={()=>setPL(pl+5)} />
          <KeyDown when="p" do={()=>setPR(pr-5) } />
          <KeyDown when="l" do={()=>setPR(pr+5)} />
          <KeyDown when="b" do={()=>start()} />
          <Box absolute top={-40}>
          <span>{leftScore}</span>
          <Button primary onClick={()=>start()}>Start</Button>
          <Button inof  onClick={()=>stop()}>stop</Button>
          <span>{rightScore}</span>
         </Box>
       </Board>
     </Provider>
  </React.Fragment>
  )
};

export default App;
