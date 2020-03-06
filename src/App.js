import React from 'react';
import styled from 'styled-components'

import Panel from './components/Panel'
import tweets from './content/tweets'

const Container = styled('div')`
  background-color: #d8e6f0;
`

function App() {

  return (
    <Container>
        <Panel tweets={tweets.statuses} />
    </Container>
  )
}

export default App;