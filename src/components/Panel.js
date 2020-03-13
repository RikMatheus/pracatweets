import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Tweet from './Tweet'
import Modal from './Modal'

const PanelBox = styled('div')`
    width: 70%;
    margin: auto;
    background-color: #133b57;
`

function Panel(props) {

  const { tweets } = props

  const [show, setShow] = useState(false)
  const [user, setUser] = useState('')
  const [text, setText] = useState('')


  const showModal = (user, text) => {
    setShow(!show);
    setUser(user)
    setText(text)
  }

  const list = tweets.map(tweet => {
    return (
      <>
        <Tweet user={tweet.user.name} text={tweet.text} showModal={showModal} />
      </>
    )
  })

  return (
    <>
      <PanelBox>
        {list}
      </PanelBox>
      {
        show === true ?
          <Modal onClose={showModal} show={show} user={user} text={text} />
          :
          ""
      }
    </>
  )
}

export default Panel;