import React from 'react'
import styled from 'styled-components'

import Tweet from './Tweet'

const PanelBox = styled('div')`
    width: 60%;
    margin: auto;
    background-color: #133b57;
`

function Panel(props) {

  const { tweets } = props

  const list = tweets.map(tweet => {
    return (
        <Tweet user={tweet.user.name} text={tweet.text} />
    )
  })

  return (
    <PanelBox>
        {list}
    </PanelBox>
  )
}

export default Panel;