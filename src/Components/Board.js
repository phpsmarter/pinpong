import React from 'react'
//import {Box} from 'reakit';
//import Ball from './Ball'

import styled from 'styled-components';

const Board=styled.div`
   width:300px;
   height:300px;
   background-color: palevioletred;
   position:relative;
   margin:50px auto;
`
export default (props) => {
   
  return (
     
     <Board>
       {props.children}  
     </Board>
     
   
       
    
  )
}
