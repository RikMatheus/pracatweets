import React from 'react'
import styled from 'styled-components'

const MenuBox = styled('div')`
    position: fixed;
    right: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background-color: #a7becf;

    display: grid;
    grid-template-rows: 3fr 1fr;

    .mainmenu {
        height: 100%;
        background-color: #133b57;
        padding: 5px;
        
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    .option {
        margin: 5px;
        background-color: white;
        border-radius: 50%;
    }
`

export default function Menu() {
    return (
        <MenuBox>
            <div className="videos">
                Videos interativos
            </div>
            <div className="mainmenu">
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
            </div>
        </MenuBox>
    )
}
