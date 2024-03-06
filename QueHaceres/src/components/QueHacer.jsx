import React, { useState } from "react";
import BotonLindo from "./BotonLindo";
import Item from "./Item"
import styled from "styled-components";

const QueHacer = () => {
    const [listToDo, setlistToDo] = useState([])
    const HandlerSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputValue = formData.get('new');
        setlistToDo([...listToDo, inputValue]);
    }

    const HandleDelete = (indexToDelete) => {
        setlistToDo(listToDo.filter((item, indice) => indice !== indexToDelete))
    }


    const Container = styled.div`
        display:flex;
    `
    return (
        <form onSubmit={HandlerSubmit}>
            <input type="text" placeholder="Ingrese la nueva Tarea" name='new' />
            <BotonLindo tipo='submit' texto="Add" color='blue' />
            <div>{
                listToDo.map((item, index) => (
                    <Container key={index}>
                        <Item description={item} />
                        <button type="delete" name="delete" style={{
                            backgroundColor: 'black', 
                            borderRadius: '2px',
                            border:'none',
                            color:'white',
                            padding:'0em 1em',
                            margin:'2px',
                            textAlign:'center',
                        }} onClick={() => {
                            HandleDelete(index)
                        }}>Delete</button>
                    </Container>
                ))

            }</div>
        </form>
    )
}

export default QueHacer;
