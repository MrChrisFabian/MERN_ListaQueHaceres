import React from 'react'
import BotonLindo from './BotonLindo'
import styled from 'styled-components'
import { useState } from 'react'
import Text from './Text'

const Item = ({ description }) => {
    const Container = styled.div`
        display:flex;
    `

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (

        <Container>
            <div>
                {isChecked ? <Text textoo={description} lineTrough='line-through'></Text> : <Text textoo={description} lineTrough='none'></Text>}
            </div>
            <input type="checkbox" id='listo' name='listoCheck' value={description} checked={isChecked} onChange={handleOnChange} />
        </Container >
    )
}

export default Item