import React from 'react'
import styled from 'styled-components'

const BotonLindo = ({texto,color,tipo}) => {

    
    const BotonLindo = styled.button`
        background-color:${color};
        color:white;
        border:none;
        padding-inline:5px;
        padding-top:1px;
        border-radius:5px;
        margin:2px;

    `

    return (
        <BotonLindo type={tipo}>{texto}</BotonLindo>
    )
}

export default BotonLindo