import React from 'react'
import styled from 'styled-components'

import videosicon from '../assets/videosinterativos.png'
import tweetsicon from '../assets/icone_tweets.png'

const Container = styled('div')`
    background-color: #9bb4c0;
    height: 100vh;
    width: 100px;

    display: flex;
    flex-direction: column-reverse;

    .menu {
        height: 200px;
        background-color: #4a6375;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }

    .videos, .tweets {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .videos {
        width: 100%;
        margin: 10px 0px;
    }

    .videosicon {
        cursor: pointer;
        width: 60%;
        border: 2px solid #e2f6fa;
        border-radius: 50%;
    }

    .tweetsicon {
        width: 70%;
    }
`

function AppBar() {
    return (
        <Container>
            <div className="menu">
                <div className="tweets">
                    <img src={tweetsicon} className="tweetsicon" />
                </div>
                <div className="home"></div>
            </div>
            <div className="videos">
                <img src={videosicon} className="videosicon" />
            </div>
        </Container>
    )
}

export default AppBar