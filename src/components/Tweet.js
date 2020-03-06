import React from 'react'
import styled from 'styled-components'

import defaultimg from '../assets/defaultuser.png'

const Container = styled('div')`
  hr {
    color: white;
    width: 95%;
  }
`

const Box = styled('div')`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "user text";
`

const UserBox = styled('div')`
  grid-area: "user";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Globotipo Texto;
  font-weight: 600;
  font-size: 14pt;
  color: white;
  text-align: center;

  .userimg {
    width: 70%;
    border-radius: 50%;
    border: 2px solid white;
    max-width: 200px;
    margin-bottom: 10px;
  }
`

const TextBox = styled('div')`
  padding-left: 10px;
  grid-area: "text";
  font-family: Globotipo Texto;
  font-size: 18pt;
  color: #d8e6f0;
`

function Tweet(props) {

  const { user, text } = props

  return (
    <Container>
      <Box>
        <UserBox>
          <img src={defaultimg} alt={"Foto de perfil"} className="userimg"/>
          {user}
        </UserBox>
        <TextBox>{text}</TextBox>
      </Box>
      <hr />
    </Container>
  )
}

export default Tweet;