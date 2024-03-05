import styled from 'styled-components';
import Box from './Box';
import { useState } from 'react';

const App = () => {
    const Contenedor = styled.div`
        display:flex;
        align-items:center;
        align-content:center;
        margin:10px;
        justify-content:center;
    `;
    const ContenerBox = styled.div`
        display:flex;
        margin:10px;
    `;

    const [colorList, setColorList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputValue = formData.get('inputName');
        setColorList([...colorList, inputValue])
        console.log(colorList)
    }

    return (
        <div>
            <Contenedor>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='inputName' />
                    <button type='submit'>Add</button>
                </form>
            </Contenedor>
            <ContenerBox>{
                colorList.map((color, index) => (
                    <Box key={index} color={color} />))
            }</ContenerBox>
        </div>
    )
}

export default App;
