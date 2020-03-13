import React from 'react';
import styled from 'styled-components'

import Panel from './components/Panel'
import AppBar from './components/AppBar'
import tweets from './content/tweets'

const Container = styled('div')`
  display: grid;
  grid-template-rows: 9fr 1fr;
  grid-template-areas: "app bar";
  height: 100vh;

  .tweetpanel {
    overflow: auto;
  }

  .tweetpanel::-webkit-scrollbar {
    display: none;
  }

  .degrade {
    pointer-events: none;
    min-height: 100px;
    width: calc(100% - 100px);
    position: fixed;
    left: 0;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 100%);
  }

`

function App() {

  return (
    <Container>
        <div className="tweetpanel">
          <div className="degrade"></div>
          <Panel tweets={tweets.statuses} />
        </div>
        <AppBar />
    </Container>
  )
}

export default App;