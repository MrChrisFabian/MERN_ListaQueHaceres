import React, { useState } from 'react'
import styled from 'styled-components';



const Box = ({ color }) => {

  const Title = styled.div`
background-color:${color};
color:black;
width:100px;
height:100px;

`;
  return (
    <Title>
      
    </Title>
  )
}


export default Box