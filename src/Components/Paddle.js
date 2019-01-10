import React from 'react'
import {Block} from 'reakit';
export default (props) => {
 //console.log(props)
 const {left,top}=props;
  return (
    <Block absolute backgroundColor="rgba(157, 242, 170, 1.000)" width={10} height={100} 
    borderRadius={9} left={left} top={top}/>
 )
}
