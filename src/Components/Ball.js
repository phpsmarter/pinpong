import React from 'react'
import {Block} from 'reakit';
export default (props) => {
 //console.log(props)
 const {left,top}=props;
  return (
    <Block absolute backgroundColor="rgba(58, 70, 93, 1.000)" width={18} height={18} 
    borderRadius={9} left={left} top={top}/>
 )
}
